/*
  SHOWCASE LIGHTBOX BUILD // 5.2.4

  DEMO COMPETITIVE DATA
  Team names, rankings, colors, emblems, NEMESIS names, and base mech models are
  canon. Replace the clearly marked image paths and demo statistics as assets arrive.
*/
const NEXUS_APP_VERSION = "5.2.4";
const SITE_ROUTES = new Set(["home", "competitive", "mechs", "store"]);

document.documentElement.dataset.nexusAppVersion = NEXUS_APP_VERSION;
console.info(`NEXUS client ${NEXUS_APP_VERSION} loaded`);

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
      frame: "INDEPENDENT",
      status: "TOP 3",
      threat: "APEX",
      accent: "#9b6cff",
      glow: "rgba(155, 108, 255, 0.18)",
      quote: "Some see chaos. I see potential.",
      profile: "assets/nemesis/vesper-profile.png"
    },
    {
      name: "YUNA",
      frame: "INDEPENDENT",
      status: "TOP 3",
      threat: "APEX",
      accent: "#aeb6bf",
      glow: "rgba(174, 182, 191, 0.16)",
      quote: "Discipline creates freedom.",
      profile: "assets/nemesis/yuna-profile.png"
    },
    {
      name: "RAZE",
      frame: "INDEPENDENT",
      status: "TOP 3",
      threat: "APEX",
      accent: "#ff4a45",
      glow: "rgba(255, 74, 69, 0.18)",
      quote: "Pressure creates a clearer me.",
      profile: "assets/nemesis/raze-profile.png"
    }
  ],
  mechs: [
    { name: "BULWARK", role: "DEFENSE", code: "BLW", accent: "#66f2ff", image: "assets/mechs/bulwark.png" },
    { name: "STRIKE", role: "ASSAULT", code: "STK", accent: "#ff4a45", image: "assets/mechs/strike.png" },
    { name: "VELO", role: "SPEED", code: "VLO", accent: "#d6eb35", image: "assets/mechs/velo.png" },
    { name: "HAVEN", role: "SUPPORT", code: "HVN", accent: "#52e0bd", image: "assets/mechs/haven.png" },
    { name: "SPECTER", role: "RECON", code: "SPC", accent: "#9b6cff", image: "assets/mechs/specter.png" },
    { name: "WARDEN", role: "CONTROL", code: "WRD", accent: "#f1843f", image: "assets/mechs/warden.png" }
  ],
  store: {
    featured: {
      key: "featured",
      name: "NEXUS × PlatNEm",
      type: "COLLAB BUNDLE",
      price: "20,000 NX",
      tier: "TIER // PREMIUM",
      accent: "#bcff4a",
      image: "assets/platnem/platnem.png",
      images: [
        "assets/platnem/platnem.png",
        "assets/platnem/weapon.png",
        "assets/platnem/title.png"
      ],
      review: {
        label: "STREAMER REVIEW // TRANSMISSION",
        quote: `I’ve logged more hours in full-dive titles than I care to admit, and most eventually blur into the same shallow loop. NEXUS doesn’t. Its human-sized Frames make every boost, slide, impact, and direction change feel physical. You aren’t commanding a machine—you are the machine.

Movement, gunplay, and Frame building are deep without feeling arbitrary. Momentum demands commitment, weapons have distinct behavior, and every loadout decision matters. Beyond the arena, DIVE feels like a real place where you can compete, explore, or simply exist.

Demanding, immersive, and never shallow. Log in. The arena is waiting. So is everything beyond it. 10/10.`,
        author: "STREAMER NAME // Plat",
        handle: "@PlatNEm"
      }
    },
    items: [
      { key: "bundle-1", name: "TAIGA", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#ff9d45", image: "assets/mechs/taiga.png" },
      { key: "bundle-2", name: "FRAME BUNDLE 02", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#66f2ff", image: "assets/mechs/frame-bundle-02.png" },
      { key: "bundle-3", name: "MIDAS", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#d0a34d", image: "assets/mechs/midas.png" },
      { key: "bundle-4", name: "FRAME BUNDLE 04", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#ff4a45", image: "assets/mechs/frame-bundle-04.png" },
      { key: "bundle-5", name: "CHROMA", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#9b6cff", image: "assets/mechs/chroma.png" },
      { key: "bundle-6", name: "FRAME BUNDLE 06", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#aeb6bf", image: "assets/mechs/frame-bundle-06.png" },
      { key: "bundle-7", name: "RUST", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#c46f46", image: "assets/mechs/rust.png" },
      { key: "bundle-8", name: "FRAME BUNDLE 08", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#67a5bc", image: "assets/mechs/frame-bundle-08.png" },
      { key: "bundle-9", name: "FRAME BUNDLE 09", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#9b6cff", image: "assets/mechs/frame-bundle-09.png" },
      { key: "bundle-10", name: "FRAME BUNDLE 10", type: "FRAME BUNDLE", price: "15,000 NX", tier: "TIER // NEXUS", accent: "#bcff4a", image: "assets/mechs/frame-bundle-10.png" }
    ],
    titles: [
      { key: "title-1", name: "Hazard", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#bcff4a", image: "assets/titles/hazard.png", imageFallbacks: ["assets/titles/Hazard.png"] },
      { key: "title-2", name: "Eternal", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#66f2ff", image: "assets/titles/eternal.png", imageFallbacks: ["assets/titles/Eternal.png"] },
      { key: "title-3", name: "Void", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#9b6cff", image: "assets/titles/void.png", imageFallbacks: ["assets/titles/Void.png"] },
      { key: "title-4", name: "Apex", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#ff4a45", image: "assets/titles/apex.png", imageFallbacks: ["assets/titles/Apex.png"] },
      { key: "title-5", name: "Royal Flush", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#f1843f", image: "assets/titles/royal flush.png", imageFallbacks: ["assets/titles/Royal Flush.png", "assets/titles/royal-flush.png"] },
      { key: "title-6", name: "You Died", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#aeb6bf", image: "assets/titles/you died.png", imageFallbacks: ["assets/titles/You Died.png", "assets/titles/you-died.png"] },
      { key: "title-7", name: "Zero", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#d6eb35", image: "assets/titles/zero.png", imageFallbacks: ["assets/titles/Zero.png"] },
      { key: "title-8", name: "Immortal", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#438dce", image: "assets/titles/immortal.png", imageFallbacks: ["assets/titles/Immortal.png"] },
      { key: "title-9", name: "Divine", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#52e0bd", image: "assets/titles/divine.png", imageFallbacks: ["assets/titles/Divine.png"] },
      { key: "title-10", name: "Paragon", type: "PLAYER TITLE", price: "3,000 NX", tier: "TIER // NEXUS", accent: "#d0a34d", image: "assets/titles/paragon.png", imageFallbacks: ["assets/titles/Paragon.png"] }
    ]
  }
};

const NX_PACKAGES = [
  { amount: "450NX", price: "$4.99" },
  { amount: "950NX", price: "$9.99" },
  { amount: "1,450NX", price: "$14.99" },
  { amount: "1,950NX", price: "$19.99" },
  { amount: "2,950NX", price: "$29.99" },
  { amount: "4,950NX", price: "$49.99" },
  { amount: "9,950NX", price: "$99.99" }
];

const views = [...document.querySelectorAll("[data-view]")];
const routeButtons = [...document.querySelectorAll(".route-trigger")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const competitiveTabs = [...document.querySelectorAll("#competitive-view .section-tab")];
const competitivePanels = [...document.querySelectorAll(".competitive-panel")];
const storeTabs = [...document.querySelectorAll("#store-view .store-section-tab")];
const storePanels = [...document.querySelectorAll(".store-panel")];
const teamModal = document.querySelector("#team-modal");
const teamModalImage = document.querySelector("#team-modal-image");
const teamModalMedia = document.querySelector("#team-modal-media");
const teamModalPlaceholder = document.querySelector("#team-modal-placeholder");
const pilotModal = document.querySelector("#pilot-modal");
const pilotModalImage = document.querySelector("#pilot-modal-image");
const pilotModalMedia = document.querySelector("#pilot-modal-media");
const pilotModalPlaceholder = document.querySelector("#pilot-modal-placeholder");
const cosmeticModal = document.querySelector("#cosmetic-modal");
const cosmeticModalImage = document.querySelector("#cosmetic-modal-image");
const cosmeticModalMedia = document.querySelector("#cosmetic-modal-media");
const cosmeticModalPlaceholder = document.querySelector("#cosmetic-modal-placeholder");
const cosmeticFeaturedGallery = document.querySelector("#cosmetic-featured-gallery");
const cosmeticReview = document.querySelector("#cosmetic-review");
const cosmeticImageModal = document.querySelector("#cosmetic-image-modal");
const cosmeticImageModalImage = document.querySelector("#cosmetic-image-modal-image");
const cosmeticImageModalMedia = document.querySelector("#cosmetic-image-modal-media");
const cosmeticImageModalPlaceholder = document.querySelector("#cosmetic-image-modal-placeholder");
const nxModal = document.querySelector("#nx-modal");
const allModals = [cosmeticImageModal, teamModal, pilotModal, cosmeticModal, nxModal].filter(Boolean);
let lastTeamModalTrigger = null;
let lastPilotModalTrigger = null;
let lastCosmeticModalTrigger = null;
let lastCosmeticImageModalTrigger = null;
let lastNxModalTrigger = null;

function syncModalOpenState() {
  document.body.classList.toggle("modal-open", allModals.some((modal) => !modal.hidden));
}

function activeModal() {
  return allModals.find((modal) => !modal.hidden) || null;
}

function trapModalFocus(event, modal) {
  const focusable = [...modal.querySelectorAll('button:not([tabindex="-1"]), a[href], [tabindex]:not([tabindex="-1"])')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

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
      <button class="nemesis-open" type="button" data-pilot="${entry.name}" aria-label="Open ${entry.name} NEMESIS profile">
        <span class="sr-only">Open ${entry.name} profile</span>
      </button>
      <div class="nemesis-content">
        <span class="nemesis-kicker">TOP 3 // NEMESIS</span>
        <h3>${entry.name}</h3>
        <p class="nemesis-class">${entry.frame}</p>
        <blockquote class="nemesis-description">“${entry.quote}”</blockquote>
        <div class="nemesis-stats">
          <span><b>${entry.status}</b>STATUS</span>
          <span><b>${entry.threat}</b>THREAT LEVEL</span>
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

function storeImageState(container) {
  const image = container.querySelector("img");
  const fallbackSources = (image.dataset.imageFallbacks || "").split("||").filter(Boolean);
  let fallbackIndex = 0;

  image.addEventListener("load", () => {
    container.classList.add("has-image");

    const key = container.closest("article")?.querySelector(".store-open")?.dataset.cosmeticKey;
    const item = key ? findCosmetic(key) : null;
    if (item) item.image = image.getAttribute("src");
  });

  image.addEventListener("error", () => {
    if (fallbackIndex < fallbackSources.length) {
      image.src = fallbackSources[fallbackIndex];
      fallbackIndex += 1;
      return;
    }

    container.classList.remove("has-image");
  });
  if (image.complete && image.naturalWidth) container.classList.add("has-image");
}

function renderStore() {
  const featured = competitiveData.store.featured;
  const featuredSlot = document.querySelector("#store-feature");
  featuredSlot.innerHTML = `
    <article class="store-feature" style="--store-accent: ${featured.accent}">
      <button class="store-open" type="button" data-cosmetic-key="${featured.key}" aria-label="Enlarge ${featured.name}">
        <span class="sr-only">Enlarge ${featured.name}</span>
      </button>
      <div class="store-media">
        <img src="${featured.image}" alt="${featured.name} cosmetic bundle" loading="lazy">
        <div class="store-placeholder" aria-hidden="true">
          <strong>PN</strong>
          <span>DROP FEATURED BANNER AT</span>
          <code>${featured.image}</code>
        </div>
      </div>
      <span class="store-slot">${featured.tier}</span>
      <div class="store-card-copy">
        <p>${featured.price}</p>
        <h2>${featured.name}</h2>
      </div>
    </article>`;

  const grid = document.querySelector("#store-grid");
  grid.innerHTML = competitiveData.store.items.map((item, index) => `
    <article class="store-card${index >= 6 ? " store-card--double" : ""}" style="--store-accent: ${item.accent}">
      <button class="store-open" type="button" data-cosmetic-key="${item.key}" aria-label="Enlarge ${item.name}">
        <span class="sr-only">Enlarge ${item.name}</span>
      </button>
      <div class="store-media">
        <img src="${item.image}" alt="${item.name} store cosmetic" loading="lazy">
        <div class="store-placeholder" aria-hidden="true">
          <strong>${String(index + 1).padStart(2, "0")}</strong>
          <span>DROP COSMETIC IMAGE AT</span>
          <code>${item.image}</code>
        </div>
      </div>
      <span class="store-slot">${item.tier}</span>
      <div class="store-card-copy">
        <p>${item.price}</p>
        <h3>${item.name}</h3>
      </div>
    </article>`).join("");

  const titleGrid = document.querySelector("#title-grid");
  titleGrid.innerHTML = competitiveData.store.titles.map((item, index) => `
    <article class="title-card" style="--store-accent: ${item.accent}">
      <button class="store-open" type="button" data-cosmetic-key="${item.key}" aria-label="Enlarge ${item.name}">
        <span class="sr-only">Enlarge ${item.name}</span>
      </button>
      <div class="store-media">
        <img src="${item.image}" data-image-fallbacks="${(item.imageFallbacks || []).join("||")}" alt="${item.name} banner cosmetic" loading="lazy">
        <div class="store-placeholder" aria-hidden="true">
          <strong>${String(index + 1).padStart(2, "0")}</strong>
          <span>DROP PLAYER TITLE IMAGE AT</span>
          <code>${item.image}</code>
        </div>
      </div>
      <span class="store-slot">${item.tier}</span>
      <div class="store-card-copy">
        <p>${item.price}</p>
        <h3>${item.name}</h3>
      </div>
    </article>`).join("");

  document.querySelectorAll("#store-view .store-media").forEach(storeImageState);
}

function renderNxPackages() {
  document.querySelector("#nx-options").innerHTML = NX_PACKAGES.map((pack) => `
    <a class="nx-option" href="https://ko-fi.com/vycemugen" target="_blank" rel="noopener noreferrer" aria-label="Buy ${pack.amount} for ${pack.price}">
      <strong>${pack.amount}</strong>
      <span>${pack.price}</span>
      <small>CONTINUE ↗</small>
    </a>`).join("");
}

function openTeamModal(team, trigger) {
  lastTeamModalTrigger = trigger;
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
  syncModalOpenState();
  lastTeamModalTrigger?.focus();
}

function openPilotModal(pilot, trigger) {
  lastPilotModalTrigger = trigger;
  pilotModal.style.setProperty("--modal-accent", pilot.accent);
  pilotModal.style.setProperty("--modal-secondary", "#edf3f5");
  document.querySelector("#pilot-modal-title").textContent = pilot.name;
  document.querySelector("#pilot-modal-quote").textContent = `“${pilot.quote}”`;
  document.querySelector("#pilot-modal-path").textContent = pilot.profile;

  pilotModalMedia.classList.remove("has-image");
  pilotModalImage.alt = `${pilot.name} NEMESIS pilot profile`;
  pilotModalImage.src = pilot.profile;
  pilotModalPlaceholder.hidden = false;
  pilotModal.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector(".pilot-modal-close").focus();
}

function closePilotModal() {
  if (pilotModal.hidden) return;
  pilotModal.hidden = true;
  pilotModalImage.removeAttribute("src");
  syncModalOpenState();
  lastPilotModalTrigger?.focus();
}

function findCosmetic(key) {
  if (competitiveData.store.featured.key === key) return competitiveData.store.featured;
  return [...competitiveData.store.items, ...competitiveData.store.titles].find((item) => item.key === key);
}

function openCosmeticModal(item, trigger) {
  lastCosmeticModalTrigger = trigger;
  const isFeaturedBundle = Array.isArray(item.images) && item.images.length > 1;
  cosmeticModal.style.setProperty("--modal-accent", item.accent);
  cosmeticModal.style.setProperty("--modal-secondary", "#edf3f5");
  cosmeticModal.classList.toggle("is-featured", isFeaturedBundle);
  document.querySelector("#cosmetic-modal-type").textContent = item.type;
  document.querySelector("#cosmetic-modal-title").textContent = item.name;
  document.querySelector("#cosmetic-modal-price").textContent = item.price;
  document.querySelector("#cosmetic-modal-tier").textContent = item.tier;
  cosmeticReview.hidden = !isFeaturedBundle;

  if (isFeaturedBundle) {
    document.querySelector("#cosmetic-review-label").textContent = item.review.label;
    document.querySelector("#cosmetic-review-quote").textContent = item.review.quote;
    document.querySelector("#cosmetic-review-author").textContent = item.review.author;
    document.querySelector("#cosmetic-review-handle").textContent = item.review.handle;
    cosmeticModalImage.removeAttribute("src");
    cosmeticModalImage.hidden = true;
    cosmeticModalPlaceholder.hidden = true;
    cosmeticModalMedia.classList.remove("has-image");
    cosmeticFeaturedGallery.innerHTML = item.images.map((path, index) => `
      <figure class="cosmetic-gallery-item">
        <button class="cosmetic-gallery-open" type="button" data-gallery-path="${path}" data-gallery-label="${item.name}" data-gallery-index="${index + 1}" data-gallery-total="${item.images.length}" aria-label="View ${item.name} showcase image ${index + 1} full screen">
          <img src="${path}" alt="${item.name} showcase image ${index + 1}">
          <span class="cosmetic-gallery-placeholder">
            <span>SHOWCASE IMAGE ${String(index + 1).padStart(2, "0")}</span>
            <code>${path}</code>
          </span>
        </button>
      </figure>`).join("");
    cosmeticFeaturedGallery.hidden = false;
    cosmeticFeaturedGallery.querySelectorAll("img").forEach((image) => {
      const itemFrame = image.closest(".cosmetic-gallery-item");
      image.addEventListener("load", () => itemFrame.classList.add("has-image"));
      image.addEventListener("error", () => itemFrame.classList.remove("has-image"));
      if (image.complete && image.naturalWidth) itemFrame.classList.add("has-image");
    });
  } else {
    document.querySelector("#cosmetic-modal-path").textContent = item.image;
    cosmeticFeaturedGallery.hidden = true;
    cosmeticFeaturedGallery.innerHTML = "";
    cosmeticModalImage.hidden = false;
    cosmeticModalMedia.classList.remove("has-image");
    cosmeticModalImage.alt = `${item.name} cosmetic preview`;
    cosmeticModalImage.src = item.image;
    cosmeticModalPlaceholder.hidden = false;
  }

  cosmeticModal.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector(".cosmetic-modal-close").focus();
}

function closeCosmeticModal() {
  if (cosmeticModal.hidden) return;
  cosmeticModal.hidden = true;
  cosmeticModal.classList.remove("is-featured");
  cosmeticModalImage.removeAttribute("src");
  cosmeticModalImage.hidden = false;
  cosmeticFeaturedGallery.hidden = true;
  cosmeticFeaturedGallery.innerHTML = "";
  cosmeticReview.hidden = true;
  syncModalOpenState();
  lastCosmeticModalTrigger?.focus();
}

function openCosmeticImageModal(path, label, index, total, trigger) {
  if (!cosmeticImageModal || !cosmeticImageModalImage || !cosmeticImageModalMedia || !cosmeticImageModalPlaceholder) {
    window.open(path, "_blank", "noopener,noreferrer");
    return;
  }
  lastCosmeticImageModalTrigger = trigger;
  const modalTitle = document.querySelector("#cosmetic-image-modal-title");
  const modalCount = document.querySelector("#cosmetic-image-modal-count");
  const modalPath = document.querySelector("#cosmetic-image-modal-path");
  if (modalTitle) modalTitle.textContent = label;
  if (modalCount) modalCount.textContent = `SHOWCASE IMAGE // ${String(index).padStart(2, "0")} OF ${String(total).padStart(2, "0")}`;
  if (modalPath) modalPath.textContent = path;
  cosmeticImageModalMedia.classList.remove("has-image");
  cosmeticImageModalPlaceholder.hidden = false;
  cosmeticImageModalImage.alt = `${label} showcase image ${index} of ${total}`;
  cosmeticImageModalImage.src = path;
  cosmeticImageModal.hidden = false;
  syncModalOpenState();
  document.querySelector(".cosmetic-image-modal-close")?.focus();
}

function closeCosmeticImageModal() {
  if (!cosmeticImageModal || cosmeticImageModal.hidden) return;
  cosmeticImageModal.hidden = true;
  cosmeticImageModalImage?.removeAttribute("src");
  cosmeticImageModalMedia?.classList.remove("has-image");
  syncModalOpenState();
  lastCosmeticImageModalTrigger?.focus();
}

function openNxModal(trigger) {
  lastNxModalTrigger = trigger;
  nxModal.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector(".nx-modal-close").focus();
}

function closeNxModal() {
  if (nxModal.hidden) return;
  nxModal.hidden = true;
  syncModalOpenState();
  lastNxModalTrigger?.focus();
}

teamModalImage.addEventListener("load", () => {
  teamModalMedia.classList.add("has-image");
  teamModalPlaceholder.hidden = true;
});

teamModalImage.addEventListener("error", () => {
  teamModalMedia.classList.remove("has-image");
  teamModalPlaceholder.hidden = false;
});

pilotModalImage.addEventListener("load", () => {
  pilotModalMedia.classList.add("has-image");
  pilotModalPlaceholder.hidden = true;
});

pilotModalImage.addEventListener("error", () => {
  pilotModalMedia.classList.remove("has-image");
  pilotModalPlaceholder.hidden = false;
});

cosmeticModalImage.addEventListener("load", () => {
  if (cosmeticModal.classList.contains("is-featured")) return;
  cosmeticModalMedia.classList.add("has-image");
  cosmeticModalPlaceholder.hidden = true;
});

cosmeticModalImage.addEventListener("error", () => {
  if (cosmeticModal.classList.contains("is-featured")) return;
  cosmeticModalMedia.classList.remove("has-image");
  cosmeticModalPlaceholder.hidden = false;
});

if (cosmeticImageModalImage && cosmeticImageModalMedia && cosmeticImageModalPlaceholder) {
  cosmeticImageModalImage.addEventListener("load", () => {
    cosmeticImageModalMedia.classList.add("has-image");
    cosmeticImageModalPlaceholder.hidden = true;
  });

  cosmeticImageModalImage.addEventListener("error", () => {
    cosmeticImageModalMedia.classList.remove("has-image");
    cosmeticImageModalPlaceholder.hidden = false;
  });
}

document.querySelector("#team-grid").addEventListener("click", (event) => {
  const trigger = event.target.closest(".team-name");
  if (!trigger) return;
  const team = competitiveData.teams.find((entry) => entry.rank === Number(trigger.dataset.teamRank));
  if (team) openTeamModal(team, trigger);
});

document.querySelector("#nemesis-grid").addEventListener("click", (event) => {
  const trigger = event.target.closest(".nemesis-open");
  if (!trigger) return;
  const pilot = competitiveData.nemesis.find((entry) => entry.name === trigger.dataset.pilot);
  if (pilot) openPilotModal(pilot, trigger);
});

document.querySelector("#store-view").addEventListener("click", (event) => {
  const trigger = event.target.closest(".store-open");
  if (!trigger) return;
  const item = findCosmetic(trigger.dataset.cosmeticKey);
  if (item) openCosmeticModal(item, trigger);
});

cosmeticFeaturedGallery?.addEventListener("click", (event) => {
  const trigger = event.target.closest(".cosmetic-gallery-open");
  if (!trigger) return;
  openCosmeticImageModal(
    trigger.dataset.galleryPath,
    trigger.dataset.galleryLabel,
    Number(trigger.dataset.galleryIndex),
    Number(trigger.dataset.galleryTotal),
    trigger
  );
});

document.querySelector("#buy-nx-button").addEventListener("click", (event) => openNxModal(event.currentTarget));

document.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeTeamModal));
document.querySelectorAll("[data-pilot-modal-close]").forEach((button) => button.addEventListener("click", closePilotModal));
document.querySelectorAll("[data-cosmetic-modal-close]").forEach((button) => button.addEventListener("click", closeCosmeticModal));
document.querySelectorAll("[data-cosmetic-image-close]").forEach((button) => button.addEventListener("click", closeCosmeticImageModal));
document.querySelectorAll("[data-nx-modal-close]").forEach((button) => button.addEventListener("click", closeNxModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (cosmeticImageModal && !cosmeticImageModal.hidden) {
      closeCosmeticImageModal();
      return;
    }
    closeTeamModal();
    closePilotModal();
    closeCosmeticModal();
    closeNxModal();
  }
  if (event.key === "Tab" && activeModal()) trapModalFocus(event, activeModal());
});

function setRoute(route, updateHash = true) {
  const safeRoute = SITE_ROUTES.has(route) ? route : "home";

  closeTeamModal();
  closePilotModal();
  closeCosmeticImageModal();
  closeCosmeticModal();
  closeNxModal();

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

  competitiveTabs.forEach((tab) => {
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

function setStorePanel(panelName) {
  const safePanel = panelName === "player-titles" ? "player-titles" : "frame-bundles";

  storeTabs.forEach((tab) => {
    const active = tab.dataset.storePanel === safePanel;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  storePanels.forEach((panel) => {
    const active = panel.id === `${safePanel}-panel`;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

competitiveTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setCompetitivePanel(tab.dataset.panel));
  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextTab = competitiveTabs[(index + direction + competitiveTabs.length) % competitiveTabs.length];
    setCompetitivePanel(nextTab.dataset.panel);
    nextTab.focus();
  });
});

storeTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setStorePanel(tab.dataset.storePanel));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextTab = storeTabs[(index + direction + storeTabs.length) % storeTabs.length];
    setStorePanel(nextTab.dataset.storePanel);
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
    console.info("Add your soundtrack at assets/music/theme.mp3", error);
  }
});

music.addEventListener("ended", () => updateMusicButton(false));
document.querySelector("#current-year").textContent = new Date().getFullYear();

renderTeams();
renderStandings();
renderNemesis();
renderMechs();
renderStore();
renderNxPackages();

const initialHash = window.location.hash.replace("#", "");
const initialRoute = SITE_ROUTES.has(initialHash) ? initialHash : "home";
setRoute(initialRoute, false);
