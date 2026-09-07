/*
  DEMO COMPETITIVE DATA
  Team names, rankings, colors, emblems, NEMESIS names, and base mech models are
  canon. Replace the clearly marked image paths and demo statistics as assets arrive.
*/
const competitiveData = {
  teams: [
    { rank: 1, name: "VANTA", tag: "VNT", region: "GLOBAL", points: 986, wins: 9, accent: "#8f72c6", secondary: "#f4f1ff", emblem: "assets/teams/vanta.png", showcase: "assets/teams/showcase/vanta-team.png" },
    { rank: 2, name: "SOVEREIGN", tag: "SVR", region: "GLOBAL", points: 891, wins: 7, accent: "#d0a34d", secondary: "#fff4d6", emblem: "assets/teams/sovereign.png", showcase: "assets/teams/showcase/sovereign-team.png" },
    { rank: 3, name: "KARMINE", tag: "KRM", region: "GLOBAL", points: 824, wins: 6, accent: "#d1353c", secondary: "#ff7068", emblem: "assets/teams/karmine.png", showcase: "assets/teams/showcase/karmine-team.png" },
    { rank: 4, name: "VOLT//EDGE", tag: "VTE", region: "GLOBAL", points: 748, wins: 5, accent: "#22b7c1", secondary: "#d6eb35", emblem: "assets/teams/volt-edge.png", showcase: "assets/teams/showcase/volt-edge-team.png" },
    { rank: 5, name: "NOVA CORE", tag: "NVC", region: "GLOBAL", points: 677, wins: 4, accent: "#438dce", secondary: "#f1843f", emblem: "assets/teams/nova-core.png", showcase: "assets/teams/showcase/nova-core-team.png" }
  ],
  nemesis: [
    {
      name: "VESPER",
      frame: "FRAME DATA PENDING",
      status: "TOP 3",
      sync: "—",
      record: "—",
      accent: "#9b6cff",
      glow: "rgba(155, 108, 255, 0.18)",
      description: "Pilot profile and performance details will be added when the official NEMESIS data arrives."
    },
    {
      name: "YUNA",
      frame: "FRAME DATA PENDING",
      status: "TOP 3",
      sync: "—",
      record: "—",
      accent: "#aeb6bf",
      glow: "rgba(174, 182, 191, 0.16)",
      description: "Pilot profile and performance details will be added when the official NEMESIS data arrives."
    },
    {
      name: "RAZE",
      frame: "FRAME DATA PENDING",
      status: "TOP 3",
      sync: "—",
      record: "—",
      accent: "#ff4a45",
      glow: "rgba(255, 74, 69, 0.18)",
      description: "Pilot profile and performance details will be added when the official NEMESIS data arrives."
    }
  ],
  mechs: [
    { name: "BULWARK", role: "DEFENSE", code: "BLW", accent: "#66f2ff", image: "assets/mechs/bulwark.png" },
    { name: "STRIKE", role: "ASSAULT", code: "STK", accent: "#ff4a45", image: "assets/mechs/strike.png" },
    { name: "VELO", role: "SPEED", code: "VLO", accent: "#d6eb35", image: "assets/mechs/velo.png" },
    { name: "HAVEN", role: "SUPPORT", code: "HVN", accent: "#52e0bd", image: "assets/mechs/haven.png" },
    { name: "SPECTER", role: "RECON", code: "SPC", accent: "#9b6cff", image: "assets/mechs/specter.png" },
    { name: "WARDEN", role: "CONTROL", code: "WRD", accent: "#f1843f", image: "assets/mechs/warden.png" }
  ]
};

