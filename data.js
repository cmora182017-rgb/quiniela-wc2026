// ─── EQUIPOS Y BANDERAS ───────────────────────────────────────────────────────

export const FLAGS = {
  Qatar:"🇶🇦",Ecuador:"🇪🇨",Senegal:"🇸🇳","Países Bajos":"🇳🇱",
  Inglaterra:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",Irán:"🇮🇷",USA:"🇺🇸",Gales:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  Argentina:"🇦🇷","Arabia Saudita":"🇸🇦",México:"🇲🇽",Polonia:"🇵🇱",
  Francia:"🇫🇷",Australia:"🇦🇺",Dinamarca:"🇩🇰",Túnez:"🇹🇳",
  España:"🇪🇸","Costa Rica":"🇨🇷",Alemania:"🇩🇪",Japón:"🇯🇵",
  Bélgica:"🇧🇪",Canadá:"🇨🇦",Marruecos:"🇲🇦",Croacia:"🇭🇷",
  Brasil:"🇧🇷",Serbia:"🇷🇸",Suiza:"🇨🇭",Camerún:"🇨🇲",
  Portugal:"🇵🇹",Ghana:"🇬🇭",Uruguay:"🇺🇾","Corea del Sur":"🇰🇷",
}

export const ALL_TEAMS = Object.keys(FLAGS)

// ─── PUNTOS ───────────────────────────────────────────────────────────────────

export const POINT_RULES = {
  exact: 3,
  winner: 1,
  elimExact: 4,
  elimWinner: 2,
  campeon: 5,
  goleador: 4,
}

// ─── PARTIDOS DE GRUPOS ───────────────────────────────────────────────────────
// Fechas reales del Mundial 2026 (UTC-6, hora Costa Rica)
// formato: kickoff ISO string en UTC

