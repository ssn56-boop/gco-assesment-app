import React from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase.js";
import { ROLES_DATA } from "./data.js";

const NAVY = "#1B2A4A";
const GOLD = "#B8972B";
const LIGHTGOLD = "#F5EBD8";
const CREAM = "#FAF8F4";

const SCALE = [
  { v: 1, label: "Strongly Disagree" },
  { v: 2, label: "Disagree" },
  { v: 3, label: "Neutral" },
  { v: 4, label: "Agree" },
  { v: 5, label: "Strongly Agree" },
];

function flattenItems(role) {
  const items = [];
  role.dimensions.forEach((dim) => {
    dim.items.forEach((it) => {
      items.push({ dimCode: dim.code, text: it.text, reverse: it.reverse });
    });
  });
  return items;
}

function scoreCandidate(role, answers) {
  const dimScores = {};
  role.dimensions.forEach((dim) => {
    const vals = dim.items.map((it, idx) => {
      const key = dim.code + "_" + idx;
      const raw = answers[key] || 3;
      return it.reverse ? 6 - raw : raw;
    });
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    const fitPct = Math.max(0, 100 - (Math.abs(avg - dim.benchmark) / 4) * 100);
    dimScores[dim.code] = { raw: avg, fitPct, weight: dim.weight, name: dim.name, specific: dim.specific };
  });
  let composite = 0;
  role.dimensions.forEach((dim) => {
    composite += (dim.weight * dimScores[dim.code].fitPct) / 100;
  });
  return { dimScores, composite };
}

function narrativeFor(dim, raw) {
  if (raw >= 4.2) return dim.narrative.high;
  if (raw >= 3.4) return dim.narrative.mid;
  return dim.narrative.low;
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
      <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 22, color: NAVY, letterSpacing: 0.3 }}>
        goldsmith
      </span>
      <span style={{ fontFamily: "Georgia, serif", fontSize: 13, color: GOLD, fontStyle: "italic" }}>and co</span>
    </div>
  );
}

function ProgressBar({ pct }) {
  return (
    <div style={{ background: "#E5E1D8", borderRadius: 999, height: 8, width: "100%", overflow: "hidden" }}>
      <div style={{ background: GOLD, height: "100%", width: pct + "%", transition: "width 300ms ease" }} />
    </div>
  );
}

function itemKey(role, flatIndex) {
  let count = 0;
  for (const dim of role.dimensions) {
    for (let idx = 0; idx < dim.items.length; idx++) {
      if (count === flatIndex) return dim.code + "_" + idx;
      count++;
    }
  }
  return "unknown";
}

