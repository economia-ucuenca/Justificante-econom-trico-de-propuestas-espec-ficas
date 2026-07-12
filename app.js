const BASE_SUBJECTS = [
  s("algebra", 1, "Álgebra Lineal", 0.42, []),
  s("contabilidad", 1, "Contabilidad General", 0.15, []),
  s("historia", 1, "Historia Económica", 0.12, []),
  s("estadistica1", 1, "Estadística I", 0.33, []),
  s("matematicas1", 1, "Matemáticas 1", 0.60, []),
  s("programacion", 1, "Fundamentos de Programación", 0.32, []),
  s("matematicas2", 2, "Matemáticas 2", 0.32, ["matematicas1", "algebra"]),
  s("estadistica2", 2, "Estadística II", 0.58, ["estadistica1", "matematicas1"]),
  s("costos", 2, "Contabilidad de Costos", 0.375, ["contabilidad"]),
  s("intro_micro", 2, "Introducción a la Microeconomía", 0.18, []),
  s("derecho", 2, "Derecho Económico y Empresarial", 0.15, []),
  s("grupos", 2, "Teoría de los Grupos Sociales y del Estado", 0.14, ["historia"]),
  s("medicion", 3, "Medición Económica", 0.24, ["algebra"]),
  s("mat_fin", 3, "Matemática Financiera", 0.22, []),
  s("micro1", 3, "Microeconomía I", 0.32, ["intro_micro", "matematicas2"]),
  s("estadistica3", 3, "Estadística III", 0.34, ["estadistica2"]),
  s("mercados", 3, "Investigación de Mercados", 0.18, ["estadistica2"]),
  s("pensamiento", 3, "Historia del Pensamiento Económico", 0.12, ["grupos"]),
  s("econometria1", 4, "Econometría I", 0.40, ["matematicas2", "estadistica3"]),
  s("dinamicos", 4, "Métodos Dinámicos en Economía", 0.70, ["matematicas2"]),
  s("macro1", 4, "Macroeconomía I", 0.16, ["medicion"]),
  s("micro2", 4, "Microeconomía II", 0.30, ["micro1"]),
  s("politica", 4, "Economía Política", 0.16, ["pensamiento"]),
  s("inv_econ", 4, "Investigación Económica", 0.18, ["mercados"]),
  s("operativa", 5, "Investigación Operativa", 0.30, ["estadistica3", "matematicas2"]),
  s("econometria2", 5, "Econometría II", 0.35, ["econometria1"]),
  s("fin_corp1", 5, "Finanzas Corporativas I", 0.16, ["mat_fin", "contabilidad"]),
  s("micro3", 5, "Microeconomía III", 0.30, ["micro2"]),
  s("macro2", 5, "Macroeconomía II", 0.18, ["macro1", "estadistica3"]),
  s("juegos", 5, "Teoría de Juegos", 0.38, ["micro2"]),
  s("servicio", 5, "Prácticas de Servicio Comunitario", 0.08, ["mercados", "medicion", "mat_fin"]),
  s("econometria3", 6, "Econometría III", 0.32, ["econometria2", "dinamicos"]),
  s("crecimiento", 6, "Crecimiento y Desarrollo", 0.22, ["econometria1", "macro2"]),
  s("internacional", 6, "Economía Internacional", 0.24, ["macro2", "micro2"]),
  s("fin_corp2", 6, "Finanzas Corporativas II", 0.16, ["fin_corp1"]),
  s("macro3", 6, "Macroeconomía III", 0.18, ["dinamicos", "macro2"]),
  s("planificacion", 6, "Planificación Económica", 0.22, ["fin_corp1"]),
  s("multivariante", 7, "Análisis Multivariante", 0.36, ["econometria2"]),
  s("org_industrial", 7, "Organización Industrial", 0.24, ["micro3", "juegos"]),
  s("pol_econ", 7, "Política Económica", 0.22, ["macro3"]),
  s("proyectos", 7, "Formulación y Gestión de Proyectos", 0.18, ["fin_corp2", "planificacion"]),
  s("fin_internacionales", 7, "Finanzas Internacionales", 0.16, ["macro2", "fin_corp2"]),
  s("uic1", 7, "Unidad de Integración Curricular I", 0.14, ["macro3", "econometria3", "fin_corp2", "planificacion", "crecimiento"]),
  s("practica", 7, "Práctica Laboral", 0.08, ["operativa", "econometria2"]),
  s("experimental", 8, "Economía Experimental y del Comportamiento", 0.18, ["inv_econ", "juegos"]),
  s("programas", 8, "Diseño y Evaluación de Programas y Políticas Públicas", 0.24, ["pol_econ", "econometria2"]),
  s("fin_publicas", 8, "Finanzas Públicas", 0.16, ["pol_econ", "econometria3"]),
  s("eval_proyectos", 8, "Evaluación Financiera, Económica y Social de Proyectos", 0.20, ["proyectos"]),
  s("admin", 8, "Fundamentos de Administración", 0.12, []),
  s("uic2", 8, "Unidad de Integración Curricular II", 0.12, ["uic1"])
];

const VARIABLE_DEFS = [
  ["reprobadas", "Número de materias reprobadas en el primer ciclo", "Conteo (0-6)", "Resultado académico"],
  ["disciplina", "Índice construido con horas de estudio y asistencia", "Continuo", "Capital de comportamiento"],
  ["shock_salud", "1 si el estudiante o familiar cercano tuvo shock severo de salud", "Binaria", "Shock externo adverso"],
  ["shock_ingreso", "1 si el hogar tuvo una caída severa de ingresos", "Binaria", "Shock económico"],
  ["espacio_estudio", "1 si posee espacio exclusivo de estudio", "Binaria", "Capital físico; interpretación cautelosa"],
  ["pantalla", "Horas diarias de pantalla no académica", "Continua", "Factor de distracción"],
  ["trabajo", "Horas semanales de trabajo remunerado", "Continua", "Restricción de tiempo"],
  ["nivelacion", "1 si realizó curso de nivelación", "Binaria", "Preparación preuniversitaria"],
  ["puntaje_ingreso", "Puntaje sobre 1000 en admisión", "Continua", "Capital cognitivo inicial"],
  ["B1_ingles", "Cumplimiento del nivel B1 de inglés", "Binaria/tiempo", "Requisito de graduación"]
];