const views = [...document.querySelectorAll("[data-view]")];
const routeButtons = [...document.querySelectorAll(".route-trigger")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const sectionTabs = [...document.querySelectorAll(".section-tab")];
const competitivePanels = [...document.querySelectorAll(".competitive-panel")];
const teamModal = document.querySelector("#team-modal");
const teamModalImage = document.querySelector("#team-modal-image");
const teamModalMedia = document.querySelector("#team-modal-media");
const teamModalPlaceholder = document.querySelector("#team-modal-placeholder");
let lastModalTrigger = null;

function teamCard(team) {
  return `
    <article class="team-card" style="--team-accent: ${team.accent}; --team-secondary: ${team.secondary}">
      <div class="team-topline">
        <span class="team-rank">RANK // ${String(team.rank).padStart(2, "0")}</span>
        <span>${team.region}</span>
      </div>
      <div class="team-emblem">
        <span aria-hidden="true">${team.tag}</span>
        <img src="${team.emblem}" alt="${team.name} team emblem" loading="lazy">
      </div>
      <h3>
        <button class="team-name" type="button" data-team-rank="${team.rank}" aria-label="Open ${team.name} team gallery">
          ${team.name}<span>VIEW TEAM ↗</span>
        </button>
      </h3>
      <div class="team-stats">
        <span><b>${team.points}</b>POINTS</span>
        <span><b>${team.wins}</b>EVENT WINS</span>
      </div>
    </article>`;
}

function renderTeams() {
  const teamGrid = document.querySelector("#team-grid");
  teamGrid.innerHTML = competitiveData.teams.map(teamCard).join("");
}

function renderStandings() {
  const chart = document.querySelector("#standings-chart");
  const maxPoints = Math.max(...competitiveData.teams.map((team) => team.points));

  chart.innerHTML = competitiveData.teams.map((team, index) => {
    const width = Math.max(8, (team.points / maxPoints) * 100);
    return `
      <div class="chart-row">
        <span class="chart-rank">${String(team.rank).padStart(2, "0")}</span>
        <span class="chart-team">${team.name}</span>
        <div class="chart-track" aria-hidden="true">
          <div class="chart-bar" style="--bar-width: ${width}%; --bar-accent: ${team.accent}; --row: ${index}"></div>
        </div>
        <span class="chart-score">${team.points}</span>
      </div>`;
  }).join("");
}

function nemesisCard(entry) {
  return `
    <article class="nemesis-card" data-mark="TOP 3" style="--nemesis-accent: ${entry.accent}; --nemesis-glow: ${entry.glow}">
      <div class="nemesis-content">
        <span class="nemesis-kicker">TOP 3 // NEMESIS</span>
        <h3>${entry.name}</h3>
        <p class="nemesis-class">${entry.frame}</p>
        <p class="nemesis-description">${entry.description}</p>
        <div class="nemesis-stats">
          <span><b>${entry.status}</b>STATUS</span>
          <span><b>${entry.sync}</b>SYNC</span>
          <span><b>${entry.record}</b>RECORD</span>
        </div>
      </div>
    </article>`;
}

function renderNemesis() {
  const grid = document.querySelector("#nemesis-grid");
  grid.innerHTML = competitiveData.nemesis.map(nemesisCard).join("");
}

function mechCard(mech, index) {
  return `
    <article class="mech-card" tabindex="0" style="--mech-accent: ${mech.accent}">
      <div class="mech-card-media">
        <img src="${mech.image}" alt="${mech.name} base mech model" loading="lazy">
        <div class="mech-placeholder" aria-hidden="true">
          <strong>${mech.code}</strong>
          <span>DROP IMAGE AT</span>
          <code>${mech.image}</code>
        </div>
      </div>
      <span class="mech-index">BASE MODEL // ${String(index + 1).padStart(2, "0")}</span>
      <div class="mech-card-copy">
        <h2>${mech.name}</h2>
        <p>${mech.role}</p>
      </div>
    </article>`;
}

function renderMechs() {
  const grid = document.querySelector("#mech-grid");
  grid.innerHTML = competitiveData.mechs.map(mechCard).join("");

  grid.querySelectorAll(".mech-card-media img").forEach((image) => {
    const media = image.closest(".mech-card-media");
    image.addEventListener("load", () => media.classList.add("has-image"));
    image.addEventListener("error", () => media.classList.remove("has-image"));
    if (image.complete && image.naturalWidth) media.classList.add("has-image");
  });
}

function openTeamModal(team, trigger) {
  lastModalTrigger = trigger;
  teamModal.style.setProperty("--modal-accent", team.accent);
  teamModal.style.setProperty("--modal-secondary", team.secondary);
  document.querySelector("#team-modal-title").textContent = team.name;
  document.querySelector("#team-modal-tag").textContent = `[${team.tag}]`;
  document.querySelector("#team-modal-rank").textContent = `PRO CIRCUIT RANK // ${String(team.rank).padStart(2, "0")}`;
  document.querySelector("#team-modal-path").textContent = team.showcase;

  const modalEmblem = document.querySelector("#team-modal-emblem");
  modalEmblem.src = team.emblem;
  modalEmblem.alt = `${team.name} team emblem`;

  teamModalMedia.classList.remove("has-image");
  teamModalImage.alt = `${team.name} team showcase`;
  teamModalImage.src = team.showcase;
  teamModalPlaceholder.hidden = false;
  teamModal.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector(".team-modal-close").focus();
}

function closeTeamModal() {
  if (teamModal.hidden) return;
  teamModal.hidden = true;
  teamModalImage.removeAttribute("src");
  document.body.classList.remove("modal-open");
  lastModalTrigger?.focus();
}

teamModalImage.addEventListener("load", () => {
  teamModalMedia.classList.add("has-image");
  teamModalPlaceholder.hidden = true;
});

teamModalImage.addEventListener("error", () => {
  teamModalMedia.classList.remove("has-image");
  teamModalPlaceholder.hidden = false;
});

document.querySelector("#team-grid").addEventListener("click", (event) => {
  const trigger = event.target.closest(".team-name");
  if (!trigger) return;
  const team = competitiveData.teams.find((entry) => entry.rank === Number(trigger.dataset.teamRank));
  if (team) openTeamModal(team, trigger);
});

document.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeTeamModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTeamModal();
  if (event.key === "Tab" && !teamModal.hidden) {
    event.preventDefault();
    document.querySelector(".team-modal-close").focus();
  }
});