export const GROUP_MATCHES = [
  // Jornada 1
  { id:"GM001", group:"A", home:"Qatar",         away:"Ecuador",        kickoff:"2026-06-11T21:00:00Z", round:"GR1" },
  { id:"GM002", group:"A", home:"Senegal",        away:"Países Bajos",  kickoff:"2026-06-12T18:00:00Z", round:"GR1" },
  { id:"GM003", group:"B", home:"Inglaterra",     away:"Irán",          kickoff:"2026-06-13T13:00:00Z", round:"GR1" },
  { id:"GM004", group:"B", home:"USA",            away:"Gales",         kickoff:"2026-06-13T22:00:00Z", round:"GR1" },
  { id:"GM005", group:"C", home:"Argentina",      away:"Arabia Saudita",kickoff:"2026-06-22T10:00:00Z", round:"GR1" },
  { id:"GM006", group:"C", home:"México",         away:"Polonia",       kickoff:"2026-06-22T16:00:00Z", round:"GR1" },
  { id:"GM007", group:"D", home:"Francia",        away:"Australia",     kickoff:"2026-06-23T16:00:00Z", round:"GR1" },
  { id:"GM008", group:"D", home:"Dinamarca",      away:"Túnez",         kickoff:"2026-06-22T13:00:00Z", round:"GR1" },
  { id:"GM009", group:"E", home:"España",         away:"Costa Rica",    kickoff:"2026-06-23T19:00:00Z", round:"GR1" },
  { id:"GM010", group:"E", home:"Alemania",       away:"Japón",         kickoff:"2026-06-23T13:00:00Z", round:"GR1" },
  { id:"GM011", group:"F", home:"Bélgica",        away:"Canadá",        kickoff:"2026-06-23T22:00:00Z", round:"GR1" },
  { id:"GM012", group:"F", home:"Marruecos",      away:"Croacia",       kickoff:"2026-06-24T13:00:00Z", round:"GR1" },
  { id:"GM013", group:"G", home:"Brasil",         away:"Serbia",        kickoff:"2026-06-24T19:00:00Z", round:"GR1" },
  { id:"GM014", group:"G", home:"Suiza",          away:"Camerún",       kickoff:"2026-06-24T16:00:00Z", round:"GR1" },
  { id:"GM015", group:"H", home:"Portugal",       away:"Ghana",         kickoff:"2026-06-24T22:00:00Z", round:"GR1" },
  { id:"GM016", group:"H", home:"Uruguay",        away:"Corea del Sur", kickoff:"2026-06-24T10:00:00Z", round:"GR1" },
  // Jornada 2
  { id:"GM017", group:"A", home:"Qatar",         away:"Senegal",       kickoff:"2026-06-15T16:00:00Z", round:"GR2" },
  { id:"GM018", group:"A", home:"Ecuador",       away:"Países Bajos",  kickoff:"2026-06-15T22:00:00Z", round:"GR2" },
  { id:"GM019", group:"B", home:"Gales",         away:"Irán",          kickoff:"2026-06-17T10:00:00Z", round:"GR2" },
  { id:"GM020", group:"B", home:"Inglaterra",    away:"USA",           kickoff:"2026-06-17T19:00:00Z", round:"GR2" },
  { id:"GM021", group:"C", home:"Polonia",       away:"Arabia Saudita",kickoff:"2026-06-26T16:00:00Z", round:"GR2" },
  { id:"GM022", group:"C", home:"Argentina",     away:"México",        kickoff:"2026-06-26T22:00:00Z", round:"GR2" },
  { id:"GM023", group:"D", home:"Túnez",         away:"Australia",     kickoff:"2026-06-26T10:00:00Z", round:"GR2" },
  { id:"GM024", group:"D", home:"Francia",       away:"Dinamarca",     kickoff:"2026-06-26T19:00:00Z", round:"GR2" },
  { id:"GM025", group:"E", home:"Japón",         away:"Costa Rica",    kickoff:"2026-06-27T10:00:00Z", round:"GR2" },
  { id:"GM026", group:"E", home:"España",        away:"Alemania",      kickoff:"2026-06-27T19:00:00Z", round:"GR2" },
  { id:"GM027", group:"F", home:"Croacia",       away:"Canadá",        kickoff:"2026-06-27T16:00:00Z", round:"GR2" },
  { id:"GM028", group:"F", home:"Bélgica",       away:"Marruecos",     kickoff:"2026-06-27T22:00:00Z", round:"GR2" },
  { id:"GM029", group:"G", home:"Camerún",       away:"Serbia",        kickoff:"2026-06-28T16:00:00Z", round:"GR2" },
  { id:"GM030", group:"G", home:"Brasil",        away:"Suiza",         kickoff:"2026-06-28T22:00:00Z", round:"GR2" },
  { id:"GM031", group:"H", home:"Corea del Sur", away:"Ghana",         kickoff:"2026-06-28T10:00:00Z", round:"GR2" },
  { id:"GM032", group:"H", home:"Portugal",      away:"Uruguay",       kickoff:"2026-06-28T19:00:00Z", round:"GR2" },
  // Jornada 3
  { id:"GM033", group:"A", home:"Ecuador",       away:"Senegal",       kickoff:"2026-06-29T18:00:00Z", round:"GR3" },
  { id:"GM034", group:"A", home:"Qatar",         away:"Países Bajos",  kickoff:"2026-06-29T18:00:00Z", round:"GR3" },
  { id:"GM035", group:"B", home:"Gales",         away:"Inglaterra",    kickoff:"2026-06-29T22:00:00Z", round:"GR3" },
  { id:"GM036", group:"B", home:"Irán",          away:"USA",           kickoff:"2026-06-29T22:00:00Z", round:"GR3" },
  { id:"GM037", group:"C", home:"Polonia",       away:"Argentina",     kickoff:"2026-07-01T22:00:00Z", round:"GR3" },
  { id:"GM038", group:"C", home:"Arabia Saudita",away:"México",        kickoff:"2026-07-01T22:00:00Z", round:"GR3" },
  { id:"GM039", group:"D", home:"Australia",     away:"Dinamarca",     kickoff:"2026-07-01T18:00:00Z", round:"GR3" },
  { id:"GM040", group:"D", home:"Túnez",         away:"Francia",       kickoff:"2026-07-01T18:00:00Z", round:"GR3" },
  { id:"GM041", group:"E", home:"Japón",         away:"España",        kickoff:"2026-07-02T22:00:00Z", round:"GR3" },
  { id:"GM042", group:"E", home:"Costa Rica",    away:"Alemania",      kickoff:"2026-07-02T22:00:00Z", round:"GR3" },
  { id:"GM043", group:"F", home:"Croacia",       away:"Bélgica",       kickoff:"2026-07-02T18:00:00Z", round:"GR3" },
  { id:"GM044", group:"F", home:"Canadá",        away:"Marruecos",     kickoff:"2026-07-02T18:00:00Z", round:"GR3" },
  { id:"GM045", group:"G", home:"Camerún",       away:"Brasil",        kickoff:"2026-07-03T18:00:00Z", round:"GR3" },
  { id:"GM046", group:"G", home:"Serbia",        away:"Suiza",         kickoff:"2026-07-03T18:00:00Z", round:"GR3" },
  { id:"GM047", group:"H", home:"Ghana",         away:"Uruguay",       kickoff:"2026-07-03T22:00:00Z", round:"GR3" },
  { id:"GM048", group:"H", home:"Corea del Sur", away:"Portugal",      kickoff:"2026-07-03T22:00:00Z", round:"GR3" },
]