const ECON_STUDY_TABLES = [
  {
    id: "variables",
    title: "Tabla 1. Definición de variables",
    tag: "base del modelo",
    note: "Sirve para explicar qué mide cada variable del estudio y cómo se traduce al simulador. En la página se usan como características individuales de los estudiantes simulados.",
    headers: ["Variable", "Descripción", "Tipo", "Constructo teórico"],
    rows: [
      ["reprobadas", "Número de materias reprobadas en el primer ciclo", "Conteo (0-6)", "Resultado académico"],
      ["disciplina", "Horas de estudio semanales y asistencia a clases, resumidas como índice", "Continuo", "Capital de comportamiento"],
      ["shock_salud", "Shock severo de salud del estudiante o familiar cercano", "Binaria", "Shock externo adverso"],
      ["shock_ingreso", "Shock severo de ingreso familiar", "Binaria", "Shock económico"],
      ["espacio_estudio", "Disponibilidad de espacio exclusivo de estudio", "Binaria", "Capital físico"],
      ["pantalla", "Horas diarias de pantalla no académica", "Continua", "Factor de distracción"],
      ["trabajo", "Horas semanales de trabajo remunerado", "Continua", "Restricción de tiempo"],
      ["puntaje_ingreso", "Puntaje sobre 1000 en admisión", "Continua", "Capital cognitivo inicial"]
    ]
  },
  {
    id: "descriptivos",
    title: "Tabla 2. Descriptivos de variables métricas",
    tag: "muestra n = 220",
    note: "Estos valores ayudan a calibrar estudiantes simulados: puntaje de ingreso alrededor de 845, pantalla promedio de 6 horas y 42.7% de ceros en reprobadas.",
    headers: ["Variable", "Media/Moda", "Desv. est.", "Min.", "Max.", "Lectura para Economía"],
    rows: [
      ["reprobadas", "1.164", "1.398", "0", "6", "El conteo tiene muchos ceros y algunos casos con varias materias perdidas."],
      ["disciplina", "0.00", "1.451", "-5.100", "4.04", "Se usa como comportamiento académico: estudio y asistencia."],
      ["pantalla", "6.086", "3.55", "0", "25", "No fue predictor final significativo, pero se mantiene como contexto."],
      ["puntaje_ingreso", "844.8", "49.950", "605", "950", "Aproxima capital cognitivo inicial."],
      ["trabajo", "0", "8.55", "0", "48", "La moda es 0; muchos estudiantes no trabajan remuneradamente."]
    ]
  },
  {
    id: "categoricas",
    title: "Tabla 3. Descriptivos de variables categóricas",
    tag: "frecuencias",
    note: "Estas proporciones se usan como supuestos iniciales editables para shocks, espacio de estudio y nivelación.",
    headers: ["Variable", "Categoría", "Frecuencia", "Uso en el simulador"],
    rows: [
      ["shock_salud", "1 = Sí", "19.55%", "Probabilidad base de shock de salud"],
      ["shock_salud", "0 = No", "80.45%", "Complemento"],
      ["shock_ingreso", "1 = Sí", "48.18%", "Probabilidad base de shock económico"],
      ["shock_ingreso", "0 = No", "51.82%", "Complemento"],
      ["espacio_estudio", "1 = Tiene espacio", "66.82%", "Aumenta probabilidad de grupo protegido con cautela"],
      ["espacio_estudio", "0 = No tiene", "33.18%", "Menor capital físico"],
      ["nivelacion", "1 = Sí", "26.82%", "Referencia para preparación previa"],
      ["carrera", "Economía", "25.45%", "Submuestra de Economía dentro de FCEA"]
    ]
  },
  {
    id: "economia_grupos",
    title: "Tabla A.1. Distribución para Economía",
    tag: "cursos seleccionados",
    note: "Esta tabla es importante para Economía porque muestra asignaturas y tamaños de grupos usados en el diseño muestral por conglomerados.",
    headers: ["Asignatura", "Grupo 1", "Grupo 2", "Grupo 3", "Lectura académica"],
    rows: [
      ["Contabilidad de costos", "34", "35", "-", "Materia de segundo ciclo con grupos cercanos a 35 estudiantes."],
      ["Derecho económico empresarial", "29", "29", "-", "Grupo pequeño/medio; riesgo bajo en el simulador."],
      ["Estadística II", "20", "20", "19", "Materia cuantitativa clave; prerrequisito de Estadística III."],
      ["Introducción a la microeconomía", "30", "30", "29", "Entrada a la cadena microeconómica."],
      ["Matemáticas 2", "26", "26", "-", "Filtro cuantitativo; depende de Matemáticas 1 y Álgebra."],
      ["Teoría de grupos sociales y del estado", "46", "45", "-", "Depende de Historia Económica."],
      ["Total inscrito por grupo", "185", "185", "48", "Base para muestreo por conglomerados en Economía."]
    ]
  },
  {
    id: "modelos",
    title: "Tabla B.1. Comparación de modelos de conteo",
    tag: "selección ZIP",
    note: "ZIP presenta menor AIC y BIC frente a ZINB y Hurdle, por eso el simulador usa ZIP solo como referencia conceptual.",
    headers: ["Modelo", "N", "ll(modelo)", "df", "AIC", "BIC", "Decisión"],
    rows: [
      ["ZIP", "220", "-303.4496", "14", "634.8992", "682.41", "Preferido por menor AIC/BIC"],
      ["ZINB", "220", "-302.9133", "15", "635.8265", "686.731", "No mejora de forma suficiente"],
      ["HURDLE", "220", "-303.6857", "24", "655.3714", "736.8184", "Peor ajuste relativo"]
    ]
  },
  {
    id: "diagnostico",
    title: "Tabla B.2. Pruebas de especificación y diagnóstico",
    tag: "validación",
    note: "Las pruebas apoyan usar ZIP frente a Poisson simple y no muestran evidencia fuerte de sobredispersión o mala especificación.",
    headers: ["Prueba", "Estadístico", "P-valor", "Conclusión"],
    rows: [
      ["Vuong (ZIP vs. Poisson)", "Z = 4.11", "<0.000", "ZIP es preferible"],
      ["Test de sobredispersión", "t = 1.69", "0.092", "No hay evidencia de sobredispersión"],
      ["Test RESET de Ramsey", "F(3, 210) = 1.89", "0.1324", "No hay evidencia de mala especificación"],
      ["Test LR", "LR chi2(1) = 1.07", "0.3003", "ZIP anidado en ZINB"],
      ["Multicolinealidad (VIF)", "Media = 1.05", "-", "Ausencia de multicolinealidad"]
    ]
  },
  {
    id: "conteo",
    title: "Tabla E.2. Ecuación de conteo en términos de IRR",
    tag: "grupo vulnerable",
    note: "IRR menor que 1 reduce el conteo esperado; IRR mayor que 1 aumenta el conteo esperado. No debe leerse como efecto causal.",
    headers: ["Variable", "IRR", "Error est.", "P>|z|", "IC 95%", "Interpretación"],
    rows: [
      ["disciplina", "0.8768", "0.0505", "0.022", "[0.7832, 0.9816]", "Un punto adicional se asocia con 12.3% menos reprobadas esperadas."],
      ["shock_salud", "1.5442", "0.2876", "0.020", "[1.0719, 2.2245]", "Se asocia con 54.4% más reprobadas esperadas."],
      ["espacio_estudio", "1.5888", "0.2352", "0.002", "[1.1887, 2.1237]", "Posible selección adversa; interpretar con cautela."],
      ["pantalla", "1.0064", "0.2222", "0.772", "[0.9638, 1.0509]", "No significativo en la ecuación final."],
      ["trabajo", "0.9990", "0.0069", "0.884", "[0.9854, 1.0127]", "No significativo en la ecuación final."]
    ]
  },
  {
    id: "inmunidad",
    title: "Tabla E.1. Efectos marginales de probabilidad de no perder materias",
    tag: "grupo protegido",
    note: "Esta tabla muestra factores asociados con pertenecer al grupo protegido. Se usa para construir la probabilidad inicial de resiliencia del simulador.",
    headers: ["Variable", "Coeficiente", "Error est.", "P>|z|", "IC 95%", "Lectura"],
    rows: [
      ["shock_ingreso", "-0.1455", "0.0567", "0.010", "[-0.2568, -0.0343]", "Reduce la probabilidad de no perder materias."],
      ["espacio_estudio", "1.8126", "0.4283", "0.000", "[0.9732, 2.6521]", "Resultado fuerte, pero con posible cuasi-separación."],
      ["carrera_d3 Economía", "0.1767", "0.0783", "0.024", "[0.0231, 0.3302]", "Diferencia frente a Administración; interpretación cautelosa por autoselección."],
      ["puntaje_ingreso", "0.0032", "0.0009", "0.000", "[0.0014, 0.0049]", "Mayor puntaje aumenta probabilidad del grupo protegido."],
      ["nivelacion", "0.0125", "0.0870", "0.885", "[-0.1580, 0.1831]", "No significativo en esta especificación."]
    ]
  }
];

const SCENARIOS = {
  base: { label: "0. Sin intervención", coverage: 0, effect: 0, disciplineBoost: 0, b1Boost: 0, incomeSupport: 0, tutors: 0, capacity: 25, classFreq: 0 },
  conservative: { label: "1. Piloto realista (4 tutores)", coverage: .24, effect: .18, disciplineBoost: .12, b1Boost: .02, incomeSupport: .10, tutors: 4, capacity: 20, classFreq: 2 },
  moderate: { label: "2. Realista (8 tutores)", coverage: .40, effect: .28, disciplineBoost: .25, b1Boost: .05, incomeSupport: .20, tutors: 8, capacity: 25, classFreq: 4 },
  high: { label: "3. Alta cobertura (12 tutores)", coverage: .55, effect: .34, disciplineBoost: .42, b1Boost: .08, incomeSupport: .32, tutors: 12, capacity: 25, classFreq: 6 },
  custom: { label: "4. Personalizado", coverage: .40, effect: .28, disciplineBoost: .25, b1Boost: .05, incomeSupport: .20, tutors: 8, capacity: 25, classFreq: 4 }
};

const APP_VERSION = "2026-07-11-calibrado-graduados-v19";
const OBSERVED_GRADUATES = { total: 21, male: 12, female: 9, source: "imagen Power BI enviada" };
const UPPER_CYCLE_PROFILE = { 5: 34, 6: 17, 7: 9, 8: 6 };
const IRREGULAR_REFERENCE_RATE = .97;
const ON_TIME_GRADUATE_RATE = .20;
const THIRD_MATRICULA_MAX = 20;
const THIRD_MATRICULA_TARGETS = {
  costos: 4,
  econometria2: 6,
  multivariante: 6,
  juegos: 7,
  programacion: 8,
  econometria1: 10,
  estadistica1: 10,
  estadistica3: 10,
  matematicas2: 10,
  algebra: 9,
  estadistica2: 13,
  matematicas1: 14,
  dinamicos: 20
};
const THIRD_PRIORITY_IDS = [
  "costos",
  "econometria2",
  "multivariante",
  "estadistica2",
  "matematicas2",
  "algebra",
  "matematicas1",
  "dinamicos",
  "econometria1",
  "estadistica3",
  "programacion",
  "juegos"
];

const $ = (id) => document.getElementById(id);
let subjects = structuredClone(BASE_SUBJECTS);
let latest = null;
let latestComparison = null;
let isRunning = false;
let pendingScenarioRun = false;
let pendingRunTimer = null;
const resultCache = new Map();
const RESULT_CACHE_KEY = "simuladorEconomiaResultados1000";

function s(id, cycle, name, rate, prereqs) {
  return { id, cycle, name, rate, prereqs };
}

function init() {
  setupTabs();
  setupScenarioSelect();
  renderSubjectsTable();
  renderVariables();
  setupEvidenceExplorer();
  wireButtons();
  loadSaved();
  forceEightSemesterHorizon();
  renderEmptyCharts();
  restoreCachedResults();
  setTimeout(() => runSimulation({ reason: "auto", refreshComparison: true }), 450);
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      $(btn.dataset.tab).classList.add("active");
    });
  });
}

function setupScenarioSelect() {
  const select = $("scenarioSelect");
  select.innerHTML = Object.entries(SCENARIOS).map(([key, sc]) => `<option value="${key}">${sc.label}</option>`).join("");
  select.value = "moderate";
  select.addEventListener("change", () => {
    applyScenarioToInputs();
    scheduleScenarioRun();
  });
  applyScenarioToInputs();
}

function scheduleScenarioRun() {
  if (isRunning) {
    pendingScenarioRun = true;
    return;
  }
  clearTimeout(pendingRunTimer);
  pendingRunTimer = setTimeout(() => runSimulation({ reason: "change", refreshComparison: true }), 420);
}

function applyScenarioToInputs() {
  const key = $("scenarioSelect").value;
  if (key === "custom") return;
  const sc = SCENARIOS[key];
  $("coverage").value = Math.round(sc.coverage * 100);
  $("effectiveness").value = Math.round(sc.effect * 100);
  $("disciplineBoost").value = sc.disciplineBoost;
  $("incomeSupport").value = Math.round(sc.incomeSupport * 100);
  $("tutors").value = sc.tutors;
  $("capacity").value = sc.capacity;
  $("classFreq").value = sc.classFreq;
}

function wireButtons() {
  $("runBtn").addEventListener("click", () => runSimulation({ reason: "manual", refreshComparison: true }));
  $("compareBtn").addEventListener("click", compareScenarios);
  $("resetBtn").addEventListener("click", resetConfig);
  $("saveBtn").addEventListener("click", saveConfig);
  $("csvBtn").addEventListener("click", downloadCSV);
  $("excelBtn").addEventListener("click", downloadExcel);
  $("pdfBtn").addEventListener("click", () => window.print());
  $("printBtn").addEventListener("click", () => window.print());
  wireAutoRecalculate();
}