function setRoute(route, updateHash = true) {
  const safeRoute = ["home", "competitive", "mechs"].includes(route) ? route : "home";

  closeTeamModal();

  views.forEach((view) => {
    const active = view.dataset.view === safeRoute;
    view.hidden = !active;
    view.classList.toggle("is-active", active);
  });

  navLinks.forEach((link) => {
    const active = link.dataset.route === safeRoute;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (updateHash) history.replaceState(null, "", `#${safeRoute}`);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function setCompetitivePanel(panelName) {
  const safePanel = panelName === "nemesis" ? "nemesis" : "teams";

  sectionTabs.forEach((tab) => {
    const active = tab.dataset.panel === safePanel;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  competitivePanels.forEach((panel) => {
    const active = panel.id === `${safePanel}-panel`;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

sectionTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setCompetitivePanel(tab.dataset.panel));
  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextTab = sectionTabs[(index + direction + sectionTabs.length) % sectionTabs.length];
    setCompetitivePanel(nextTab.dataset.panel);
    nextTab.focus();
  });
});

const music = document.querySelector("#site-music");
const musicToggle = document.querySelector("#music-toggle");
const musicLabel = document.querySelector("#music-label");
const heroTrailer = document.querySelector("#hero-trailer");

music.volume = 0.35;

function updateMusicButton(playing) {
  musicToggle.setAttribute("aria-pressed", String(playing));
  musicToggle.setAttribute("aria-label", playing ? "Pause site music" : "Play site music");
  musicLabel.textContent = playing ? "AUDIO // ON" : "AUDIO // OFF";
}

heroTrailer.addEventListener("play", () => {
  if (!music.paused) {
    music.pause();
    updateMusicButton(false);
  }
});

musicToggle.addEventListener("click", async () => {
  if (!music.paused) {
    music.pause();
    updateMusicButton(false);
    return;
  }

  try {
    await music.play();
    updateMusicButton(true);
  } catch (error) {
    musicLabel.textContent = "ADD MUSIC FILE";
    musicToggle.setAttribute("aria-label", "Music file not found");
    console.info("Add your soundtrack at assets/music/nexus-theme.mp3", error);
  }
});

music.addEventListener("ended", () => updateMusicButton(false));
document.querySelector("#current-year").textContent = new Date().getFullYear();

renderTeams();
renderStandings();
renderNemesis();
renderMechs();

const initialHash = window.location.hash.replace("#", "");
const initialRoute = ["home", "competitive", "mechs"].includes(initialHash) ? initialHash : "home";
setRoute(initialRoute, false);
