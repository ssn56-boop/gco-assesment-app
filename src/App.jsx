import React from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { jsPDF } from "jspdf";
import { db } from "./firebase.js";
import { OCEAN_DATA } from "./data.js";

const NAVY = "#111111";
const GOLD = "#4D4D4D";
const LIGHTGOLD = "#E8E8E8";
const CREAM = "#FAFAFA";

function scoreCandidate(answers) {
  const traitTotals = {};
  const traitCounts = {};
  OCEAN_DATA.questions.forEach((q, i) => {
    const val = answers[i];
    if (val == null) return;
    traitTotals[q.trait] = (traitTotals[q.trait] || 0) + val;
    traitCounts[q.trait] = (traitCounts[q.trait] || 0) + 1;
  });
  const traitScores = {};
  OCEAN_DATA.traits.forEach((t) => {
    const total = traitTotals[t.code] || 0;
    const count = traitCounts[t.code] || 1;
    traitScores[t.code] = total / count;
  });
  return { traitScores };
}

function bandFor(score) {
  if (score >= 4.0) return "high";
  if (score >= 3.0) return "mid";
  return "low";
}

function weakestTrait(traitScores) {
  const ranked = OCEAN_DATA.traits
    .map((t) => ({ ...t, score: traitScores[t.code] }))
    .sort((a, b) => a.score - b.score);
  return ranked[0];
}

function buildOverallNarrative(traitScores, candidateFirstName) {
  const ranked = OCEAN_DATA.traits
    .map((t) => ({ ...t, score: traitScores[t.code], band: bandFor(traitScores[t.code]) }))
    .sort((a, b) => b.score - a.score);

  const strongest = ranked[0];
  const second = ranked[1];
  const weakest = ranked[ranked.length - 1];

  const name = candidateFirstName || "This candidate";
  const sentence1 = `${name}'s most defining trait is ${strongest.name.toLowerCase()} (${strongest.score.toFixed(2)}/5.0). ${OCEAN_DATA.traitNarrative[strongest.code][strongest.band]}`;
  const sentence2 = `This pairs with a ${second.band === "high" ? "similarly strong" : second.band === "mid" ? "moderate" : "comparatively lower"} ${second.name.toLowerCase()} (${second.score.toFixed(2)}/5.0): ${OCEAN_DATA.traitNarrative[second.code][second.band].toLowerCase()}`;
  const sentence3 = `The area to probe further in an interview is ${weakest.name.toLowerCase()} (${weakest.score.toFixed(2)}/5.0) -- ${OCEAN_DATA.traitNarrative[weakest.code][weakest.band].toLowerCase()}`;

  return `${sentence1} ${sentence2} ${sentence3}`;
}