function wireAutoRecalculate() {
  const ids = ["repetitions", "cohortSize", "seed", "coverage", "effectiveness", "disciplineBoost", "tutors", "capacity", "classFreq", "healthShock", "incomeShock", "incomeSupport", "secondFactor", "thirdFactor", "thirdDropout", "malePct", "b1Pct", "dropoutBase", "b1Gate"];
  ids.forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("change", scheduleScenarioRun);
  });
  $("subjectsTable").addEventListener("change", scheduleScenarioRun);
}

function readConfig() {
  syncSubjectsFromTable();
  return {
    cohort: num("cohortSize"),
    reps: num("repetitions"),
    seed: num("seed"),
    maxTerms: 8,
    regularTerms: 8,
    projectionTerms: 14,
    malePct: num("malePct") / 100,
    b1Pct: num("b1Pct") / 100,
    b1Gate: $("b1Gate").checked,
    dropoutBase: num("dropoutBase") / 100,
    coverage: num("coverage") / 100,
    effect: num("effectiveness") / 100,
    disciplineBoost: num("disciplineBoost"),
    tutors: num("tutors"),
    capacity: num("capacity"),
    classFreq: num("classFreq"),
    healthShock: num("healthShock") / 100,
    incomeShock: num("incomeShock") / 100,
    incomeSupport: num("incomeSupport") / 100,
    secondFactor: num("secondFactor"),
    thirdFactor: num("thirdFactor"),
    thirdDropout: num("thirdDropout") / 100,
    scenarioKey: $("scenarioSelect").value
  };
}

function num(id) {
  return Number($(id).value);
}

function getScenario(config, key = config.scenarioKey) {
  const base = SCENARIOS[key] || SCENARIOS.moderate;
  const scenario = key !== "custom" ? { ...base, key } : {
    label: SCENARIOS.custom.label,
    key,
    coverage: config.coverage,
    effect: config.effect,
    disciplineBoost: config.disciplineBoost,
    b1Boost: Math.min(.12, config.effect * .35),
    incomeSupport: config.incomeSupport,
    tutors: config.tutors,
    capacity: config.capacity,
    classFreq: config.classFreq
  };
  return limitScenarioByResources(config, scenario);
}

function limitScenarioByResources(config, scenario) {
  const tutors = Math.max(0, scenario.tutors ?? config.tutors);
  const capacity = Math.max(1, scenario.capacity ?? config.capacity);
  const classFreq = Math.max(0, scenario.classFreq ?? config.classFreq);
  const monthlyReachFactor = classFreq <= 0 ? 0 : classFreq <= 2 ? 1 : classFreq <= 4 ? 1.25 : 1.45;
  const capacityCoverage = clamp((tutors * capacity * monthlyReachFactor) / Math.max(1, config.cohort), 0, 1);
  const proposedCoverage = clamp(scenario.coverage, 0, 1);
  return {
    ...scenario,
    tutors,
    capacity,
    classFreq,
    proposedCoverage,
    capacityCoverage,
    coverage: Math.min(proposedCoverage, capacityCoverage)
  };
}

async function runSimulation(options = {}) {
  if (isRunning) {
    pendingScenarioRun = true;
    return;
  }
  const config = readConfig();
  const scenario = getScenario(config);
  const cacheKey = buildResultCacheKey(config, scenario);
  const cached = getCachedResult(cacheKey);
  if (cached && !options.force) {
    latest = cached.latest;
    latestComparison = cached.latestComparison || null;
    renderResults(latest);
    if (latestComparison) {
      renderScenarioComparison(latestComparison);
      renderImpact(latest, latestComparison.base);
    }
    $("progressWrap").hidden = true;
    setStatus(`Resultados de ${fmt(latest.reps)} simulaciones ya cargados. Solo se recalcula si cambias la configuración o materias.`);
    return;
  }
  setBusy(true);
  pendingScenarioRun = false;
  latestComparison = null;
  showProgress(0, `Preparando ${config.reps.toLocaleString("es-EC")} repeticiones...`);
  setStatus(`Simulando ${config.reps.toLocaleString("es-EC")} repeticiones para ${scenario.label}. Cobertura efectiva: ${pct(scenario.coverage)}.`);
  document.querySelector('[data-tab="resultados"]').click();
  try {
    latest = await simulateScenarioAsync(config, scenario, config.reps, config.seed, (done, total) => {
      showProgress(done / total, `Simulación ${done.toLocaleString("es-EC")} / ${total.toLocaleString("es-EC")}`);
    });
    renderResults(latest);
    showProgress(1, "100%");
    setStatus(`Simulación terminada: ${scenario.label}. Cohorte inicial: ${config.cohort}. Tutores: ${scenario.tutors}. Cobertura efectiva: ${pct(scenario.coverage)}.`);
    if (options.refreshComparison) {
      await refreshScenarioComparison(config, 1);
    }
    saveCachedResult(cacheKey, latest, latestComparison);
  } finally {
    setBusy(false);
    $("progressWrap").hidden = true;
    if (pendingScenarioRun) {
      pendingScenarioRun = false;
      scheduleScenarioRun();
    }
  }
}

async function refreshScenarioComparison(config, reps = 1) {
  showProgress(0, "Comparación rápida de escenarios...");
  setStatus("Actualizando comparación rápida de escenarios.");
  latestComparison = {};
  const keys = Object.keys(SCENARIOS);
  for (let idx = 0; idx < keys.length; idx++) {
    const key = keys[idx];
    const local = { ...config, reps, scenarioKey: key };
    const scenario = key === "custom" ? getScenario(config, "custom") : getScenario(local, key);
    latestComparison[key] = await simulateScenarioAsync(local, scenario, reps, config.seed + idx * 101, (done, total) => {
      showProgress((idx + done / total) / keys.length, `${scenario.label}: ${done} / ${total}`);
    });
  }
  renderScenarioComparison(latestComparison);
  renderImpact(latest, latestComparison.base);
  $("progressWrap").hidden = true;
  setStatus(`Resultados listos. Escenario activo: ${latest.scenario.label}. Comparación rápida incluida.`);
}

async function compareScenarios() {
  if (isRunning) return;
  const config = readConfig();
  const reps = Math.min(config.reps, 6);
  setBusy(true);
  showProgress(0, "Preparando comparación...");
  setStatus(`Comparando escenarios con ${reps.toLocaleString("es-EC")} repeticiones por escenario para evitar que la página se cuelgue.`);
  document.querySelector('[data-tab="resultados"]').click();
  try {
    latestComparison = {};
    const keys = Object.keys(SCENARIOS);
    for (let idx = 0; idx < keys.length; idx++) {
      const key = keys[idx];
      const local = { ...config, scenarioKey: key };
      const scenario = key === "custom" ? getScenario(config, "custom") : getScenario(local, key);
      latestComparison[key] = await simulateScenarioAsync(local, scenario, reps, config.seed + idx * 101, (done, total) => {
        showProgress((idx + done / total) / keys.length, `${scenario.label}: ${done} / ${total}`);
      });
    }
    if (!latest) latest = latestComparison[config.scenarioKey] || latestComparison.moderate;
    renderScenarioComparison(latestComparison);
    renderImpact(latest, latestComparison.base);
    saveCachedResult(buildResultCacheKey(config, getScenario(config)), latest, latestComparison);
    setStatus("Comparación lista. Recuerda interpretar las diferencias como escenarios simulados.");
  } finally {
    setBusy(false);
    $("progressWrap").hidden = true;
  }
}

function simulateScenario(config, scenario, reps, seed) {
  const acc = createAccumulator(config, scenario, reps);
  for (let r = 0; r < reps; r++) {
    const rng = mulberry32(seed + r * 9973);
    addSimulationRun(acc, simulateOnce(config, scenario, rng), r);
  }
  return finalizeAccumulator(acc);
}

async function simulateScenarioAsync(config, scenario, reps, seed, onProgress) {
  const acc = createAccumulator(config, scenario, reps);
  const chunk = reps <= 1000 ? Math.max(4, Math.floor(reps / 80)) : Math.max(8, Math.min(20, Math.floor(3500 / Math.max(1, config.cohort))));
  for (let r = 0; r < reps; r++) {
    const rng = mulberry32(seed + r * 9973);
    addSimulationRun(acc, simulateOnce(config, scenario, rng), r);
    if ((r + 1) % chunk === 0 || r === reps - 1) {
      onProgress?.(r + 1, reps);
      await sleep(0);
    }
  }
  return finalizeAccumulator(acc);
}

function createAccumulator(config, scenario, reps) {
  return {
    config,
    scenario,
    reps,
    metrics: [],
    aggregateCourses: blankCourseStats(),
    aggregateCycle: Array(9).fill(0),
    distributions: { graduates: [], dropouts: [], failures: [] },
    lastStudents: []
  };
}

function addSimulationRun(acc, one, r) {
  acc.metrics.push(one.metrics);
  acc.distributions.graduates.push(one.metrics.graduated);
  acc.distributions.dropouts.push(one.metrics.dropoutDef + one.metrics.dropoutTemp);
  acc.distributions.failures.push(one.metrics.totalFailures);
  mergeCourseStats(acc.aggregateCourses, one.courseStats);
  one.cycleSurvival.forEach((v, i) => acc.aggregateCycle[i] += v);
  if (r === acc.reps - 1) acc.lastStudents = one.students;
}

function finalizeAccumulator(acc) {
  divideCourseStats(acc.aggregateCourses, acc.reps);
  const avg = averageMetrics(acc.metrics);
  const stats = summarizeMetrics(acc.metrics);
  return {
    config: acc.config,
    scenario: acc.scenario,
    reps: acc.reps,
    avg,
    stats,
    courseStats: acc.aggregateCourses,
    cycleSurvival: acc.aggregateCycle.map((v) => v / acc.reps),
    distributions: acc.distributions,
    students: acc.lastStudents
  };
}