export default function App() {
  const [view, setView] = React.useState("menu");
  const [roleKey, setRoleKey] = React.useState(null);
  const [candidateName, setCandidateName] = React.useState("");
  const [answers, setAnswers] = React.useState({});
  const [qIndex, setQIndex] = React.useState(0);
  const [saving, setSaving] = React.useState(false);
  const [adminRole, setAdminRole] = React.useState(null);
  const [adminData, setAdminData] = React.useState([]);
  const [adminLoading, setAdminLoading] = React.useState(false);
  const [adminPass, setAdminPass] = React.useState("");
  const [passError, setPassError] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  const role = roleKey ? ROLES_DATA[roleKey] : null;
  const items = role ? flattenItems(role) : [];
  const answeredCount = Object.keys(answers).length;

  function startTest(rk) {
    setRoleKey(rk);
    setAnswers({});
    setQIndex(0);
    setCandidateName("");
    setView("name-entry");
  }

  function pickAnswer(key, val) {
    setAnswers((prev) => ({ ...prev, [key]: val }));
    setTimeout(() => {
      if (qIndex < items.length - 1) setQIndex((i) => i + 1);
    }, 150);
  }

  async function submitTest() {
    setSaving(true);
    setSubmitError(false);
    const { dimScores, composite } = scoreCandidate(role, answers);
    const record = {
      candidateName,
      roleKey,
      roleDisplayName: role.displayName,
      timestamp: new Date().toISOString(),
      dimScores,
      composite,
    };
    try {
      await addDoc(collection(db, "submissions"), record);
      setView("submitted");
    } catch (e) {
      console.error("Firestore write error", e);
      setSubmitError(true);
    }
    setSaving(false);
  }

  async function loadAdmin(rk) {
    setAdminLoading(true);
    setAdminRole(rk);
    const records = [];
    try {
      const q = query(collection(db, "submissions"), where("roleKey", "==", rk));
      const snap = await getDocs(q);
      snap.forEach((docSnap) => records.push(docSnap.data()));
    } catch (e) {
      console.error("Firestore read error", e);
    }
    records.sort((a, b) => b.composite - a.composite);
    setAdminData(records);
    setAdminLoading(false);
    setView("admin");
  }

  // ---------------- MENU ----------------
  if (view === "menu") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif", padding: "40px 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Logo />
          <h1 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 28, marginTop: 28, marginBottom: 8 }}>
            Candidate Behavioral Assessment
          </h1>
          <p style={{ color: "#555", fontSize: 15, marginBottom: 32, lineHeight: 1.5 }}>
            Select the role you're being assessed for below. The assessment takes about 10-15 minutes.
            There are no right or wrong answers — respond honestly, based on how you actually tend to operate.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {Object.keys(ROLES_DATA).map((rk) => (
              <button
                key={rk}
                onClick={() => startTest(rk)}
                style={{
                  textAlign: "left",
                  padding: "16px 18px",
                  background: "white",
                  border: "1px solid #E5E1D8",
                  borderLeft: "4px solid " + GOLD,
                  borderRadius: 6,
                  cursor: "pointer",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <div style={{ fontWeight: 700, color: NAVY, fontSize: 14 }}>{ROLES_DATA[rk].displayName}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>Take assessment →</div>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 40, borderTop: "1px solid #E5E1D8", paddingTop: 20 }}>
            <button
              onClick={() => setView("admin-gate")}
              style={{ fontSize: 12, color: "#999", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
            >
              G&Co. team member? View results →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- NAME ENTRY ----------------
  if (view === "name-entry") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif", padding: "40px 20px" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Logo />
          <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 22, marginTop: 24 }}>{role.displayName}</h2>
          <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
            Before you begin, please enter your full name so your responses can be matched to your application.
          </p>
          <input
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="Full name"
            style={{
              width: "100%", padding: "12px 14px", fontSize: 15, border: "1px solid #D8D2C4",
              borderRadius: 6, marginBottom: 16, fontFamily: "Arial, sans-serif", boxSizing: "border-box",
            }}
          />
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setView("menu")} style={{ padding: "10px 18px", background: "white", border: "1px solid #D8D2C4", borderRadius: 6, cursor: "pointer" }}>
              Back
            </button>
            <button
              disabled={!candidateName.trim()}
              onClick={() => setView("test")}
              style={{
                padding: "10px 22px", background: candidateName.trim() ? NAVY : "#ccc", color: "white",
                border: "none", borderRadius: 6, cursor: candidateName.trim() ? "pointer" : "not-allowed", fontWeight: 600,
              }}
            >
              Begin Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- TEST ----------------
  if (view === "test") {
    const item = items[qIndex];
    const currentKey = itemKey(role, qIndex);
    const pct = Math.round((qIndex / items.length) * 100);
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif", padding: "40px 20px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Logo />
          <div style={{ marginTop: 24, marginBottom: 8, display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888" }}>
            <span>Question {qIndex + 1} of {items.length}</span>
            <span>{pct}% complete</span>
          </div>
          <ProgressBar pct={pct} />
          <div style={{ background: "white", border: "1px solid #E5E1D8", borderRadius: 8, padding: 32, marginTop: 24 }}>
            <p style={{ fontSize: 19, color: NAVY, lineHeight: 1.5, fontWeight: 600, marginBottom: 28 }}>{item.text}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {SCALE.map((s) => (
                <button
                  key={s.v}
                  onClick={() => pickAnswer(currentKey, s.v)}
                  style={{
                    textAlign: "left", padding: "12px 16px", borderRadius: 6,
                    border: answers[currentKey] === s.v ? "2px solid " + GOLD : "1px solid #E5E1D8",
                    background: answers[currentKey] === s.v ? LIGHTGOLD : "white",
                    cursor: "pointer", fontSize: 14, fontFamily: "Arial, sans-serif",
                    display: "flex", alignItems: "center", gap: 10,
                  }}
                >
                  <span style={{
                    width: 22, height: 22, borderRadius: "50%",
                    border: "1.5px solid " + (answers[currentKey] === s.v ? GOLD : "#ccc"),
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, color: answers[currentKey] === s.v ? GOLD : "#999", flexShrink: 0,
                  }}>{s.v}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          {submitError && (
            <p style={{ color: "#C00000", fontSize: 13, marginTop: 12 }}>
              Something went wrong saving your response. Please check your connection and try submitting again.
            </p>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
            <button
              onClick={() => (qIndex === 0 ? setView("name-entry") : setQIndex((i) => i - 1))}
              style={{ padding: "9px 16px", background: "white", border: "1px solid #D8D2C4", borderRadius: 6, cursor: "pointer", fontSize: 13 }}
            >
              ← Back
            </button>
            {qIndex === items.length - 1 && answers[currentKey] ? (
              <button
                onClick={submitTest}
                disabled={saving}
                style={{ padding: "10px 24px", background: NAVY, color: "white", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600, fontSize: 14 }}
              >
                {saving ? "Submitting..." : "Submit Assessment"}
              </button>
            ) : (
              <span style={{ fontSize: 12, color: "#999", alignSelf: "center" }}>{answeredCount} of {items.length} answered</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---------------- SUBMITTED ----------------
  if (view === "submitted") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif", padding: "60px 20px", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <Logo />
          <div style={{ marginTop: 40, fontSize: 48 }}>✓</div>
          <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 24, marginTop: 12 }}>
            Thank you, {candidateName.split(" ")[0]}.
          </h2>
          <p style={{ color: "#666", marginTop: 12, lineHeight: 1.6, fontSize: 14 }}>
            Your responses for the {role.displayName} assessment have been recorded and will be reviewed by
            the G&Co. search team as part of your candidacy.
          </p>
          <button
            onClick={() => setView("menu")}
            style={{ marginTop: 28, padding: "10px 22px", background: NAVY, color: "white", border: "none", borderRadius: 6, cursor: "pointer" }}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  // ---------------- ADMIN GATE ----------------
  if (view === "admin-gate") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif", padding: "60px 20px", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 400, width: "100%" }}>
          <Logo />
          <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 20, marginTop: 24 }}>Team Access</h2>
          <p style={{ color: "#666", fontSize: 13, marginTop: 8, marginBottom: 16 }}>Enter the internal passcode to view candidate results.</p>
          <input
            type="password"
            value={adminPass}
            onChange={(e) => { setAdminPass(e.target.value); setPassError(false); }}
            placeholder="Passcode"
            style={{ width: "100%", padding: "10px 14px", border: "1px solid #D8D2C4", borderRadius: 6, marginBottom: 8, boxSizing: "border-box" }}
          />
          {passError && <div style={{ color: "#C00000", fontSize: 12, marginBottom: 8 }}>Incorrect passcode.</div>}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setView("menu")} style={{ padding: "9px 16px", background: "white", border: "1px solid #D8D2C4", borderRadius: 6, cursor: "pointer" }}>Back</button>
            <button
              onClick={() => {
                if (adminPass === "goldsmith2026") setView("admin-roles");
                else setPassError(true);
              }}
              style={{ padding: "9px 20px", background: NAVY, color: "white", border: "none", borderRadius: 6, cursor: "pointer" }}
            >
              Enter
            </button>
          </div>
          <p style={{ fontSize: 11, color: "#aaa", marginTop: 16 }}>
            Default passcode: goldsmith2026 — change the string in App.jsx (search "goldsmith2026") before sharing this link widely.
          </p>
        </div>
      </div>
    );
  }

  // ---------------- ADMIN ROLE PICKER ----------------
  if (view === "admin-roles") {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif", padding: "40px 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Logo />
          <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 22, marginTop: 24, marginBottom: 20 }}>
            Select a role to view candidate results
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {Object.keys(ROLES_DATA).map((rk) => (
              <button
                key={rk}
                onClick={() => loadAdmin(rk)}
                style={{ textAlign: "left", padding: "14px 16px", background: "white", border: "1px solid #E5E1D8", borderLeft: "4px solid " + NAVY, borderRadius: 6, cursor: "pointer" }}
              >
                <div style={{ fontWeight: 700, color: NAVY, fontSize: 14 }}>{ROLES_DATA[rk].displayName}</div>
              </button>
            ))}
          </div>
          <button onClick={() => setView("menu")} style={{ marginTop: 24, fontSize: 12, color: "#999", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
            ← Back to main menu
          </button>
        </div>
      </div>
    );
  }

  // ---------------- ADMIN LEADERBOARD ----------------
  if (view === "admin") {
    const roleObj = ROLES_DATA[adminRole];
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "Arial, sans-serif", padding: "40px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <Logo />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, marginBottom: 20 }}>
            <h2 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 22 }}>
              {roleObj.displayName} — Candidate Comparison
            </h2>
            <button onClick={() => setView("admin-roles")} style={{ fontSize: 12, color: "#999", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
              ← Other roles
            </button>
          </div>
          {adminLoading ? (
            <p style={{ color: "#888" }}>Loading candidate results...</p>
          ) : adminData.length === 0 ? (
            <p style={{ color: "#888" }}>No candidates have completed this assessment yet.</p>
          ) : (
            <div style={{ background: "white", border: "1px solid #E5E1D8", borderRadius: 8, overflow: "hidden", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: NAVY, color: "white" }}>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Rank</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Candidate</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Composite Fit %</th>
                    {roleObj.dimensions.map((d) => (
                      <th key={d.code} style={{ padding: "10px 8px", textAlign: "left", fontSize: 11 }}>{d.code}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {adminData.map((rec, i) => (
                    <tr key={i} style={{ borderTop: "1px solid #eee", background: i % 2 ? "#FAFAFA" : "white" }}>
                      <td style={{ padding: "10px 12px", fontWeight: 700, color: GOLD }}>{i + 1}</td>
                      <td style={{ padding: "10px 12px", fontWeight: 600, color: NAVY }}>{rec.candidateName}</td>
                      <td style={{ padding: "10px 12px", fontWeight: 700 }}>{rec.composite.toFixed(1)}%</td>
                      {roleObj.dimensions.map((d) => (
                        <td key={d.code} style={{ padding: "10px 8px" }}>{rec.dimScores[d.code] ? rec.dimScores[d.code].raw.toFixed(1) : "-"}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {adminData.length > 0 && (
            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontFamily: "Georgia, serif", color: NAVY, fontSize: 17, marginBottom: 12 }}>Individual Narrative Reports</h3>
              {adminData.map((rec, i) => (
                <details key={i} style={{ background: "white", border: "1px solid #E5E1D8", borderRadius: 8, marginBottom: 10, padding: "12px 16px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, color: NAVY, fontSize: 14 }}>
                    #{i + 1} — {rec.candidateName} ({rec.composite.toFixed(1)}% fit)
                  </summary>
                  <div style={{ marginTop: 14 }}>
                    {roleObj.dimensions.map((d) => {
                      const s = rec.dimScores[d.code];
                      if (!s) return null;
                      return (
                        <div key={d.code} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #f0f0f0" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                            <span style={{ fontWeight: 600, color: d.specific ? GOLD : NAVY }}>{d.name} {d.specific ? "(role-specific)" : ""}</span>
                            <span style={{ color: "#888" }}>score {s.raw.toFixed(2)} / weight {d.weight}%</span>
                          </div>
                          <p style={{ fontSize: 12.5, color: "#555", marginTop: 4, lineHeight: 1.5 }}>{narrativeFor(d, s.raw)}</p>
                        </div>
                      );
                    })}
                  </div>
                </details>
              ))}
            </div>
          )}

          <button onClick={() => setView("menu")} style={{ marginTop: 24, fontSize: 12, color: "#999", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
            ← Back to main menu
          </button>
        </div>
      </div>
    );
  }

  return null;
}