// ---------------------------------------------------------------------------
// Real PDF generation (jsPDF) -- runs entirely client-side, no server needed.
// ---------------------------------------------------------------------------
function downloadPDF(record) {
  const docPdf = new jsPDF({ unit: "pt", format: "letter" });
  const marginLeft = 48;
  const pageWidth = 612;
  const contentWidth = pageWidth - marginLeft * 2;
  let y = 56;

  // Header
  docPdf.setFont("times", "bold");
  docPdf.setFontSize(16);
  docPdf.setTextColor(17, 17, 17);
  docPdf.text("goldsmith", marginLeft, y);
  const gWidth = docPdf.getTextWidth("goldsmith ");
  docPdf.setFont("times", "italic");
  docPdf.setFontSize(11);
  docPdf.setTextColor(77, 77, 77);
  docPdf.text("and co", marginLeft + gWidth, y);
  y += 8;
  docPdf.setDrawColor(17, 17, 17);
  docPdf.setLineWidth(1);
  docPdf.line(marginLeft, y, pageWidth - marginLeft, y);
  y += 28;

  docPdf.setFont("times", "bold");
  docPdf.setFontSize(18);
  docPdf.setTextColor(17, 17, 17);
  docPdf.text("Behavioral Assessment Report", marginLeft, y);
  y += 20;

  docPdf.setFont("helvetica", "normal");
  docPdf.setFontSize(10);
  docPdf.setTextColor(102, 102, 102);
  docPdf.text(`${record.candidateName}  |  Submitted ${new Date(record.timestamp).toLocaleDateString()}`, marginLeft, y);
  y += 28;

  function addWrappedText(text, fontSize, color, lineHeight, font = "helvetica", style = "normal") {
    docPdf.setFont(font, style);
    docPdf.setFontSize(fontSize);
    docPdf.setTextColor(color[0], color[1], color[2]);
    const lines = docPdf.splitTextToSize(text, contentWidth);
    lines.forEach((line) => {
      if (y > 740) {
        docPdf.addPage();
        y = 56;
      }
      docPdf.text(line, marginLeft, y);
      y += lineHeight;
    });
  }

  function addSectionHeading(text) {
    if (y > 720) {
      docPdf.addPage();
      y = 56;
    }
    y += 6;
    docPdf.setFont("times", "bold");
    docPdf.setFontSize(13);
    docPdf.setTextColor(17, 17, 17);
    docPdf.text(text, marginLeft, y);
    y += 16;
  }

  addSectionHeading("Full Narrative Analysis");
  addWrappedText(buildOverallNarrative(record.traitScores, record.candidateName.split(" ")[0]), 10, [51, 51, 51], 14);
  y += 12;

  addSectionHeading("OCEAN Personality Profile");
  OCEAN_DATA.traits.forEach((t) => {
    const score = record.traitScores[t.code];
    const band = bandFor(score);
    const narrative = OCEAN_DATA.traitNarrative[t.code][band];

    if (y > 700) {
      docPdf.addPage();
      y = 56;
    }
    docPdf.setFont("helvetica", "bold");
    docPdf.setFontSize(11);
    docPdf.setTextColor(17, 17, 17);
    docPdf.text(t.name, marginLeft, y);
    docPdf.setFont("helvetica", "normal");
    docPdf.setTextColor(136, 136, 136);
    docPdf.text(`${score.toFixed(2)} / 5.0`, pageWidth - marginLeft - 50, y);
    y += 10;

    // score bar
    const barWidth = contentWidth;
    const barHeight = 6;
    docPdf.setFillColor(229, 229, 229);
    docPdf.rect(marginLeft, y, barWidth, barHeight, "F");
    const filled = ((score - 1) / 4) * barWidth;
    docPdf.setFillColor(77, 77, 77);
    docPdf.rect(marginLeft, y, Math.max(0, filled), barHeight, "F");
    y += 18;

    addWrappedText(narrative, 9.5, [68, 68, 68], 13);
    y += 12;
  });

  const weak = weakestTrait(record.traitScores);
  addSectionHeading(`Suggested Interview Questions -- Probing ${weak.name}`);
  OCEAN_DATA.interviewQuestions[weak.code].forEach((q, qi) => {
    const isLast = qi === OCEAN_DATA.interviewQuestions[weak.code].length - 1;
    addWrappedText(`${qi + 1}. ${q}${isLast ? "  (toughest follow-up)" : ""}`, 10, isLast ? [17, 17, 17] : [51, 51, 51], 14, "helvetica", isLast ? "bold" : "normal");
    y += 6;
  });

  y += 16;
  if (y > 740) {
    docPdf.addPage();
    y = 56;
  }
  docPdf.setDrawColor(221, 221, 221);
  docPdf.line(marginLeft, y, pageWidth - marginLeft, y);
  y += 14;
  addWrappedText(
    "G&Co. internal candidate assessment tool -- for use alongside interviews, not in place of them.",
    8, [153, 153, 153], 11
  );

  const filename = `${record.candidateName.trim().replace(/[^a-zA-Z0-9]+/g, "-")}-OCEAN-Report.pdf`;
  docPdf.save(filename);
}

