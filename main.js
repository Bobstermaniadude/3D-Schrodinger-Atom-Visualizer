// --- Element data & lookup ---
// Full periodic table: Z = 1–118

const ELEMENTS = [
  { Z: 1, symbol: "H", name: "Hydrogen" },
  { Z: 2, symbol: "He", name: "Helium" },
  { Z: 3, symbol: "Li", name: "Lithium" },
  { Z: 4, symbol: "Be", name: "Beryllium" },
  { Z: 5, symbol: "B", name: "Boron" },
  { Z: 6, symbol: "C", name: "Carbon" },
  { Z: 7, symbol: "N", name: "Nitrogen" },
  { Z: 8, symbol: "O", name: "Oxygen" },
  { Z: 9, symbol: "F", name: "Fluorine" },
  { Z: 10, symbol: "Ne", name: "Neon" },
  { Z: 11, symbol: "Na", name: "Sodium" },
  { Z: 12, symbol: "Mg", name: "Magnesium" },
  { Z: 13, symbol: "Al", name: "Aluminium" },
  { Z: 14, symbol: "Si", name: "Silicon" },
  { Z: 15, symbol: "P", name: "Phosphorus" },
  { Z: 16, symbol: "S", name: "Sulfur" },
  { Z: 17, symbol: "Cl", name: "Chlorine" },
  { Z: 18, symbol: "Ar", name: "Argon" },
  { Z: 19, symbol: "K", name: "Potassium" },
  { Z: 20, symbol: "Ca", name: "Calcium" },
  { Z: 21, symbol: "Sc", name: "Scandium" },
  { Z: 22, symbol: "Ti", name: "Titanium" },
  { Z: 23, symbol: "V", name: "Vanadium" },
  { Z: 24, symbol: "Cr", name: "Chromium" },
  { Z: 25, symbol: "Mn", name: "Manganese" },
  { Z: 26, symbol: "Fe", name: "Iron" },
  { Z: 27, symbol: "Co", name: "Cobalt" },
  { Z: 28, symbol: "Ni", name: "Nickel" },
  { Z: 29, symbol: "Cu", name: "Copper" },
  { Z: 30, symbol: "Zn", name: "Zinc" },
  { Z: 31, symbol: "Ga", name: "Gallium" },
  { Z: 32, symbol: "Ge", name: "Germanium" },
  { Z: 33, symbol: "As", name: "Arsenic" },
  { Z: 34, symbol: "Se", name: "Selenium" },
  { Z: 35, symbol: "Br", name: "Bromine" },
  { Z: 36, symbol: "Kr", name: "Krypton" },
  { Z: 37, symbol: "Rb", name: "Rubidium" },
  { Z: 38, symbol: "Sr", name: "Strontium" },
  { Z: 39, symbol: "Y", name: "Yttrium" },
  { Z: 40, symbol: "Zr", name: "Zirconium" },
  { Z: 41, symbol: "Nb", name: "Niobium" },
  { Z: 42, symbol: "Mo", name: "Molybdenum" },
  { Z: 43, symbol: "Tc", name: "Technetium" },
  { Z: 44, symbol: "Ru", name: "Ruthenium" },
  { Z: 45, symbol: "Rh", name: "Rhodium" },
  { Z: 46, symbol: "Pd", name: "Palladium" },
  { Z: 47, symbol: "Ag", name: "Silver" },
  { Z: 48, symbol: "Cd", name: "Cadmium" },
  { Z: 49, symbol: "In", name: "Indium" },
  { Z: 50, symbol: "Sn", name: "Tin" },
  { Z: 51, symbol: "Sb", name: "Antimony" },
  { Z: 52, symbol: "Te", name: "Tellurium" },
  { Z: 53, symbol: "I", name: "Iodine" },
  { Z: 54, symbol: "Xe", name: "Xenon" },
  { Z: 55, symbol: "Cs", name: "Cesium" },
  { Z: 56, symbol: "Ba", name: "Barium" },
  { Z: 57, symbol: "La", name: "Lanthanum" },
  { Z: 58, symbol: "Ce", name: "Cerium" },
  { Z: 59, symbol: "Pr", name: "Praseodymium" },
  { Z: 60, symbol: "Nd", name: "Neodymium" },
  { Z: 61, symbol: "Pm", name: "Promethium" },
  { Z: 62, symbol: "Sm", name: "Samarium" },
  { Z: 63, symbol: "Eu", name: "Europium" },
  { Z: 64, symbol: "Gd", name: "Gadolinium" },
  { Z: 65, symbol: "Tb", name: "Terbium" },
  { Z: 66, symbol: "Dy", name: "Dysprosium" },
  { Z: 67, symbol: "Ho", name: "Holmium" },
  { Z: 68, symbol: "Er", name: "Erbium" },
  { Z: 69, symbol: "Tm", name: "Thulium" },
  { Z: 70, symbol: "Yb", name: "Ytterbium" },
  { Z: 71, symbol: "Lu", name: "Lutetium" },
  { Z: 72, symbol: "Hf", name: "Hafnium" },
  { Z: 73, symbol: "Ta", name: "Tantalum" },
  { Z: 74, symbol: "W", name: "Tungsten" },
  { Z: 75, symbol: "Re", name: "Rhenium" },
  { Z: 76, symbol: "Os", name: "Osmium" },
  { Z: 77, symbol: "Ir", name: "Iridium" },
  { Z: 78, symbol: "Pt", name: "Platinum" },
  { Z: 79, symbol: "Au", name: "Gold" },
  { Z: 80, symbol: "Hg", name: "Mercury" },
  { Z: 81, symbol: "Tl", name: "Thallium" },
  { Z: 82, symbol: "Pb", name: "Lead" },
  { Z: 83, symbol: "Bi", name: "Bismuth" },
  { Z: 84, symbol: "Po", name: "Polonium" },
  { Z: 85, symbol: "At", name: "Astatine" },
  { Z: 86, symbol: "Rn", name: "Radon" },
  { Z: 87, symbol: "Fr", name: "Francium" },
  { Z: 88, symbol: "Ra", name: "Radium" },
  { Z: 89, symbol: "Ac", name: "Actinium" },
  { Z: 90, symbol: "Th", name: "Thorium" },
  { Z: 91, symbol: "Pa", name: "Protactinium" },
  { Z: 92, symbol: "U", name: "Uranium" },
  { Z: 93, symbol: "Np", name: "Neptunium" },
  { Z: 94, symbol: "Pu", name: "Plutonium" },
  { Z: 95, symbol: "Am", name: "Americium" },
  { Z: 96, symbol: "Cm", name: "Curium" },
  { Z: 97, symbol: "Bk", name: "Berkelium" },
  { Z: 98, symbol: "Cf", name: "Californium" },
  { Z: 99, symbol: "Es", name: "Einsteinium" },
  { Z: 100, symbol: "Fm", name: "Fermium" },
  { Z: 101, symbol: "Md", name: "Mendelevium" },
  { Z: 102, symbol: "No", name: "Nobelium" },
  { Z: 103, symbol: "Lr", name: "Lawrencium" },
  { Z: 104, symbol: "Rf", name: "Rutherfordium" },
  { Z: 105, symbol: "Db", name: "Dubnium" },
  { Z: 106, symbol: "Sg", name: "Seaborgium" },
  { Z: 107, symbol: "Bh", name: "Bohrium" },
  { Z: 108, symbol: "Hs", name: "Hassium" },
  { Z: 109, symbol: "Mt", name: "Meitnerium" },
  { Z: 110, symbol: "Ds", name: "Darmstadtium" },
  { Z: 111, symbol: "Rg", name: "Roentgenium" },
  { Z: 112, symbol: "Cn", name: "Copernicium" },
  { Z: 113, symbol: "Nh", name: "Nihonium" },
  { Z: 114, symbol: "Fl", name: "Flerovium" },
  { Z: 115, symbol: "Mc", name: "Moscovium" },
  { Z: 116, symbol: "Lv", name: "Livermorium" },
  { Z: 117, symbol: "Ts", name: "Tennessine" },
  { Z: 118, symbol: "Og", name: "Oganesson" }
];

