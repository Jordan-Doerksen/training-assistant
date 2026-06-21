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

  // ----- operation of movements (62–102) -----
  O('op-62', '62', 'Unattended Engines',
    'When an engine is left unattended outside an attended yard or terminal, the cab must be secured against unauthorized entry and the reverser must be removed — except that, during subzero temperatures, an engine without a high-idle feature is exempt from removing the reverser.',
    ['securing', 'crew'], ['op-109', 'sw-112']),

  O('op-63', '63', 'Freight Train Requirements',
    'Freight trains with cars must operate with TIBS or a manned caboose. Exception: a freight train that must be separated to double, set off or lift cars, cut a crossing, or for similar situations may operate without TIBS or a manned caboose to the extent necessary, not exceeding 25 MPH while handling cars.',
    ['movement', 'equipment'], ['op-64', 'op-65']),

  O('op-64', '64', 'Transfer Requirements',
    'Transfers must have air applied throughout the entire consist; the last three cars (if applicable) must be verified to have operative brakes. The locomotive engineer must verify there are sufficient operative brakes to control the transfer, confirmed by a running test as soon as possible. Remote-control locomotives in transfer service operate with two operative operator-controlled units (OCU).',
    ['movement', 'equipment', 'securing'], ['op-63', 'op-70']),

  O('op-65', '65', 'Engine in Yard Service Requirements',
    'An engine in yard service required to enter main track to double over, take head room, or cross over a main track is not considered a train or transfer — except in the application of Rules 301–315 (OCS) and 560–578 (CTC).',
    ['movement', 'switching'], ['op-63', 'def-ocs', 'def-ctc']),

  O('op-66', '66', 'Securing After an Emergency Brake Application on Grade',
    'After an emergency brake application on a heavy or mountain grade, the crew must immediately give the proper authority full details and follow any further instructions. If any part of the train is on mountain grade, the whole train is treated as on mountain grade. In a derailment or train separation on heavy/mountain grade, secure the portion at greatest risk of unintended movement first. On mountain grade, apply hand brakes immediately (per the hand-brake table) before attempting to recover the air. On heavy grade, secure immediately if any listed condition exists — e.g. ambient ≤ −20 °C; −15 to −19 °C with ≥3 in. snow above the rail; unusual braking or difficulty controlling speed; doubt about safe recovery; more than one emergency on the grade; or conditions don\'t permit a recovery attempt — otherwise attempt recovery, and if air won\'t recover, inspect for cause and secure if it can\'t be corrected. When securing per the hand-brake table: if there is less equipment than the table requires, apply hand brakes on all equipment; locomotive retarding force is not counted and must not reduce the requirement.',
    ['securing', 'emergency'], ['op-35', 'op-62']),

  O('op-70', '70', 'Remote Control Operation',
    'A remote-control operation with two or more employees uses two operative OCU. If one fails: repair it as soon as possible, the tour may continue on one, and the movement may run on main track to the first repair point provided an employee other than the OCU holder is positioned to operate the emergency brake valve. No crew member other than the controlling-OCU holder may foul the equipment without verbal confirmation of positive protection. An OCU must not be operated while moving on anything but the movement being controlled. When an engine begins to move, a crew member must visually verify the direction; movements must not exceed 15 MPH; when coupling, the employee protecting the leading end holds the controlling OCU; and before stopping or coupling, the OCU is set to its lowest speed.',
    ['movement', 'switching', 'securing'], ['op-64', 'op-108']),

  O('op-80', '80', 'Main Track Authorization',
    'A movement must not foul or enter a main track without authority. Authority is conveyed by — CTC: signal indication, RTC permission, or written authority; OCS: clearance; Cautionary Limits: Rule 94; SCS: special instructions. If a movement occupies or fouls a main track or controlled siding without authority, or passes a stop-indicating block/interlocking signal without authority, it must stop and initiate protection per Rules 35 and 125, advising the RTC or signalman as soon as practicable. The RTC/signalman issues instructions; if authorized to proceed or reverse (unless relieved), any dual-control or power-operated switch the movement occupies must be examined to confirm the points are properly lined for the route and undamaged, complying with Rule 104.2(b) at dual-control switches (the movement may first move only enough to clear the wheels from the switch points).',
    ['movement', 'authority', 'signals'], ['op-94', 'sw-104-2', 'op-35', 'op-125', 'def-ctc', 'def-ocs']),

  O('op-81', '81', 'Designation of Multi-Track',
    'Where two main tracks are in service they are designated as directed (unless special instructions say otherwise). Where more than two are in service they are numbered: unless the time table specifies otherwise, with eastward/westward time-table directions number from the north ("No 1 track", "No 2 track", and so on); with northward/southward directions number from the east.',
    ['movement', 'track'], ['op-80']),

  O('op-82', '82', 'Limits of Authority',
    'Specific limits in written authorities must be defined by identifiable locations (station names, name signs, switches, signals, mile posts, or other mileage-identified infrastructure). When a switch or signal defines the limit, the authority extends only to the switch\'s fouling point or to the signal location. When mile posts or mileages define it, only to the specific mileage. When station names define it, the authority does not include the main track between the siding switches at either named station (where there is no siding, it extends to the station name sign).',
    ['authority', 'movement'], ['op-80', 'op-94']),

  O('op-83', '83', 'Operating Bulletins',
    'Operating bulletins are issued by the proper authority in the prescribed format and contain only information or instructions about the operation of movements; whoever posts or displays one records the time and date, and duplicate bulletin numbers must not be in effect at the same time. Before commencing work at a home location where they are posted, every employee responsible for operating or supervising movements must read and understand the bulletins applicable to their territory. A Summary bulletin (the number, date and contents of, or reference to, each bulletin still in effect) is issued at intervals set in special instructions; earlier bulletins not included or referenced become void; the current Summary must be accessible to such employees while on duty.',
    ['bulletins'], ['op-142', 'def-gbo']),

  O('op-84', '84', 'Reporting Delays',
    'The conductor must ensure the RTC is promptly advised of any known condition which may delay their train or transfer.',
    ['movement', 'crew'], ['op-85', 'def-rtc']),

  O('op-85', '85', 'Track Release Reports',
    'The conductor ensures the RTC is promptly advised when the movement has arrived at, left, or cleared a location (or at a time specified by the RTC, or after clearing the limits of the last proceed clearance for the subdivision). Before reporting, the conductor confirms the accuracy with other crew members. As it is transmitted, the RTC verifies the movement identification and records the location; if correct, the locomotive engineer confirms the report\'s correctness to the RTC.',
    ['movement', 'crew'], ['op-84', 'op-85-1', 'def-rtc']),

  O('op-85-1', '85.1', 'Location Reports (Optional)',
    'Optional variant of Rule 85 where in effect: an employee ensures the RTC is promptly advised when the movement has arrived at, left, or cleared a location (or as specified by the RTC). The employee confirms accuracy with other crew members first; the RTC enters the report as received and repeats it from the computer screen, and the employee then confirms its correctness to the RTC.',
    ['movement', 'crew'], ['op-85', 'def-rtc']),

  O('op-94', '94', 'Cautionary Limits',
    'Not applicable in CTC; does not authorize track work. A movement or track unit is authorized to use the main track within cautionary limits. Movements must comply with Rule 105(c) and, in addition, be prepared to stop short of a red signal prescribed by Rule 41 or a switch not properly lined. Each cautionary-limit sign and advance sign is reflectorized; an advance sign is placed at least one mile ahead of each cautionary-limit sign (where that distance isn\'t practicable, special instructions so indicate).',
    ['authority', 'movement', 'protection'], ['op-80', 'op-41', 'sw-105', 'def-cautionary-limits']),

  O('op-101', '101', 'Protection Against Extraordinary Conditions',
    'A movement must be fully protected against any known or suspected condition that may interfere with its safe passage. It must stop at once and be fully inspected when it is known or suspected to have struck any object that may interfere with safe operation, and the RTC must be notified as quickly as possible. When a portion of a movement is left on the main track, the crew must take precautions to protect the remaining portion against the return move.',
    ['protection', 'movement', 'emergency'], ['op-35', 'op-102', 'def-rtc']),

  O('op-101-1', '101.1', 'Dimensional Traffic',
    'When the dimensions of traffic require special arrangements to move past other movements, the wide traffic is protected by the RTC against other main-track movements, with advice of the protection given to the crew in writing or verbally. The RTC does not protect against equipment on non-main tracks — the crew handling the wide traffic must protect it from such equipment.',
    ['protection', 'movement'], ['op-101', 'def-rtc']),

  O('op-101-2', '101.2', 'Equipment Left on Main Track',
    'Equipment may be left on the main track when protected by a clearance, a Form T GBO, or cautionary limits. Communication to the RTC must include the equipment\'s location, and the outer limits of Form T protection must be expressed in whole miles or by other identifiable locations. In CTC and controlled interlockings, once the RTC has been advised, Form T protection need not be provided. The RTC must inform each movement required to enter the occupied track of the unattended equipment\'s location.',
    ['protection', 'securing'], ['op-101', 'op-94', 'def-gbo', 'def-cautionary-limits']),

  O('op-102', '102', 'Emergency Stop Protection',
    'A crew stopping from an emergency brake application or other abnormal condition that may obstruct an adjacent main track must: immediately broadcast on the standby channel — "EMERGENCY, EMERGENCY, EMERGENCY, (movement) on (designated track), stopped (stopping) in emergency between mile __ and mile __ (subdivision)"; as soon as possible advise the RTC of the emergency-stop location, indicating whether adjacent tracks (including other railways) are liable to be obstructed; and repeat the broadcast at intervals not exceeding 90 seconds until the RTC advises that all affected movements have been secured, stopped, or advised, or it is known the adjacent tracks are safe and clear.',
    ['protection', 'emergency', 'radio'], ['op-35', 'op-101', 'op-125']),

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
  O('op-120', '120', 'Radio Terms',
    'In radio communication: "STAND BY" — monitor this channel for my next transmission; "OVER" — transmission ended and a response is expected; "OUT" — transmission ended and no response expected. (Optional) Except for switching, when a transmission is complete and a response is expected or required, the transmitting employee ends it with the spoken word "OVER".',
    ['radio', 'comms'], ['op-121', 'op-122']),

  O('op-121', '121', 'Positive Identification',
    'The person initiating a radio communication and the responding party must establish positive identification; the initial call commences with the railway-company initials of the person being called (a non-railway person on company channels uses their company name in the initial transmission). The initiator ends the initial call with "OVER"; each party ends their final transmission with "OUT". When requesting an authority from the RTC or signalman, the communication must include the information needed to issue it — e.g. name, location, movement designation, required limits, signal number and/or track(s) to be used or entered.',
    ['radio', 'comms'], ['op-120', 'op-123', 'def-rtc']),

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

  O('op-127', '127', 'Conducting Emergency Radio Test',
    'To keep emergency channels working and crews familiar with the procedure, the RTC may direct a crew member (or an engineering field employee) to initiate an emergency test call on the RTC channel. Tests are made randomly; the employee initiates it on the applicable RTC channel, e.g. "Emergency test, Emergency test, Emergency test. ABC 1234 East at mile 12 Canada Sub, testing the Emergency call." The RTC then reports whether the test succeeded, and employees return to their designated standby channel.',
    ['radio', 'emergency', 'comms'], ['op-125', 'def-rtc']),

  O('op-137', '137', 'Foreman\'s Instructions',
    'Instructions from a foreman must be in writing, except when the instructions permit unrestricted operation through the entire limits.',
    ['crew', 'bulletins', 'protection'], ['op-138', 'op-153', 'def-foreman']),

  O('op-138', '138', 'Foreman\'s Instructions (Optional)',
    'Optional variant of Rule 137 where so designated: instructions from a foreman must be in writing (no exception).',
    ['crew', 'bulletins', 'protection'], ['op-137', 'def-foreman']),

  O('op-153', '153', 'Confirmation to a Foreman',
    'Confirmation of protection must not be given to a foreman until all affected movements have received a copy of the GBO or are otherwise secured.',
    ['crew', 'bulletins', 'protection'], ['op-137', 'def-gbo', 'def-foreman']),

  O('op-142', '142', 'Understanding Between Crew Members',
    'Every conductor, locomotive engineer, pilot and snow plow foreman must read and properly understand all GBO and clearances as soon as possible after receiving them, and make them available to other crew members so each has read and understands them (and any protection arrangements). Crew members within physical hearing range must remind one another of GBO/clearance restrictions in sufficient time to ensure compliance.',
    ['crew', 'bulletins'], ['def-gbo', 'op-147']),

  O('op-147', '147', 'Transfer Between Crews',
    'When a conductor and/or locomotive engineer is changed off or relieved, all GBO, DOB, clearances, authorities, TGBO and other written instructions and necessary information still in effect must be transferred personally to the relieving crew, and known to be understood. If a personal transfer isn\'t practicable, contact the RTC about disposition (a signed list of items left for the relieving crew, who compare with the RTC before proceeding). Taking control of a movement on CTC track where the last signal indication can\'t be ascertained → RESTRICTED speed applies to the next signal. Verbal instructions from a foreman must not be passed between crews — the relieving crew contacts the foreman directly.',
    ['crew', 'bulletins'], ['op-142', 'def-rtc']),

  // ----- OCS · Occupancy Control System (301–315) -----
  O('op-301', '301', 'OCS — Application and Supervision',
    'On subdivisions, portions of subdivisions, or other tracks specified in special instructions, movements are governed by Occupancy Control System (OCS) rules. The RTC supervises OCS territory by means of clearances, TOPs, GBO and other instructions as required.',
    ['ocs', 'authority'], ['op-302', 'def-ocs', 'def-rtc']),

  O('op-302', '302', 'OCS — Clearance Required',
    'Except within cautionary limits, a train or transfer must be authorized by a clearance to foul or enter a track where OCS rules apply. A clearance is sent direct to the crew addressed; before acting on it, the conductor and locomotive engineer must, as soon as possible, ensure each holds the clearance and their train/transfer is correctly designated, and the engine number must be verified visually.',
    ['ocs', 'clearance', 'authority'], ['op-301', 'op-302-1', 'op-94']),

  O('op-302-1', '302.1', 'OCS — Clearance in Effect',
    'A clearance remains in effect until fulfilled, superseded or cancelled. Clearances authorizing a train or transfer to proceed must, unless cancelled, be fulfilled in the order they were issued on that subdivision.',
    ['ocs', 'clearance'], ['op-302', 'op-302-2', 'op-302-3']),

  O('op-302-2', '302.2', 'OCS — Superseding a Clearance',
    'A clearance may be issued superseding one the crew already holds. When superseding a clearance that includes limits the train/transfer is occupying, the superseding clearance must include that section of track and must not require waiting for an opposing train/transfer. If it restricts the authority already held, the RTC must not take further action until the conductor and locomotive engineer acknowledge it.',
    ['ocs', 'clearance'], ['op-302-1', 'op-302-3']),

  O('op-302-3', '302.3', 'OCS — Cancelling Clearance',
    'Before a clearance is cancelled, the train/transfer addressed must be clear of the limits, protected by Form T GBO, or within cautionary limits. A cancellation does not take effect until acknowledged by the conductor and locomotive engineer, who acknowledge by repeating the clearance number, "cancelled" and the RTC\'s initials to the RTC.',
    ['ocs', 'clearance'], ['op-302-1', 'op-302-2', 'def-cautionary-limits']),

  O('op-303', '303', 'OCS — Protection Against Following Trains or Transfers',
    'Up to two trains/transfers may each be authorized to proceed in the same direction within the same limits, provided each is instructed on its clearance to protect against the other; before either moves within the limits, both crews must have a thorough written understanding of each one\'s operation and the protection to be provided (if communication between them fails, only the moves last arranged may be made). Within ABS territory, with the protection of at least two block signals to the rear, two or more may proceed in the same direction within the same limits, governed by block-signal indications.',
    ['ocs', 'authority', 'movement'], ['op-303-1', 'op-305']),

  O('op-303-1', '303.1', 'OCS — Radio Protection Against Following Trains/Transfers',
    'Where specified in special instructions (not for work clearances): the RTC must not authorize a following train/transfer until its clearance restricts it — "Protect against (preceding) from (location)." The follower must not leave that location (or any identifiable location) until the preceding train/transfer reports leaving an identifiable location ahead (recorded in writing by the follower; the report may come from the RTC; use Rule 82 identifiable locations). If no report is received, the follower may operate at REDUCED speed to a maximum 25 MPH, and must not pass the preceding train/transfer. If the preceding one has stopped, the crews may arrange in writing to "close up"; when it resumes, the follower is again governed as above. Once the preceding train/transfer leaves the location the follower is authorized to, Rule 303.1 no longer applies.',
    ['ocs', 'radio', 'movement'], ['op-303', 'op-82']),

  O('op-304', '304', 'OCS — Restriction Before Leaving',
    'A train/transfer restricted by clearance must not leave the named point until it is positively known that the opposing train(s)/transfer(s) named on the clearance have arrived. A train/transfer has not arrived until its designated engine and marker have arrived; one operating without a marker has not arrived until confirmed by direct communication with a crew member. If unable to observe arrival or to communicate with a crew member, the RTC must be contacted.',
    ['ocs', 'authority', 'movement'], ['op-304-1', 'op-305']),

  O('op-304-1', '304.1', 'OCS — Stopping Clear of Fouling Point',
    'A train/transfer required to stop at a meeting, clearing or waiting point, or at the end of authority, must stop clear of the route to be used by another train or transfer.',
    ['ocs', 'movement'], ['op-304']),

  O('op-305', '305', 'OCS — Before Issuing Clearance Authority',
    'Before issuing clearance authority, the RTC must provide protection against all conflicting trains, transfers and TOPs within the limits stated.',
    ['ocs', 'authority'], ['op-302', 'def-rtc']),

  O('op-306', '306', 'OCS — Track Use',
    'In multi-track OCS, a clearance must specify the track(s) to be used.',
    ['ocs', 'authority', 'track'], ['op-302', 'op-81']),

  O('op-308', '308', 'OCS — Work Clearance Authority',
    'When authorized to work by clearance, a train/transfer may move in either direction within the limits named. A work clearance remains in effect until superseded or cancelled.',
    ['ocs', 'clearance', 'authority'], ['op-308-1', 'op-309']),

  O('op-308-1', '308.1', 'OCS — Changing Direction (Proceed Clearance)',
    'Unless otherwise provided, a train/transfer authorized to proceed by clearance must move only in the specified direction. Provided the track has not been released (or, in ABS, a block is not re-entered), it may reverse 300 feet or less; in ABS a crew member must be positioned to see the section to be used is clear and will remain clear of equipment or a track unit.',
    ['ocs', 'movement'], ['op-308']),

  O('op-309', '309', 'OCS — Moving Through Working Limits',
    'To enter or move within the working limits of one or more trains/transfers, a train/transfer must be restricted by its clearance — e.g. "Protect against Work 5748 (and Work 9460) between Exeter and Jasper." It must not enter or move within those limits until a thorough written understanding is established with the conductor and locomotive engineer of each work train/transfer, covering the specific operation and the protection to be provided, which must continue until the train/transfer has left the working limits.',
    ['ocs', 'authority', 'protection'], ['op-310', 'op-314']),

  O('op-310', '310', 'OCS — Multiple Work Authorities',
    'Two or more work authorities may be issued within the same or overlapping limits; each train/transfer must be restricted by its clearance to protect against the others, and the conductors and locomotive engineers must have a thorough written understanding of each one\'s operation and the protection to be provided.',
    ['ocs', 'authority', 'protection'], ['op-309', 'op-314']),

  O('op-311', '311', 'OCS — Protecting Against a Foreman',
    'A train/transfer must not be authorized to enter or move within the limits of a TOP until restricted — "Protect against foreman (name) between (location) and (location)." It must not enter or move within the TOP limits until instructions are obtained from the named foreman, repeated to and acknowledged by that foreman before being acted upon.',
    ['ocs', 'protection', 'authority'], ['op-309', 'def-foreman']),

  O('op-314', '314', 'OCS — Proceeding Through / Working Within Work Limits (Optional)',
    'Optional alternative to Rules 309/310 where in effect: a train/transfer may be authorized to proceed through or work within the limits of one or more work trains/transfers, provided its clearance restricts it — "Protect against work (number) between (location) and (location)." It must not enter or move within the working limits until a thorough written understanding is established with each work train/transfer\'s conductor and locomotive engineer (intended operation + protection), maintained until the work train(s)/transfer(s) have left the limits.',
    ['ocs', 'authority', 'protection'], ['op-309', 'op-310']),

  O('op-315', '315', 'OCS — Radio Broadcast Requirements',
    'A crew member on every train/transfer must broadcast on the designated standby channel 1 to 3 miles from the next station or interlocking, including the next requirement to protect against another train, transfer or foreman if the restriction lies between the upcoming station and the next station/interlocking. A crew member off the engine must confirm the broadcast was made; if unable to contact the engine crew to confirm, immediate action must be taken to stop the movement before it reaches the next point of restriction.',
    ['ocs', 'radio', 'movement'], ['op-122', 'op-309']),

  // ----- CTC · Centralized Traffic Control (560–576) -----
  O('op-560', '560', 'CTC — Supervision and Application',
    'CTC applies within the limits specified in the time table or special instructions and is supervised by the RTC; block signals govern the operation of trains and transfers, and the RTC issues instructions as required.',
    ['ctc', 'authority', 'signals'], ['op-561', 'def-ctc', 'def-rtc']),

  O('op-561', '561', 'CTC Suspended',
    'When all or part of the CTC is withdrawn from service, trains and transfers are governed by special instructions.',
    ['ctc'], ['op-560']),

  O('op-563', '563', 'CTC — Clearing Opposing Signals into Non-Signalled Sidings',
    'When two opposing trains/transfers are to be lined into the same non-signalled siding, each locomotive engineer must be advised before the signal to operate either into the siding is requested. At meeting points the RTC must not line a train/transfer into a siding until the switch at the opposite end is set for the main track. (Not applicable where automated office control prevents opposing entry, or where SCT is in effect.)',
    ['ctc', 'authority'], ['op-560']),

  O('op-564', '564', 'CTC — Authority to Pass Stop Signal',
    'A train/transfer must have authority to pass a block signal indicating Stop. The RTC may authorize it, but first must ensure no conflicting trains/transfers are within or authorized to enter the affected controlled block (other than ones under Rule 567/567.3/577) and provide protection against all opposing movements. The authorized movement need not stop at the signal but must positively identify it by number, operate at RESTRICTED speed to the next signal or Block End sign, and comply with the switch rules (104.1 spring, 104.2 dual-control, 104.3 power-operated, 611 automatic interlockings). Where a known condition prevents clearing signals into the block, the RTC may authorize REDUCED speed to the next signal/Block End sign (advising whether equipment is present; REDUCED speed begins once the lead equipment has passed entirely through the controlled location and remains until the block is known clear), approaching the next signal prepared to stop. The authority and instructions must be in writing and, where applicable, specify the route — the locomotive engineer must know the route before moving.',
    ['ctc', 'signals', 'authority'], ['op-565', 'op-573', 'sw-104-2']),

  O('op-565', '565', 'CTC — Stop Signal CTC to ABS',
    'A train/transfer leaving CTC and entering ABS that must pass a signal indicating Stop is governed by Rule 564 within CTC and Rule 509 within ABS.',
    ['ctc', 'signals'], ['op-564']),

  O('op-566', '566', 'CTC — Work Authority',
    'A train/transfer may be given work authority to move in either direction within specified limits. Before issuing it, the RTC must ensure no other trains/transfers are within or authorized to enter the limits and block at Stop all devices controlling signals into them, maintaining that blocking and not authorizing others to enter (except per 567.3) until the work authority is cancelled. If cancelled while the movement is inside, the crew informs the RTC of its intended direction and the RTC keeps opposing signals blocked until it clears the controlled block. Where the authority says "Call RTC ___," the crew communicates as instructed. The authority is in writing; the engineer must know the track limits before moving. Controlled signals within the limits (other than the entry/exit signals) showing STOP may be treated as "proceed at RESTRICTED speed".',
    ['ctc', 'authority', 'signals'], ['op-566-1', 'op-567', 'op-576']),

  O('op-566-1', '566.1', 'CTC — Signal Indication Suspended While Switching',
    'A crew may be authorized to manually operate specific dual-control switches at a controlled location (per Rule 104.2(d)); this must be included with Rule 566/567 work authority. Signal indications governing operation over such switches may be considered suspended while the switches are in the "hand" position, but only while switching at the designated controlled location; signal indication or Rule 564 must first authorize the movement into the controlled location. Verbal permission may be given to hand-operate specific dual-control switches within 566/567 limits that didn\'t include 566.1 for them. Over a spring switch within work-authority limits the governing signal may be considered suspended if the switch is properly lined; at a controlled location with only a hand-operated switch, the governing signal may be considered suspended only while switching through that switch.',
    ['ctc', 'switching', 'signals'], ['op-566', 'sw-104-2']),

  O('op-567', '567', 'CTC — Joint Work Authority',
    'More than one train/transfer may be given joint work authority to operate in either direction within specified limits, each instructed "Protecting against each other," with a thorough written understanding between all crews of each one\'s operation and the protection to be provided. Before issuing it, the RTC ensures no other movements are in the limits and blocks at Stop all signals governing entry, maintaining that blocking until cancelled; each must be clear before cancellation (exception: the last one may be cancelled while inside, informing the RTC of its direction, with opposing signals kept blocked until it clears). "Call RTC ___" is complied with as instructed; the authority is in writing and the engineer must know the limits before moving.',
    ['ctc', 'authority', 'protection'], ['op-566', 'op-567-1']),

  O('op-567-1', '567.1', 'CTC — Protect Against a Foreman',
    'A train/transfer may be authorized to enter or move within TOP limits when instructed to protect against the foreman — "Protect against foreman (name) between (location) and (location)." Both conductor and engineer must know the authority and have the foreman\'s instructions (repeated to and acknowledged by the foreman) before moving. The RTC must not authorize another movement or TOP within those protected limits until fulfilled or cancelled. In addition, the movement must also be authorized to enter the TOP limits under Rule 105(a)/564/568 (or to reverse within them under Rule 566).',
    ['ctc', 'protection', 'authority'], ['op-567', 'op-567-2', 'def-foreman']),

  O('op-567-2', '567.2', 'CTC — Entering Foreman\'s Limits (Optional)',
    'Optional alternative for entering a foreman\'s (TOP) limits: each time authorized, the movement is restricted "Protect against foreman (name) between (location) and (location)," provided when it is within two controlled blocks of the limits (or 25 miles where there is no controlled block prior), and the RTC ensures it is the only movement that will encounter the entry signal. No entry until both conductor and engineer know the authority/limits and have the foreman\'s instructions (repeated to and acknowledged by the foreman).',
    ['ctc', 'protection', 'authority'], ['op-567-1']),

  O('op-567-3', '567.3', 'CTC — Proceeding Through Work Limits',
    'A train/transfer may be authorized to enter or move within the work limits of others, restricted "Protect against work (number) between (location) and (location)." It must not enter until a written understanding of each one\'s intended operation is established with both crews, kept until the affected movement has left the limits. It must also be authorized to enter by signal indication or under Rule 564/568; where entry is by signal indication, the restriction may be issued only within two controlled blocks (or 25 miles where none precedes), and the RTC ensures it is the only movement that will encounter the entry signal.',
    ['ctc', 'protection', 'authority'], ['op-566', 'op-567']),

  O('op-568', '568', 'CTC — Signal or Permission to Enter Main Track',
    'A train/transfer must not foul, enter, or re-enter a main track except by signal indication or with RTC permission. Where entry is at a non-electrically-locked hand switch (or one with a broken seal on the electric switch lock), the RTC\'s permission must state the direction and route, be in writing, and the engineer must know the circumstances before moving; first the RTC ensures no conflicting movements are within or authorized into the controlled block and blocks at Stop all signals governing entry. The RTC maintains blocking and admits no opposing movement until the protected one clears; blocking against following movements isn\'t removed until the crew reports it has entered the main track and is moving in the authorized direction. Exception: permission isn\'t required to enter/re-enter at a hand switch within limits authorized by Rule 566/567/577.',
    ['ctc', 'authority', 'switching'], ['op-564', 'op-569', 'sw-104-2']),

  O('op-569', '569', 'CTC — Cancelling Authorities',
    'Authority/permission under Rules 564, 567.3 or 568 may be cancelled provided the movement hasn\'t entered the affected controlled block. When authority under 564/566/567/567.1/567.2/567.3/577, or the written permission under 568, is cancelled, the cancellation takes effect only after it is correctly repeated and acknowledged by the conductor and locomotive engineer (who repeat the authority number, "cancelled" and the RTC\'s initials to the RTC).',
    ['ctc', 'authority'], ['op-564', 'op-566', 'op-568']),

  O('op-570', '570', 'CTC — Entering Between Signals',
    'A train/transfer that has entered a block between signals at a hand switch with an electric switch lock must approach the next signal prepared to stop, unless/until the track is seen clear to that signal and it displays better than Stop or Stop-and-Proceed. Entry at a switch without an electric switch lock (or with a broken seal) → RESTRICTED speed to the next signal unless/until the track is seen clear and the signal permits otherwise. If the emergency release of an electric switch lock had to be used, move at RESTRICTED speed to the next signal.',
    ['ctc', 'signals', 'switching'], ['op-568', 'op-573']),

  O('op-571', '571', 'CTC — Restoring Signals to Stop',
    'Signals must not be restored to Stop when the train/transfer for which they were first cleared is less than three blocks from the first of those signals, unless the engineer has acknowledged being stopped or able to stop without passing the controlled signal to be restored. In an emergency a signal may be restored to Stop at any time.',
    ['ctc', 'signals'], ['op-560']),

  O('op-573', '573', 'CTC — Reversing Direction',
    'Having passed beyond a block\'s limits, a train/transfer must not back into that block until the RTC is informed and it is authorized by: a block-signal indication (other than a Restricting Signal with an "R" plate or a Stop-and-Proceed Signal); Rule 564/567.3; or Rule 566/567/577 (which doesn\'t dispense with Rule 564 at a Stop Signal except under 566(g)/577(f)). A movement that entered a controlled location on signal indication and stopped with its trailing end inside may move the opposite way within the controlled location only with RTC permission, complying with Rule 104.2(b) unless relieved (permission doesn\'t authorize occupancy outside the controlled location). Provided it won\'t re-enter a block it has cleared, a movement may reverse within a block without 566/567/577: ≤300 ft with a crew member positioned to see the section is and will remain clear; >300 ft with a flagman positioned beyond the farthest point, giving stop signals visible from at least 300 yards.',
    ['ctc', 'movement', 'signals'], ['op-564', 'op-570', 'sw-104-2']),

  O('op-576', '576', 'CTC — Switching at a Controlled Location',
    'Switching at a controlled location. (a) Preferred — by signal indication: the RTC signals the movement over the controlled location with directional signals; if it can\'t clear when done, the RTC authorizes departure by Rule 566/577 (if the first move in was under Rule 564, operate to the next signal at RESTRICTED speed; Rule 566/577 isn\'t needed where the RTC verbally authorizes pulling ahead to the next signal with no dual-control switches). (b) Switching signals — a crew member requests the switching signal for multiple moves on a route; when done, advise the RTC to cancel it (first confirm all crew are and will remain clear of its limits); if unable to clear, the RTC verbally authorizes departure then cancels the signal, and the movement proceeds to the next signal at RESTRICTED speed. (c) With 566.1/577.1 signals suspended, the movement must be authorized into the block before the authority is issued, and must advise the RTC before leaving if it can\'t clear. (d) Taking head-room — provided the trailing end stays within non-main-track territory, a movement may accept a signal to enter a controlled location for that purpose.',
    ['ctc', 'switching', 'signals'], ['op-566', 'op-566-1', 'sw-104-2']),
];