function HeaderBanner({ tagline }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 220,
        overflow: "hidden",
        backgroundImage: "url(/mural.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        background: "#111",
      }}
    >
      <div style={{ position: "absolute", left: 20, top: 18 }}>
        <div style={{ background: "rgba(0,0,0,0.55)", display: "inline-block", padding: "8px 14px", borderRadius: 6 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 20, color: "white" }}>goldsmith</span>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 11, color: "#ddd", fontStyle: "italic" }}>and co</span>
          </div>
        </div>
      </div>
      {tagline && (
        <div style={{ position: "absolute", right: 20, bottom: 16 }}>
          <div style={{
            color: "white", fontSize: 13, fontFamily: "Georgia, serif", fontStyle: "italic",
            background: "rgba(0,0,0,0.55)", display: "inline-block", padding: "6px 14px", borderRadius: 6,
          }}>
            {tagline}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [view, setView] = React.useState("menu");
  const [candidateName, setCandidateName] = React.useState("");
  const [answers, setAnswers] = React.useState({});
  const [qIndex, setQIndex] = React.useState(0);
  const [saving, setSaving] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);
  const [myResult, setMyResult] = React.useState(null);
  const [adminPass, setAdminPass] = React.useState("");
  const [passError, setPassError] = React.useState(false);
  const [adminData, setAdminData] = React.useState([]);
  const [adminLoading, setAdminLoading] = React.useState(false);
  const [selectedIds, setSelectedIds] = React.useState({});

  const questions = OCEAN_DATA.questions;
  const answeredCount = Object.keys(answers).length;

  function startTest() {
    setAnswers({});
    setQIndex(0);
    setCandidateName("");
    setView("name-entry");
  }

  function pickAnswer(score) {
    setAnswers((prev) => ({ ...prev, [qIndex]: score }));
    setTimeout(() => {
      if (qIndex < questions.length - 1) setQIndex((i) => i + 1);
    }, 150);
  }

  async function submitTest() {
    setSaving(true);
    setSubmitError(null);
    const result = scoreCandidate(answers);
    const record = {
      candidateName,
      timestamp: new Date().toISOString(),
      traitScores: result.traitScores,
    };
    try {
      await addDoc(collection(db, "ocean_submissions"), record);
      setMyResult(record);
      setView("submitted");
    } catch (e) {
      console.error("Firestore write error", e);
      setSubmitError(e.message || "Unknown error");
    }
    setSaving(false);
  }

  async function loadAdmin() {
    setAdminLoading(true);
    const records = [];
    try {
      const snap = await getDocs(collection(db, "ocean_submissions"));
      snap.forEach((docSnap) => {
        records.push({ ...docSnap.data(), _id: docSnap.id });
      });
    } catch (e) {
      console.error("Firestore read error", e);
    }
    records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setAdminData(records);
    setSelectedIds({});
    setAdminLoading(false);
    setView("admin");
  }

  async function clearAllTestData() {
    if (!window.confirm("This permanently deletes every candidate submission. Continue?")) return;
    setAdminLoading(true);
    for (const rec of adminData) {
      try {
        await deleteDoc(doc(db, "ocean_submissions", rec._id));
      } catch (e) {}
    }
    setAdminData([]);
    setSelectedIds({});
    setAdminLoading(false);
  }

  async function clearSelectedTestData() {
    const idsToDelete = Object.keys(selectedIds).filter((k) => selectedIds[k]);
    if (idsToDelete.length === 0) return;
    if (!window.confirm(`Delete ${idsToDelete.length} selected submission(s)? This can't be undone.`)) return;
    setAdminLoading(true);
    for (const id of idsToDelete) {
      try {
        await deleteDoc(doc(db, "ocean_submissions", id));
      } catch (e) {}
    }
    setAdminData((prev) => prev.filter((rec) => !idsToDelete.includes(rec._id)));
    setSelectedIds({});
    setAdminLoading(false);
  }

  function toggleSelected(id) {
    setSelectedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  // ---------------- MENU ----------------
  if (view === "menu") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif" }}>
        <HeaderBanner />
        <div style={{ padding: "40px 20px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h1 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 28, marginTop: 0, marginBottom: 28 }}>
              Candidate Behavioral Assessment
            </h1>
            <button
              onClick={startTest}
              style={{ padding: "12px 28px", background: NAVY, color: "white", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 700, fontSize: 15 }}
            >
              Begin Assessment
            </button>
            <div style={{ marginTop: 40, borderTop: "1px solid " + LIGHTGOLD, paddingTop: 20 }}>
              <button
                onClick={() => setView("admin-gate")}
                style={{ fontSize: 12, color: "#999", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
              >
                G&Co. team member? View results →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- NAME ENTRY ----------------
  if (view === "name-entry") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif" }}>
        <HeaderBanner />
        <div style={{ padding: "40px 20px" }}>
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 22, marginTop: 0 }}>Before you begin</h2>
            <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
              Please enter your full name so your responses can be matched to your application.
            </p>
            <input
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="Full name"
              style={{ width: "100%", padding: "12px 14px", fontSize: 15, border: "1px solid #CCCCCC", borderRadius: 6, marginBottom: 16, boxSizing: "border-box" }}
            />
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setView("menu")} style={{ padding: "10px 18px", background: "white", border: "1px solid #CCCCCC", borderRadius: 6, cursor: "pointer" }}>
                Back
              </button>
              <button
                disabled={!candidateName.trim()}
                onClick={() => setView("test")}
                style={{ padding: "10px 22px", background: candidateName.trim() ? NAVY : "#ccc", color: "white", border: "none", borderRadius: 6, cursor: candidateName.trim() ? "pointer" : "not-allowed", fontWeight: 600 }}
              >
                Begin Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- TEST ----------------
  if (view === "test") {
    const q = questions[qIndex];
    const pct = Math.round((qIndex / questions.length) * 100);
    const selected = answers[qIndex];
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif" }}>
        <HeaderBanner />
        <div style={{ padding: "40px 20px" }}>
          <div style={{ maxWidth: 660, margin: "0 auto" }}>
            <div style={{ marginBottom: 8, display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888" }}>
              <span>Scenario {qIndex + 1} of {questions.length}</span>
              <span>{pct}% complete</span>
            </div>
            <div style={{ background: "#E5E5E5", borderRadius: 999, height: 8, width: "100%", overflow: "hidden" }}>
              <div style={{ background: GOLD, height: "100%", width: pct + "%" }} />
            </div>
            <div style={{ background: "white", border: "1px solid " + LIGHTGOLD, borderRadius: 8, padding: 32, marginTop: 24 }}>
              <p style={{ fontSize: 18, color: NAVY, lineHeight: 1.55, fontWeight: 600, marginBottom: 26 }}>{q.scenario}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => pickAnswer(opt.score)}
                    style={{
                      textAlign: "left", padding: "13px 16px", borderRadius: 6,
                      border: selected === opt.score ? "2px solid " + GOLD : "1px solid #DDDDDD",
                      background: selected === opt.score ? LIGHTGOLD : "white",
                      cursor: "pointer", fontSize: 14, lineHeight: 1.4,
                    }}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
            {submitError && (
              <div style={{ background: "#FDECEC", border: "1px solid #C00000", borderRadius: 6, padding: "10px 14px", marginTop: 12 }}>
                <p style={{ color: "#C00000", fontSize: 13, margin: 0, fontWeight: 600 }}>Something went wrong saving your response.</p>
                <p style={{ color: "#900", fontSize: 11.5, margin: "4px 0 0" }}>Details: {submitError}</p>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
              <button
                onClick={() => (qIndex === 0 ? setView("name-entry") : setQIndex((i) => i - 1))}
                style={{ padding: "9px 16px", background: "white", border: "1px solid #CCCCCC", borderRadius: 6, cursor: "pointer", fontSize: 13 }}
              >
                ← Back
              </button>
              {qIndex === questions.length - 1 && selected ? (
                <button
                  onClick={submitTest}
                  disabled={saving}
                  style={{ padding: "10px 24px", background: NAVY, color: "white", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600, fontSize: 14 }}
                >
                  {saving ? "Submitting..." : "Submit Assessment"}
                </button>
              ) : (
                <span style={{ fontSize: 12, color: "#999", alignSelf: "center" }}>{answeredCount} of {questions.length} answered</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- SUBMITTED ----------------
  if (view === "submitted" && myResult) {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif" }}>
        <HeaderBanner tagline="Your Results" />
        <div style={{ padding: "40px 20px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>✓</div>
              <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 24, margin: 0 }}>
                Thank you, {candidateName.split(" ")[0]}.
              </h2>
              <p style={{ color: "#666", marginTop: 8, fontSize: 14 }}>
                Here's your OCEAN score. The G&Co. team will review a full analysis as part of your candidacy.
              </p>
            </div>
            <ReportBody result={myResult} showNarrative={false} />
            <button
              onClick={() => setView("menu")}
              style={{ marginTop: 28, padding: "10px 22px", background: NAVY, color: "white", border: "none", borderRadius: 6, cursor: "pointer" }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- ADMIN GATE ----------------
  if (view === "admin-gate") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif" }}>
        <HeaderBanner tagline="Team Access" />
        <div style={{ padding: "60px 20px", display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 20, marginTop: 0 }}>Team Access</h2>
            <p style={{ color: "#666", fontSize: 13, marginTop: 8, marginBottom: 16 }}>Enter the internal passcode to view candidate results.</p>
            <input
              type="password"
              value={adminPass}
              onChange={(e) => { setAdminPass(e.target.value); setPassError(false); }}
              placeholder="Passcode"
              style={{ width: "100%", padding: "10px 14px", border: "1px solid #CCCCCC", borderRadius: 6, marginBottom: 8, boxSizing: "border-box" }}
            />
            {passError && <div style={{ color: "#C00000", fontSize: 12, marginBottom: 8 }}>Incorrect passcode.</div>}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setView("menu")} style={{ padding: "9px 16px", background: "white", border: "1px solid #CCCCCC", borderRadius: 6, cursor: "pointer" }}>Back</button>
              <button
                onClick={() => {
                  if (adminPass === "homer&gus") loadAdmin();
                  else setPassError(true);
                }}
                style={{ padding: "9px 20px", background: NAVY, color: "white", border: "none", borderRadius: 6, cursor: "pointer" }}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- ADMIN LEADERBOARD ----------------
  if (view === "admin") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif" }}>
        <HeaderBanner tagline="Team Results Dashboard" />
        <div style={{ padding: "40px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 22 }}>Candidate Results</h2>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {Object.values(selectedIds).some(Boolean) && (
                  <button onClick={clearSelectedTestData} style={{ fontSize: 12, color: "#C00000", background: "none", border: "1px solid #C00000", borderRadius: 4, padding: "5px 10px", cursor: "pointer" }}>
                    Delete Selected ({Object.values(selectedIds).filter(Boolean).length})
                  </button>
                )}
                {adminData.length > 0 && (
                  <button onClick={clearAllTestData} style={{ fontSize: 12, color: "#C00000", background: "none", border: "1px solid #C00000", borderRadius: 4, padding: "5px 10px", cursor: "pointer" }}>
                    Clear All Test Data
                  </button>
                )}
                <button onClick={() => setView("menu")} style={{ fontSize: 12, color: "#999", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                  ← Back to main menu
                </button>
              </div>
            </div>

            {adminLoading ? (
              <p style={{ color: "#888" }}>Loading candidate results...</p>
            ) : adminData.length === 0 ? (
              <p style={{ color: "#888" }}>No candidates have completed the assessment yet.</p>
            ) : (
              <div style={{ background: "white", border: "1px solid " + LIGHTGOLD, borderRadius: 8, overflow: "hidden", overflowX: "auto", marginBottom: 32 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: NAVY, color: "white" }}>
                      <th style={{ padding: "10px 12px", textAlign: "center", width: 36 }}></th>
                      <th style={{ padding: "10px 12px", textAlign: "left" }}>#</th>
                      <th style={{ padding: "10px 12px", textAlign: "left" }}>Candidate</th>
                      <th style={{ padding: "10px 12px", textAlign: "left" }}>Submitted</th>
                      {OCEAN_DATA.traits.map((t) => (
                        <th key={t.code} style={{ padding: "10px 8px", textAlign: "left", fontSize: 11 }}>{t.code}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {adminData.map((rec, i) => (
                      <tr key={rec._id} style={{ borderTop: "1px solid #eee", background: selectedIds[rec._id] ? "#FDEDED" : (i % 2 ? "#FAFAFA" : "white") }}>
                        <td style={{ padding: "10px 12px", textAlign: "center" }}>
                          <input type="checkbox" checked={!!selectedIds[rec._id]} onChange={() => toggleSelected(rec._id)} />
                        </td>
                        <td style={{ padding: "10px 12px", fontWeight: 700, color: GOLD }}>{i + 1}</td>
                        <td style={{ padding: "10px 12px", fontWeight: 600, color: NAVY }}>{rec.candidateName}</td>
                        <td style={{ padding: "10px 12px", color: "#888", fontSize: 12 }}>{new Date(rec.timestamp).toLocaleDateString()}</td>
                        {OCEAN_DATA.traits.map((t) => (
                          <td key={t.code} style={{ padding: "10px 8px" }}>{rec.traitScores[t.code]?.toFixed(1)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {adminData.length > 0 && (
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 17, marginBottom: 12 }}>Individual Reports</h3>
                {adminData.map((rec, i) => (
                  <details key={rec._id} style={{ background: "white", border: "1px solid " + LIGHTGOLD, borderRadius: 8, marginBottom: 10, padding: "12px 16px" }}>
                    <summary style={{ cursor: "pointer", fontWeight: 700, color: NAVY, fontSize: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span>#{i + 1} — {rec.candidateName} ({new Date(rec.timestamp).toLocaleDateString()})</span>
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); downloadPDF(rec); }}
                        style={{ fontSize: 11, fontWeight: 600, color: NAVY, background: LIGHTGOLD, border: "1px solid " + GOLD, borderRadius: 4, padding: "5px 10px", cursor: "pointer" }}
                      >
                        Download PDF
                      </button>
                    </summary>
                    <div style={{ marginTop: 14 }}>
                      <div style={{ background: LIGHTGOLD, borderRadius: 6, padding: "12px 14px", marginBottom: 16 }}>
                        <div style={{ fontWeight: 700, color: NAVY, fontSize: 12.5, marginBottom: 6 }}>Full Narrative Analysis</div>
                        <p style={{ fontSize: 12.5, color: "#444", lineHeight: 1.6, margin: 0 }}>
                          {buildOverallNarrative(rec.traitScores, rec.candidateName.split(" ")[0])}
                        </p>
                      </div>
                      <ReportBody result={rec} embedded showNarrative />
                      <div style={{ background: "white", border: "1px solid " + GOLD, borderRadius: 6, padding: "12px 14px", marginTop: 16 }}>
                        <div style={{ fontWeight: 700, color: NAVY, fontSize: 12.5, marginBottom: 8 }}>
                          Suggested Interview Questions -- Probing {weakestTrait(rec.traitScores).name}
                        </div>
                        <ol style={{ margin: 0, paddingLeft: 18 }}>
                          {OCEAN_DATA.interviewQuestions[weakestTrait(rec.traitScores).code].map((q, qi, arr) => (
                            <li key={qi} style={{ fontSize: 12.5, color: "#444", lineHeight: 1.6, marginBottom: 6, fontWeight: qi === arr.length - 1 ? 700 : 400 }}>
                              {q}
                              {qi === arr.length - 1 && <span style={{ fontWeight: 400, color: GOLD, fontSize: 11, marginLeft: 6 }}>(toughest follow-up)</span>}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function ReportBody({ result, embedded, showNarrative = true }) {
  const { traitScores } = result;
  return (
    <div>
      <h3 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: embedded ? 15 : 18, marginBottom: 12 }}>
        OCEAN Personality Profile
      </h3>
      {OCEAN_DATA.traits.map((t) => {
        const score = traitScores[t.code];
        const band = bandFor(score);
        const narrative = OCEAN_DATA.traitNarrative[t.code][band];
        const pct = ((score - 1) / 4) * 100;
        return (
          <div key={t.code} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
              <span style={{ fontWeight: 700, color: NAVY }}>{t.name}</span>
              <span style={{ color: "#888" }}>{score.toFixed(2)} / 5.0</span>
            </div>
            <div style={{ background: "#E5E5E5", borderRadius: 999, height: 10, width: "100%", overflow: "hidden", marginBottom: 6 }}>
              <div style={{ background: GOLD, height: "100%", width: pct + "%" }} />
            </div>
            {showNarrative && <p style={{ fontSize: 12.5, color: "#555", lineHeight: 1.5, margin: 0 }}>{narrative}</p>}
          </div>
        );
      })}
    </div>
  );
}