function findElement(query) {
  if (!query) return null;
  const q = String(query).trim().toLowerCase();
  if (!q) return null;

  const byZ = Number.parseInt(q, 10);
  if (!Number.isNaN(byZ)) {
    return ELEMENTS.find((e) => e.Z === byZ) ?? null;
  }

  return (
    ELEMENTS.find(
      (e) =>
        e.symbol.toLowerCase() === q ||
        e.name.toLowerCase() === q
    ) ?? null
  );
}

// --- Electron configuration and orbital bookkeeping ---

const SUBSHELL_ORDER = [
  { label: "1s", n: 1, l: 0, type: "s", capacity: 2 },
  { label: "2s", n: 2, l: 0, type: "s", capacity: 2 },
  { label: "2p", n: 2, l: 1, type: "p", capacity: 6 },
  { label: "3s", n: 3, l: 0, type: "s", capacity: 2 },
  { label: "3p", n: 3, l: 1, type: "p", capacity: 6 },
  { label: "4s", n: 4, l: 0, type: "s", capacity: 2 },
  { label: "3d", n: 3, l: 2, type: "d", capacity: 10 },
  { label: "4p", n: 4, l: 1, type: "p", capacity: 6 },
  { label: "5s", n: 5, l: 0, type: "s", capacity: 2 },
  { label: "4d", n: 4, l: 2, type: "d", capacity: 10 },
  { label: "5p", n: 5, l: 1, type: "p", capacity: 6 },
  { label: "6s", n: 6, l: 0, type: "s", capacity: 2 },
  { label: "4f", n: 4, l: 3, type: "f", capacity: 14 },
  { label: "5d", n: 5, l: 2, type: "d", capacity: 10 },
  { label: "6p", n: 6, l: 1, type: "p", capacity: 6 },
  { label: "7s", n: 7, l: 0, type: "s", capacity: 2 },
  { label: "5f", n: 5, l: 3, type: "f", capacity: 14 },
  { label: "6d", n: 6, l: 2, type: "d", capacity: 10 },
  { label: "7p", n: 7, l: 1, type: "p", capacity: 6 }
];

function buildElectronConfiguration(Z) {
  let remaining = Z;
  const filled = [];
  for (const sub of SUBSHELL_ORDER) {
    if (remaining <= 0) break;
    const electrons = Math.min(sub.capacity, remaining);
    filled.push({ ...sub, electrons });
    remaining -= electrons;
  }
  return filled;
}

function formatConfiguration(filled) {
  if (!filled.length) return "–";
  return filled
    .map((s) => `${s.label}<sup>${s.electrons}</sup>`)
    .join(" ");
}

function summarizeOrbitals(filled) {
  if (!filled.length) return "–";
  return filled
    .map((s) => `${s.label}(${s.electrons})`)
    .join(", ");
}

// --- Three.js scene setup ---

let renderer;
let scene;
let camera;
let animationId;
let rootGroup;
let orbitState;
let electronAnims = []; // tracked electron animations
let orbitalRegistry = []; // { label, shape, shellRadius, electrons[], originalOpacities[] }
let hoveredOrbitalIndex = -1;
let focusedOrbitalIndex = -1; // -1 = none focused
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const rendererContainer = document.getElementById("renderer-container");
const statusOverlay = document.getElementById("status-overlay");
const statusText = document.getElementById("status-text");

function setStatus(message, isError = false) {
  if (!statusOverlay || !statusText) return;
  statusOverlay.style.display = message ? "flex" : "none";
  statusText.textContent = message;
  statusText.style.color = isError ? "#ff9bb5" : "#aab7ff";
}

function initScene() {
  if (typeof THREE === "undefined") {
    setStatus("Three.js failed to load – check your internet connection (CDN).", true);
    return false;
  }

  const width = rendererContainer.clientWidth || window.innerWidth;
  const height = rendererContainer.clientHeight || window.innerHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  renderer.outputEncoding = THREE.sRGBEncoding;
  rendererContainer.innerHTML = "";
  rendererContainer.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);

  const target = new THREE.Vector3(0, 0, 0);
  orbitState = {
    target,
    radius: 14,
    theta: Math.PI / 4,
    phi: Math.PI / 3
  };

  function updateCameraFromOrbit() {
    const r = orbitState.radius;
    const sinPhi = Math.sin(orbitState.phi);
    camera.position.set(
      r * sinPhi * Math.cos(orbitState.theta),
      r * Math.cos(orbitState.phi),
      r * sinPhi * Math.sin(orbitState.theta)
    );
    camera.lookAt(orbitState.target);
  }

  updateCameraFromOrbit();

  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(8, 10, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x8090ff, 0.6);
  fillLight.position.set(-6, -4, -8);
  scene.add(fillLight);

  const rimLight = new THREE.SpotLight(0x80c0ff, 1.8, 50, Math.PI / 3, 0.5, 1.2);
  rimLight.position.set(-10, -8, -6);
  rimLight.target.position.set(0, 0, 0);
  scene.add(rimLight);
  scene.add(rimLight.target);

  // Starfield
  const starGeo = new THREE.BufferGeometry();
  const starCount = 900;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const r = 70 * Math.random() + 30;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0x90a8ff,
    size: 0.06,
    transparent: true,
    opacity: 0.7,
    depthWrite: false
  });

  const starfieldPoints = new THREE.Points(starGeo, starMat);
  starfieldPoints.name = "starfield";
  starfieldPoints.visible = AppSettings.starfield;
  scene.add(starfieldPoints);

  rootGroup = new THREE.Group();
  scene.add(rootGroup);

  window.addEventListener("resize", onWindowResize);

  // Mouse orbit controls
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  const canvas = renderer.domElement;

  let mouseDownPos = { x: 0, y: 0 };

  canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    mouseDownPos.x = e.clientX;
    mouseDownPos.y = e.clientY;
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging && orbitState) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      const rotSpeed = 0.005;
      orbitState.theta -= dx * rotSpeed;
      orbitState.phi -= dy * rotSpeed;
      const eps = 0.001;
      orbitState.phi = Math.max(eps, Math.min(Math.PI - eps, orbitState.phi));
      updateCameraFromOrbit();
    }
    // Hover highlight (only when not dragging)
    if (!isDragging) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      handleOrbitalHover();
    }
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  canvas.addEventListener("click", (e) => {
    // Only handle click if mouse didn't drag
    const dx = e.clientX - mouseDownPos.x;
    const dy = e.clientY - mouseDownPos.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) return;

    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    handleOrbitalClick();
  });

  canvas.addEventListener(
    "wheel",
    (e) => {
      if (!orbitState) return;
      e.preventDefault();
      const zoomFactor = 1 + e.deltaY * 0.001;
      orbitState.radius *= zoomFactor;
      orbitState.radius = Math.max(3, Math.min(60, orbitState.radius));
      updateCameraFromOrbit();
    },
    { passive: false }
  );

  canvas.addEventListener("dblclick", () => {
    if (!orbitState) return;
    orbitState.radius = 14;
    orbitState.theta = Math.PI / 4;
    orbitState.phi = Math.PI / 3;
    updateCameraFromOrbit();
  });

  animate();
  return true;
}