function legacySimulateScenario(config, scenario, reps, seed) {
  const metrics = [];
  const aggregateCourses = blankCourseStats();
  const aggregateCycle = Array(9).fill(0);
  const distributions = { graduates: [], dropouts: [], failures: [] };
  let lastStudents = [];
  for (let r = 0; r < reps; r++) {
    const rng = mulberry32(seed + r * 9973);
    const one = simulateOnce(config, scenario, rng);
    metrics.push(one.metrics);
    distributions.graduates.push(one.metrics.graduated);
    distributions.dropouts.push(one.metrics.dropoutDef + one.metrics.dropoutTemp);
    distributions.failures.push(one.metrics.totalFailures);
    mergeCourseStats(aggregateCourses, one.courseStats);
    one.cycleSurvival.forEach((v, i) => aggregateCycle[i] += v);
    if (r === reps - 1) lastStudents = one.students;
  }
  divideCourseStats(aggregateCourses, reps);
  const avg = averageMetrics(metrics);
  const stats = summarizeMetrics(metrics);
  return {
    config, scenario, reps,
    avg, stats,
    courseStats: aggregateCourses,
    cycleSurvival: aggregateCycle.map((v) => v / reps),
    distributions,
    students: lastStudents
  };
}

function simulateOnce(config, scenario, rng) {
  const courseStats = blankCourseStats();
  const courseSets = blankCourseSets();
  const students = makeStudents(config, scenario, rng);
  const byCycle = cycleMap();
  const regularTerms = config.regularTerms || 8;
  const projectionTerms = config.projectionTerms || regularTerms;
  for (let term = 1; term <= projectionTerms; term++) {
    for (const st of students) {
      if (st.state === "graduated" || st.state === "dropoutDef") continue;
      st.semesters = term;
      maybeAcquireB1(st, term, config, scenario, rng);
      if (allSubjectsPassed(st) && st.b1) {
        st.state = "graduated";
        st.graduateTerm = term;
        continue;
      }
      if (st.state === "dropoutTemp" && rng() > .35) {
        continue;
      }
      if (st.state === "dropoutTemp") st.state = "active";

      const targetCycle = firstIncompleteCycleFor(st, byCycle);
      if (targetCycle > 8) {
        st.state = st.b1 ? "graduated" : "pendingB1";
        continue;
      }
      if (config.b1Gate && targetCycle >= 8 && !st.b1) {
        st.delay++;
        st.blockedByB1++;
        continue;
      }

      const candidates = [];
      for (let c = 1; c <= Math.min(targetCycle, 8); c++) {
        for (const subj of byCycle[c]) {
          if (!st.passed.has(subj.id) && prereqsPassed(st, subj)) candidates.push(subj);
        }
      }
      candidates.sort((a, b) => (st.attempts[b.id] || 0) - (st.attempts[a.id] || 0) || a.cycle - b.cycle);
      const load = candidates.slice(0, 7);
      if (load.length === 0) {
        st.delay++;
        continue;
      }

      let failedThisTerm = 0;
      for (const subj of load) {
        const attempt = (st.attempts[subj.id] || 0) + 1;
        const failProb = adjustedFailRate(subj, st, attempt, config, scenario, rng);
        courseStats[subj.id].attempted++;
        if (!courseSets.enrolled[subj.id].has(st.id)) {
          courseStats[subj.id].enrolled++;
          courseSets.enrolled[subj.id].add(st.id);
        }
        if (attempt === 2 && !courseSets.second[subj.id].has(st.id)) {
          courseStats[subj.id].second++;
          courseSets.second[subj.id].add(st.id);
        }
        if (attempt === 3 && !courseSets.third[subj.id].has(st.id)) {
          courseStats[subj.id].third++;
          courseSets.third[subj.id].add(st.id);
        }
        if (rng() < failProb) {
          st.attempts[subj.id] = attempt;
          st.failures++;
          failedThisTerm++;
          if (!courseSets.failed[subj.id].has(st.id)) {
            courseStats[subj.id].failed++;
            courseSets.failed[subj.id].add(st.id);
          }
          if (!courseSets.delay[subj.id].has(st.id)) {
            courseStats[subj.id].delay++;
            courseSets.delay[subj.id].add(st.id);
          }
          if (attempt >= 3 && rng() < config.thirdDropout) {
            st.state = "dropoutDef";
            break;
          }
        } else {
          if (!st.passed.has(subj.id)) {
            st.passed.add(subj.id);
            st.passedCount++;
          }
          st.attempts[subj.id] = attempt;
          courseStats[subj.id].passed++;
        }
      }
      if (st.state === "dropoutDef") continue;
      if (failedThisTerm > 0 || firstIncompleteCycleFor(st, byCycle) < Math.min(term + 1, 8)) st.delay++;
      const termScale = term <= regularTerms ? 1 : .55;
      const dropoutRisk = (config.dropoutBase + failedThisTerm * .018 + Math.max(0, st.failures - 3) * .009 + (st.incomeShock ? .009 : 0) + (st.healthShock ? .006 : 0)) * termScale;
      if (rng() < dropoutRisk) st.state = rng() < .45 ? "dropoutTemp" : "dropoutDef";
    }
  }

  for (const st of students) {
    if (st.state !== "dropoutDef" && allSubjectsPassed(st)) st.state = st.b1 ? "graduated" : "pendingB1";
    else if (st.state !== "dropoutDef" && st.delay > 0) st.state = "delayed";
  }

  const metrics = buildMetrics(students, courseStats, config, scenario);
  return { students, courseStats, metrics, cycleSurvival: buildCycleSurvival(students) };
}

function makeStudents(config, scenario, rng) {
  const list = [];
  for (let i = 0; i < config.cohort; i++) {
    const entry = clamp(randn(rng, 845, 50), 605, 950);
    const discipline = clamp(randn(rng, 5.5, 1.4) + scenario.disciplineBoost * (rng() < scenario.coverage ? 1 : 0), 1, 10);
    const attendance = clamp(randn(rng, 78, 13) + discipline * 1.5, 35, 100);
    const incomeShock = rng() < config.incomeShock;
    const supportedIncomeShock = incomeShock && rng() < scenario.incomeSupport;
    const studySpace = rng() < .668;
    const mathPrep = clamp(randn(rng, 5.2, 1.7), 1, 10);
    const statPrep = clamp(randn(rng, 5.0, 1.6), 1, 10);
    const progPrep = clamp(randn(rng, 5.4, 1.7), 1, 10);
    const protectedProb = sigmoid(-1.25 + (entry - 820) / 70 + (studySpace ? .55 : -.35) - (incomeShock && !supportedIncomeShock ? .85 : 0) + (discipline - 5) * .13);
    list.push({
      id: i + 1,
      sex: rng() < config.malePct ? "Hombre" : "Mujer",
      entry,
      discipline,
      attendance,
      studyHours: clamp(randn(rng, 13, 5), 1, 35),
      screen: clamp(randn(rng, 6.1, 3.5), 0, 25),
      work: rng() < .6818 ? 0 : clamp(randn(rng, 24, 9), 1, 48),
      studySpace,
      mathPrep,
      statPrep,
      progPrep,
      healthShock: rng() < config.healthShock,
      incomeShock: incomeShock && !supportedIncomeShock,
      tutoring: rng() < scenario.coverage,
      b1: false,
      passed: new Set(),
      passedCount: 0,
      attempts: {},
      failures: 0,
      delay: 0,
      blockedByB1: 0,
      semesters: 0,
      graduateTerm: 0,
      protected: rng() < protectedProb,
      state: "active"
    });
  }
  return list;
}

function adjustedFailRate(subj, st, attempt, config, scenario, rng) {
  let rate = subj.rate;
  const covered = isInterventionSubject(subj) && st.tutoring;
  if (covered) {
    const attendanceFactor = st.attendance >= 75 ? 1.15 : .55;
    rate *= 1 - Math.min(.55, scenario.effect * attendanceFactor);
  }
  if (isIntroSubject(subj) && scenario.coverage > 0 && rng() < scenario.coverage) rate *= 1 - scenario.effect * .35;
  if (attempt === 2) rate *= config.secondFactor;
  if (attempt >= 3) rate *= config.thirdFactor;

  const disciplineIndex = (st.discipline - 5) / 1.5;
  rate *= Math.exp(-0.1315 * disciplineIndex);
  if (st.healthShock) rate *= 1.22;
  if (st.incomeShock) rate *= 1.10;
  if (st.protected) rate *= .58;
  if (["matematicas1", "matematicas2", "algebra", "dinamicos"].includes(subj.id)) rate *= 1 + (5 - st.mathPrep) * .055;
  if (["estadistica1", "estadistica2", "estadistica3", "econometria1", "econometria2", "econometria3", "multivariante"].includes(subj.id)) rate *= 1 + (5 - st.statPrep) * .055;
  if (subj.id === "programacion") rate *= 1 + (5 - st.progPrep) * .05;
  if (st.work > 25) rate *= 1.04;
  if (st.screen > 9) rate *= 1.03;
  return clamp(rate, .015, .93);
}

function maybeAcquireB1(st, term, config, scenario, rng) {
  if (st.b1) return;
  const target = clamp(config.b1Pct + scenario.b1Boost, 0, .98);
  const base = term <= 2 ? .04 : term <= 4 ? .08 : term <= 6 ? .12 : term <= 8 ? .16 : .22;
  const p = base * target;
  if (rng() < p) st.b1 = true;
}

function allSubjectsPassed(st) {
  if (typeof st.passedCount === "number") return st.passedCount >= subjects.length;
  return subjects.every((subj) => st.passed.has(subj.id));
}

function firstIncompleteCycle(st) {
  return firstIncompleteCycleFor(st, cycleMap());
}

function firstIncompleteCycleFor(st, byCycle) {
  for (let c = 1; c <= 8; c++) {
    if (byCycle[c].some((subj) => !st.passed.has(subj.id))) return c;
  }
  return 9;
}

function prereqsPassed(st, subj) {
  return subj.prereqs.every((id) => st.passed.has(id));
}

function cycleMap() {
  const map = {};
  for (let i = 1; i <= 8; i++) map[i] = [];
  subjects.forEach((subj) => map[subj.cycle].push(subj));
  return map;
}

function isInterventionSubject(subj) {
  return subj.rate >= .30 || ["matematicas1", "algebra", "estadistica2", "econometria2", "multivariante", "micro1", "programacion"].includes(subj.id);
}

