// ==========================================================================
// CONTENT · OPERATING — general operating, signal-handling, and radio/comms
// rules (CROR), cited (trust:rulebook). Faithful condensations / quotes of the
// operative clauses; the citation points to the full rule. Source: CROR Jan 28 2025.
// ==========================================================================

const SRC = 'Canadian Rail Operating Rules — Jan 28, 2025';
const O = (id, rule, title, body, tags = [], related = [], extra = {}) =>
  ({ id, domain: 'operating', ref: 'CROR ' + rule, source: SRC, trust: 'rulebook', title, body, tags, related, ...extra });

export const operating = [
  // ----- general rules (time, watches, time tables, signals-general) -----
  O('op-1', '1', 'Time',
    'The 24-hour clock is used, expressed in four digits. Midnight is expressed as 2359 or 0001.',
    ['time'], ['op-2']),

  O('op-2', '2', 'Watches',
    'Every conductor, assistant conductor, locomotive engineer, pilot, foreman and snow-plow foreman (and others the company directs) must, when on duty, use a reliable watch showing hours, minutes and seconds. They must: keep it within 30 seconds\' variation over 24 h; reset it if it varies more; and, before commencing work, compare it with a railway-approved time source — or, where none is accessible, get the correct time from the RTC or from another employee who has it. Crew members in train/transfer/yard service compare time with one another as soon as possible after commencing work.',
    ['time', 'crew'], ['op-1', 'op-5', 'def-rtc']),

  O('op-3', '3', 'Time in Effect',
    'Special instructions indicate whether Standard Time, Daylight Saving Time, or other designated time is in effect.',
    ['time'], ['op-5']),

  O('op-4', '4', 'Notice of Time Change',
    'Notice of a time change is given by operating bulletin posted at least 72 hours before it takes effect, and by GBO at least 24 hours before the change and for not less than 6 days after.',
    ['time', 'bulletins'], ['op-7', 'def-gbo']),

  O('op-5', '5', 'Employees on Duty When Time Changes',
    'An employee on duty who must use a watch changes time as follows — Standard → Daylight Saving: at 0200 ST set ahead one hour to 0300 DST; Daylight Saving → Standard: at 0200 DST set back one hour to 0100 ST. Then immediately verify the correct time per Rule 2(iii).',
    ['time'], ['op-2', 'op-3']),

  O('op-6', '6', 'Time Tables',
    'Each time table, from the moment it takes effect, supersedes the preceding one.',
    ['time', 'timetable'], ['op-7']),

  O('op-7', '7', 'Notice of New Time Table or Supplement',
    'Notice is given by operating bulletin posted at least 72 hours before a new time table or supplement takes effect, and by GBO at least 24 hours before and for not less than 6 days after; it must also be communicated to all other affected employees.',
    ['time', 'timetable', 'bulletins'], ['op-4', 'op-6', 'def-gbo']),

  O('op-8', '8', 'Symbols and Diagrams',
    'Time-table symbols: B operating bulletins · C cautionary limits · D report departure to RTC · S special derail · X crossover between main tracks · Y wye · * footnote · + interlocking (see footnotes). The method of control and the limits of single/multi-track are shown in the time table; each interlocking, non-interlocked drawbridge and non-interlocked railway crossing at grade is shown in subdivision footnotes or special instructions; siding capacity and the extent of Cautionary Limits / TGBO / DOB limits are shown in time-table columns or footnotes.',
    ['timetable'], ['op-6']),

  O('op-11', '11', 'Fusees',
    'A movement approaching a red fusee burning on or near its track — or beyond the nearest rail of an adjacent track — must proceed at REDUCED speed to a point two miles beyond the fusee\'s location, reducing to that speed immediately if moving faster. A fusee must not be placed on a public crossing at grade or where it may cause fire. (Optional) Where the fusee is on the track of an approaching movement already at REDUCED or RESTRICTED speed for a reason other than Rule 11, it must stop before passing the fusee.',
    ['signals', 'flagging'], ['op-35']),

  O('op-18', '18', 'Headlight Failure',
    'If the headlight fails and can\'t be repaired, ditch lights are used in lieu and the movement may proceed. If all headlights and ditch lights have failed, use whatever lights are available and proceed to the first point repairs can be made; at grade crossings not protected by automatic warning devices, do not exceed 10 MPH entering unless the crossing is known clear and will remain clear until occupied.',
    ['lights', 'crossings'], ['op-17', 'op-19']),

  O('op-19', '19', 'Ditch Lights',
    'A train must display ditch lights continuously in the direction of travel whenever the headlight is required at full power. If a ditch light fails en route, the movement may proceed to the next point repairs can be made.',
    ['lights'], ['op-17', 'op-18']),

  // ----- visual / audible signals -----
  O('op-12', '12', 'Hand Signals',
    'Indications (hand, lantern or flag): STOP — swung from side to side at right angle to the track; MOVE BACKWARD — swung in a circle at right angle to the track (speed proportional); MOVE FORWARD — raised and lowered (speed proportional); APPLY AIR BRAKES — raised and swung horizontally above the head; RELEASE AIR BRAKES — raised and held at arm\'s length above the head; REDUCE SPEED — held horizontally at arm\'s length. Any object waved violently by anyone on or near the track is a signal to STOP. A signal must be given in time and from where it can be plainly seen; if there is doubt as to its meaning or for whom it is intended, it must be regarded as a STOP signal. Forward/backward are relative to the front of the controlling locomotive. The disappearance from view of the crew member (or the lights) giving the signals must be regarded as a STOP signal.',
    ['signals', 'hand-signals', 'switching'], ['op-123-1', 'op-123-2']),

  O('op-13', '13', 'Engine Bell',
    'Ring the engine bell when: an engine is about to move (except when switching requires frequent stop/start after the initial move); passing any movement standing on an adjacent track; approaching/passing/moving about station facilities or shop track areas; and from one-quarter mile from every public crossing at grade until the crossing is fully occupied (except where 14(l) whistle applies or as special instructions prescribe).',
    ['audible', 'crossings'], ['op-14']),

  O('op-14', '14', 'Engine Whistle Signals',
    'Sounded as prescribed; unnecessary use is prohibited ("engine whistle" includes "engine horn"). Key signals — one short ("o"): when standing, braking system is equalized (angle cock may be closed). Two short ("oo"): answer to a stop signal (except a fixed signal) or to any signal not otherwise provided for (not used when switching). Succession of short sounds: alarm for persons or animals on or near the track. Public crossing at grade — 14(l): sound the whistle at the whistle post (1/4 mile) so as to give at least 20 seconds warning, prolonged or repeated until the crossing is fully occupied (standard pattern: two long, one short, one long). On engine whistle failure, ring the bell continuously and limit speed entering unprotected crossings.',
    ['audible', 'crossings'], ['op-13']),

  O('op-17', '17', 'Headlight',
    'A movement headed by equipment with a headlight must display it at full power in the direction of travel approaching all public crossings at grade until occupied, and while moving on the main track; on both ends of the engine while on non-main track (may be extinguished on the end coupled to cars). May be dimmed/extinguished (when not approaching a crossing) for an opposing movement, oncoming road vehicles at night, etc.',
    ['lights']),

  O('op-26', '26', 'Blue Signal Protection',
    'A blue flag by day (plus a blue light by night or when day signals can\'t be plainly seen), at one or both ends of equipment — or, on a track entered from one end only, between the equipment and the entry switch — indicates workmen are in the vicinity. When displayed, the equipment must NOT be coupled to or moved. Only the same class of workmen that displayed the blue signal may remove it; its removal indicates no workmen are in the vicinity. Don\'t block the view of a blue signal without notifying the workmen. Where kicking is permitted (113.5(a)), protection is by a special-locked switch preventing entry, or a blue signal plus a derail locked in the derailing position.',
    ['blue-flag', 'protection', 'securing'], ['sw-113-5']),

  O('op-27', '27', 'Signal Imperfectly Displayed',
    'A fixed signal imperfectly displayed — or the absence of a fixed signal where one is usually displayed — must be regarded as the MOST RESTRICTIVE indication that signal is capable of displaying, and reported to the proper authority as soon as possible. If a block/interlocking signal shows one or more lights out but at least one green or yellow remains, movements may proceed reducing to SLOW through turnouts, prepared to stop at the next signal (special exception for a solid yellow on the bottom = treat as RESTRICTING). A signal known/suspected damaged is regarded as its most restrictive indication.',
    ['signals'], ['op-34', 'def-spd-restricted']),

  O('op-33', '33', 'Speed Compliance',
    'If speed requirements are exceeded, crew members must remind one another. If no action is taken, or the locomotive engineer is observed non-responsive or incapacitated, other crew members must take immediate action to ensure the safety of the movement — including stopping it in emergency if required.',
    ['speed', 'crew'], ['op-34']),

  O('op-34', '34', 'Fixed Signal Recognition and Compliance',
    'The crew on the controlling engine must know the indication of each fixed signal (including switches where practicable) before passing it. Crew members within physical hearing range must communicate to each other, clearly and audibly, the indication BY NAME of each fixed signal they must identify — called out as soon as positively identified, and any change of indication promptly communicated and acted on. Must be communicated: block & interlocking signals; Rule 42/43 signals; mile signs to interlocking / hot box detector / Cautionary Limit; Stop signs; OCS-begins; a red signal between the rails; a flagman\'s stop signal; a switch not properly lined for the movement; Cautionary Limit signs; advance PSO signs; and zone-speed reductions. If prompt compliance isn\'t taken, remind one another; if still nothing, take immediate action (stop in emergency if required).',
    ['signals', 'crew'], ['op-33', 'op-27']),

  O('op-35', '35', 'Emergency Protection',
    'Any employee discovering a hazardous condition that may affect the safe passage of a movement must, by flags, lights, fusees, radio, telephone or other means, make every possible effort to stop and/or instruct any affected movement. Flag protection is required on main track unless/until relieved. A flagman goes the required distance from the condition (unless otherwise provided, at least two miles to a point with an unobstructed view), displays a red flag by day / lighted red fusee by night until the movement acknowledges (two short — 14(b)), stops, or reaches the flagman. A movement stopped by a flagman must not proceed until instructed by the flagman. A flagman must carry a red flag and eight red fusees. (This rule does not authorize main track occupancy or track work.)',
    ['emergency', 'protection', 'flagging'], ['op-36', 'op-14']),

  O('op-36', '36', 'Decreased Flagging Distance',
    'On a subdivision specified in special instructions where maximum speed is not greater than 30 MPH, the "at least two miles" distance in Rules 35, 42/842 and 43/843 is decreased to at least one mile.',
    ['emergency', 'flagging'], ['op-35']),

  O('op-40', '40', 'Track Work Protection — General',
    'Special instructions specify when Rules 42/842, 43/843 and 849 apply on non-main track. Where time-table footnotes or special instructions designate that TGBO and/or DOB apply on a non-main track, protection of track work and track conditions may be provided as prescribed by Rules 42/842 and 43/843.',
    ['protection', 'track', 'bulletins'], ['op-41', 'op-42', 'op-43']),

  O('op-41', '41', 'Protection of Track Work — Non-Main Track & Cautionary Limits',
    'A movement required to operate on a track protected by a red signal between the rails, or a switch locked with a special lock, must STOP before passing it and be governed by any instructions from the foreman. Only the foreman (or an employee authorized by the foreman) may remove the red signal and/or special lock. (Not applicable on main tracks outside cautionary limits, signalled sidings/other signalled tracks, or tracks specified in special instructions.)',
    ['protection', 'track'], ['def-cautionary-limits', 'def-foreman']),

  O('op-42', '42', 'Planned Protection',
    'Rule 42 signals must not be in place more than 30 minutes before or after the times stated in the GBO unless the GBO provides otherwise. A movement holding the Form Y must not pass the red signal at the identifiable location stated in the GBO, enter the GBO track limits, or make a reverse movement within those limits until it receives instructions from the foreman named in the GBO (when a specific track is involved, the foreman\'s instructions must specify which track). Those instructions must be repeated to and acknowledged by that foreman before being acted upon. Where a signalled turnout is within two miles of Rule 42 protection that doesn\'t apply on all tracks, every movement must approach prepared to comply with Rule 42 until the route is known.',
    ['protection', 'flagging', 'bulletins'], ['op-40', 'op-44', 'def-gbo', 'def-foreman']),

  O('op-43', '43', 'Slow Track Protection',
    'Form V GBO slow-track protection is marked in the field by: (i) a YELLOW signal to the right of the track at least two miles out in each direction from the outermost GBO limits, and (ii) a GREEN signal to the right of the track in each direction immediately beyond the defect. A single mile-point restriction uses one green (either side); abutting limits within one GBO use a single green to each side per restriction. If signal placement is delayed, the Form V carries "Signals may not be in place." A movement must not exceed the GBO speed while at or between opposing green signals. Where a signalled turnout is within two miles of a restriction that doesn\'t apply on all tracks, approach prepared to comply until the route is known.',
    ['protection', 'speed', 'flagging', 'bulletins'], ['op-40', 'op-44', 'def-gbo']),

  O('op-44', '44', 'Unusual Track Signal Conditions',
    'Handling missing or unexpected Rule 42/43 signals. (a) If a Rule 42 signal is absent between the Form Y times, proceed as though it is properly placed and tell the RTC as quickly as possible. (b) Within the 30-minute window of Rule 42(a): a yellow-over-red may be passed on the named foreman\'s instructions (if the foreman can\'t be reached, be prepared to stop at a red, and advise the RTC if no red is found at the GBO location); a red signal means STOP unless the foreman authorizes proceeding (if unreachable, contact the RTC and be governed by instructions). A yellow-over-red or red encountered OUTSIDE the 30-minute window — or without holding a Form Y requiring it — means STOP, then contact the RTC. (c) A movement inside Form Y limits when protection takes effect must stop unless the foreman instructs otherwise. (d) If a Rule 43 signal is missing, be governed by the Form V and tell the RTC ASAP. (e) A yellow or green signal with no GBO requiring it → reduce to 10 MPH and contact the RTC. The RTC may authorize normal speed where the TGBO/DOB system and the engineering supervisor confirm Rule 42/43 is not in effect; engineering arranges signal removal (which may include the crew picking them up).',
    ['protection', 'signals', 'bulletins'], ['op-42', 'op-43', 'def-rtc']),

  O('op-45', '45', 'Signal Placement — Multi-Track',
    'Except on a subdivision designated in special instructions, the signals required by Rules 42/842 and 43/843 must be placed to the outside of the outermost track(s), not between the main tracks.',
    ['protection', 'signals'], ['op-42', 'op-43']),

  // ----- crew / movement -----
  O('op-106', '106', 'Crew Responsibilities',
    'All crew members are responsible for the safe operation of movements and equipment in their charge and for the observance of the rules. Under conditions not provided for by the rules, they must take every precaution for protection. A utility employee becomes a crew member when working with any movement.',
    ['crew'], ['def-conductor', 'def-employee']),

  O('op-108', '108', 'Precautions While Switching',
    'When switching is performed, crew members must take precautions to prevent unintended rollbacks and/or fouling of other tracks and equipment.',
    ['switching', 'crew'], ['sw-114']),

  O('op-109', '109', 'Locomotive Engineer Precautions',
    'When duties require the locomotive engineer to temporarily exit the controlling cab on a standing movement: fully apply the independent brake; apply the automatic brake if required; remove the reverser (unless not equipped with high idle); after stepping away, visually verify the gauges don\'t indicate a possible air-brake release and that the brake valve handles remain in the selected positions; and verbally confirm the measures with another employee.',
    ['crew', 'securing'], ['sw-112']),

  O('op-110', '110', 'Inspecting Passing Trains and Transfers',
    'When duties and terrain permit, at least two crew members of a standing train/transfer position themselves on the ground on both sides to inspect passing trains/transfers (the locomotive engineer inspects the near side). Broadcast the inspection results when possible. Every effort must be made to stop a passing train/transfer if a dangerous condition is detected; a report states only the location and what was observed — never speculation as to cause.',
    ['inspection', 'crew']),

  // ----- radio / communication -----
  O('op-122', '122', 'Content of Radio Communications',
    'Radio communications must be brief and to the point and contain only essential instructions or information.',
    ['radio', 'comms']),

  O('op-123', '123', 'Verification Procedures',
    'Except when transmitted by an automated device (or as otherwise provided), when verbal instructions or information affecting the safety of a movement are received by radio, such information must be REPEATED to the sender. Required repetitions/acknowledgements may be checked and confirmed to the RTC by another crew member. Written authorities received by radio are verified by their specific rules.',
    ['radio', 'comms'], ['op-123-1', 'def-rtc']),

  O('op-123-1', '123.1', 'Radio or Hand Signals',
    'Before changing between radio and hand signals, a definite understanding as to the method of communication must be established between the crew members giving or receiving instructions. In an emergency, either method may be used in addition to the one previously arranged.',
    ['radio', 'hand-signals', 'comms'], ['op-12', 'op-123-2']),

  O('op-123-2', '123.2', 'Switching by Radio',
    'When radio controls switching, after positive identification: (i) give direction relative to the front of the controlling locomotive in the initial instruction and whenever direction changes; (ii) give distance to travel with each communication (increments under two car lengths need not be repeated); (iii) if the movement has travelled half the last distance given with no further communication, it must STOP; (iv) communicate block/interlocking signal indications while switching; (v) doubt as to meaning or for whom intended = a STOP signal; (vi) a car length = 50 feet unless otherwise arranged.',
    ['radio', 'switching', 'comms'], ['op-12', 'op-123-1']),

  O('op-125', '125', 'Emergency Communication Procedures',
    'Transmit the word "EMERGENCY" three times at the start of the transmission to report: an accident with injury; a condition that may be a hazard to persons; a condition that may endanger the passage of movements; or a derailment on or fouling a main track. An emergency communication has absolute priority; if one directed to a specific person/movement isn\'t acknowledged, any employee hearing it relays it if practicable, and others must not interfere.',
    ['radio', 'emergency', 'comms']),

  O('op-126', '126', 'Restricted Use of Radio',
    'In addition to the restrictions in Rules 14 and 602, radio must NOT be used to: give advance information about the indication of a block or interlocking signal; or give information that may influence a crew to consider speed restrictions are diminished.',
    ['radio', 'signals', 'comms'], ['op-122']),

  O('op-142', '142', 'Understanding Between Crew Members',
    'Every conductor, locomotive engineer, pilot and snow plow foreman must read and properly understand all GBO and clearances as soon as possible after receiving them, and make them available to other crew members so each has read and understands them (and any protection arrangements). Crew members within physical hearing range must remind one another of GBO/clearance restrictions in sufficient time to ensure compliance.',
    ['crew', 'bulletins'], ['def-gbo', 'op-147']),

  O('op-147', '147', 'Transfer Between Crews',
    'When a conductor and/or locomotive engineer is changed off or relieved, all GBO, DOB, clearances, authorities, TGBO and other written instructions and necessary information still in effect must be transferred personally to the relieving crew, and known to be understood. If a personal transfer isn\'t practicable, contact the RTC about disposition (a signed list of items left for the relieving crew, who compare with the RTC before proceeding). Taking control of a movement on CTC track where the last signal indication can\'t be ascertained → RESTRICTED speed applies to the next signal. Verbal instructions from a foreman must not be passed between crews — the relieving crew contacts the foreman directly.',
    ['crew', 'bulletins'], ['op-142', 'def-rtc']),
];
