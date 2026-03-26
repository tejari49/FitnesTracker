const CATALOG = [
  { id: "bench_press", name: "Bankdrücken", type: "Übung", icon: "💪", base_xp: 14, description: "Kräftigt Brust, Schultern und Trizeps. Langsam ablassen, kontrolliert hochdrücken." },
  { id: "squat", name: "Kniebeuge", type: "Übung", icon: "🦵", base_xp: 16, description: "Stärkt Beine und Gesäß. Rücken stabil halten, Knie über den Füßen führen." },
  { id: "deadlift", name: "Kreuzheben", type: "Übung", icon: "🏋️", base_xp: 18, description: "Trainiert Rücken, Beine und Griffkraft. Die Hantel nah am Körper bewegen." },
  { id: "shoulder_press", name: "Schulterdrücken", type: "Übung", icon: "🙌", base_xp: 13, description: "Für Schultern und Trizeps. Bauch fest anspannen und nicht ins Hohlkreuz fallen." },
  { id: "barbell_row", name: "Rudern vorgebeugt", type: "Übung", icon: "🚣", base_xp: 14, description: "Stärkt oberen Rücken und Bizeps. Ellbogen eng ziehen und Rücken neutral halten." },
  { id: "lat_pulldown_ex", name: "Latzug", type: "Übung", icon: "🪝", base_xp: 12, description: "Gut für Rückenbreite. Stange kontrolliert zur oberen Brust ziehen." },
  { id: "lunges", name: "Ausfallschritte", type: "Übung", icon: "👣", base_xp: 13, description: "Verbessert Balance und Beinkraft. Mit langem Schritt arbeiten und Oberkörper aufrecht halten." },
  { id: "leg_press_ex", name: "Beinpresse", type: "Übung", icon: "🛷", base_xp: 14, description: "Trainiert Oberschenkel und Gesäß. Füße stabil platzieren und nicht die Knie durchdrücken." },
  { id: "leg_extension", name: "Beinstrecken", type: "Übung", icon: "🦿", base_xp: 10, description: "Isoliert den vorderen Oberschenkel. Ruhig hochdrücken und langsam absenken." },
  { id: "hip_thrust", name: "Hip Thrust", type: "Übung", icon: "🍑", base_xp: 14, description: "Stärkt Gesäß und hintere Kette. Oben kurz halten und Becken voll strecken." },
  { id: "bicep_curl", name: "Bizeps-Curls", type: "Übung", icon: "💥", base_xp: 9, description: "Für den Bizeps. Ellbogen nah am Körper lassen und nicht schwingen." },
  { id: "tricep_pushdown", name: "Trizepsdrücken", type: "Übung", icon: "🔻", base_xp: 9, description: "Kräftigt den Trizeps. Schultern tief halten und Unterarme vollständig strecken." },
  { id: "dips", name: "Dips", type: "Übung", icon: "⬇️", base_xp: 12, description: "Sehr effektiv für Brust und Trizeps. Tief gehen, aber Schultern stabil halten." },
  { id: "pull_ups", name: "Klimmzüge", type: "Übung", icon: "🧗", base_xp: 15, description: "Starke Rückenübung. Brust Richtung Stange ziehen und ohne Schwung arbeiten." },
  { id: "push_ups", name: "Liegestütze", type: "Übung", icon: "🤸", base_xp: 10, description: "Klassiker für Brust, Schulter und Rumpf. Den Körper wie ein Brett halten." },
  { id: "crunches", name: "Crunches", type: "Übung", icon: "🌀", base_xp: 8, description: "Trainiert die Bauchmuskeln. Klein und kontrolliert einrollen statt ziehen." },
  { id: "plank", name: "Plank", type: "Übung", icon: "🪵", base_xp: 9, description: "Hält den Core stabil. Bauchnabel leicht einziehen und Gesäß nicht durchhängen lassen." },
  { id: "russian_twist", name: "Russian Twist", type: "Übung", icon: "🔄", base_xp: 9, description: "Für schräge Bauchmuskeln. Drehung aus dem Oberkörper, nicht nur aus den Armen." },
  { id: "mountain_climber", name: "Mountain Climbers", type: "Übung", icon: "⛰️", base_xp: 10, description: "Cardio und Core zugleich. Knie rhythmisch nach vorne ziehen." },
  { id: "burpees", name: "Burpees", type: "Übung", icon: "⚡", base_xp: 14, description: "Ganzkörper-Conditioning. Gleichmäßiges Tempo und saubere Landung wichtig." },
  { id: "kettlebell_swing", name: "Kettlebell Swings", type: "Übung", icon: "🔔", base_xp: 13, description: "Kräftigt Hüfte und Rücken. Die Bewegung aus der Hüfte einleiten, nicht aus den Armen." },
  { id: "farmers_walk", name: "Farmer's Walk", type: "Übung", icon: "🚶", base_xp: 12, description: "Trainiert Griffkraft, Schultern und Rumpf. Aufrecht gehen und Spannung halten." },
  { id: "calf_raise", name: "Wadenheben", type: "Übung", icon: "🧍", base_xp: 8, description: "Stärkt die Waden. Ganz hoch drücken und langsam senken." },
  { id: "glute_bridge", name: "Glute Bridge", type: "Übung", icon: "🌉", base_xp: 9, description: "Gut für Gesäß und unteren Rücken. Oben bewusst anspannen." },
  { id: "jumping_jacks", name: "Jumping Jacks", type: "Übung", icon: "⭐", base_xp: 8, description: "Einfaches Warm-up für den ganzen Körper. Locker und rhythmisch springen." },
  { id: "treadmill", name: "Laufband", type: "Gerät", icon: "🏃", base_xp: 10, description: "Perfekt für Cardio oder Intervalle. Dauer über die Stoppuhr tracken." },
  { id: "bike", name: "Ergometer", type: "Gerät", icon: "🚴", base_xp: 10, description: "Schonendes Ausdauertraining. Runden oder Intervalle eintragen, Zeit läuft über die Stoppuhr." },
  { id: "rower", name: "Rudergerät", type: "Gerät", icon: "🚣‍♂️", base_xp: 12, description: "Ganzkörper-Cardio. Beinschub zuerst, dann Rücken und Arme." },
  { id: "elliptical", name: "Crosstrainer", type: "Gerät", icon: "🛸", base_xp: 10, description: "Gelenkschonendes Ausdauergerät. Gleichmäßig ziehen und treten." },
  { id: "stair_climber", name: "Stair Climber", type: "Gerät", icon: "🪜", base_xp: 11, description: "Intensiv für Beine und Herz-Kreislauf. Ruhig treten und aufrecht bleiben." },
  { id: "cable_tower", name: "Kabelzugturm", type: "Gerät", icon: "🧵", base_xp: 12, description: "Sehr vielseitig für Zug- und Drückbewegungen. Gewicht kontrolliert führen." },
  { id: "smith_machine", name: "Smith Machine", type: "Gerät", icon: "🧱", base_xp: 12, description: "Geführte Langhantel für sichere Bewegungen. Stand und Höhe sauber einstellen." },
  { id: "butterfly_machine", name: "Butterfly-Maschine", type: "Gerät", icon: "🦋", base_xp: 10, description: "Fokus auf Brustmuskulatur. Bewegung aus den Ellenbogen und Brustmuskeln führen." },
  { id: "leg_curl_machine", name: "Leg-Curl-Maschine", type: "Gerät", icon: "🛏️", base_xp: 10, description: "Trainiert die Beinrückseite. Hüfte stabil halten und nicht reißen." },
  { id: "lat_machine", name: "Latzug-Maschine", type: "Gerät", icon: "🎯", base_xp: 11, description: "Alternative zum freien Latzug. Schulterblätter zuerst aktivieren." },
  { id: "chest_press_machine", name: "Brustpresse", type: "Gerät", icon: "🫀", base_xp: 11, description: "Geführte Druckbewegung für Brust und Trizeps. Ellbogen im angenehmen Winkel halten." },
  { id: "shoulder_press_machine", name: "Schulterpresse-Maschine", type: "Gerät", icon: "🛡️", base_xp: 11, description: "Maschinenvariante für die Schultern. Druckweg kontrolliert und ohne Schwung." },
  { id: "abductor", name: "Abduktoren-Maschine", type: "Gerät", icon: "↔️", base_xp: 9, description: "Kräftigt äußere Hüfte und Gesäß. Langsam nach außen drücken." },
  { id: "adductor", name: "Adduktoren-Maschine", type: "Gerät", icon: "↕️", base_xp: 9, description: "Trainiert die Innenseite der Oberschenkel. Gleichmäßig und kontrolliert zusammenführen." },
  { id: "ab_machine", name: "Bauchmaschine", type: "Gerät", icon: "🧠", base_xp: 9, description: "Unterstützt den Bauchfokus. Die Bewegung bewusst aus der Körpermitte ausführen." },
  { id: "back_extension_machine", name: "Rückenstrecker-Maschine", type: "Gerät", icon: "🪶", base_xp: 10, description: "Kräftigt unteren Rücken. Nicht überstrecken, sondern nur kontrolliert aufrichten." },
  { id: "air_bike", name: "Air Bike", type: "Gerät", icon: "🌪️", base_xp: 12, description: "Sehr intensives Intervallgerät. Arme und Beine gleichzeitig kraftvoll bewegen." },
  { id: "skierg", name: "SkiErg", type: "Gerät", icon: "🎿", base_xp: 12, description: "Zugbewegung für Rücken, Core und Cardio. Dynamisch nach unten arbeiten." },
  { id: "battle_rope", name: "Battle Rope", type: "Gerät", icon: "〰️", base_xp: 11, description: "Explosives Arm- und Core-Training. Kurze harte Intervalle funktionieren besonders gut." },
  { id: "trx", name: "TRX-Bänder", type: "Gerät", icon: "🪢", base_xp: 10, description: "Instabiles Training mit dem eigenen Körpergewicht. Spannung im Rumpf halten." },
  { id: "plyo_box", name: "Plyo-Box", type: "Gerät", icon: "📦", base_xp: 10, description: "Für Sprünge, Step-Ups oder Split Squats. Sicher landen und stabil stehen." },
  { id: "medicine_ball", name: "Medizinball", type: "Gerät", icon: "⚽", base_xp: 9, description: "Gut für Würfe, Rotationen und Core-Arbeit. Bewegung aktiv und explosiv ausführen." },
  { id: "kettlebell", name: "Kettlebell", type: "Gerät", icon: "🔔", base_xp: 10, description: "Sehr vielseitig für Swings, Squats und Presses. Griff fest und Hüfte aktiv einsetzen." },
  { id: "dumbbell", name: "Kurzhantel", type: "Gerät", icon: "🏋️‍♀️", base_xp: 8, description: "Ideal für isolierte und freie Übungen. Beide Seiten sauber kontrollieren." },
  { id: "barbell", name: "Langhantel", type: "Gerät", icon: "📏", base_xp: 9, description: "Basisgerät für viele Kraftübungen. Griffbreite und Technik bewusst wählen." },
  { id: "resistance_band", name: "Widerstandsband", type: "Gerät", icon: "🟣", base_xp: 8, description: "Praktisch für Aufwärmen, Aktivierung und Zusatzwiderstand. Spannung konstant halten." },
  { id: "step_board", name: "Step-Board", type: "Gerät", icon: "🟦", base_xp: 8, description: "Nützlich für Step-Ups und Cardio-Kombinationen. Stabil auftreten und sauber absteigen." }
].map((item, index) => ({
  ...item,
  avatar_variant: index % 2 === 0 ? "female" : "male",
  pose: inferPose(item)
}));