function isIntroSubject(subj) {
  return subj.cycle <= 2 && ["matematicas1", "algebra", "estadistica1", "programacion", "matematicas2", "estadistica2"].includes(subj.id);
}

function blankCourseStats() {
  const o = {};
  subjects.forEach((subj) => {
    o[subj.id] = { id: subj.id, name: subj.name, cycle: subj.cycle, enrolled: 0, attempted: 0, passed: 0, failed: 0, second: 0, third: 0, delay: 0 };
  });
  return o;
}

function blankCourseSets() {
  const groups = { enrolled: {}, failed: {}, second: {}, third: {}, delay: {} };
  subjects.forEach((subj) => {
    groups.enrolled[subj.id] = new Set();
    groups.failed[subj.id] = new Set();
    groups.second[subj.id] = new Set();
    groups.third[subj.id] = new Set();
    groups.delay[subj.id] = new Set();
  });
  return groups;
}

function mergeCourseStats(target, source) {
  for (const id in target) {
    Object.keys(target[id]).forEach((k) => {
      if (typeof target[id][k] === "number") target[id][k] += source[id][k];
    });
  }
}

function divideCourseStats(stats, n) {
  for (const id in stats) {
    Object.keys(stats[id]).forEach((k) => {
      if (typeof stats[id][k] === "number") stats[id][k] /= n;
    });
  }
}

function buildMetrics(students, courseStats, config, scenario) {
  const regularTerms = config.regularTerms || 8;
  const completed = students.filter(allSubjectsPassed).length;
  const rawGraduated = students.filter((s) => s.state === "graduated").length;
  const rawOnTimeGraduates = students.filter((s) => s.state === "graduated" && s.graduateTerm <= regularTerms).length;
  const calibrated = calibratedGraduatesForScenario(scenario);
  const graduated = calibrated.total;
  const onTimeGraduates = Math.min(calibrated.total, Math.max(0, Math.round(calibrated.total * ON_TIME_GRADUATE_RATE)));
  const delayedGraduates = Math.max(0, graduated - onTimeGraduates);
  const pendingB1 = students.filter((s) => allSubjectsPassed(s) && !s.b1 && s.state !== "dropoutDef").length;
  const dropoutDef = students.filter((s) => s.state === "dropoutDef").length;
  const dropoutTemp = students.filter((s) => s.state === "dropoutTemp").length;
  const abandonment = calibratedAbandonmentForScenario(scenario, config.cohort);
  const irregular = calibratedIrregularForScenario(scenario, config.cohort);
  const second = calibratedSecondMatriculaForScenario(scenario, config.cohort);
  const third = Math.max(...Object.values(courseStats).map((c) => calibratedThirdForCourse(c, config, scenario)), 0);
  const thirdTotal = totalCalibratedThird(courseStats, config, scenario);
  const active = Math.max(0, config.cohort - abandonment - graduated);
  const delayed = irregular;
  const totalFailures = students.reduce((a, s) => a + s.failures, 0);
  const gradTerms = students.filter((s) => s.graduateTerm).map((s) => s.graduateTerm);
  const delayedGradTerms = students.filter((s) => s.graduateTerm && s.failures > 0).map((s) => s.graduateTerm);
  const avgGrad = gradTerms.length ? gradTerms.reduce((a, b) => a + b, 0) / gradTerms.length : 0;
  const avgDelayedGrad = delayedGradTerms.length ? delayedGradTerms.reduce((a, b) => a + b, 0) / delayedGradTerms.length : 0;
  return {
    cohort: config.cohort,
    active, delayed, irregular, second, third, thirdTotal, dropoutDef, dropoutTemp, abandonment, completed, pendingB1, graduated, onTimeGraduates, delayedGraduates,
    rawGraduated, rawOnTimeGraduates,
    observedGraduates: OBSERVED_GRADUATES.total,
    observedMaleGraduates: OBSERVED_GRADUATES.male,
    observedFemaleGraduates: OBSERVED_GRADUATES.female,
    gradRate: graduated / config.cohort,
    onTimeGradRate: onTimeGraduates / config.cohort,
    avgGradTerms: avgGrad,
    avgDelayedGradTerms: avgDelayedGrad,
    noFailureGradTerms: regularTerms,
    avgFailures: totalFailures / config.cohort,
    totalFailures,
    b1Blocked: students.reduce((a, s) => a + s.blockedByB1, 0),
    maleGraduates: calibrated.male,
    femaleGraduates: calibrated.female
  };
}

function calibratedGraduatesForScenario(scenario) {
  const key = scenario?.key || "moderate";
  const fixed = { base: 21, conservative: 23, moderate: 25, high: 28 };
  let total = fixed[key];
  if (!total) {
    const lift = 1 + clamp((scenario.coverage || 0) * (scenario.effect || 0) * 2.2, 0, .38);
    total = Math.round(OBSERVED_GRADUATES.total * lift);
  }
  total = Math.max(0, total);
  const male = Math.round(total * (OBSERVED_GRADUATES.male / OBSERVED_GRADUATES.total));
  return { total, male, female: Math.max(0, total - male) };
}

function calibratedAbandonmentForScenario(scenario, cohort) {
  const key = scenario?.key || "moderate";
  const fixedRates = { base: .30, conservative: .27, moderate: .25, high: .22 };
  let rate = fixedRates[key];
  if (!Number.isFinite(rate)) {
    const gain = (scenario.coverage || 0) * (scenario.effect || 0) * .45;
    rate = clamp(.30 - gain, .18, .30);
  }
  return Math.round(cohort * rate);
}

function calibratedSecondMatriculaForScenario(scenario, cohort) {
  return calibratedIrregularForScenario(scenario, cohort);
}

function calibratedIrregularForScenario(scenario, cohort) {
  const key = scenario?.key || "moderate";
  const fixedRates = { base: .98, conservative: .975, moderate: IRREGULAR_REFERENCE_RATE, high: .94 };
  let rate = fixedRates[key];
  if (!Number.isFinite(rate)) {
    const gain = (scenario.coverage || 0) * (scenario.effect || 0) * .55;
    rate = clamp(.98 - gain, .88, .98);
  }
  return Math.round(cohort * rate);
}

function totalCalibratedThird(courseStats, config, scenario) {
  return Object.values(courseStats).reduce((sum, course) => {
    return sum + calibratedThirdForCourse(course, config, scenario);
  }, 0);
}

function calibratedThirdForCourse(course, config, scenario) {
  const subj = subjects.find((s) => s.id === course.id);
  const target = THIRD_MATRICULA_TARGETS[course.id];
  const scenarioPressure = thirdScenarioPressure(scenario);
  if (Number.isFinite(target)) {
    return Math.min(THIRD_MATRICULA_MAX, Math.round(target * scenarioPressure));
  }
  const enrolled = Math.max(0, course.enrolled || course.passed || course.failed || 0);
  const rate = subj?.rate || 0;
  const attrition = subj?.cycle >= 5 ? .42 : subj?.cycle >= 3 ? .55 : .70;
  const abandonmentRate = (config?.cohort ? calibratedAbandonmentForScenario(scenario, config.cohort) / config.cohort : .25);
  const estimated = enrolled * rate * .055 * attrition * (1 - abandonmentRate) * scenarioPressure;
  return Math.min(THIRD_MATRICULA_MAX, Math.max(0, Math.round(estimated)));
}

function thirdScenarioPressure(scenario) {
  const key = scenario?.key || "moderate";
  const fixed = { base: 1.12, conservative: 1.06, moderate: 1, high: .86 };
  if (Number.isFinite(fixed[key])) return fixed[key];
  const relief = (scenario.coverage || 0) * (scenario.effect || 0) * .45;
  return clamp(1.12 - relief, .80, 1.12);
}

function buildCycleSurvival(students) {
  const arr = Array(9).fill(0);
  arr[0] = students.length;
  const byCycle = cycleMap();
  for (let c = 1; c <= 8; c++) {
    arr[c] = students.filter((st) => {
      if (st.state === "dropoutDef") return false;
      return firstIncompleteCycleFor(st, byCycle) >= c;
    }).length;
  }
  return arr;
}

function averageMetrics(metrics) {
  const avg = {};
  Object.keys(metrics[0]).forEach((k) => {
    avg[k] = metrics.reduce((a, m) => a + m[k], 0) / metrics.length;
  });
  return avg;
}

function summarizeMetrics(metrics) {
  const keys = ["graduated", "onTimeGraduates", "delayedGraduates", "dropoutDef", "dropoutTemp", "abandonment", "totalFailures", "third", "thirdTotal", "avgGradTerms", "avgDelayedGradTerms", "gradRate"];
  const out = {};
  keys.forEach((key) => {
    const arr = metrics.map((m) => m[key]).sort((a, b) => a - b);
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    const sd = Math.sqrt(arr.reduce((a, b) => a + (b - mean) ** 2, 0) / Math.max(1, arr.length - 1));
    out[key] = { mean, sd, min: arr[0], max: arr[arr.length - 1], lo: quantile(arr, .025), hi: quantile(arr, .975) };
  });
  return out;
}

function renderResults(result) {
  renderKPIs(result);
  renderAnalysis(result);
  renderFunnel(result);
  renderCourseBars(result);
  renderHeatmap(result);
  renderSurvival(result);
  renderThird(result);
  renderDelay(result);
  renderSex(result);
  if (latestComparison) renderScenarioComparison(latestComparison);
  renderImpact(result, latestComparison ? latestComparison.base : null);
}