function onWindowResize() {
  if (!renderer || !camera) return;
  const width = rendererContainer.clientWidth || window.innerWidth;
  const height = rendererContainer.clientHeight || window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// --- Animation loop ---

const clock = new THREE.Clock();

function animate() {
  animationId = requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  // Auto-rotation based on settings
  if (rootGroup && AppSettings.autorotate) {
    rootGroup.rotation.y += 0.0008;
  }

  // Animate electrons along their orbital paths
  for (const anim of electronAnims) {
    anim.update(elapsed);
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }

  // Update focus label position after rendering so all matrices (camera & objects) are perfectly in sync with the current frame
  updateFocusLabelPosition();
}

// --- Settings State ---

const DEFAULT_SETTINGS = {
  colors: {
    s: "#89c5ff",
    p: "#ff7ab8",
    d: "#c5ff63",
    f: "#d6a2ff"
  },
  quality: "high", // high, medium, low
  starfield: true,
  autorotate: true
};

let AppSettings = { ...DEFAULT_SETTINGS };
try {
  const saved = localStorage.getItem("atom_visualizer_settings");
  if (saved) {
    AppSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  }
} catch (e) { console.error("Could not load settings"); }

// Convert hex string to Three.js color and emissive properties
function generateColorConfig(hex) {
  const color = new THREE.Color(hex);
  const hsl = {};
  color.getHSL(hsl);

  // Emissive is just a slightly darker, less saturated version
  const emissive = new THREE.Color().setHSL(hsl.h, Math.max(0, hsl.s - 0.2), Math.max(0, hsl.l - 0.2));

  return { main: color.getHex(), emissive: emissive.getHex(), hex: hex };
}

// Generate runtime COLORS from settings
let COLORS = {};
function updateColorsFromSettings() {
  COLORS = {
    s: generateColorConfig(AppSettings.colors.s),
    p: generateColorConfig(AppSettings.colors.p),
    d: generateColorConfig(AppSettings.colors.d),
    f: generateColorConfig(AppSettings.colors.f)
  };

  // Also update UI legend swatches to match
  document.documentElement.style.setProperty("--swatch-s", AppSettings.colors.s);
  document.documentElement.style.setProperty("--swatch-p", AppSettings.colors.p);
  document.documentElement.style.setProperty("--swatch-d", AppSettings.colors.d);
  document.documentElement.style.setProperty("--swatch-f", AppSettings.colors.f);
}
updateColorsFromSettings();

const ELECTRON_COLOR = 0xffffff;
const ELECTRON_EMISSIVE = 0xaaddff;

// --- Shared geometries (created once, reused) ---

let sharedGeo = {};

function getSharedGeometries() {
  if (sharedGeo.electron) return sharedGeo;

  // Quality dictates mesh segment resolution
  let segs = 64;
  if (AppSettings.quality === "medium") segs = 32;
  if (AppSettings.quality === "low") segs = 16;

  let pSegs = segs;
  let tSegsR = segs, tSegsT = segs * 2;
  // Reduce detail for inner electron spheres since they are small
  let eSegs = AppSettings.quality === "low" ? 12 : (AppSettings.quality === "medium" ? 24 : 32);

  sharedGeo.electron = new THREE.SphereGeometry(0.08, eSegs, eSegs);
  sharedGeo.electronGlow = new THREE.SphereGeometry(0.16, eSegs, eSegs);
  sharedGeo.sOrbital = new THREE.SphereGeometry(1, pSegs, pSegs);
  sharedGeo.nucleus = new THREE.SphereGeometry(1, pSegs, pSegs);
  sharedGeo.nucleusGlow = new THREE.SphereGeometry(1.5, pSegs, pSegs);
  sharedGeo.torusSegments = { radial: tSegsR, tubular: tSegsT };
  sharedGeo.lobeSegments = pSegs;

  return sharedGeo;
}

// --- Nucleus ---

function createNucleus(Z, visualScale) {
  const geo = getSharedGeometries();
  const radius = (0.18 + Math.log10(Math.max(1, Z)) * 0.12) * Math.max(0.5, visualScale * 1.4);

  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xffc96d, emissive: 0xffcc88, emissiveIntensity: 0.5,
    roughness: 0.2, metalness: 0.3, transparent: true, opacity: 0.96,
    clearcoat: 1, clearcoatRoughness: 0.1, depthWrite: true
  });
  const mesh = new THREE.Mesh(geo.nucleus, mat);
  mesh.scale.setScalar(radius);
  // Force nucleus to draw early so that orbitals correctly blend over it or are hidden behind it
  mesh.renderOrder = 1;

  const glow = new THREE.Mesh(
    geo.nucleusGlow,
    new THREE.MeshBasicMaterial({ color: 0xfff0aa, transparent: true, opacity: 0.18, depthWrite: false })
  );
  glow.scale.setScalar(radius);
  // Nucleus glow draws with the nucleus
  glow.renderOrder = 1;
  mesh.add(glow);
  return mesh;
}

// --- Create an electron with glow ---

