export const ROLES_DATA = {
 "ir_associate": {
  "key": "ir_associate",
  "displayName": "Investor Relations Associate",
  "jdSummary": "Client-facing role serving as first point of contact for external investors; raises and retains capital; works closely with senior management, Finance, and Corporate Communications; requires polish under scrutiny and sustained relationship maintenance (Point72, Altas Partners/Elevation, Tiger Global one-pagers).",
  "dimensions": [
   {
    "code": "CIO",
    "name": "Client / Investor Orientation",
    "weight": 15,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I instinctively think about how a piece of information will land with the person receiving it, not just whether it's accurate.",
      "reverse": false
     },
     {
      "text": "I follow up proactively with people rather than waiting for them to chase me.",
      "reverse": false
     },
     {
      "text": "I find relationship-maintenance work less interesting than the technical parts of a job.",
      "reverse": true
     },
     {
      "text": "I tailor how I present the same data differently depending on the audience.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May treat relationship upkeep as secondary to technical accuracy; will need coaching on proactive outreach.",
     "mid": "Maintains relationships adequately but may not consistently anticipate investor needs.",
     "high": "Anticipates what investors need before they ask and adapts messaging fluidly by audience."
    }
   },
   {
    "code": "CPP",
    "name": "Communication Polish & Poise",
    "weight": 15,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I can present complex material clearly to a room without notes.",
      "reverse": false
     },
     {
      "text": "I choose my words carefully when a message could be misread.",
      "reverse": false
     },
     {
      "text": "I sometimes let an email or message go out before double-checking tone.",
      "reverse": true
     },
     {
      "text": "I stay composed and articulate when asked a question I didn't prepare for.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Communication may lack polish under scrutiny; drafts should be reviewed before external use.",
     "mid": "Generally clear communicator but may be caught off guard by unscripted questions.",
     "high": "Polished and composed under scrutiny, including unscripted, high-stakes exchanges."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 6,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 10,
    "benchmark": 4.2,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 4,
    "benchmark": 3.6,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 6,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 },
 "investment_professional": {
  "key": "investment_professional",
  "displayName": "Investment Professional (Associate/Senior Associate/VP)",
  "jdSummary": "Deal-facing role at an early/growth-stage investment firm operating with thesis-driven conviction across sourcing, diligence, and portfolio support; must operate with real ownership under ambiguity and ship judgment under time pressure (8090 Industries Midlevel & Senior Investment Professional JDs).",
  "dimensions": [
   {
    "code": "ADJ",
    "name": "Analytical / Deal Judgment",
    "weight": 18,
    "benchmark": 4.4,
    "specific": true,
    "items": [
     {
      "text": "I look past a compelling narrative to test whether the underlying numbers hold up.",
      "reverse": false
     },
     {
      "text": "I can articulate the three things that would make me wrong about an investment thesis.",
      "reverse": false
     },
     {
      "text": "Once I've built conviction on a deal, I stop looking for disconfirming evidence.",
      "reverse": true
     },
     {
      "text": "I weigh downside scenarios as carefully as the upside case.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be swayed by narrative over rigorous scrutiny of underlying numbers and risk.",
     "mid": "Applies reasonable diligence but may not stress-test conviction once formed.",
     "high": "Rigorously tests theses against disconfirming evidence and weighs downside as carefully as upside."
    }
   },
   {
    "code": "OUA",
    "name": "Ownership Under Ambiguity",
    "weight": 15,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I make progress on a deal even when the mandate is loosely defined.",
      "reverse": false
     },
     {
      "text": "I'm comfortable being the person who has to make the call with incomplete information.",
      "reverse": false
     },
     {
      "text": "I wait for more data before committing to a recommendation.",
      "reverse": true
     },
     {
      "text": "I take responsibility for a deal's outcome even after it's passed to someone senior.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to stall without a clearly defined mandate; may over-index on needing more data before acting.",
     "mid": "Can operate with some ambiguity but prefers clearer scope where possible.",
     "high": "Thrives with loosely defined mandates and owns outcomes fully, even after handoff."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 10,
    "benchmark": 4.1,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 10,
    "benchmark": 4.2,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 5,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 2,
    "benchmark": 3.5,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 },
 "cfo": {
  "key": "cfo",
  "displayName": "Chief Financial Officer",
  "jdSummary": "Firm-building CFO mandate to own and rebuild the finance function at scale, with direct board/investor exposure and controls ownership (Avenir Growth Capital CFO JD, with reference JDs from ArcLight Capital Partners and Genius Sports).",
  "dimensions": [
   {
    "code": "FSC",
    "name": "Financial Stewardship & Controls Mindset",
    "weight": 18,
    "benchmark": 4.4,
    "specific": true,
    "items": [
     {
      "text": "I want financial systems built so that mistakes are hard to make in the first place, not just easy to catch.",
      "reverse": false
     },
     {
      "text": "I feel personally accountable for the accuracy of numbers that leave my desk.",
      "reverse": false
     },
     {
      "text": "I'm comfortable moving forward on a number I haven't fully reconciled if time is short.",
      "reverse": true
     },
     {
      "text": "I build in a second check on anything that touches money or compliance.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over control design; will need strong deputy or external check on accuracy.",
     "mid": "Reasonably controls-minded but may cut corners under time pressure.",
     "high": "Designs controls proactively and takes personal accountability for accuracy under pressure."
    }
   },
   {
    "code": "EPI",
    "name": "Executive Presence & Influence",
    "weight": 15,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I can walk a skeptical board or investor through a complex number and leave them reassured.",
      "reverse": false
     },
     {
      "text": "I push back on a founder or CEO's plan when the numbers don't support it.",
      "reverse": false
     },
     {
      "text": "I soften a difficult financial message more than the situation actually calls for.",
      "reverse": true
     },
     {
      "text": "People outside of finance seek out my read on a decision before it's finalized.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May struggle to command a room of skeptical stakeholders or push back on leadership.",
     "mid": "Generally credible but may soften hard messages more than necessary.",
     "high": "Commands credibility with skeptical boards and pushes back on leadership when the numbers demand it."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 8,
    "benchmark": 4.1,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 4,
    "benchmark": 3.6,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 12,
    "benchmark": 4.3,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 8,
    "benchmark": 4.1,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 6,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 4,
    "benchmark": 3.6,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 4,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 },
 "coo": {
  "key": "coo",
  "displayName": "Chief Operating Officer",
  "jdSummary": "Combined operational and financial leadership mandate at a scaling, newly-leveraged public company; owns systems, processes, and cross-functional execution as the business transitions to a more complex platform (Genius Sports COO/CFO JD).",
  "dimensions": [
   {
    "code": "ORS",
    "name": "Operational Rigor & Systems Thinking",
    "weight": 16,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I design processes so they still work when I'm not the one running them.",
      "reverse": false
     },
     {
      "text": "I notice when a workaround has quietly become the permanent process.",
      "reverse": false
     },
     {
      "text": "I focus more on getting today's task done than on whether the underlying process scales.",
      "reverse": true
     },
     {
      "text": "I build in checkpoints so a cross-functional project doesn't drift off track.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to focus on immediate task completion over durable process design.",
     "mid": "Builds workable processes but may not proactively catch scaling issues.",
     "high": "Designs processes to scale beyond themselves and catches drift before it compounds."
    }
   },
   {
    "code": "EPI",
    "name": "Executive Presence & Influence",
    "weight": 14,
    "benchmark": 4.2,
    "specific": true,
    "items": [
     {
      "text": "I can walk a skeptical board or investor through a complex number and leave them reassured.",
      "reverse": false
     },
     {
      "text": "I push back on a founder or CEO's plan when the numbers don't support it.",
      "reverse": false
     },
     {
      "text": "I soften a difficult financial message more than the situation actually calls for.",
      "reverse": true
     },
     {
      "text": "People outside of finance seek out my read on a decision before it's finalized.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May struggle to command a room of skeptical stakeholders or push back on leadership.",
     "mid": "Generally credible but may soften hard messages more than necessary.",
     "high": "Commands credibility with skeptical boards and pushes back on leadership when the numbers demand it."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 10,
    "benchmark": 4.2,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 4,
    "benchmark": 3.6,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 10,
    "benchmark": 4.1,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 7,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 5,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 },
 "chief_of_staff": {
  "key": "chief_of_staff",
  "displayName": "Chief of Staff",
  "jdSummary": "Strategic and execution-oriented partner to senior leadership; requires cross-functional agility, discretion with sensitive information, and the ability to create executive leverage without explicit direction (Sculptor Capital and ICONIQ/Lee Hunold JDs).",
  "dimensions": [
   {
    "code": "OAD",
    "name": "Organizational Agility & Discretion",
    "weight": 16,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I can move fluidly between an investment conversation and an HR issue in the same afternoon.",
      "reverse": false
     },
     {
      "text": "People trust me with sensitive information because I've never given them a reason not to.",
      "reverse": false
     },
     {
      "text": "I sometimes share more context than I need to when explaining a decision.",
      "reverse": true
     },
     {
      "text": "I read the politics of a room accurately before I speak.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May struggle to context-switch across functions or handle sensitive information discreetly.",
     "mid": "Generally trustworthy and adaptable, though may overshare context at times.",
     "high": "Moves fluidly across functions, reads organizational politics accurately, and handles sensitive information with consistent discretion."
    }
   },
   {
    "code": "ELO",
    "name": "Executive Leverage Orientation",
    "weight": 16,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I anticipate what a busy executive will need before they ask for it.",
      "reverse": false
     },
     {
      "text": "I make a leader's priorities move forward even when they're not in the room.",
      "reverse": false
     },
     {
      "text": "I need explicit instructions before taking action on a leader's behalf.",
      "reverse": true
     },
     {
      "text": "I filter out the noise so only the decisions that truly need an executive's attention reach them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely needs explicit direction rather than anticipating a leader's needs independently.",
     "mid": "Executes well on defined priorities but may not proactively create leverage.",
     "high": "Anticipates needs, drives priorities forward independently, and filters effectively so only real decisions reach the executive."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 8,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 10,
    "benchmark": 4.1,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 4,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 6,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 },
 "family_office_specialist": {
  "key": "family_office_specialist",
  "displayName": "Family Office Specialist",
  "jdSummary": "Senior, client-facing advisory role serving CEOs, founders, and family offices across the full wealth management lifecycle; combines investment fluency with long-horizon trust and relationship stewardship (ICONIQ Capital Family Office Specialist JD).",
  "dimensions": [
   {
    "code": "ADT",
    "name": "Advisory Depth & Trust-Building",
    "weight": 18,
    "benchmark": 4.4,
    "specific": true,
    "items": [
     {
      "text": "I earn a client's trust by being honest about tradeoffs, not by telling them what they want to hear.",
      "reverse": false
     },
     {
      "text": "I take time to understand a family's full picture before recommending anything.",
      "reverse": false
     },
     {
      "text": "I lead with product or performance rather than with the client's underlying goals.",
      "reverse": true
     },
     {
      "text": "I stay engaged with a client relationship even in periods when there's no active transaction.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May lead with product rather than the client's actual goals; risks trust erosion over time.",
     "mid": "Generally client-centered but may not consistently invest in the relationship absent an active transaction.",
     "high": "Builds durable trust through candor and consistently invests in the relationship, transaction or not."
    }
   },
   {
    "code": "RS",
    "name": "Relationship Stewardship",
    "weight": 15,
    "benchmark": 4.3,
    "specific": true,
    "items": [
     {
      "text": "I remember and follow up on small personal details clients have shared with me.",
      "reverse": false
     },
     {
      "text": "I proactively flag a concern to a client before they notice it themselves.",
      "reverse": false
     },
     {
      "text": "I let relationship check-ins slip when I'm busy with other priorities.",
      "reverse": true
     },
     {
      "text": "I coordinate seamlessly with other advisors on a client's team rather than working in a silo.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Relationship upkeep likely to slip under competing priorities.",
     "mid": "Maintains relationships adequately but may not proactively flag concerns.",
     "high": "Proactively stewards the relationship, flags concerns early, and coordinates seamlessly with the client's broader advisory team."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 8,
    "benchmark": 4.1,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 5,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 12,
    "benchmark": 4.2,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 },
 "origination_professional": {
  "key": "origination_professional",
  "displayName": "A&D Origination Professional",
  "jdSummary": "Sourcing-and-origination mandate requiring established C-level relationships across aerospace/defense, deep sector fluency, and an entrepreneurial, network-driven hunter orientation (Rochefort Management JD).",
  "dimensions": [
   {
    "code": "NHD",
    "name": "Network Capital & Hunter Drive",
    "weight": 20,
    "benchmark": 4.4,
    "specific": true,
    "items": [
     {
      "text": "I keep in regular touch with a wide network even when there's no immediate deal to discuss.",
      "reverse": false
     },
     {
      "text": "I enjoy the work of sourcing new opportunities more than managing existing ones.",
      "reverse": false
     },
     {
      "text": "I wait for opportunities to come to me rather than actively hunting for them.",
      "reverse": true
     },
     {
      "text": "I can turn a cold relationship into a warm one through persistence and follow-through.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely reactive rather than proactive in sourcing; network may thin without an active deal.",
     "mid": "Maintains an existing network reasonably well but may not consistently generate new relationships.",
     "high": "Actively cultivates a wide network year-round and converts cold relationships into warm ones through persistence."
    }
   },
   {
    "code": "MF",
    "name": "Market Fluency",
    "weight": 15,
    "benchmark": 4.2,
    "specific": true,
    "items": [
     {
      "text": "I stay current on sector-specific dynamics even in areas outside my day-to-day deals.",
      "reverse": false
     },
     {
      "text": "I can speak credibly with a CFO or CEO about their own industry's financing needs.",
      "reverse": false
     },
     {
      "text": "I rely mostly on what sponsors tell me rather than forming my own view of a sector.",
      "reverse": true
     },
     {
      "text": "I translate broad market trends into specific, actionable opportunities.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May rely on others' framing of the sector rather than forming an independent view.",
     "mid": "Reasonably fluent in the sector but may not consistently translate trends into specific opportunities.",
     "high": "Speaks with independent, credible authority on sector dynamics and translates trends into concrete deal opportunities."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 12,
    "benchmark": 4.2,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 9,
    "benchmark": 4.1,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 4,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 4,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 },
 "risk_quant_analyst": {
  "key": "risk_quant_analyst",
  "displayName": "Risk + Quantitative Analyst",
  "jdSummary": "Hands-on, high-ownership role building and operating risk infrastructure across liquid credit strategies, with direct exposure to the CIO and Investment Committee and a requirement to translate complex analysis for non-technical audiences (Canyon Partners JD).",
  "dimensions": [
   {
    "code": "APR",
    "name": "Analytical Precision & Rigor",
    "weight": 20,
    "benchmark": 4.4,
    "specific": true,
    "items": [
     {
      "text": "I re-derive a number myself before presenting someone else's analysis as fact.",
      "reverse": false
     },
     {
      "text": "I notice small inconsistencies in a dataset that others tend to overlook.",
      "reverse": false
     },
     {
      "text": "I'm comfortable rounding or estimating when a precise number would take much longer.",
      "reverse": true
     },
     {
      "text": "I build models so that an error is easy to trace back to its source.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May accept others' analysis without independent verification; precision may slip under time pressure.",
     "mid": "Generally careful but may take shortcuts on precision when under deadline pressure.",
     "high": "Independently verifies every number and builds models that make errors easy to trace and fix."
    }
   },
   {
    "code": "TCT",
    "name": "Technical Communication & Translation",
    "weight": 15,
    "benchmark": 4.2,
    "specific": true,
    "items": [
     {
      "text": "I can explain a complex risk model to someone with no quantitative background.",
      "reverse": false
     },
     {
      "text": "I adjust the level of technical detail based on who's in the room.",
      "reverse": false
     },
     {
      "text": "I prefer sending the full analysis and letting the reader figure out what matters.",
      "reverse": true
     },
     {
      "text": "I check that a senior stakeholder actually understood my explanation, not just that I gave it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to over-rely on raw output rather than translating it for non-technical audiences.",
     "mid": "Communicates adequately but may not consistently confirm understanding.",
     "high": "Translates complex analysis fluently for any audience and confirms genuine understanding, not just delivery."
    }
   },
   {
    "code": "EF",
    "name": "Excellence Focus",
    "weight": 8,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I hold my own work to a higher standard than most people around me expect.",
      "reverse": false
     },
     {
      "text": "I look for the best possible outcome even when a \"good enough\" solution is already accepted.",
      "reverse": false
     },
     {
      "text": "I'm comfortable submitting work that is roughly right rather than fully polished.",
      "reverse": true
     },
     {
      "text": "I go back and improve something even after others have signed off on it.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prioritizes moving fast over polish; may need explicit quality bars set for them.",
     "mid": "Generally holds solid standards but will accept 'good enough' under time pressure.",
     "high": "Consistently pushes work beyond the accepted bar without being asked to."
    }
   },
   {
    "code": "HU",
    "name": "Humility",
    "weight": 5,
    "benchmark": 3.7,
    "specific": false,
    "items": [
     {
      "text": "I actively seek out feedback that might show me where I'm wrong.",
      "reverse": false
     },
     {
      "text": "I give credit to others even when I did most of the work.",
      "reverse": false
     },
     {
      "text": "I find it hard to admit when someone else's approach was better than mine.",
      "reverse": true
     },
     {
      "text": "I change my position readily when someone presents a better argument.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May be slow to update views in light of pushback; watch for defensiveness under critique.",
     "mid": "Reasonably open to feedback, though may need prompting to seek it out proactively.",
     "high": "Actively invites challenge to their own thinking and updates readily when shown a better path."
    }
   },
   {
    "code": "AG",
    "name": "Agency",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "When something is broken, I fix it without waiting to be asked.",
      "reverse": false
     },
     {
      "text": "I take ownership of outcomes even when the failure wasn't entirely my fault.",
      "reverse": false
     },
     {
      "text": "I prefer to wait for clear direction before acting on ambiguous problems.",
      "reverse": true
     },
     {
      "text": "I push a project forward even when no one is tracking my progress.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Tends to wait for direction; likely to need a well-defined mandate to perform well.",
     "mid": "Takes initiative in familiar territory but may hesitate in ambiguous situations.",
     "high": "Consistently moves things forward without waiting to be asked, even under ambiguity."
    }
   },
   {
    "code": "RE",
    "name": "Resilience",
    "weight": 6,
    "benchmark": 3.8,
    "specific": false,
    "items": [
     {
      "text": "Setbacks tend to sharpen my focus rather than shake my confidence.",
      "reverse": false
     },
     {
      "text": "I can absorb sharp criticism without it affecting my work the next day.",
      "reverse": false
     },
     {
      "text": "A string of bad days makes me question whether I'm cut out for this kind of work.",
      "reverse": true
     },
     {
      "text": "I recover quickly after a decision I made turns out to be wrong.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Setbacks appear to affect confidence and output; may need extra support through rough patches.",
     "mid": "Handles typical pressure reasonably well but may be tested by sustained adversity.",
     "high": "Recovers quickly from setbacks and stays productive through sustained pressure."
    }
   },
   {
    "code": "CU",
    "name": "Curiosity",
    "weight": 6,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I dig into topics well outside my role just to understand how they connect to my work.",
      "reverse": false
     },
     {
      "text": "I ask \"why\" until I actually understand the mechanism, not just the answer.",
      "reverse": false
     },
     {
      "text": "Once I understand something well enough to do my job, I stop digging further.",
      "reverse": true
     },
     {
      "text": "I actively seek out people who know more than me on a topic.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Focuses narrowly on the task at hand; unlikely to explore beyond what's required.",
     "mid": "Shows a reasonable, situational curiosity but doesn't consistently self-direct exploration.",
     "high": "Digs well beyond what's required and actively seeks out expertise from others."
    }
   },
   {
    "code": "CO",
    "name": "Rigor & Conscientiousness",
    "weight": 14,
    "benchmark": 4.3,
    "specific": false,
    "items": [
     {
      "text": "I double-check my own work even under time pressure.",
      "reverse": false
     },
     {
      "text": "I keep detailed records so that nothing falls through the cracks.",
      "reverse": false
     },
     {
      "text": "I sometimes let small errors slide if the bigger picture is right.",
      "reverse": true
     },
     {
      "text": "I finish tasks completely before moving to the next one.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May prioritize speed over precision; outputs should be independently checked.",
     "mid": "Generally careful, though quality may slip under a heavy workload.",
     "high": "Highly dependable on accuracy and follow-through, even under pressure."
    }
   },
   {
    "code": "ES",
    "name": "Composure & Emotional Stability",
    "weight": 6,
    "benchmark": 3.9,
    "specific": false,
    "items": [
     {
      "text": "I stay level-headed when a meeting turns tense or adversarial.",
      "reverse": false
     },
     {
      "text": "Under deadline pressure, my thinking stays clear rather than scattered.",
      "reverse": false
     },
     {
      "text": "My mood is noticeably affected by a bad interaction earlier in the day.",
      "reverse": true
     },
     {
      "text": "I can deliver difficult news calmly, without it affecting my tone.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May show visible strain in high-pressure or adversarial moments.",
     "mid": "Generally composed, with occasional visible strain under sustained pressure.",
     "high": "Stays clear-headed and steady even in tense or high-stakes moments."
    }
   },
   {
    "code": "AS",
    "name": "Drive & Assertiveness",
    "weight": 4,
    "benchmark": 3.6,
    "specific": false,
    "items": [
     {
      "text": "I speak up with my view even when it differs from someone more senior.",
      "reverse": false
     },
     {
      "text": "I push for a decision rather than letting a discussion drift without resolution.",
      "reverse": false
     },
     {
      "text": "I hold back my opinion in a group until I know what others think first.",
      "reverse": true
     },
     {
      "text": "I set ambitious goals for myself, then hold myself to them.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Likely to defer to others rather than push a point of view forward.",
     "mid": "Willing to speak up in comfortable settings but may hold back with senior stakeholders.",
     "high": "Comfortable pushing a view forward and driving discussions to resolution, regardless of seniority in the room."
    }
   },
   {
    "code": "OP",
    "name": "Openness & Strategic Thinking",
    "weight": 6,
    "benchmark": 4.0,
    "specific": false,
    "items": [
     {
      "text": "I naturally step back to consider how a decision fits the bigger picture.",
      "reverse": false
     },
     {
      "text": "I enjoy exploring alternative approaches even after finding one that works.",
      "reverse": false
     },
     {
      "text": "I prefer sticking to proven methods over experimenting with new ones.",
      "reverse": true
     },
     {
      "text": "I look for patterns across situations that others treat as unrelated.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "Prefers proven approaches; may resist novel framing of a problem.",
     "mid": "Open to new approaches when prompted, but doesn't default to exploring alternatives.",
     "high": "Naturally zooms out to strategic patterns and enjoys testing alternative approaches."
    }
   },
   {
    "code": "CL",
    "name": "Collaboration",
    "weight": 4,
    "benchmark": 3.6,
    "specific": false,
    "items": [
     {
      "text": "I adjust my communication style depending on who I'm working with.",
      "reverse": false
     },
     {
      "text": "I make sure quieter voices get heard in a group discussion.",
      "reverse": false
     },
     {
      "text": "I'd rather work through a problem alone than loop others in early.",
      "reverse": true
     },
     {
      "text": "I actively look for ways to make colleagues' jobs easier, not just my own.",
      "reverse": false
     }
    ],
    "narrative": {
     "low": "May default to working independently rather than looping others in.",
     "mid": "Collaborates adequately but doesn't always proactively include others.",
     "high": "Adjusts style fluidly to the audience and actively brings others into the work."
    }
   }
  ]
 }
};