function renderKPIs(result) {
  const a = result.avg;
  const abandonment = a.abandonment ?? (a.dropoutDef + a.dropoutTemp);
  const items = [
    ["Iniciales", a.cohort, "100% de la cohorte"],
    ["Graduados observados", a.observedGraduates, `${pct(a.observedGraduates / a.cohort)} si se compara con 600`],
    ["Sexo observado", `${fmt(a.observedMaleGraduates)} H / ${fmt(a.observedFemaleGraduates)} M`, "Power BI: 12 hombres, 9 mujeres"],
    ["Duración sin perder", `${fmt(a.noFailureGradTerms)} ciclos`, "malla regular completa"],
    ["Activos", a.active, `${pct(a.active / a.cohort)} siguen en proyección`],
    ["Al menos perdieron", a.irregular ?? a.delayed, `${pct((a.irregular ?? a.delayed) / a.cohort)} referencia agregada`],
    ["Segunda matrícula", a.second, `${pct(a.second / a.cohort)} cohorte con alguna materia repetida`],
    ["Tercera matrícula", a.third, `${pct(a.third / a.cohort)} máximo en una materia`],
    ["Abandono", abandonment, `${pct(abandonment / a.cohort)} temporal o definitivo`],
    ["Completan materias", a.completed, `${pct(a.completed / a.cohort)} simulación académica`],
    ["Pendientes B1", a.pendingB1, `${pct(a.pendingB1 / a.cohort)} terminan malla sin B1`],
    ["Graduados a tiempo", a.onTimeGraduates, `${pct(a.onTimeGraduates / a.graduated)} de graduados, sin perder materias`],
    ["Graduados con pérdida", a.delayedGraduates, `${pct(a.delayedGraduates / a.graduated)} de graduados escenario`],
    ["Graduados escenario", a.graduated, `${pct(a.graduated / a.cohort)} ajustado al dato observado`],
    ["Tiempo promedio", a.avgGradTerms ? `${fmt1(a.avgGradTerms)} ciclos` : "N/D", "graduados proyectados"],
    ["Con materias perdidas", a.avgDelayedGradTerms ? `${fmt1(a.avgDelayedGradTerms)} ciclos` : "N/D", "promedio si reprobaron"]
  ];
  $("kpis").innerHTML = items.map(([label, value, sub]) => `
    <div class="kpi"><span>${label}</span><strong>${formatKpiValue(value)}</strong><span>${sub}</span></div>
  `).join("");
}

function renderAnalysis(result) {
  const a = result.avg;
  const top = topCourses(result.courseStats, "failed", 7).map((c) => c.name).join(", ");
  const interval = result.stats.graduated;
  const delayedText = a.avgDelayedGradTerms ? `${fmt1(a.avgDelayedGradTerms)} ciclos` : "no se observan suficientes graduados con materias perdidas en esta corrida";
  const abandonment = a.abandonment ?? (a.dropoutDef + a.dropoutTemp);
  const irregular = a.irregular ?? a.delayed;
  $("analysisText").textContent = `Este modelo de simulación aproxima la situación de Economía sin reemplazar registros oficiales. Parte de 600 ingresos y 21 graduados observados: 12 hombres y 9 mujeres. En el escenario activo estima ${fmt(a.graduated)} graduados; de ellos, ${fmt(a.onTimeGraduates)} se gradúan a tiempo sin perder materias y ${fmt(a.delayedGraduates)} lo hacen con pérdida o retraso. La carrera dura 8 ciclos si no se reprueba; cuando hay materias perdidas, el tiempo puede subir a cerca de ${delayedText} por repetición y prerrequisitos. La pérdida/irregularidad se calibra en ${fmt(irregular)} estudiantes que al menos perdieron una materia o repitieron, equivalente a ${pct(irregular / a.cohort)}; el abandono se calibra en ${fmt(abandonment)} estudiantes (${pct(abandonment / a.cohort)}). Con ${result.scenario.tutors} tutores, ${pct(result.scenario.coverage)} de cobertura y materias críticas como ${top}, el tablero ayuda a justificar tutorías, clases introductorias, portal académico y alertas tempranas.`;
}

function renderFunnel(result) {
  const labels = ["Ingreso", "Ciclo 2", "Ciclo 3", "Ciclo 4", "Ciclo 5", "Ciclo 6", "Ciclo 7", "Ciclo 8", "Graduación"];
  const values = calibratedFunnel(result);
  $("funnelChart").innerHTML = horizontalBars(labels, values, { color: "#174f87", suffix: " est.", max: values[0] });
}

function renderCourseBars(result) {
  const courses = Object.values(result.courseStats).map((course) => {
    const subj = subjects.find((s) => s.id === course.id);
    const rate = subj?.rate || 0;
    const enrolled = Math.max(0, course.enrolled || course.passed || course.failed || 0);
    return {
      ...course,
      rate,
      expectedFailed: enrolled * rate,
      expectedPassed: enrolled * (1 - rate)
    };
  }).sort((a, b) => b.expectedFailed - a.expectedFailed).slice(0, 14).reverse();
  const labels = courses.map((c) => c.name);
  const failed = courses.map((c) => c.expectedFailed);
  const passed = courses.map((c) => c.expectedPassed);
  const rates = courses.map((c) => c.rate);
  $("courseBarChart").innerHTML = stackedBars(labels, passed, failed, ["Aprobados", "Reprobados"], rates);
}

function renderHeatmap(result) {
  const rows = subjects.map((subj) => {
    return { name: subj.name, cycle: subj.cycle, rate: subj.rate };
  });
  $("heatmapChart").innerHTML = heatmap(rows);
}

function renderSurvival(result) {
  const labels = ["Ing.", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "Grad."];
  const values = calibratedFunnel(result).map((v) => v / result.avg.cohort * 100);
  $("survivalChart").innerHTML = lineChart(labels, values, "% permanece");
}

function calibratedFunnel(result) {
  const cohort = Math.round(result.avg.cohort || result.config.cohort || 600);
  const graduates = Math.max(OBSERVED_GRADUATES.total, Math.round(result.avg.graduated || OBSERVED_GRADUATES.total));
  const c8 = graduates;
  const c5 = Math.min(cohort, Math.round(c8 * UPPER_CYCLE_PROFILE[5] / UPPER_CYCLE_PROFILE[8]));
  const c6 = Math.max(c8, Math.round(c8 * UPPER_CYCLE_PROFILE[6] / UPPER_CYCLE_PROFILE[8]));
  const c7 = Math.max(c8, Math.round(c8 * UPPER_CYCLE_PROFILE[7] / UPPER_CYCLE_PROFILE[8]));
  const c4 = Math.max(c5 + 18, Math.round(c5 + (cohort - c5) * .22));
  const c3 = Math.max(c4 + 18, Math.round(c5 + (cohort - c5) * .43));
  const c2 = Math.max(c3 + 18, Math.round(c5 + (cohort - c5) * .66));
  return makeNonIncreasing([cohort, c2, c3, c4, c5, c6, c7, c8, graduates]);
}

function makeNonIncreasing(values) {
  const out = values.map((v) => Math.max(0, Math.round(v)));
  for (let i = 1; i < out.length; i++) {
    if (out[i] > out[i - 1]) out[i] = out[i - 1];
  }
  return out;
}

function renderThird(result) {
  const courses = prioritizedThirdCourses(result).reverse();
  $("thirdChart").innerHTML = horizontalBars(courses.map((c) => c.name), courses.map((c) => c.thirdCalibrated), {
    color: "#b1120d",
    formatValue: (value) => `${fmt(value)} est. (${pct(value / result.avg.cohort)})`
  });
}

function prioritizedThirdCourses(result) {
  const enriched = Object.values(result.courseStats).map((course) => ({
    ...course,
    thirdCalibrated: calibratedThirdForCourse(course, result.config, result.scenario)
  }));
  const byId = Object.fromEntries(enriched.map((course) => [course.id, course]));
  const picked = new Map();
  THIRD_PRIORITY_IDS.forEach((id) => {
    if (byId[id]) picked.set(id, byId[id]);
  });
  enriched
    .slice()
    .sort((a, b) => b.thirdCalibrated - a.thirdCalibrated)
    .forEach((course) => {
      if (picked.size < 12 && !picked.has(course.id)) picked.set(course.id, course);
    });
  return Array.from(picked.values()).sort((a, b) => b.thirdCalibrated - a.thirdCalibrated);
}

function renderDelay(result) {
  const courses = topCourses(result.courseStats, "delay", 12).reverse();
  $("delayChart").innerHTML = horizontalBars(courses.map((c) => c.name), courses.map((c) => Math.min(c.delay, result.config.cohort)), {
    color: "#a76505",
    formatValue: (value) => pct(value / result.avg.cohort)
  });
}

function renderSex(result) {
  const labels = ["Hombres", "Mujeres"];
  const values = [OBSERVED_GRADUATES.male, OBSERVED_GRADUATES.female];
  $("sexChart").innerHTML = verticalBars(labels, values, ["#174f87", "#b1120d"], "graduados observados");
}

function renderImpact(result, baseResult) {
  const scenarioKey = result.config.scenarioKey || result.scenario.key || "moderate";
  const current = latestComparison?.[scenarioKey]?.avg || result.avg;
  const base = latestComparison?.base?.avg || (baseResult ? baseResult.avg : current);
  const avoidedFailures = Math.max(0, base.totalFailures - current.totalFailures);
  const avoidedThird = Math.max(0, (base.thirdTotal ?? base.third) - (current.thirdTotal ?? current.third));
  const extraGraduates = Math.max(0, current.graduated - base.graduated);
  const tutorCapacity = result.scenario.tutors * result.scenario.capacity;
  const tutored = result.config.cohort * result.scenario.coverage;
  const requiredSessions = Math.ceil(tutored / Math.max(1, result.scenario.capacity)) * result.scenario.classFreq;
  const labels = ["Reprobadas evitadas", "Menos tercera matrícula", "Graduados adicionales", "Capacidad tutorías", "Horas/sesiones requeridas"];
  const values = [avoidedFailures, avoidedThird, extraGraduates, tutorCapacity, requiredSessions];
  $("impactChart").innerHTML = verticalBars(labels, values, ["#16775f", "#16775f", "#16775f", "#174f87", "#6250a4"], "impacto simulado");
}

function renderScenarioComparison(comp) {
  const entries = Object.entries(comp);
  const labels = entries.map(([, r]) => r.scenario.label.replace(/^[0-9]\. /, ""));
  const graduates = entries.map(([, r]) => r.avg.graduated);
  const dropouts = entries.map(([, r]) => r.avg.abandonment ?? (r.avg.dropoutDef + r.avg.dropoutTemp));
  const cohort = entries[0]?.[1]?.avg?.cohort || 600;
  $("scenarioChart").innerHTML = groupedBars(labels, graduates, dropouts, ["Graduados", "Abandono"], cohort);
}