function createElectronMesh() {
  const geo = getSharedGeometries();
  const mat = new THREE.MeshPhysicalMaterial({
    color: ELECTRON_COLOR,
    emissive: ELECTRON_EMISSIVE,
    emissiveIntensity: 0.8,
    roughness: 0.1,
    metalness: 0.5,
    clearcoat: 1
  });
  const mesh = new THREE.Mesh(geo.electron, mat);

  const glow = new THREE.Mesh(
    geo.electronGlow,
    new THREE.MeshBasicMaterial({
      color: 0xaaddff,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  mesh.add(glow);
  return mesh;
}

// --- Orbital shape builders ---
// Each returns a THREE.Object3D (the translucent shell) and positions for electrons.

/**
 * s orbital: sphere
 * Radius proportional to n
 */
function createSOrbital(n, shellRadius, color, fillRatio) {
  const geo = getSharedGeometries();
  const group = new THREE.Group();

  const mat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: 0.15 + fillRatio * 0.15,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.1 + fillRatio * 0.12,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const shell = new THREE.Mesh(geo.sOrbital, mat);
  shell.scale.setScalar(shellRadius);
  group.add(shell);

  // Wireframe ring for clarity
  const ringGeo = new THREE.RingGeometry(shellRadius - 0.01, shellRadius + 0.01, 128);
  const ringMat = new THREE.MeshBasicMaterial({
    color: color.main,
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  group.add(ring);

  return group;
}

/**
 * p orbital: dumbbell (two elongated lobes along one axis)
 * mLocal: 0=x, 1=y, 2=z
 */
function createPLobe(shellRadius, lobeLength, color, fillRatio) {
  const group = new THREE.Group();

  // Use a stretched sphere for each lobe (ellipsoid)
  const lobeGeo = new THREE.SphereGeometry(1, getSharedGeometries().lobeSegments, getSharedGeometries().lobeSegments);
  const lobeMat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: 0.15 + fillRatio * 0.15,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.12 + fillRatio * 0.12,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const lobeWidth = shellRadius * 0.35;

  // Positive lobe
  const lobe1 = new THREE.Mesh(lobeGeo, lobeMat);
  lobe1.scale.set(lobeWidth, lobeLength * 0.41, lobeWidth);
  lobe1.position.y = lobeLength * 0.41;
  lobe1.renderOrder = 2; // Render after nucleus
  group.add(lobe1);

  // Negative lobe
  const lobe2 = new THREE.Mesh(lobeGeo, lobeMat.clone());
  lobe2.material.emissiveIntensity = 0.1 + fillRatio * 0.1;
  lobe2.scale.set(lobeWidth, lobeLength * 0.41, lobeWidth);
  lobe2.position.y = -lobeLength * 0.41;
  lobe2.renderOrder = 2; // Render after nucleus
  group.add(lobe2);

  return group;
}

function createPOrbital(n, mLocal, shellRadius, color, fillRatio) {
  const lobeLength = shellRadius * 1.2;
  const group = createPLobe(shellRadius, lobeLength, color, fillRatio);

  // Orient along different axes per m quantum number
  if (mLocal === 0) {
    group.rotation.z = -Math.PI / 2; // x-axis
  } else if (mLocal === 1) {
    // y-axis (default)
  } else {
    group.rotation.x = Math.PI / 2; // z-axis
  }

  return group;
}

/**
 * d orbital: four-lobed cloverleaf shapes
 * Uses 4 lobes arranged in a plane, or a donut+dumbbell for dz²
 */
function createDOrbital(n, mLocal, shellRadius, color, fillRatio) {
  const group = new THREE.Group();
  const sg = getSharedGeometries();
  const lobeGeo = new THREE.SphereGeometry(1, sg.lobeSegments, sg.lobeSegments);
  const lobeMat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: 0.12 + fillRatio * 0.12,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.1 + fillRatio * 0.1,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const lobeSize = shellRadius * 0.3;
  const lobeOffset = shellRadius * 0.45;

  if (mLocal === 4) {
    // dz²: torus + two polar lobes
    const sg = getSharedGeometries();
    const torusGeo = new THREE.TorusGeometry(shellRadius * 0.38, shellRadius * 0.12, sg.torusSegments.radial, sg.torusSegments.tubular);
    const torus = new THREE.Mesh(torusGeo, lobeMat);
    group.add(torus);

    const topLobe = new THREE.Mesh(lobeGeo, lobeMat);
    topLobe.scale.set(lobeSize * 0.7, lobeSize * 1.2, lobeSize * 0.7);
    topLobe.position.y = lobeOffset;
    group.add(topLobe);

    const botLobe = new THREE.Mesh(lobeGeo, lobeMat);
    botLobe.scale.set(lobeSize * 0.7, lobeSize * 1.2, lobeSize * 0.7);
    botLobe.position.y = -lobeOffset;
    group.add(botLobe);
  } else {
    // Four-lobed cloverleaf
    const angles = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];
    for (const angle of angles) {
      const lobe = new THREE.Mesh(lobeGeo, lobeMat);
      lobe.scale.setScalar(lobeSize);
      lobe.position.x = lobeOffset * Math.cos(angle);
      lobe.position.z = lobeOffset * Math.sin(angle);
      group.add(lobe);
    }

    // Rotate the cloverleaf based on m quantum number
    if (mLocal === 0) {
      // xy plane (default)
    } else if (mLocal === 1) {
      group.rotation.x = Math.PI / 2; // yz plane
    } else if (mLocal === 2) {
      group.rotation.z = Math.PI / 2; // xz plane
    } else if (mLocal === 3) {
      group.rotation.y = Math.PI / 4; // xy rotated 45°
    }
  }

  return group;
}

/**
 * f orbital: multi-lobed (8 lobes arranged in 3D)
 */
function createFOrbital(n, mLocal, shellRadius, color, fillRatio) {
  const group = new THREE.Group();
  const lobeGeo = new THREE.SphereGeometry(1, 64, 64);
  const lobeMat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: 0.1 + fillRatio * 0.1,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.08 + fillRatio * 0.08,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const lobeSize = shellRadius * 0.22;
  const lobeOffset = shellRadius * 0.45;

  if (mLocal === 6) {
    // fz³ type: 2 polar + torus-like ring of 6
    const topLobe = new THREE.Mesh(lobeGeo, lobeMat);
    topLobe.scale.setScalar(lobeSize * 1.1);
    topLobe.position.y = lobeOffset * 1.1;
    group.add(topLobe);

    const botLobe = new THREE.Mesh(lobeGeo, lobeMat);
    botLobe.scale.setScalar(lobeSize * 1.1);
    botLobe.position.y = -lobeOffset * 1.1;
    group.add(botLobe);

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const lobe = new THREE.Mesh(lobeGeo, lobeMat);
      lobe.scale.setScalar(lobeSize * 0.8);
      lobe.position.x = lobeOffset * 0.7 * Math.cos(angle);
      lobe.position.z = lobeOffset * 0.7 * Math.sin(angle);
      group.add(lobe);
    }
  } else {
    // Generic 8-lobe arrangement (cube vertices)
    const offsets = [
      [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
      [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]
    ];
    for (const off of offsets) {
      const lobe = new THREE.Mesh(lobeGeo, lobeMat);
      lobe.scale.setScalar(lobeSize);
      const d = lobeOffset * 0.58;
      lobe.position.set(off[0] * d, off[1] * d, off[2] * d);
      group.add(lobe);
    }

    // Rotate per m to distinguish them
    group.rotation.y = mLocal * Math.PI / 7;
    if (mLocal % 2 === 1) group.rotation.x = Math.PI / 6;
  }

  return group;
}

// --- Electron pather: animates electrons along orbital paths ---

class ElectronAnimator {
  constructor(electronMesh, pathFn, speed, phase) {
    this.mesh = electronMesh;
    this.pathFn = pathFn;
    this.speed = speed;
    this.phase = phase;
  }
  update(elapsed) {
    const t = (elapsed * this.speed + this.phase) % (Math.PI * 2);
    const pos = this.pathFn(t);
    this.mesh.position.set(pos.x, pos.y, pos.z);
  }
}

/**
 * Generate a circular orbital path for s-orbital electrons
 */
function sOrbitalPath(radius, tiltX, tiltZ) {
  return (t) => {
    let x = radius * Math.cos(t);
    let y = radius * Math.sin(t);
    let z = 0;
    // Apply tilts
    const cosX = Math.cos(tiltX), sinX = Math.sin(tiltX);
    const y2 = y * cosX - z * sinX;
    const z2 = y * sinX + z * cosX;
    y = y2; z = z2;
    const cosZ = Math.cos(tiltZ), sinZ = Math.sin(tiltZ);
    const x2 = x * cosZ - y * sinZ;
    const y3 = x * sinZ + y * cosZ;
    return { x: x2, y: y3, z };
  };
}

/**
 * Generate a figure-eight path for p-orbital electrons
 */
function pOrbitalPath(lobeLength, axis) {
  return (t) => {
    // Figure eight shape
    const r = lobeLength * 0.55 * Math.sin(t);
    const h = lobeLength * 0.45 * Math.sin(2 * t);
    if (axis === "x") return { x: r, y: h * 0.3, z: 0 };
    if (axis === "z") return { x: 0, y: h * 0.3, z: r };
    return { x: 0, y: r, z: h * 0.3 }; // y default
  };
}

/**
 * Generate a tilted orbit path for d/f orbital electrons
 */
function generalOrbitalPath(radius, tiltX, tiltY, tiltZ) {
  return (t) => {
    let x = radius * Math.cos(t);
    let y = 0;
    let z = radius * Math.sin(t);
    // Rotate around X
    const cx = Math.cos(tiltX), sx = Math.sin(tiltX);
    const y2 = y * cx - z * sx;
    const z2 = y * sx + z * cx;
    y = y2; z = z2;
    // Rotate around Y
    const cy = Math.cos(tiltY), sy = Math.sin(tiltY);
    const x2 = x * cy + z * sy;
    const z3 = -x * sy + z * cy;
    x = x2; z = z3;
    // Rotate around Z
    const cz = Math.cos(tiltZ), sz = Math.sin(tiltZ);
    const x3 = x * cz - y * sz;
    const y3 = x * sz + y * cz;
    return { x: x3, y: y3, z };
  };
}

// --- Build atom visualization ---

function clearRoot() {
  if (!rootGroup) return;
  while (rootGroup.children.length) {
    const child = rootGroup.children.pop();
    child.traverse?.((obj) => {
      if (obj.geometry && !isSharedGeometry(obj.geometry)) {
        obj.geometry.dispose();
      }
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });
  }
  electronAnims = [];
  orbitalRegistry = [];
  hoveredOrbitalIndex = -1;
  focusedOrbitalIndex = -1;
  hideFocusLabel();
}

function isSharedGeometry(geo) {
  const sg = getSharedGeometries();
  return Object.values(sg).includes(geo);
}

function buildAtom(element) {
  clearRoot();
  const Z = element.Z;
  const filled = buildElectronConfiguration(Z);

  // Scale so outermost orbital fits nicely in view
  let maxN = 1;
  for (const sub of filled) {
    if (sub.n > maxN) maxN = sub.n;
  }
  const visualScale = 5.5 / (maxN * 1.1);

  const nucleus = createNucleus(Z, visualScale);
  rootGroup.add(nucleus);

  // Track shell counter per (n, l) for spacing
  let orbitalIndex = 0;

  for (const sub of filled) {
    const { n, l, type, electrons, capacity } = sub;
    const mCount = 2 * l + 1;
    const color = COLORS[type] || COLORS.s;
    const fillRatio = electrons / capacity;

    // Distribute electrons per Hund's rule
    const occupancies = new Array(mCount).fill(0);
    let remaining = electrons;
    for (let i = 0; i < mCount && remaining > 0; i++) {
      occupancies[i] = 1;
      remaining--;
    }
    for (let i = 0; i < mCount && remaining > 0; i++) {
      occupancies[i]++;
      remaining--;
    }

    // Base shell radius scales with n
    const shellRadius = n * visualScale * 0.9 + l * visualScale * 0.15;

    for (let mIdx = 0; mIdx < mCount; mIdx++) {
      if (occupancies[mIdx] === 0) continue;
      const mFillRatio = occupancies[mIdx] / 2;

      // Calculate actual m_l: from -l to +l
      const ml = mIdx - l;

      // Create the orbital shape
      let orbitalShape;
      if (l === 0) {
        orbitalShape = createSOrbital(n, shellRadius, color, mFillRatio);
      } else if (l === 1) {
        orbitalShape = createPOrbital(n, mIdx, shellRadius, color, mFillRatio);
      } else if (l === 2) {
        orbitalShape = createDOrbital(n, mIdx, shellRadius, color, mFillRatio);
      } else {
        orbitalShape = createFOrbital(n, mIdx, shellRadius, color, mFillRatio);
      }
      rootGroup.add(orbitalShape);

      // Collect original material opacities for hover/focus restore
      const origOpacities = [];
      orbitalShape.traverse((obj) => {
        if (obj.material) {
          origOpacities.push({ mat: obj.material, opacity: obj.material.opacity, emissiveIntensity: obj.material.emissiveIntensity || 0 });
        }
      });

      const orbEntry = {
        label: sub.label,
        type: type,
        n: n,
        l: l,
        ml: ml,
        shape: orbitalShape,
        shellRadius: shellRadius,
        electrons: [],
        originalOpacities: origOpacities
      };

      // Add electrons as small spheres moving along appropriate paths
      const numElectrons = occupancies[mIdx];
      for (let e = 0; e < numElectrons; e++) {
        const eMesh = createElectronMesh();
        rootGroup.add(eMesh);

        const phase = (e / numElectrons) * Math.PI * 2 + orbitalIndex * 0.7;
        const speed = 0.5 + 0.15 / Math.max(1, n * 0.5);

        let pathFn;
        if (l === 0) {
          // Circular orbit on tilted plane
          const tiltX = orbitalIndex * 1.2 + e * 0.5;
          const tiltZ = orbitalIndex * 0.8 + e * 0.3;
          pathFn = sOrbitalPath(shellRadius * 0.85, tiltX, tiltZ);
        } else if (l === 1) {
          const axes = ["x", "y", "z"];
          pathFn = pOrbitalPath(shellRadius * 1.1, axes[mIdx] || "y");
        } else {
          // General tilted orbit for d and f
          const tiltX = mIdx * 0.5 + e * Math.PI;
          const tiltY = mIdx * 0.7 + orbitalIndex * 0.3;
          const tiltZ = e * 0.4;
          pathFn = generalOrbitalPath(shellRadius * 0.8, tiltX, tiltY, tiltZ);
        }

        const animator = new ElectronAnimator(eMesh, pathFn, speed, phase);
        electronAnims.push(animator);
        orbEntry.electrons.push(eMesh);
      }

      orbitalRegistry.push(orbEntry);
      orbitalIndex++;
    }
  }

  updateInfoPanel(element, filled);
}

// --- Orbital focus mode (ray-to-center picking) ---

/**
 * Find which orbital's center is closest to the mouse ray.
 * This avoids the problem of outer s-orbital spheres always intercepting the ray.
 */
function findClosestOrbitalToRay() {
  if (!camera || orbitalRegistry.length === 0) return -1;

  raycaster.setFromCamera(mouse, camera);

  // Collect all orbital meshes for accurate hit testing
  const clickTargets = [];
  const meshToRegistryIndex = new Map();
  for (let i = 0; i < orbitalRegistry.length; i++) {
    orbitalRegistry[i].shape.traverse((obj) => {
      // Exclude wireframe rings and non-meshes
      if (obj.isMesh && obj.geometry.type !== "RingGeometry") {
        clickTargets.push(obj);
        meshToRegistryIndex.set(obj, i);
      }
    });
  }

  // Intersect against actual 3D objects, sorted by distance from camera
  const intersects = raycaster.intersectObjects(clickTargets, false);

  let bestIndex = -1;
  let bestScore = Infinity;

  // We score hits based on how "edge-on" they are to the camera.
  // The dot product of the surface normal and the camera ray is ~0 at the 
  // outline (silhouette) of the shape, making translucent shapes distinct.
  for (const hit of intersects) {
    if (!hit.face) continue;

    const normalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
    const worldNormal = hit.face.normal.clone().applyMatrix3(normalMatrix).normalize();

    // Closer to 0 means we're looking directly at the visual edge of this shape
    let edgeScore = Math.abs(worldNormal.dot(raycaster.ray.direction));

    const entryIndex = meshToRegistryIndex.get(hit.object);
    const entry = orbitalRegistry[entryIndex];

    // s-orbitals are large enclosing spheres. We add a slight penalty to them 
    // so that inner p/d/f orbitals overlapping them are prioritized when aiming.
    if (entry.type === "s") {
      edgeScore += 0.15;
    }

    // Add a tiny distance penalty so front overlapping edges beat back edges
    const distScore = hit.distance * 0.0001;
    const finalScore = edgeScore + distScore;

    if (finalScore < bestScore) {
      bestScore = finalScore;
      bestIndex = entryIndex;
    }
  }

  return bestIndex;
}

function handleOrbitalHover() {
  if (focusedOrbitalIndex >= 0) return; // don't hover-highlight when focused

  const newHovered = findClosestOrbitalToRay();

  if (newHovered === hoveredOrbitalIndex) return; // no change

  // Unhighlight previous
  if (hoveredOrbitalIndex >= 0) {
    restoreOrbitalOpacity(hoveredOrbitalIndex);
  }

  hoveredOrbitalIndex = newHovered;

  // Highlight new
  if (hoveredOrbitalIndex >= 0) {
    highlightOrbital(hoveredOrbitalIndex);
    rendererContainer.style.cursor = "pointer";
  } else {
    rendererContainer.style.cursor = "default";
  }
}

function handleOrbitalClick() {
  const hitIndex = findClosestOrbitalToRay();

  if (hitIndex >= 0) {
    if (focusedOrbitalIndex === hitIndex) {
      // Click same orbital again → deselect
      unfocusOrbitals();
    } else {
      focusOrbital(hitIndex);
    }
  } else {
    // Clicked empty space → deselect
    if (focusedOrbitalIndex >= 0) {
      unfocusOrbitals();
    }
  }
}

function highlightOrbital(index) {
  const orb = orbitalRegistry[index];
  orb.shape.traverse((obj) => {
    if (obj.material) {
      const orig = orb.originalOpacities.find((o) => o.mat === obj.material);
      if (orig) {
        obj.material.opacity = Math.min(1, orig.opacity * 2.2);
        if (obj.material.emissiveIntensity !== undefined) {
          obj.material.emissiveIntensity = orig.emissiveIntensity * 2.0;
        }
      }
    }
  });
}

function restoreOrbitalOpacity(index) {
  const orb = orbitalRegistry[index];
  for (const { mat, opacity, emissiveIntensity } of orb.originalOpacities) {
    mat.opacity = opacity;
    if (mat.emissiveIntensity !== undefined) {
      mat.emissiveIntensity = emissiveIntensity;
    }
  }
}

function focusOrbital(index) {
  focusedOrbitalIndex = index;
  hoveredOrbitalIndex = -1;
  const entry = orbitalRegistry[index];

  showFocusLabel(entry.label + " orbital");

  // Populate Quantum Details Panel
  const detailsContainer = document.getElementById("focused-orbital-details");
  if (detailsContainer) {
    const shapeNames = { s: "Spherical", p: "Dumbbell", d: "Cloverleaf", f: "Complex (8-lobed)" };
    document.getElementById("focus-name").textContent = entry.label;
    document.getElementById("focus-shape").textContent = shapeNames[entry.type] || "Unknown";
    document.getElementById("focus-n").textContent = entry.n;
    document.getElementById("focus-l").textContent = entry.l;

    // Format m_l with explicit + sign for positive values
    let mlStr = entry.ml === 0 ? "0" : (entry.ml > 0 ? `+${entry.ml}` : `${entry.ml}`);
    document.getElementById("focus-m").textContent = mlStr;

    document.getElementById("focus-radial").textContent = (entry.n - entry.l - 1);
    document.getElementById("focus-angular").textContent = entry.l;

    // Use absolute value for negative m in subscript
    let mlSub = entry.ml < 0 ? `Minus${Math.abs(entry.ml)}` : entry.ml;
    // Replace "Minus" with a visually distinct minus subscript logic or just use unicode if possible.
    const subMap = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "-": "₋" };
    const toSub = (str) => String(str).split('').map(c => subMap[c] || c).join('');

    document.getElementById("focus-wavefunction").textContent = `ψ${toSub(entry.n)}${toSub(entry.l)}${toSub(entry.ml)}`;

    detailsContainer.style.display = "flex";
  }

  // Dim all orbitals except the focused one
  for (let i = 0; i < orbitalRegistry.length; i++) {
    const orb = orbitalRegistry[i];
    if (i === index) {
      // Boost focused orbital
      orb.shape.traverse((obj) => {
        if (obj.material) {
          const orig = orb.originalOpacities.find((o) => o.mat === obj.material);
          if (orig) {
            obj.material.opacity = Math.min(1, orig.opacity * 1.8);
            if (obj.material.emissiveIntensity !== undefined) {
              obj.material.emissiveIntensity = orig.emissiveIntensity * 1.8;
            }
          }
        }
      });
      for (const eMesh of orb.electrons) {
        eMesh.visible = true;
      }
    } else {
      // Dim other orbitals
      orb.shape.traverse((obj) => {
        if (obj.material) {
          obj.material.opacity = 0.02;
          if (obj.material.emissiveIntensity !== undefined) {
            obj.material.emissiveIntensity = 0;
          }
        }
      });
      for (const eMesh of orb.electrons) {
        eMesh.visible = false;
      }
    }
  }
}

function unfocusOrbitals() {
  focusedOrbitalIndex = -1;
  hideFocusLabel();

  const detailsContainer = document.getElementById("focused-orbital-details");
  if (detailsContainer) {
    detailsContainer.style.display = "none";
  }

  // Restore all orbitals
  for (let i = 0; i < orbitalRegistry.length; i++) {
    restoreOrbitalOpacity(i);
    for (const eMesh of orbitalRegistry[i].electrons) {
      eMesh.visible = true;
    }
  }
}

// --- Focus label helpers ---

function showFocusLabel(text) {
  let label = document.getElementById("focus-label");
  if (!label) {
    label = document.createElement("div");
    label.id = "focus-label";
    label.style.cssText = `
      display:none; position:absolute; transform:translateX(-50%);
      padding:6px 16px; border-radius:999px;
      background:radial-gradient(circle at top, rgba(30,50,120,0.95), rgba(8,14,42,0.95));
      border:1px solid rgba(140,180,255,0.7);
      box-shadow:0 0 20px rgba(80,130,255,0.5), 0 8px 24px rgba(0,0,0,0.8);
      color:#e2eaff; font-family:system-ui,sans-serif; font-size:13px; font-weight:600;
      letter-spacing:0.08em; text-transform:uppercase; pointer-events:none;
      z-index:20; white-space:nowrap; backdrop-filter:blur(12px);
    `;
    const container = document.getElementById("app-container");
    if (container) container.appendChild(label);
  }
  label.textContent = text;
  label.style.display = "block";
}

function hideFocusLabel() {
  const label = document.getElementById("focus-label");
  if (label) {
    label.style.display = "none";
    label.textContent = "";
  }
}

function updateFocusLabelPosition() {
  if (focusedOrbitalIndex < 0) return;
  const label = document.getElementById("focus-label");
  if (!label) return;
  const entry = orbitalRegistry[focusedOrbitalIndex];
  if (!entry || !entry.shape) return;

  const worldPos = new THREE.Vector3();
  entry.shape.getWorldPosition(worldPos);
  // Offset upward by shell radius
  worldPos.y += entry.shellRadius * 0.6;
  worldPos.project(camera);

  const rect = rendererContainer.getBoundingClientRect();
  const x = (worldPos.x * 0.5 + 0.5) * rect.width;
  const y = (-worldPos.y * 0.5 + 0.5) * rect.height;
  label.style.left = x + "px";
  label.style.top = Math.max(10, y - 20) + "px";
}

// --- UI wiring ---


function updateInfoPanel(element, filled) {
  const elName = document.getElementById("info-element-text");
  const elZ = document.getElementById("info-Z");
  const elConfig = document.getElementById("info-config");
  const elOrbitals = document.getElementById("info-orbitals");
  const detailsContainer = document.getElementById("focused-orbital-details");

  if (detailsContainer) detailsContainer.style.display = "none";

  if (!element || !filled) {
    if (elName) elName.textContent = "–";
    if (elZ) elZ.textContent = "–";
    if (elConfig) elConfig.innerHTML = "–";
    if (elOrbitals) elOrbitals.innerHTML = "–";
    drawBohrModel(null, []);
    return;
  }

  if (elName) elName.textContent = `${element.name} (${element.symbol})`;
  if (elZ) elZ.textContent = element.Z;
  if (elConfig) elConfig.innerHTML = formatConfiguration(filled);
  if (elOrbitals) elOrbitals.innerHTML = summarizeOrbitals(filled);

  drawBohrModel(element, filled);
}

// --- 2D Bohr Model Drawing ---

function drawBohrModel(element, filled) {
  const canvas = document.getElementById("bohr-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const cx = width / 2;
  const cy = height / 2;

  ctx.clearRect(0, 0, width, height);

  if (!element || !filled || filled.length === 0) return;

  // Aggregate electrons by principal quantum number (shell 'n')
  const shells = [];
  for (const sub of filled) {
    const shellIndex = sub.n - 1;
    if (!shells[shellIndex]) {
      shells[shellIndex] = 0;
    }
    shells[shellIndex] += sub.electrons;
  }

  // Draw Nucleus
  const nucleusRadius = 24;
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, nucleusRadius);
  gradient.addColorStop(0, "#fff3cf");
  gradient.addColorStop(1, "#fca82d");

  ctx.beginPath();
  ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.shadowColor = "rgba(255, 179, 71, 0.5)";
  ctx.shadowBlur = 12;
  ctx.fill();
  ctx.shadowBlur = 0; // reset shadow

  // Nucleus Text (Symbol)
  ctx.fillStyle = "#331600";
  ctx.font = "bold 20px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(element.symbol, cx, cy + 1);

  // Draw Shells & Electrons
  const maxShells = shells.length;
  const maxRadius = Math.min(cx, cy) - 10;
  const shellSpacing = (maxRadius - nucleusRadius - 10) / Math.max(1, maxShells);

  for (let i = 0; i < maxShells; i++) {
    if (shells[i] === undefined || shells[i] === 0) continue;

    // Calculate radius for this shell
    const r = nucleusRadius + 14 + (i * shellSpacing);

    // Draw orbital ring
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(144, 180, 255, 0.25)";
    ctx.lineWidth = 1.5;
    if (i === maxShells - 1) {
      // Highlight valence shell slightly
      ctx.strokeStyle = "rgba(170, 200, 255, 0.4)";
    }
    ctx.stroke();

    // Draw electrons on this ring
    const numElectrons = shells[i];
    const angleStep = (Math.PI * 2) / numElectrons;
    // Offset angle to start at top, and stagger slightly per shell
    const angleOffset = -Math.PI / 2 + (i % 2 === 0 ? 0 : Math.PI / numElectrons);

    for (let e = 0; e < numElectrons; e++) {
      const angle = angleOffset + e * angleStep;
      const ex = cx + Math.cos(angle) * r;
      const ey = cy + Math.sin(angle) * r;

      ctx.beginPath();
      ctx.arc(ex, ey, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "rgba(170, 230, 255, 0.8)";
      ctx.shadowBlur = 6;
      ctx.fill();

      // tiny core dot inside electron
      ctx.beginPath();
      ctx.arc(ex, ey, 2, 0, Math.PI * 2);
      ctx.fillStyle = "#88ccff";
      ctx.shadowBlur = 0;
      ctx.fill();
    }
  }
}

// --- App main ---

const inputEl = document.getElementById("element-input");
const buttonEl = document.getElementById("load-button");
const infoElement = document.getElementById("info-element-text");
const infoZ = document.getElementById("info-Z");
const infoConfig = document.getElementById("info-config");
const infoOrbitals = document.getElementById("info-orbitals");

// Settings Elements
const settingsBtn = document.getElementById("settings-button");
const settingsModal = document.getElementById("settings-modal");
const setCloseBtn = document.getElementById("set-close-btn");
const setResetBtn = document.getElementById("set-reset-btn");

const setColS = document.getElementById("set-color-s");
const setColP = document.getElementById("set-color-p");
const setColD = document.getElementById("set-color-d");
const setColF = document.getElementById("set-color-f");
const setQual = document.getElementById("set-quality");
const setStarfield = document.getElementById("set-starfield");
const setAuto = document.getElementById("set-autorotate");

// Report issues elements
const reportBtn = document.getElementById("report-button");
const reportModal = document.getElementById("report-modal");
const reportText = document.getElementById("report-text");
const reportStatus = document.getElementById("report-status");
const reportCancelBtn = document.getElementById("report-cancel-btn");
const reportSendBtn = document.getElementById("report-send-btn");

function populateSettingsUI() {
  setColS.value = AppSettings.colors.s;
  setColP.value = AppSettings.colors.p;
  setColD.value = AppSettings.colors.d;
  setColF.value = AppSettings.colors.f;
  setQual.value = AppSettings.quality;
  setStarfield.checked = AppSettings.starfield;
  setAuto.checked = AppSettings.autorotate;
}

function saveAndApplySettings() {
  AppSettings.colors.s = setColS.value;
  AppSettings.colors.p = setColP.value;
  AppSettings.colors.d = setColD.value;
  AppSettings.colors.f = setColF.value;
  AppSettings.quality = setQual.value;
  AppSettings.starfield = setStarfield.checked;
  AppSettings.autorotate = setAuto.checked;

  localStorage.setItem("atom_visualizer_settings", JSON.stringify(AppSettings));

  // Apply changes visually
  updateColorsFromSettings();

  const starEntity = scene.getObjectByName("starfield");
  if (starEntity) starEntity.visible = AppSettings.starfield;

  // Force rebuild of geometries if quality changed
  sharedGeo = {};

  // Reboot atom with new materials and shapes
  if (inputEl.value) {
    handleLoadFromInput();
  } else {
    // If empty (default load), just build H
    buildAtom(ELEMENTS[0]);
  }
}

function setReportStatus(message, isError = false) {
  if (!reportStatus) return;
  reportStatus.textContent = message;
  reportStatus.style.color = isError ? "#ff8cb3" : "#8ea3ff";
}

function closeReportModal() {
  if (reportModal) reportModal.style.display = "none";
}

function openReportModal() {
  if (!reportModal) return;
  reportModal.style.display = "flex";
  setReportStatus("");
  if (reportText) reportText.focus();
}

async function sendBugReportEmail() {
  if (!reportText) return;

  const message = reportText.value.trim();
  if (!message) {
    setReportStatus("Please enter a bug report before sending.", true);
    reportText.focus();
    return;
  }

  const selectedElement = (inputEl && inputEl.value ? inputEl.value.trim() : "") || "(none)";
  const payload = {
    selectedElement,
    message
  };

  try {
    if (reportSendBtn) reportSendBtn.disabled = true;
    setReportStatus("Sending report...");

    const response = await fetch("http://localhost:3000/api/report-bug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) {
      const errMsg = data.error || "Could not send report. Make sure backend server is running.";
      throw new Error(errMsg);
    }

    setReportStatus("Report sent. Thank you.");
    reportText.value = "";
    closeReportModal();
  } catch (err) {
    console.error(err);
    setReportStatus(err.message || "Could not send report.", true);
  } finally {
    if (reportSendBtn) reportSendBtn.disabled = false;
  }
}
// Modal wiring
if (settingsBtn) {
  settingsBtn.addEventListener("click", () => {
    populateSettingsUI();
    settingsModal.style.display = "flex";
  });
}

if (setCloseBtn) {
  setCloseBtn.addEventListener("click", () => {
    settingsModal.style.display = "none";
    saveAndApplySettings();
  });
}

if (setResetBtn) {
  setResetBtn.addEventListener("click", () => {
    AppSettings = { ...DEFAULT_SETTINGS, colors: { ...DEFAULT_SETTINGS.colors } };
    populateSettingsUI();
  });
}
if (reportBtn) {
  reportBtn.addEventListener("click", openReportModal);
}

if (reportCancelBtn) {
  reportCancelBtn.addEventListener("click", closeReportModal);
}

if (reportSendBtn) {
  reportSendBtn.addEventListener("click", sendBugReportEmail);
}

if (reportText) {
  reportText.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      sendBugReportEmail();
    }
  });
}

if (reportModal) {
  reportModal.addEventListener("click", (e) => {
    if (e.target === reportModal) {
      closeReportModal();
    }
  });
}


function handleLoadFromInput() {
  const query = inputEl.value;
  const element = findElement(query);
  if (!element) {
    inputEl.style.borderColor = "#ff6b9b";
    inputEl.style.boxShadow =
      "0 0 0 1px rgba(255,107,155,0.8), 0 0 20px rgba(255,107,155,0.4)";
    updateInfoPanel(null, []);
    clearRoot();
    return;
  }
  inputEl.style.borderColor = "rgba(116, 140, 255, 0.9)";
  inputEl.style.boxShadow =
    "0 0 0 1px rgba(114, 144, 255, 0.9), 0 0 24px rgba(84, 134, 255, 0.7)";
  buildAtom(element);
}

if (buttonEl && inputEl) {
  buttonEl.addEventListener("click", handleLoadFromInput);
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleLoadFromInput();
    }
  });
}

// --- Bootstrap ---

window.addEventListener("load", () => {
  try {
    setStatus("Initializing renderer…");
    const ok = initScene();
    if (!ok) {
      return;
    }
    const defaultElement = ELEMENTS.find((e) => e.symbol === "H") ?? ELEMENTS[0];
    if (inputEl) {
      inputEl.value = defaultElement.symbol;
    }
    buildAtom(defaultElement);
    setStatus(""); // hide overlay
  } catch (err) {
    console.error(err);
    setStatus("Initialization error – see console for details.", true);
  }
});