// Rondas eliminatorias — los equipos se definen después
export const KNOCKOUT_STAGES = [
  { id:"R16_1", label:"Octavos 1",    round:"KO_R16", kickoff:"2026-07-05T18:00:00Z" },
  { id:"R16_2", label:"Octavos 2",    round:"KO_R16", kickoff:"2026-07-05T22:00:00Z" },
  { id:"R16_3", label:"Octavos 3",    round:"KO_R16", kickoff:"2026-07-06T18:00:00Z" },
  { id:"R16_4", label:"Octavos 4",    round:"KO_R16", kickoff:"2026-07-06T22:00:00Z" },
  { id:"R16_5", label:"Octavos 5",    round:"KO_R16", kickoff:"2026-07-07T18:00:00Z" },
  { id:"R16_6", label:"Octavos 6",    round:"KO_R16", kickoff:"2026-07-07T22:00:00Z" },
  { id:"R16_7", label:"Octavos 7",    round:"KO_R16", kickoff:"2026-07-08T18:00:00Z" },
  { id:"R16_8", label:"Octavos 8",    round:"KO_R16", kickoff:"2026-07-08T22:00:00Z" },
  { id:"QF_1",  label:"Cuartos 1",    round:"KO_QF",  kickoff:"2026-07-10T18:00:00Z" },
  { id:"QF_2",  label:"Cuartos 2",    round:"KO_QF",  kickoff:"2026-07-10T22:00:00Z" },
  { id:"QF_3",  label:"Cuartos 3",    round:"KO_QF",  kickoff:"2026-07-11T18:00:00Z" },
  { id:"QF_4",  label:"Cuartos 4",    round:"KO_QF",  kickoff:"2026-07-11T22:00:00Z" },
  { id:"SF_1",  label:"Semifinal 1",  round:"KO_SF",  kickoff:"2026-07-14T22:00:00Z" },
  { id:"SF_2",  label:"Semifinal 2",  round:"KO_SF",  kickoff:"2026-07-15T22:00:00Z" },
  { id:"3RD",   label:"Tercer Lugar", round:"KO_F",   kickoff:"2026-07-18T18:00:00Z" },
  { id:"FINAL", label:"⭐ Final",      round:"KO_F",   kickoff:"2026-07-19T18:00:00Z" },
]

export const KNOCKOUT_ROUNDS = [
  { id:"KO_R16", label:"Octavos de Final" },
  { id:"KO_QF",  label:"Cuartos de Final" },
  { id:"KO_SF",  label:"Semifinales" },
  { id:"KO_F",   label:"Final + 3er Lugar" },
]

// ─── HELPERS ──────────────────────────────────────────────────────────────────

// Primer partido del Mundial: 11 jun 2026 21:00 UTC (3pm Costa Rica)
export const SPECIALS_LOCK_DATE = "2026-06-11T21:00:00Z"

export function isSpecialsLocked() {
  return new Date() >= new Date(SPECIALS_LOCK_DATE)
}

export function isLocked(kickoffISO) {
  return new Date() >= new Date(kickoffISO)
}

export function calcPoints(pred, res, isKnockout = false) {
  if (!res || res.home_score == null || res.away_score == null) return 0
  const rH = parseInt(res.home_score), rA = parseInt(res.away_score)
  const pH = parseInt(pred?.home_score), pA = parseInt(pred?.away_score)
  if (isNaN(pH) || isNaN(pA)) return 0
  const exactPts = isKnockout ? POINT_RULES.elimExact : POINT_RULES.exact
  const winnerPts = isKnockout ? POINT_RULES.elimWinner : POINT_RULES.winner
  if (pH === rH && pA === rA) return exactPts
  const rWin = rH > rA ? "H" : rA > rH ? "A" : "D"
  const pWin = pH > pA ? "H" : pA > pH ? "A" : "D"
  if (rWin === pWin) return winnerPts
  return 0
}