function renderEmptyCharts() {
  ["funnelChart", "scenarioChart", "courseBarChart", "heatmapChart", "survivalChart", "thirdChart", "delayChart", "sexChart", "impactChart"].forEach((id) => {
    $(id).innerHTML = '<div class="empty">Sin datos todavia.</div>';
  });
}

function renderSubjectsTable() {
  const nameById = Object.fromEntries(subjects.map((subj) => [subj.id, subj.name]));
  $("subjectsTable").innerHTML = `
    <thead><tr><th>Ciclo</th><th>Materia</th><th>Tasa inicial</th><th>Riesgo</th><th>Prerrequisitos editables</th><th>Impacto curricular</th></tr></thead>
    <tbody>
    ${subjects.map((subj) => `
      <tr data-id="${subj.id}">
        <td>${subj.cycle}</td>
        <td>${subj.name}</td>
        <td><input type="number" min="0" max="95" step="0.5" value="${(subj.rate * 100).toFixed(1)}"></td>
        <td>${riskLabel(subj.rate)}</td>
        <td><textarea>${subj.prereqs.map((id) => nameById[id]).join(", ")}</textarea></td>
        <td>${curricularImpact(subj.id).toFixed(1)}</td>
      </tr>`).join("")}
    </tbody>`;
}

function syncSubjectsFromTable() {
  const nameToId = {};
  subjects.forEach((subj) => {
    nameToId[normalize(subj.name)] = subj.id;
    nameToId[normalize(subj.id)] = subj.id;
  });
  document.querySelectorAll("#subjectsTable tbody tr").forEach((row) => {
    const subj = subjects.find((x) => x.id === row.dataset.id);
    subj.rate = clamp(Number(row.querySelector("input").value) / 100, 0, .95);
    const text = row.querySelector("textarea").value;
    subj.prereqs = text.split(",").map((x) => nameToId[normalize(x.trim())]).filter(Boolean);
  });
}

function renderVariables() {
  $("variablesTable").innerHTML = `<table><thead><tr><th>Variable</th><th>Significado</th><th>Tipo</th><th>Uso en el simulador</th></tr></thead><tbody>${VARIABLE_DEFS.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function setupEvidenceExplorer() {
  const select = $("econTableSelect");
  select.innerHTML = ECON_STUDY_TABLES.map((table) => `<option value="${table.id}">${table.title}</option>`).join("");
  select.value = "conteo";
  select.addEventListener("change", renderStudyTable);
  $("econSearch").addEventListener("input", renderStudyTable);
  renderStudyTable();
}

function renderStudyTable() {
  const table = ECON_STUDY_TABLES.find((x) => x.id === $("econTableSelect").value) || ECON_STUDY_TABLES[0];
  const query = normalize($("econSearch").value);
  const rows = query ? table.rows.filter((row) => normalize(row.join(" ")).includes(query)) : table.rows;
  $("econTableNote").textContent = table.note;
  $("econStudyTable").innerHTML = `
    <div class="study-table-title"><b>${table.title}</b><span class="pill">${table.tag}</span><span class="pill">${rows.length} filas</span></div>
    ${rows.length ? `<table><thead><tr>${table.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, i) => `<td class="${studyCellClass(cell, table.headers[i])}">${cell}</td>`).join("")}</tr>`).join("")}</tbody></table>` : `<div class="empty-table">No hay filas con ese filtro.</div>`}
  `;
}

function studyCellClass(cell, header) {
  const text = String(cell);
  if (/P>\|z\||P-valor/.test(header || "") && (text.includes("<0.000") || Number(text) < 0.05)) return "sig";
  if (/cautela|cuasi|seleccion adversa|No significativo/i.test(text)) return "warn-cell";
  if (/Preferido|preferible|menor AIC/i.test(text)) return "sig";
  return "";
}

function buildResultCacheKey(config, scenario) {
  return JSON.stringify({
    version: APP_VERSION,
    config,
    scenario,
    subjects: subjects.map((subj) => ({
      id: subj.id,
      cycle: subj.cycle,
      rate: Number(subj.rate.toFixed(5)),
      prereqs: subj.prereqs.slice().sort()
    }))
  });
}

function sanitizeResultForCache(result) {
  if (!result) return null;
  return {
    config: result.config,
    scenario: result.scenario,
    reps: result.reps,
    avg: result.avg,
    stats: result.stats,
    courseStats: result.courseStats,
    cycleSurvival: result.cycleSurvival,
    distributions: result.distributions,
    students: []
  };
}

function sanitizeComparisonForCache(comparison) {
  if (!comparison) return null;
  return Object.fromEntries(Object.entries(comparison).map(([key, result]) => [key, sanitizeResultForCache(result)]));
}

function saveCachedResult(key, result, comparison) {
  const payload = {
    version: APP_VERSION,
    key,
    latest: sanitizeResultForCache(result),
    latestComparison: sanitizeComparisonForCache(comparison)
  };
  resultCache.set(key, payload);
  try {
    localStorage.setItem(RESULT_CACHE_KEY, JSON.stringify(payload));
  } catch {
    // Si el navegador no deja guardar, la cache de esta sesión sigue funcionando.
  }
}

function getCachedResult(key) {
  if (resultCache.has(key)) return resultCache.get(key);
  const precomputed = getPrecomputedResult(key);
  if (precomputed) return precomputed;
  try {
    const raw = localStorage.getItem(RESULT_CACHE_KEY);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    if (payload.version !== APP_VERSION || payload.key !== key || !payload.latest) return null;
    resultCache.set(key, payload);
    return payload;
  } catch {
    localStorage.removeItem(RESULT_CACHE_KEY);
    return null;
  }
}

function getPrecomputedResult(key) {
  const payload = window.PRECOMPUTED_SIMULATION;
  if (!payload || payload.version !== APP_VERSION || payload.key !== key || !payload.latest) return null;
  resultCache.set(key, payload);
  return payload;
}

function restoreCachedResults() {
  const config = readConfig();
  const scenario = getScenario(config);
  const cached = getCachedResult(buildResultCacheKey(config, scenario));
  if (!cached) return;
  latest = cached.latest;
  latestComparison = cached.latestComparison || null;
  renderResults(latest);
  if (latestComparison) {
    renderScenarioComparison(latestComparison);
    renderImpact(latest, latestComparison.base);
  }
  setStatus(`Resultados de ${fmt(latest.reps)} simulaciones cargados. Si cambias un parámetro, se recalcula automáticamente.`);
}

function saveConfig() {
  const config = readConfig();
  localStorage.setItem("simuladorEconomiaConfig", JSON.stringify({ version: APP_VERSION, config, subjects }));
  setStatus("Configuración guardada en este navegador.");
}

function loadSaved() {
  const raw = localStorage.getItem("simuladorEconomiaConfig");
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    if (saved.version !== APP_VERSION) {
      localStorage.removeItem("simuladorEconomiaConfig");
      return;
    }
    if (saved.subjects) {
      subjects = saved.subjects;
      renderSubjectsTable();
    }
    const c = saved.config || {};
    Object.entries({
      cohortSize: c.cohort, repetitions: Math.min(c.reps || 1000, 1000), seed: c.seed, malePct: c.malePct * 100,
      b1Pct: c.b1Pct * 100, dropoutBase: c.dropoutBase * 100, coverage: c.coverage * 100,
      effectiveness: c.effect * 100, disciplineBoost: c.disciplineBoost, tutors: c.tutors,
      capacity: c.capacity, classFreq: c.classFreq, healthShock: c.healthShock * 100,
      incomeShock: c.incomeShock * 100, incomeSupport: c.incomeSupport * 100,
      secondFactor: c.secondFactor, thirdFactor: c.thirdFactor, thirdDropout: c.thirdDropout * 100
    }).forEach(([id, value]) => { if ($(id) && Number.isFinite(value)) $(id).value = value; });
    if (c.scenarioKey) $("scenarioSelect").value = c.scenarioKey;
    if (typeof c.b1Gate === "boolean") $("b1Gate").checked = c.b1Gate;
    forceEightSemesterHorizon();
  } catch {
    localStorage.removeItem("simuladorEconomiaConfig");
  }
}

function forceEightSemesterHorizon() {
  $("maxTerms").value = 8;
  $("maxTerms").min = 8;
  $("maxTerms").max = 8;
}

function resetConfig() {
  localStorage.removeItem("simuladorEconomiaConfig");
  subjects = structuredClone(BASE_SUBJECTS);
  document.querySelectorAll("input, select").forEach((el) => {
    if (el.defaultValue !== undefined) el.value = el.defaultValue;
    if (el.type === "checkbox") el.checked = el.defaultChecked;
  });
  $("scenarioSelect").value = "moderate";
  applyScenarioToInputs();
  renderSubjectsTable();
  setStatus("Valores restablecidos.");
}

function downloadCSV() {
  if (!latest) return setStatus("Primero ejecuta la simulación.");
  const rows = [["materia", "ciclo", "aprobados_prom", "reprobados_prom", "segunda_prom", "tercera_prom", "retraso_prom"]];
  Object.values(latest.courseStats).forEach((c) => rows.push([c.name, c.cycle, c.passed, c.failed, c.second, calibratedThirdForCourse(c, latest.config, latest.scenario), c.delay]));
  saveFile("resultados_simulador.csv", rows.map((r) => r.map(csvCell).join(",")).join("\n"), "text/csv;charset=utf-8");
}

function downloadExcel() {
  if (!latest) return setStatus("Primero ejecuta la simulación.");
  const rows = Object.values(latest.courseStats).map((c) => `<tr><td>${c.name}</td><td>${c.cycle}</td><td>${fmt(c.passed)}</td><td>${fmt(c.failed)}</td><td>${fmt(calibratedThirdForCourse(c, latest.config, latest.scenario))}</td></tr>`).join("");
  const html = `<html><head><meta charset="utf-8"></head><body><table><tr><th>Materia</th><th>Ciclo</th><th>Aprobados</th><th>Reprobados</th><th>Tercera matrícula</th></tr>${rows}</table></body></html>`;
  saveFile("resultados_simulador.xls", html, "application/vnd.ms-excel");
}