function inferPose(item) {
  const key = `${item.id} ${item.name} ${item.type}`.toLowerCase();
  if (["laufband", "ergometer", "rower", "rudergerät", "crosstrainer", "air_bike", "skierg", "stair_climber", "bike", "elliptical", "treadmill"].some((t) => key.includes(t))) return "cardio";
  if (["battle_rope", "rope"].some((t) => key.includes(t))) return "rope";
  if (["plank", "crunch", "russian", "mountain", "glute_bridge", "bridge", "ab_machine", "bauch"].some((t) => key.includes(t))) return "core";
  if (["kettlebell"].some((t) => key.includes(t))) return "kettlebell";
  if (["curl", "dips", "push_ups", "liegestütze", "pull_ups", "trizeps", "shoulder_press", "kurzhantel", "dumbbell"].some((t) => key.includes(t))) return "dumbbell";
  return "barbell";
}

class FitnessDB {
  constructor() { this.db = null; }
  async init() {
    this.db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("fitness_progress_tracker_deluxe", 1);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("plans")) db.createObjectStore("plans", { keyPath: "id", autoIncrement: true });
        if (!db.objectStoreNames.contains("exercises")) {
          const store = db.createObjectStore("exercises", { keyPath: "id", autoIncrement: true });
          store.createIndex("plan_id", "plan_id", { unique: false });
        }
        if (!db.objectStoreNames.contains("workout_logs")) {
          const store = db.createObjectStore("workout_logs", { keyPath: "id", autoIncrement: true });
          store.createIndex("exercise_id", "exercise_id", { unique: false });
          store.createIndex("date", "date", { unique: false });
        }
        if (!db.objectStoreNames.contains("user_stats")) db.createObjectStore("user_stats", { keyPath: "id" });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    const stats = await this.getUserStats();
    if (!stats) await this.put("user_stats", { id: 1, current_level: 1, total_xp: 0 });
  }
  transaction(storeNames, mode = "readonly") { return this.db.transaction(storeNames, mode); }
  async getAll(storeName) { return await new Promise((resolve, reject) => { const req = this.transaction([storeName]).objectStore(storeName).getAll(); req.onsuccess = () => resolve(req.result || []); req.onerror = () => reject(req.error); }); }
  async getById(storeName, id) { return await new Promise((resolve, reject) => { const req = this.transaction([storeName]).objectStore(storeName).get(id); req.onsuccess = () => resolve(req.result || null); req.onerror = () => reject(req.error); }); }
  async add(storeName, value) { return await new Promise((resolve, reject) => { const req = this.transaction([storeName], "readwrite").objectStore(storeName).add(value); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
  async put(storeName, value) { return await new Promise((resolve, reject) => { const req = this.transaction([storeName], "readwrite").objectStore(storeName).put(value); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
  async delete(storeName, id) { return await new Promise((resolve, reject) => { const req = this.transaction([storeName], "readwrite").objectStore(storeName).delete(id); req.onsuccess = () => resolve(); req.onerror = () => reject(req.error); }); }
  async getExercisesByPlan(planId) { const exercises = await this.getAll("exercises"); return exercises.filter((item) => Number(item.plan_id) === Number(planId)); }
  async getUserStats() { return await this.getById("user_stats", 1); }
  async updateUserStats(addXp) {
    const stats = (await this.getUserStats()) || { id: 1, current_level: 1, total_xp: 0 };
    const totalXp = Number(stats.total_xp || 0) + Number(addXp || 0);
    const currentLevel = FitnessLogic.calculateLevel(totalXp);
    const updated = { id: 1, current_level: currentLevel, total_xp: totalXp };
    await this.put("user_stats", updated);
    return updated;
  }
}

class FitnessLogic {
  static xpForSet(weightKg, reps, baseXp = 0, durationSec = 0) {
    const safeWeight = Math.max(Number(weightKg) || 0, 0);
    const safeReps = Math.max(Number(reps) || 0, 0);
    const safeDuration = Math.max(Number(durationSec) || 0, 0);
    const volumeXp = Math.ceil((safeWeight * safeReps) / 10);
    const durationBonus = Math.floor(safeDuration / 30);
    return volumeXp + Number(baseXp || 0) + durationBonus;
  }
  static calculateLevel(totalXp) { let level = 1; while (totalXp >= this.levelThreshold(level + 1)) level += 1; return level; }
  static levelThreshold(level) { if (level <= 1) return 0; return 500 * Math.pow(level - 1, 2) - 500 * (level - 2); }
  static levelProgress(totalXp) {
    const level = this.calculateLevel(totalXp);
    const currentThreshold = this.levelThreshold(level);
    const nextThreshold = this.levelThreshold(level + 1);
    const progress = totalXp - currentThreshold;
    const needed = nextThreshold - currentThreshold;
    const remaining = Math.max(nextThreshold - totalXp, 0);
    const ratio = needed > 0 ? Math.min(progress / needed, 1) : 1;
    return { level, currentThreshold, nextThreshold, progress, needed, remaining, ratio };
  }
}

class App {
  constructor() {
    this.db = new FitnessDB();
    this.selectedPlanId = null;
    this.toastTimer = null;
    this.draftSelectionIds = [];
    this.catalogFilter = "all";
    this.catalogSearchText = "";
    this.timerStates = new Map();
    this.expandedExerciseIds = new Set();
    this.masterTimer = null;
    this.trainingPlanSelect = document.getElementById("trainingPlanSelect");
    this.newPlanName = document.getElementById("newPlanName");
    this.openCatalogBtn = document.getElementById("openCatalogBtn");
    this.clearDraftBtn = document.getElementById("clearDraftBtn");
    this.savePlanBtn = document.getElementById("savePlanBtn");
    this.selectedDraftWrap = document.getElementById("selectedDraftWrap");
    this.trainingExercises = document.getElementById("trainingExercises");
    this.plansList = document.getElementById("plansList");
    this.recentLogs = document.getElementById("recentLogs");
    this.levelValue = document.getElementById("levelValue");
    this.xpValue = document.getElementById("xpValue");
    this.planCountValue = document.getElementById("planCountValue");
    this.setCountValue = document.getElementById("setCountValue");
    this.progressText = document.getElementById("progressText");
    this.remainingText = document.getElementById("remainingText");
    this.progressFill = document.getElementById("progressFill");
    this.headerBadge = document.getElementById("headerBadge");
    this.lastWorkoutInfo = document.getElementById("lastWorkoutInfo");
    this.toast = document.getElementById("toast");
    this.chartCanvas = document.getElementById("volumeChart");
    this.chartEmpty = document.getElementById("chartEmpty");
    this.catalogModal = document.getElementById("catalogModal");
    this.catalogGrid = document.getElementById("catalogGrid");
    this.catalogSearch = document.getElementById("catalogSearch");
    this.catalogResultCount = document.getElementById("catalogResultCount");
    this.selectedCount = document.getElementById("selectedCount");
    this.closeCatalogBtn = document.getElementById("closeCatalogBtn");
    this.applyCatalogBtn = document.getElementById("applyCatalogBtn");
  }

  async init() { await this.db.init(); this.bindEvents(); this.masterTimer = setInterval(() => this.tickTimers(), 1000); await this.refreshAll(); }
  bindEvents() {
    document.querySelectorAll(".nav-btn").forEach((btn) => btn.addEventListener("click", () => this.switchView(btn.dataset.view)));
    this.trainingPlanSelect.addEventListener("change", async (event) => { this.selectedPlanId = event.target.value ? Number(event.target.value) : null; await this.renderTrainingExercises(); });
    this.openCatalogBtn.addEventListener("click", () => this.openCatalogModal());
    this.closeCatalogBtn.addEventListener("click", () => this.closeCatalogModal());
    this.applyCatalogBtn.addEventListener("click", () => { this.closeCatalogModal(); this.renderDraftSelectionSummary(); });
    this.clearDraftBtn.addEventListener("click", () => this.clearDraftSelection());
    this.savePlanBtn.addEventListener("click", async () => this.handleSavePlan());
    this.catalogSearch.addEventListener("input", () => { this.catalogSearchText = this.catalogSearch.value.trim().toLowerCase(); this.renderCatalogGrid(); });
    document.querySelectorAll("#catalogFilters .chip").forEach((chip) => chip.addEventListener("click", () => { this.catalogFilter = chip.dataset.filter; document.querySelectorAll("#catalogFilters .chip").forEach((item) => item.classList.remove("active")); chip.classList.add("active"); this.renderCatalogGrid(); }));
    this.catalogModal.addEventListener("click", (event) => { if (event.target === this.catalogModal) this.closeCatalogModal(); });
  }

  async refreshAll() { await this.renderPlanDropdowns(); this.renderDraftSelectionSummary(); this.renderCatalogGrid(); await this.renderPlansList(); await this.renderTrainingExercises(); await this.renderRecentLogs(); await this.renderProfile(); }
  switchView(viewName) { document.querySelectorAll(".view").forEach((view) => view.classList.remove("active")); document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active")); const viewEl = document.getElementById(`view-${viewName}`); const btnEl = document.querySelector(`.nav-btn[data-view="${viewName}"]`); if (viewEl) viewEl.classList.add("active"); if (btnEl) btnEl.classList.add("active"); }
  showToast(message, type = "success") { this.toast.textContent = message; this.toast.className = `toast show ${type}`; clearTimeout(this.toastTimer); this.toastTimer = setTimeout(() => { this.toast.className = "toast"; }, 2400); }
  openCatalogModal() { this.catalogModal.classList.add("show"); this.renderCatalogGrid(); setTimeout(() => this.catalogSearch.focus(), 80); }
  closeCatalogModal() { this.catalogModal.classList.remove("show"); }
  clearDraftSelection() { this.draftSelectionIds = []; this.renderCatalogGrid(); this.renderDraftSelectionSummary(); }
  getCatalogItem(id) { return CATALOG.find((item) => item.id === id) || null; }

  renderPersonAvatar(variant = "female", size = "default", pose = "barbell") {
    const safeVariant = variant === "male" ? "male" : "female";
    const safeSize = ["default", "small", "catalog"].includes(size) ? size : "default";
    const sizeClass = safeSize === "default" ? "" : safeSize;
    const palette = safeVariant === "male"
      ? { skin: "#f0b58d", skinShadow: "#dd9874", hair: "#4f2f22", hair2: "#7c5741", top: "#8dd0d6", top2: "#6cb9c1", shorts: "#4f6c75", shorts2: "#3b5560", shoe: "#9c8469", bubble: "#88cad0" }
      : { skin: "#efb091", skinShadow: "#db9478", hair: "#5c2d2d", hair2: "#8d4e58", top: "#f3a8c9", top2: "#ea7eb2", shorts: "#65788f", shorts2: "#4d6178", shoe: "#a48a78", bubble: "#9ddbe1" };
    const equipmentByPose = {
      barbell: `<g opacity="0.98"><line x1="28" y1="90" x2="152" y2="90" stroke="#5a6878" stroke-width="6" stroke-linecap="round"/><line x1="23" y1="90" x2="23" y2="90" stroke="#dfe8ef" stroke-width="20" stroke-linecap="round"/><line x1="157" y1="90" x2="157" y2="90" stroke="#dfe8ef" stroke-width="20" stroke-linecap="round"/><line x1="14" y1="90" x2="14" y2="90" stroke="#6f7c89" stroke-width="26" stroke-linecap="round"/><line x1="166" y1="90" x2="166" y2="90" stroke="#6f7c89" stroke-width="26" stroke-linecap="round"/></g>`,
      dumbbell: `<g opacity="0.98"><line x1="30" y1="103" x2="58" y2="98" stroke="#5a6878" stroke-width="5" stroke-linecap="round"/><line x1="122" y1="98" x2="150" y2="103" stroke="#5a6878" stroke-width="5" stroke-linecap="round"/><line x1="22" y1="104" x2="22" y2="104" stroke="#dfe8ef" stroke-width="16" stroke-linecap="round"/><line x1="14" y1="104" x2="14" y2="104" stroke="#6f7c89" stroke-width="20" stroke-linecap="round"/><line x1="158" y1="104" x2="158" y2="104" stroke="#dfe8ef" stroke-width="16" stroke-linecap="round"/><line x1="166" y1="104" x2="166" y2="104" stroke="#6f7c89" stroke-width="20" stroke-linecap="round"/></g>`,
      cardio: `<g opacity="0.34"><path d="M118 138 L154 138 L144 156 L106 156 Z" fill="#546574"/><path d="M125 80 L151 80 L145 138 L121 138 Z" fill="#6b7b89"/><circle cx="132" cy="100" r="6" fill="#d7e3ee"/></g>`,
      rope: `<g opacity="0.5"><path d="M22 138 C40 122, 58 154, 76 138 S112 122, 126 138 S146 154, 160 140" fill="none" stroke="#d7e3ee" stroke-width="6" stroke-linecap="round"/></g>`,
      core: `<g opacity="0.42"><rect x="26" y="146" width="128" height="16" rx="8" fill="#516173"/></g>`,
      kettlebell: `<g opacity="0.78"><path d="M142 128 C150 128,156 134,156 143 C156 157,146 166,134 166 C122 166,112 157,112 143 C112 134,118 128,126 128 Z" fill="#65788a"/><path d="M128 124 C128 114,132 108,141 108 C150 108,154 114,154 124" fill="none" stroke="#dfe8ef" stroke-width="5" stroke-linecap="round"/></g>`
    };
    const selectedPose = equipmentByPose[pose] ? pose : "barbell";
    const ponytail = safeVariant === "female" ? `<path d="M122 52 C147 60,149 90,132 103 C128 88,119 78,108 70" fill="url(#hairGrad-${safeVariant}-${safeSize})"/>` : "";
    return `<div class="toy-avatar ${sizeClass}" aria-hidden="true"><svg viewBox="0 0 180 220" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bgGrad-${safeVariant}-${safeSize}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${palette.bubble}" stop-opacity="0.95"/><stop offset="100%" stop-color="#1e293b" stop-opacity="0.15"/></linearGradient><linearGradient id="hairGrad-${safeVariant}-${safeSize}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${palette.hair2}"/><stop offset="100%" stop-color="${palette.hair}"/></linearGradient><linearGradient id="topGrad-${safeVariant}-${safeSize}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${palette.top}"/><stop offset="100%" stop-color="${palette.top2}"/></linearGradient><linearGradient id="shortGrad-${safeVariant}-${safeSize}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${palette.shorts}"/><stop offset="100%" stop-color="${palette.shorts2}"/></linearGradient></defs><rect x="0" y="0" width="180" height="220" fill="url(#bgGrad-${safeVariant}-${safeSize})"/>${selectedPose !== "cardio" && selectedPose !== "rope" && selectedPose !== "core" ? equipmentByPose[selectedPose] : ""}<g><path d="M62 50 C64 28, 83 18, 101 20 C121 22,133 38,130 56 C124 68,111 75,95 75 C74 75,61 66,62 50 Z" fill="url(#hairGrad-${safeVariant}-${safeSize})"/>${ponytail}<circle cx="94" cy="62" r="36" fill="${palette.skin}"/><circle cx="80" cy="62" r="12" fill="#fff"/><circle cx="108" cy="62" r="12" fill="#fff"/><circle cx="82" cy="64" r="7" fill="#4a362e"/><circle cx="110" cy="64" r="7" fill="#4a362e"/><path d="M66 104 C70 96,77 94,93 94 C111 94,120 97,124 104 L121 145 C120 152,114 158,106 158 H81 C73 158,67 152,66 145 Z" fill="url(#topGrad-${safeVariant}-${safeSize})"/><path d="M74 146 H117 C118 157,116 170,113 182 H78 C75 171,73 158,74 146 Z" fill="url(#shortGrad-${safeVariant}-${safeSize})"/></g>${selectedPose === "cardio" || selectedPose === "rope" || selectedPose === "core" ? equipmentByPose[selectedPose] : ""}</svg></div>`;
  }

  getFilteredCatalog() { return CATALOG.filter((item) => (this.catalogFilter === "all" || item.type === this.catalogFilter) && (!this.catalogSearchText || `${item.name} ${item.type} ${item.description}`.toLowerCase().includes(this.catalogSearchText))); }
  renderCatalogGrid() {
    const items = this.getFilteredCatalog(); this.catalogResultCount.textContent = String(items.length); this.selectedCount.textContent = String(this.draftSelectionIds.length);
    if (!items.length) { this.catalogGrid.innerHTML = `<div class="empty-box" style="grid-column:1/-1;">Keine Treffer gefunden.</div>`; return; }
    this.catalogGrid.innerHTML = items.map((item) => `<div class="catalog-card ${this.draftSelectionIds.includes(item.id) ? "selected" : ""}" data-catalog-id="${this.escapeHtml(item.id)}"><div class="catalog-head"><div class="catalog-icon">${this.renderPersonAvatar(item.avatar_variant, "catalog", item.pose)}</div><div class="checkmark">${this.draftSelectionIds.includes(item.id) ? "✓" : "+"}</div></div><div><div class="item-title">${this.escapeHtml(item.name)}</div><div class="item-sub">${this.escapeHtml(item.type)} • ${Number(item.base_xp)} Basis-XP</div></div><div class="meta">${this.escapeHtml(item.description)}</div></div>`).join("");
    this.catalogGrid.querySelectorAll(".catalog-card").forEach((card) => card.addEventListener("click", () => this.toggleCatalogSelection(card.dataset.catalogId)));
  }
  toggleCatalogSelection(catalogId) { if (!catalogId) return; this.draftSelectionIds = this.draftSelectionIds.includes(catalogId) ? this.draftSelectionIds.filter((id) => id !== catalogId) : [...this.draftSelectionIds, catalogId]; this.renderCatalogGrid(); this.renderDraftSelectionSummary(); }
  renderDraftSelectionSummary() {
    if (!this.draftSelectionIds.length) { this.selectedDraftWrap.innerHTML = `<div class="empty-box" style="width:100%;">Noch nichts ausgewählt. Öffne das Modal und wähle Übungen oder Geräte aus.</div>`; return; }
    this.selectedDraftWrap.innerHTML = this.draftSelectionIds.map((id) => { const item = this.getCatalogItem(id); if (!item) return ""; return `<span class="chip active"><span>${this.escapeHtml(item.name)}</span><button type="button" data-remove-id="${this.escapeHtml(item.id)}">✕</button></span>`; }).join("");
    this.selectedDraftWrap.querySelectorAll("button[data-remove-id]").forEach((btn) => btn.addEventListener("click", () => { this.draftSelectionIds = this.draftSelectionIds.filter((id) => id !== btn.dataset.removeId); this.renderCatalogGrid(); this.renderDraftSelectionSummary(); }));
  }

  async renderPlanDropdowns() {
    const plans = await this.db.getAll("plans");
    this.trainingPlanSelect.innerHTML = [`<option value="">Plan auswählen</option>`, ...plans.map((plan) => `<option value="${plan.id}">${this.escapeHtml(plan.name)}</option>`)].join("");
    if (plans.length && !this.selectedPlanId) { this.selectedPlanId = plans[0].id; this.trainingPlanSelect.value = String(plans[0].id); }
    else if (this.selectedPlanId) { const exists = plans.some((plan) => Number(plan.id) === Number(this.selectedPlanId)); this.selectedPlanId = exists ? this.selectedPlanId : (plans[0] ? plans[0].id : null); this.trainingPlanSelect.value = this.selectedPlanId ? String(this.selectedPlanId) : ""; }
  }

  async renderPlansList() {
    const plans = await this.db.getAll("plans");
    const exercises = await this.db.getAll("exercises");
    if (!plans.length) { this.plansList.innerHTML = `<div class="empty-box">Noch keine Pläne gespeichert.</div>`; return; }
    this.plansList.innerHTML = "";
    for (const plan of plans) {
      const planItems = exercises.filter((entry) => Number(entry.plan_id) === Number(plan.id));
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `<div class="item-head"><div><div class="item-title">${this.escapeHtml(plan.name)}</div><div class="item-sub">${planItems.length} Einträge gespeichert</div></div><div class="inline-row" style="justify-content:flex-end;"><button class="secondary tiny-btn" type="button" data-use-id="${plan.id}">Öffnen</button><button class="danger tiny-btn" type="button" data-delete-id="${plan.id}">Löschen</button></div></div><div class="selected-wrap" style="margin-top:10px;">${planItems.map((entry) => `<span class="chip"><span>${this.escapeHtml(entry.name)}</span></span>`).join("") || `<div class="subtle">Noch keine Einträge.</div>`}</div>`;
      item.querySelector("[data-use-id]").addEventListener("click", async () => { this.selectedPlanId = Number(plan.id); this.trainingPlanSelect.value = String(plan.id); await this.renderTrainingExercises(); this.switchView("training"); });
      item.querySelector("[data-delete-id]").addEventListener("click", async () => { await this.deletePlan(plan.id); });
      this.plansList.appendChild(item);
    }
  }

  async renderTrainingExercises() {
    this.trainingExercises.innerHTML = "";
    if (!this.selectedPlanId) { this.trainingExercises.innerHTML = `<div class="empty-box">Bitte zuerst einen Plan auswählen oder in "Pläne" einen neuen Plan speichern.</div>`; return; }
    const exercises = await this.db.getExercisesByPlan(this.selectedPlanId);
    const allLogs = await this.db.getAll("workout_logs");
    const todayKey = this.todayKey();
    if (!exercises.length) { this.trainingExercises.innerHTML = `<div class="empty-box">Für diesen Plan sind noch keine Übungen oder Geräte hinterlegt.</div>`; return; }
    for (const exercise of exercises) {
      const state = this.ensureTimerState(exercise.id);
      const todaySets = allLogs.filter((log) => Number(log.exercise_id) === Number(exercise.id) && String(log.date || "").slice(0, 10) === todayKey).length;
      const expanded = this.expandedExerciseIds.has(Number(exercise.id));
      const row = document.createElement("div");
      row.className = `exercise-card ${expanded ? "expanded" : ""}`;
      row.innerHTML = `<div class="exercise-summary" data-toggle-exercise-id="${exercise.id}">${this.renderPersonAvatar(exercise.avatar_variant || "female", "default", exercise.pose || inferPose(exercise))}<div class="exercise-summary-text"><div class="exercise-summary-top"><div><div class="item-title">${this.escapeHtml(exercise.name)}</div><div class="item-sub">${this.escapeHtml(exercise.type || "Übung")} • ${Number(exercise.base_xp || 0)} Basis-XP</div></div><div class="inline-row" style="justify-content:flex-end; gap:8px;"><div class="pill timer-pill" data-timer-exercise="${exercise.id}">${this.formatDuration(state.seconds)}</div><div class="pill">${expanded ? "Weniger" : "Mehr"}</div></div></div><div class="muted-line">Heute bereits ${todaySets} Satz${todaySets === 1 ? "" : "e"} gespeichert.</div><div class="details-hint">Tippe auf die Karte für Beschreibung, Stoppuhr und Eingabefelder.</div></div></div><div class="exercise-details"><div class="meta">${this.escapeHtml(exercise.description || "Keine Beschreibung gespeichert.")}</div><div class="grid-2"><div><label>Gewicht / Last (kg, optional)</label><input type="number" inputmode="decimal" min="0" step="0.5" placeholder="z. B. 60 oder 0" /></div><div><label>Wdh. / Runden</label><input type="number" inputmode="numeric" min="1" step="1" placeholder="z. B. 8 oder 1" /></div></div><div class="timer-wrap"><div class="timer-header"><div class="subtle">Stoppuhr für diese Übung / dieses Gerät</div><div class="timer-display" data-timer-exercise="${exercise.id}">${this.formatDuration(state.seconds)}</div></div><div class="timer-buttons"><button class="secondary" type="button" data-timer-action="start" data-exercise-id="${exercise.id}">Start</button><button class="warning" type="button" data-timer-action="pause" data-exercise-id="${exercise.id}">Pause</button><button class="danger" type="button" data-timer-action="reset" data-exercise-id="${exercise.id}">Reset</button></div></div><button type="button" data-save-set-id="${exercise.id}">Satz speichern</button></div>`;
      row.querySelector("[data-toggle-exercise-id]").addEventListener("click", async () => { await this.toggleExerciseDetails(exercise.id); });
      const [weightInput, repsInput] = row.querySelectorAll("input");
      row.querySelectorAll("[data-timer-action]").forEach((btn) => btn.addEventListener("click", () => { const action = btn.dataset.timerAction; const exerciseId = Number(btn.dataset.exerciseId); if (action === "start") this.startTimer(exerciseId); if (action === "pause") this.pauseTimer(exerciseId); if (action === "reset") this.resetTimer(exerciseId); }));
      row.querySelector("[data-save-set-id]").addEventListener("click", async () => { await this.handleSaveSet(exercise, weightInput.value, repsInput.value); weightInput.value = ""; repsInput.value = ""; });
      this.trainingExercises.appendChild(row);
    }
  }

  async renderRecentLogs() {
    const logs = await this.db.getAll("workout_logs");
    const exercises = await this.db.getAll("exercises");
    const byId = new Map(exercises.map((entry) => [Number(entry.id), entry]));
    const sorted = logs.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
    if (!sorted.length) { this.recentLogs.innerHTML = `<div class="empty-box">Noch keine Logs vorhanden.</div>`; return; }
    this.recentLogs.innerHTML = sorted.map((log) => { const exercise = byId.get(Number(log.exercise_id)) || { name: "Unbekannt", avatar_variant: "female" }; const volume = Number(log.weight_kg || 0) * Number(log.reps || 0); return `<div class="item"><div class="item-head"><div><div class="item-title" style="display:flex; align-items:center; gap:10px;">${this.renderPersonAvatar(exercise.avatar_variant || "female", "small", exercise.pose || inferPose(exercise))}<span>${this.escapeHtml(exercise.name || "Unbekannt")}</span></div><div class="subtle">${new Date(log.date).toLocaleString("de-DE")}</div></div><div class="pill">+${Number(log.xp_gained || 0)} XP</div></div><div class="muted-line">${Number(log.weight_kg || 0)} kg • ${Number(log.reps || 0)} Wdh./Runden • ${volume} Volumen • ${this.formatDuration(Number(log.duration_sec || 0))}</div></div>`; }).join("");
  }

  async renderProfile() {
    const stats = (await this.db.getUserStats()) || { current_level: 1, total_xp: 0 };
    const totalXp = Number(stats.total_xp || 0);
    const progress = FitnessLogic.levelProgress(totalXp);
    const plans = await this.db.getAll("plans");
    const logs = (await this.db.getAll("workout_logs")).sort((a, b) => new Date(a.date) - new Date(b.date));
    this.levelValue.textContent = String(progress.level); this.xpValue.textContent = String(totalXp); this.planCountValue.textContent = String(plans.length); this.setCountValue.textContent = String(logs.length); this.headerBadge.textContent = `Level ${progress.level}`; this.progressText.textContent = `${progress.progress} / ${progress.needed} XP`; this.remainingText.textContent = `${progress.remaining} XP bis Level ${progress.level + 1}`; this.progressFill.style.width = `${Math.max(0, Math.min(progress.ratio * 100, 100))}%`;
    this.lastWorkoutInfo.textContent = logs.length ? `Letzter gespeicherter Satz: ${new Date(logs[logs.length - 1].date).toLocaleString("de-DE")}` : "Noch keine Workouts gespeichert.";
    this.renderVolumeChart(logs);
  }

  groupWorkoutVolumeByDate(logs) {
    const map = new Map();
    for (const log of logs) {
      const date = new Date(log.date);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      map.set(key, (map.get(key) || 0) + Number(log.weight_kg || 0) * Number(log.reps || 0));
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([key, volume]) => ({ label: `${key.split("-")[2]}.${key.split("-")[1]}`, volume }));
  }

  renderVolumeChart(logs) {
    const canvas = this.chartCanvas;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(240 * dpr);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    const width = rect.width;
    const height = 240;
    ctx.clearRect(0, 0, width, height);
    const grouped = this.groupWorkoutVolumeByDate(logs).slice(-8);
    this.chartEmpty.style.display = grouped.length ? "none" : "block";
    if (!grouped.length) return;
    const padding = { top: 18, right: 16, bottom: 34, left: 40 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;
    const maxValue = Math.max(...grouped.map((g) => g.volume), 1);
    const barWidth = Math.max(18, chartW / grouped.length - 10);
    const step = chartW / grouped.length;
    ctx.strokeStyle = "rgba(255,255,255,0.10)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(padding.left, padding.top); ctx.lineTo(padding.left, padding.top + chartH); ctx.lineTo(padding.left + chartW, padding.top + chartH); ctx.stroke();
    ctx.fillStyle = "rgba(148,163,184,0.9)"; ctx.font = "12px sans-serif"; ctx.textAlign = "right"; ctx.fillText(String(maxValue), padding.left - 8, padding.top + 4); ctx.fillText("0", padding.left - 8, padding.top + chartH + 4);
    grouped.forEach((entry, index) => {
      const x = padding.left + index * step + (step - barWidth) / 2;
      const barH = (entry.volume / maxValue) * chartH;
      const y = padding.top + chartH - barH;
      const gradient = ctx.createLinearGradient(0, y, 0, y + barH);
      gradient.addColorStop(0, "rgba(56,189,248,0.95)");
      gradient.addColorStop(1, "rgba(34,197,94,0.85)");
      ctx.fillStyle = gradient;
      this.roundRect(ctx, x, y, barWidth, barH, 10, true, false);
      ctx.fillStyle = "rgba(248,250,252,0.95)"; ctx.textAlign = "center"; ctx.fillText(String(entry.volume), x + barWidth / 2, y - 6);
      ctx.fillStyle = "rgba(148,163,184,0.95)"; ctx.fillText(entry.label, x + barWidth / 2, padding.top + chartH + 18);
    });
  }

  roundRect(ctx, x, y, width, height, radius, fill, stroke) { const r = Math.min(radius, width / 2, height / 2); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + width, y, x + width, y + height, r); ctx.arcTo(x + width, y + height, x, y + height, r); ctx.arcTo(x, y + height, x, y, r); ctx.arcTo(x, y, x + width, y, r); ctx.closePath(); if (fill) ctx.fill(); if (stroke) ctx.stroke(); }
  ensureTimerState(exerciseId) { if (!this.timerStates.has(Number(exerciseId))) this.timerStates.set(Number(exerciseId), { seconds: 0, running: false }); return this.timerStates.get(Number(exerciseId)); }
  startTimer(exerciseId) { const state = this.ensureTimerState(exerciseId); state.running = true; this.updateTimerLabels(exerciseId); }
  pauseTimer(exerciseId) { const state = this.ensureTimerState(exerciseId); state.running = false; this.updateTimerLabels(exerciseId); }
  resetTimer(exerciseId) { const state = this.ensureTimerState(exerciseId); state.running = false; state.seconds = 0; this.updateTimerLabels(exerciseId); }
  async toggleExerciseDetails(exerciseId) { const key = Number(exerciseId); if (this.expandedExerciseIds.has(key)) this.expandedExerciseIds.delete(key); else this.expandedExerciseIds.add(key); await this.renderTrainingExercises(); }
  tickTimers() { this.timerStates.forEach((state, exerciseId) => { if (state.running) { state.seconds += 1; this.updateTimerLabels(exerciseId); } }); }
  updateTimerLabels(exerciseId) { const state = this.ensureTimerState(exerciseId); document.querySelectorAll(`[data-timer-exercise="${exerciseId}"]`).forEach((el) => { el.textContent = this.formatDuration(state.seconds); }); }
  formatDuration(seconds) { const value = Math.max(Number(seconds) || 0, 0); const hrs = Math.floor(value / 3600); const mins = Math.floor((value % 3600) / 60); const secs = value % 60; return hrs > 0 ? `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}` : `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`; }
  todayKey() { return new Date().toISOString().slice(0, 10); }

  async handleSavePlan() {
    const name = this.newPlanName.value.trim();
    if (!name) { this.showToast("Bitte zuerst einen Plannamen eingeben.", "error"); return; }
    if (!this.draftSelectionIds.length) { this.showToast("Bitte mindestens eine Übung oder ein Gerät auswählen.", "error"); return; }
    const planId = await this.db.add("plans", { name });
    for (const catalogId of this.draftSelectionIds) {
      const item = this.getCatalogItem(catalogId);
      if (!item) continue;
      await this.db.add("exercises", { plan_id: planId, name: item.name, type: item.type, avatar_variant: item.avatar_variant, pose: item.pose, description: item.description, base_xp: item.base_xp, catalog_id: item.id });
    }
    this.newPlanName.value = "";
    this.draftSelectionIds = [];
    this.selectedPlanId = Number(planId);
    await this.refreshAll();
    this.switchView("training");
    this.showToast("Plan gespeichert und direkt zum Training geladen.");
  }

  async handleSaveSet(exercise, weightRaw, repsRaw) {
    const weight = Number(String(weightRaw || "0").replace(",", "."));
    const reps = Number(repsRaw);
    const timerState = this.ensureTimerState(exercise.id);
    const durationSec = Number(timerState.seconds || 0);
    if (Number.isNaN(weight) || weight < 0) { this.showToast("Bitte ein gültiges Gewicht eingeben oder 0 verwenden.", "error"); return; }
    if (!reps || reps <= 0) { this.showToast("Bitte gültige Wiederholungen oder Runden eingeben.", "error"); return; }
    const xp = FitnessLogic.xpForSet(weight, reps, Number(exercise.base_xp || 0), durationSec);
    await this.db.add("workout_logs", { date: new Date().toISOString(), exercise_id: exercise.id, reps, weight_kg: weight, duration_sec: durationSec, xp_gained: xp });
    await this.db.updateUserStats(xp);
    this.resetTimer(exercise.id);
    await this.refreshAll();
    this.showToast(`Satz gespeichert. +${xp} XP`);
  }

  async deletePlan(planId) {
    const exercises = await this.db.getExercisesByPlan(planId);
    const logs = await this.db.getAll("workout_logs");
    for (const exercise of exercises) {
      for (const log of logs.filter((log) => Number(log.exercise_id) === Number(exercise.id))) await this.db.delete("workout_logs", log.id);
      this.timerStates.delete(Number(exercise.id));
      await this.db.delete("exercises", exercise.id);
    }
    await this.db.delete("plans", planId);
    if (Number(this.selectedPlanId) === Number(planId)) this.selectedPlanId = null;
    await this.refreshAll();
    this.showToast("Plan gelöscht.");
  }

  escapeHtml(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }
}

window.addEventListener("DOMContentLoaded", async () => {
  const app = new App();
  try {
    await app.init();
  } catch (error) {
    console.error(error);
    alert("Fehler beim Initialisieren der App. Bitte Seite neu laden.");
  }
});