function setStatus(text) {
  $("status").textContent = text;
}

function showProgress(fraction, label) {
  const safe = clamp(fraction, 0, 1);
  $("progressWrap").hidden = false;
  $("progressBar").style.width = `${Math.round(safe * 100)}%`;
  $("progressText").textContent = label || `${Math.round(safe * 100)}%`;
}

function setBusy(isBusy) {
  isRunning = isBusy;
  ["runBtn", "compareBtn", "resetBtn", "saveBtn", "csvBtn", "excelBtn", "pdfBtn", "printBtn"].forEach((id) => {
    const el = $(id);
    if (el) el.disabled = isBusy;
  });
  ["scenarioSelect", "repetitions", "cohortSize", "seed", "coverage", "effectiveness", "disciplineBoost", "tutors", "capacity", "classFreq", "healthShock", "incomeShock", "incomeSupport", "secondFactor", "thirdFactor", "thirdDropout", "malePct", "b1Pct", "dropoutBase", "b1Gate"].forEach((id) => {
    const el = $(id);
    if (el) el.disabled = isBusy;
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function topCourses(stats, key, n) {
  return Object.values(stats).slice().sort((a, b) => b[key] - a[key]).slice(0, n);
}

function horizontalBars(labels, values, opts = {}) {
  const w = 760, row = 30, left = 205, h = Math.max(120, labels.length * row + 32);
  const max = opts.max || Math.max(...values, 1);
  const color = opts.color || "#174f87";
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Grafico de barras horizontales">
    ${labels.map((label, i) => {
      const y = 22 + i * row;
      const bw = (values[i] / max) * (w - left - 80);
      const valueLabel = opts.formatValue ? opts.formatValue(values[i], i) : `${fmt(values[i])}${opts.suffix || ""}`;
      return `<text x="8" y="${y + 16}" class="tiny">${short(label, 28)}</text><rect x="${left}" y="${y}" width="${Math.max(1, bw)}" height="20" rx="3" fill="${color}"></rect><text x="${left + bw + 6}" y="${y + 15}" class="bar-label">${valueLabel}</text>`;
    }).join("")}
  </svg>`;
}

function stackedBars(labels, a, b, legends, rates = []) {
  const w = 820, row = 30, left = 230, h = labels.length * row + 54;
  const max = Math.max(...a.map((v, i) => v + b[i]), 1);
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Barras apiladas">
    <rect x="20" y="12" width="12" height="12" fill="#174f87"></rect><text x="38" y="23" class="tiny">${legends[0]}</text>
    <rect x="132" y="12" width="12" height="12" fill="#b1120d"></rect><text x="150" y="23" class="tiny">${legends[1]}</text>
    ${labels.map((label, i) => {
      const y = 42 + i * row;
      const aw = (a[i] / max) * (w - left - 80);
      const bw = (b[i] / max) * (w - left - 80);
      const rateLabel = Number.isFinite(rates[i]) && rates[i] > 0 ? pct(rates[i]) : pct(b[i] / Math.max(1, a[i] + b[i]));
      return `<text x="8" y="${y + 16}" class="tiny">${short(label, 30)}</text><rect x="${left}" y="${y}" width="${aw}" height="20" fill="#174f87"></rect><rect x="${left + aw}" y="${y}" width="${bw}" height="20" fill="#b1120d"></rect><text x="${left + aw + bw + 6}" y="${y + 15}" class="bar-label">${rateLabel}</text>`;
    }).join("")}
  </svg>`;
}

function verticalBars(labels, values, colors, unit) {
  const w = 760, h = 310, base = 248, left = 54;
  const max = Math.max(...values, 1);
  const gap = 16;
  const bw = Math.max(28, (w - left - 40 - gap * (labels.length - 1)) / labels.length);
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${unit}">
    <line x1="${left}" y1="${base}" x2="${w - 20}" y2="${base}" class="grid-line"></line>
    ${labels.map((label, i) => {
      const x = left + i * (bw + gap);
      const bh = (values[i] / max) * 190;
      return `<rect x="${x}" y="${base - bh}" width="${bw}" height="${bh}" rx="4" fill="${colors[i % colors.length]}"></rect><text x="${x + bw / 2}" y="${base - bh - 7}" text-anchor="middle" class="bar-label">${fmt(values[i])}</text><text x="${x + bw / 2}" y="${base + 18}" text-anchor="middle" class="tiny">${short(label, 14)}</text>`;
    }).join("")}
  </svg>`;
}

function groupedBars(labels, a, b, legends, denominator = 600) {
  const w = 820, h = 330, base = 260, left = 54;
  const max = Math.max(...a, ...b, 1);
  const group = (w - left - 30) / labels.length;
  const bw = Math.min(34, group / 3.2);
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Comparación de escenarios">
    <rect x="22" y="14" width="12" height="12" fill="#16775f"></rect><text x="40" y="25" class="tiny">${legends[0]}</text>
    <rect x="144" y="14" width="12" height="12" fill="#b1120d"></rect><text x="162" y="25" class="tiny">${legends[1]}</text>
    <line x1="${left}" y1="${base}" x2="${w - 20}" y2="${base}" class="grid-line"></line>
    ${labels.map((label, i) => {
      const x = left + i * group + 12;
      const ah = a[i] / max * 190;
      const bh = b[i] / max * 190;
      const gradLabel = `${fmt(a[i])} (${pct(a[i] / denominator)})`;
      const dropLabel = `${fmt(b[i])} (${pct(b[i] / denominator)})`;
      return `<rect x="${x}" y="${base - ah}" width="${bw}" height="${ah}" fill="#16775f"></rect><text x="${x + bw / 2}" y="${base - ah - 8}" text-anchor="middle" class="bar-label">${gradLabel}</text><rect x="${x + bw + 20}" y="${base - bh}" width="${bw}" height="${bh}" fill="#b1120d"></rect><text x="${x + bw + 20 + bw / 2}" y="${base - bh - 8}" text-anchor="middle" class="bar-label">${dropLabel}</text><text x="${x + bw + 10}" y="${base + 18}" text-anchor="middle" class="tiny">${short(label, 13)}</text>`;
    }).join("")}
  </svg>`;
}

function heatmap(rows) {
  const cellW = 88, cellH = 28, left = 185, top = 28, w = 920, h = rows.length * cellH + 62;
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Mapa de calor">
    ${[1,2,3,4,5,6,7,8].map((c) => `<text x="${left + (c - 1) * cellW + cellW / 2}" y="18" text-anchor="middle" class="tiny">C${c}</text>`).join("")}
    ${rows.map((r, i) => {
      const y = top + i * cellH;
      const x = left + (r.cycle - 1) * cellW;
      const col = heatColor(r.rate);
      const textColor = heatTextColor(r.rate);
      return `<text x="8" y="${y + 18}" class="tiny">${short(r.name, 28)}</text><rect x="${x}" y="${y}" width="${cellW - 4}" height="${cellH - 4}" rx="3" fill="${col}"></rect><text x="${x + cellW / 2}" y="${y + 17}" text-anchor="middle" fill="${textColor}" font-size="11" font-weight="700">${pct(r.rate)}</text>`;
    }).join("")}
  </svg>`;
}

function lineChart(labels, values, unit) {
  const w = 760, h = 300, left = 48, top = 24, plotW = 660, plotH = 205;
  const pts = values.map((v, i) => [left + i * (plotW / (values.length - 1)), top + plotH - v / 100 * plotH]);
  const path = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${unit}">
    ${[0,25,50,75,100].map((t) => `<line x1="${left}" y1="${top + plotH - t / 100 * plotH}" x2="${left + plotW}" y2="${top + plotH - t / 100 * plotH}" class="grid-line"></line><text x="8" y="${top + plotH - t / 100 * plotH + 4}" class="tiny">${t}%</text>`).join("")}
    <path d="${path}" fill="none" stroke="#174f87" stroke-width="3"></path>
    ${pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#174f87"></circle><text x="${p[0]}" y="${top + plotH + 24}" text-anchor="middle" class="tiny">${labels[i]}</text>`).join("")}
  </svg>`;
}

function curricularImpact(id) {
  const direct = subjects.filter((s) => s.prereqs.includes(id)).length;
  const seen = new Set();
  const walk = (x) => subjects.filter((s) => s.prereqs.includes(x)).forEach((s) => {
    if (!seen.has(s.id)) { seen.add(s.id); walk(s.id); }
  });
  walk(id);
  const subj = subjects.find((s) => s.id === id);
  return subj.rate * 10 + direct * .8 + seen.size * .45;
}

function downstreamImpact(id) {
  return curricularImpact(id);
}

function riskLabel(rate) {
  if (rate >= .55) return "Muy alto";
  if (rate >= .35) return "Alto";
  if (rate >= .22) return "Medio";
  return "Bajo";
}

function heatColor(rate) {
  if (rate >= .32) return "#b1120d";
  if (rate >= .24) return "#df6b37";
  if (rate >= .17) return "#f2bd57";
  if (rate >= .10) return "#8fc5a9";
  return "#d7eadf";
}

function heatTextColor(rate) {
  if (rate >= .24) return "#ffffff";
  if (rate >= .17) return "#172033";
  return "#0f3f34";
}

function fmt(v) {
  if (!Number.isFinite(v)) return "0";
  return Math.round(v).toLocaleString("es-EC");
}

function fmt1(v) {
  if (!Number.isFinite(v)) return "0";
  return v.toLocaleString("es-EC", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function formatKpiValue(value) {
  return typeof value === "number" ? fmt(value) : value;
}

function pct(v) {
  return `${(v * 100).toFixed(1)}%`;
}

function quantile(arr, q) {
  const pos = (arr.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  return arr[base + 1] !== undefined ? arr[base] + rest * (arr[base + 1] - arr[base]) : arr[base];
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function mulberry32(a) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function randn(rng, mean = 0, sd = 1) {
  const u = 1 - rng();
  const v = rng();
  return mean + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function normalize(text) {
  return String(text).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function short(text, max) {
  return text.length > max ? text.slice(0, max - 1) + "." : text;
}

function csvCell(v) {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function saveFile(name, content, type) {
  const blob = new Blob([content], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

init();
