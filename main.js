// --- Element data & lookup ---
// Full periodic table: Z = 1–118

const ELEMENTS = [
  { Z: 1, symbol: "H", name: "Hydrogen", electronConfiguration: "1s1" },
  { Z: 2, symbol: "He", name: "Helium", electronConfiguration: "1s2" },
  { Z: 3, symbol: "Li", name: "Lithium", electronConfiguration: "1s2 2s1" },
  { Z: 4, symbol: "Be", name: "Beryllium", electronConfiguration: "1s2 2s2" },
  { Z: 5, symbol: "B", name: "Boron", electronConfiguration: "1s2 2s2 2p1" },
  { Z: 6, symbol: "C", name: "Carbon", electronConfiguration: "1s2 2s2 2p2" },
  { Z: 7, symbol: "N", name: "Nitrogen", electronConfiguration: "1s2 2s2 2p3" },
  { Z: 8, symbol: "O", name: "Oxygen", electronConfiguration: "1s2 2s2 2p4" },
  { Z: 9, symbol: "F", name: "Fluorine", electronConfiguration: "1s2 2s2 2p5" },
  { Z: 10, symbol: "Ne", name: "Neon", electronConfiguration: "1s2 2s2 2p6" },
  { Z: 11, symbol: "Na", name: "Sodium", electronConfiguration: "1s2 2s2 2p6 3s1" },
  { Z: 12, symbol: "Mg", name: "Magnesium", electronConfiguration: "1s2 2s2 2p6 3s2" },
  { Z: 13, symbol: "Al", name: "Aluminium", electronConfiguration: "1s2 2s2 2p6 3s2 3p1" },
  { Z: 14, symbol: "Si", name: "Silicon", electronConfiguration: "1s2 2s2 2p6 3s2 3p2" },
  { Z: 15, symbol: "P", name: "Phosphorus", electronConfiguration: "1s2 2s2 2p6 3s2 3p3" },
  { Z: 16, symbol: "S", name: "Sulfur", electronConfiguration: "1s2 2s2 2p6 3s2 3p4" },
  { Z: 17, symbol: "Cl", name: "Chlorine", electronConfiguration: "1s2 2s2 2p6 3s2 3p5" },
  { Z: 18, symbol: "Ar", name: "Argon", electronConfiguration: "1s2 2s2 2p6 3s2 3p6" },
  { Z: 19, symbol: "K", name: "Potassium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1" },
  { Z: 20, symbol: "Ca", name: "Calcium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2" },
  { Z: 21, symbol: "Sc", name: "Scandium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d1" },
  { Z: 22, symbol: "Ti", name: "Titanium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d2" },
  { Z: 23, symbol: "V", name: "Vanadium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d3" },
  { Z: 24, symbol: "Cr", name: "Chromium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1 3d5" },
  { Z: 25, symbol: "Mn", name: "Manganese", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d5" },
  { Z: 26, symbol: "Fe", name: "Iron", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d6" },
  { Z: 27, symbol: "Co", name: "Cobalt", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d7" },
  { Z: 28, symbol: "Ni", name: "Nickel", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d8" },
  { Z: 29, symbol: "Cu", name: "Copper", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1 3d10" },
  { Z: 30, symbol: "Zn", name: "Zinc", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10" },
  { Z: 31, symbol: "Ga", name: "Gallium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1" },
  { Z: 32, symbol: "Ge", name: "Germanium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2" },
  { Z: 33, symbol: "As", name: "Arsenic", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3" },
  { Z: 34, symbol: "Se", name: "Selenium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4" },
  { Z: 35, symbol: "Br", name: "Bromine", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5" },
  { Z: 36, symbol: "Kr", name: "Krypton", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6" },
  { Z: 37, symbol: "Rb", name: "Rubidium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1" },
  { Z: 38, symbol: "Sr", name: "Strontium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2" },
  { Z: 39, symbol: "Y", name: "Yttrium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1" },
  { Z: 40, symbol: "Zr", name: "Zirconium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2" },
  { Z: 41, symbol: "Nb", name: "Niobium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4" },
  { Z: 42, symbol: "Mo", name: "Molybdenum", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5" },
  { Z: 43, symbol: "Tc", name: "Technetium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5" },
  { Z: 44, symbol: "Ru", name: "Ruthenium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7" },
  { Z: 45, symbol: "Rh", name: "Rhodium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8" },
  { Z: 46, symbol: "Pd", name: "Palladium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10" },
  { Z: 47, symbol: "Ag", name: "Silver", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10" },
  { Z: 48, symbol: "Cd", name: "Cadmium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10" },
  { Z: 49, symbol: "In", name: "Indium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1" },
  { Z: 50, symbol: "Sn", name: "Tin", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2" },
  { Z: 51, symbol: "Sb", name: "Antimony", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3" },
  { Z: 52, symbol: "Te", name: "Tellurium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4" },
  { Z: 53, symbol: "I", name: "Iodine", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5" },
  { Z: 54, symbol: "Xe", name: "Xenon", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6" },
  { Z: 55, symbol: "Cs", name: "Cesium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1" },
  { Z: 56, symbol: "Ba", name: "Barium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2" },
  { Z: 57, symbol: "La", name: "Lanthanum", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1" },
  { Z: 58, symbol: "Ce", name: "Cerium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1" },
  { Z: 59, symbol: "Pr", name: "Praseodymium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3" },
  { Z: 60, symbol: "Nd", name: "Neodymium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4" },
  { Z: 61, symbol: "Pm", name: "Promethium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5" },
  { Z: 62, symbol: "Sm", name: "Samarium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6" },
  { Z: 63, symbol: "Eu", name: "Europium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7" },
  { Z: 64, symbol: "Gd", name: "Gadolinium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1" },
  { Z: 65, symbol: "Tb", name: "Terbium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9" },
  { Z: 66, symbol: "Dy", name: "Dysprosium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10" },
  { Z: 67, symbol: "Ho", name: "Holmium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11" },
  { Z: 68, symbol: "Er", name: "Erbium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12" },
  { Z: 69, symbol: "Tm", name: "Thulium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13" },
  { Z: 70, symbol: "Yb", name: "Ytterbium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14" },
  { Z: 71, symbol: "Lu", name: "Lutetium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1" },
  { Z: 72, symbol: "Hf", name: "Hafnium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2" },
  { Z: 73, symbol: "Ta", name: "Tantalum", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3" },
  { Z: 74, symbol: "W", name: "Tungsten", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4" },
  { Z: 75, symbol: "Re", name: "Rhenium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5" },
  { Z: 76, symbol: "Os", name: "Osmium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6" },
  { Z: 77, symbol: "Ir", name: "Iridium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7" },
  { Z: 78, symbol: "Pt", name: "Platinum", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9" },
  { Z: 79, symbol: "Au", name: "Gold", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10" },
  { Z: 80, symbol: "Hg", name: "Mercury", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10" },
  { Z: 81, symbol: "Tl", name: "Thallium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1" },
  { Z: 82, symbol: "Pb", name: "Lead", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2" },
  { Z: 83, symbol: "Bi", name: "Bismuth", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3" },
  { Z: 84, symbol: "Po", name: "Polonium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4" },
  { Z: 85, symbol: "At", name: "Astatine", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5" },
  { Z: 86, symbol: "Rn", name: "Radon", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6" },
  { Z: 87, symbol: "Fr", name: "Francium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1" },
  { Z: 88, symbol: "Ra", name: "Radium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2" },
  { Z: 89, symbol: "Ac", name: "Actinium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1" },
  { Z: 90, symbol: "Th", name: "Thorium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2" },
  { Z: 91, symbol: "Pa", name: "Protactinium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1" },
  { Z: 92, symbol: "U", name: "Uranium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1" },
  { Z: 93, symbol: "Np", name: "Neptunium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1" },
  { Z: 94, symbol: "Pu", name: "Plutonium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6" },
  { Z: 95, symbol: "Am", name: "Americium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7" },
  { Z: 96, symbol: "Cm", name: "Curium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1" },
  { Z: 97, symbol: "Bk", name: "Berkelium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9" },
  { Z: 98, symbol: "Cf", name: "Californium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10" },
  { Z: 99, symbol: "Es", name: "Einsteinium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11" },
  { Z: 100, symbol: "Fm", name: "Fermium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12" },
  { Z: 101, symbol: "Md", name: "Mendelevium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13" },
  { Z: 102, symbol: "No", name: "Nobelium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14" },
  { Z: 103, symbol: "Lr", name: "Lawrencium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1" },
  { Z: 104, symbol: "Rf", name: "Rutherfordium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2" },
  { Z: 105, symbol: "Db", name: "Dubnium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3" },
  { Z: 106, symbol: "Sg", name: "Seaborgium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4" },
  { Z: 107, symbol: "Bh", name: "Bohrium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5" },
  { Z: 108, symbol: "Hs", name: "Hassium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6" },
  { Z: 109, symbol: "Mt", name: "Meitnerium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7" },
  { Z: 110, symbol: "Ds", name: "Darmstadtium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8" },
  { Z: 111, symbol: "Rg", name: "Roentgenium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9" },
  { Z: 112, symbol: "Cn", name: "Copernicium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10" },
  { Z: 113, symbol: "Nh", name: "Nihonium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1" },
  { Z: 114, symbol: "Fl", name: "Flerovium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2" },
  { Z: 115, symbol: "Mc", name: "Moscovium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3" },
  { Z: 116, symbol: "Lv", name: "Livermorium", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4" },
  { Z: 117, symbol: "Ts", name: "Tennessine", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5" },
  { Z: 118, symbol: "Og", name: "Oganesson", electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6" }
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
  // Look up the element's real electron configuration string
  const element = ELEMENTS.find((e) => e.Z === Z);
  const configStr = element && element.electronConfiguration;

  if (configStr) {
    // Parse the stored configuration string (e.g. "1s2 2s2 2p6 3s2 3p6 4s1 3d5")
    const filled = [];
    const typeCapacity = { s: 2, p: 6, d: 10, f: 14 };
    const lMap = { s: 0, p: 1, d: 2, f: 3 };
    const parts = configStr.trim().split(/\s+/);
    for (const part of parts) {
      const match = part.match(/^(\d+)([spdf])(\d+)$/);
      if (!match) continue;
      const n = parseInt(match[1], 10);
      const type = match[2];
      const electrons = parseInt(match[3], 10);
      filled.push({
        label: `${n}${type}`,
        n,
        l: lMap[type],
        type,
        capacity: typeCapacity[type],
        electrons
      });
    }
    return filled;
  }

  // Fallback: naive Aufbau filling for unknown elements
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
let composer = null;
let bloomPass = null;
let usePostFX = false;
let animationId;
let rootGroup;
let orbitState;
let sceneLights = {};
let maxZoomRadius = 200;
let rotateInertia = new THREE.Quaternion();
let isRotateDragActive = false;
let electronAnims = []; // tracked electron animations
let shootingStars = []; // tracked shooting stars
let orbitalRegistry = []; // { label, shape, shellRadius, electrons[], originalOpacities[] }
let hoveredOrbitalIndex = -1;
let focusedOrbitalIndex = -1; // -1 = none focused
let explorerFitRadius = 200; // camera radius that frames the current quantum cloud
const NORMAL_MAX_ZOOM_RADIUS = 200;
let lastNormalRadius = 14;
let lastQuantumRadius = null;
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
  scene.add(explorerGroup);
  explorerGroup.visible = false;

  camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200000);

  const target = new THREE.Vector3(0, 0, 0);
  orbitState = {
    target,
    radius: 14,
    theta: Math.PI / 4,
    phi: Math.PI / 2
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
  sceneLights = {
    ambient,
    hemi: hemiLight,
    key: keyLight,
    fill: fillLight,
    rim: rimLight
  };
  applyGraphicsQualitySettings();

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

  initShootingStars();

  rootGroup = new THREE.Group();
  scene.add(rootGroup);

  window.addEventListener("resize", onWindowResize);

  // Mouse orbit controls
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;
  let activePointerId = null;
  let dragAction = null; // "rotate" | "pan"

  const canvas = renderer.domElement;
  canvas.style.touchAction = "none";

  let mouseDownPos = { x: 0, y: 0 };

  canvas.addEventListener("pointerdown", (e) => {
    const isLeft = e.button === 0;
    const isRight = e.button === 2;
    if (!isLeft && !isRight) {
      return;
    }
    if (isRight) {
      e.preventDefault();
    }

    dragAction = isRight ? "pan" : "rotate";
    isRotateDragActive = dragAction === "rotate";
    if (isRotateDragActive) {
      rotateInertia.identity();
    }
    activePointerId = e.pointerId;
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);

    if (isLeft) {
      mouseDownPos.x = e.clientX;
      mouseDownPos.y = e.clientY;
    }
  });

  canvas.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  canvas.addEventListener("pointermove", (e) => {
    if (isDragging && orbitState && e.pointerId === activePointerId) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      if (dragAction === "rotate") {
        if (rootGroup) {
          const rotSpeed = AppSettings.rotationSensitivity || 0.003;

          // Ensure camera matrices are current before extracting axes
          camera.updateMatrixWorld();

          // Screen-space right axis for vertical drag (Pitching)
          const camRight = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).normalize();

          // Turntable logic:
          // Horizontal drag rotates around Global Y (0,1,0), acting as Yaw
          // Vertical drag rotates around Camera Right, acting as Pitch
          const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * rotSpeed);
          const qX = new THREE.Quaternion().setFromAxisAngle(camRight, dy * rotSpeed);

          // Apply pitch locally (qX later) and yaw globally (qY first)
          const deltaRotation = new THREE.Quaternion().multiplyQuaternions(qY, qX);

          // By only rotating around World Y and Camera Right, we inherently avoid Z-roll buildup
          rootGroup.quaternion.premultiply(deltaRotation);
          
          if (explorerGroup) {
            explorerGroup.quaternion.premultiply(deltaRotation);
            explorerGroup.quaternion.normalize();
          }

          // Normalize to prevent floating point drift
          rootGroup.quaternion.normalize();

          if (AppSettings.inertiaSpin) {
            rotateInertia.slerp(deltaRotation, 0.42);
          }
        }
      } else if (dragAction === "pan") {
        if (rootGroup) {
          const panScale = orbitState.radius * 0.0018;
          const forward = new THREE.Vector3();
          camera.getWorldDirection(forward);
          const right = new THREE.Vector3().crossVectors(forward, camera.up).normalize();
          const up = new THREE.Vector3().copy(camera.up).normalize();

          rootGroup.position.addScaledVector(right, dx * panScale);
          rootGroup.position.addScaledVector(up, -dy * panScale);

          if (explorerGroup) {
            explorerGroup.position.addScaledVector(right, dx * panScale);
            explorerGroup.position.addScaledVector(up, -dy * panScale);
          }
        }
      }
    } else if (!isDragging) {
      // Hover highlight (only when not dragging)
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      handleOrbitalHover();
    }
  });

  function endPointerDrag(e) {
    if (activePointerId !== null && e.pointerId !== activePointerId) {
      return;
    }
    isDragging = false;
    dragAction = null;
    activePointerId = null;
    isRotateDragActive = false;
  }

  canvas.addEventListener("pointerup", endPointerDrag);
  canvas.addEventListener("pointercancel", endPointerDrag);
  canvas.addEventListener("lostpointercapture", endPointerDrag);
  canvas.addEventListener("mouseleave", () => {
    isDragging = false;
    dragAction = null;
    activePointerId = null;
    isRotateDragActive = false;
  });

  canvas.addEventListener("click", (e) => {
    if (e.button !== 0) return;
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
      // Use an exponential zoom so the factor is always positive and monotonic.
      // Prevents edge cases where a large wheel delta can flip direction.
      const zoomFactor = Math.exp(e.deltaY * 0.001);
      orbitState.radius *= zoomFactor;
      orbitState.radius = Math.max(3, Math.min(maxZoomRadius, orbitState.radius));
      updateCameraFromOrbit();
    },
    { passive: false }
  );

  canvas.addEventListener("dblclick", () => {
    if (!orbitState) return;
    orbitState.radius = 14;
    orbitState.theta = Math.PI / 4;
    orbitState.phi = Math.PI / 2;
    if (rootGroup) {
      rootGroup.position.set(0, 0, 0);
      rootGroup.quaternion.identity();
    }
    if (explorerGroup) {
      explorerGroup.position.set(0, 0, 0);
      explorerGroup.quaternion.identity();
    }
    rotateInertia.identity();
    updateCameraFromOrbit();
  });

  animate();
  return true;
}

function initShootingStars() {
  if (!scene) return;

  const existingGroup = scene.getObjectByName("shootingStarsGroup");
  if (existingGroup) {
    scene.remove(existingGroup);
    // dispose geometries
    for (const child of existingGroup.children) {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    }
  }

  shootingStars = [];
  const ssGroup = new THREE.Group();
  ssGroup.name = "shootingStarsGroup";
  scene.add(ssGroup);

  // We only show shooting stars on high/ultra
  const numShootingStars = (AppSettings.quality === "ultra") ? 2 : (AppSettings.quality === "high" ? 1 : 0);

  for (let i = 0; i < numShootingStars; i++) {
    const geo = new THREE.BufferGeometry();
    const trailLength = 8;
    const posLine = new Float32Array(trailLength * 3);
    geo.setAttribute("position", new THREE.BufferAttribute(posLine, 3));

    const mat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const line = new THREE.Line(geo, mat);
    ssGroup.add(line);

    shootingStars.push({
      mesh: line,
      positions: posLine,
      trailLength: trailLength,
      active: false,
      timer: Math.random() * 2, // spawn sooner initially
      headV: new THREE.Vector3(),
      dirV: new THREE.Vector3(),
      speed: 0,
      distanceTraveled: 0,
      fadingOut: false
    });
  }
}

function onWindowResize() {
  if (!renderer || !camera) return;
  const width = rendererContainer.clientWidth || window.innerWidth;
  const height = rendererContainer.clientHeight || window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  applyGraphicsQualitySettings();
}

// --- Animation loop ---

const clock = new THREE.Clock();

function animate() {
  animationId = requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  if (rootGroup) {
    if (AppSettings.autorotate && !isRotateDragActive) {
      const autoRot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.0008);
      rootGroup.quaternion.premultiply(autoRot);
      if (explorerGroup) explorerGroup.quaternion.premultiply(autoRot);
    }

    if (AppSettings.inertiaSpin && !isRotateDragActive) {
      rootGroup.quaternion.premultiply(rotateInertia);
      if (explorerGroup) explorerGroup.quaternion.premultiply(rotateInertia);
      rotateInertia.slerp(new THREE.Quaternion(), 0.06);
    }
    if (!AppSettings.inertiaSpin && !isRotateDragActive) {
      rotateInertia.identity();
    }
  }

  // Animate electrons along their orbital paths
  for (const anim of electronAnims) {
    anim.update(elapsed);
  }

  // Animate shooting stars
  if (AppSettings.starfield && (AppSettings.quality === "high" || AppSettings.quality === "ultra")) {
    const delta = clock.getDelta() || 0.016; // rough fallback if delta is weird
    for (const ss of shootingStars) {
      if (!ss.active) {
        ss.timer -= delta;
        if (ss.timer <= 0) {
          ss.active = true;
          ss.timer = Math.random() * 4 + 2;
          ss.distanceTraveled = 0;
          ss.fadingOut = false;

          // spawn roughly above or to the side, between r=50 and r=90
          const r = 50 + Math.random() * 40;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          ss.headV.set(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));

          // random direction
          ss.dirV.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
          ss.speed = Math.random() * 50 + 40; // fast!

          for (let i = 0; i < ss.trailLength; i++) {
            ss.positions[i * 3] = ss.headV.x;
            ss.positions[i * 3 + 1] = ss.headV.y;
            ss.positions[i * 3 + 2] = ss.headV.z;
          }
          ss.mesh.geometry.attributes.position.needsUpdate = true;
          ss.mesh.material.opacity = 0;
        }
      } else {
        // calculate current step
        const stepDist = ss.speed * delta;
        const step = ss.dirV.clone().multiplyScalar(stepDist);
        ss.headV.add(step);
        ss.distanceTraveled += stepDist;

        // Draw a perfectly smooth straight line behind the head
        // Use a bell curve (sine wave from 0 to PI) based on distance traveled vs max distance (~110)
        // This makes the star grow smoothly to a peak length, then shrink to nothing.
        const lifetimeFraction = Math.max(0, Math.min(1, ss.distanceTraveled / 110));
        const bellCurve = Math.sin(lifetimeFraction * Math.PI);

        const currentTrailLen = bellCurve * (ss.speed * 0.18); // stretches and shrinks naturally

        for (let i = 0; i < ss.trailLength; i++) {
          const fraction = i / (ss.trailLength - 1);
          const lagDist = fraction * currentTrailLen;

          ss.positions[i * 3 + 0] = ss.headV.x - ss.dirV.x * lagDist;
          ss.positions[i * 3 + 1] = ss.headV.y - ss.dirV.y * lagDist;
          ss.positions[i * 3 + 2] = ss.headV.z - ss.dirV.z * lagDist;
        }
        ss.mesh.geometry.attributes.position.needsUpdate = true;

        // Force rendering behind everything
        ss.mesh.renderOrder = -5;

        // Apply same bell curve to opacity for smooth fade in/out
        ss.mesh.material.opacity = bellCurve * 1.0;

        if (ss.distanceTraveled > 110 || ss.mesh.material.opacity <= 0.01 && lifetimeFraction > 0.5) {
          ss.fadingOut = true;
          ss.mesh.material.opacity -= delta * 2;
          if (ss.mesh.material.opacity <= 0) {
            ss.active = false;
            ss.mesh.material.opacity = 0;
          }
        }
      }
    }
  }

  if (renderer && scene && camera) {
    if (usePostFX && composer) {
      composer.render();
    } else {
      renderer.render(scene, camera);
    }
  }

  // Update focus label position after rendering so all matrices (camera & objects) are perfectly in sync with the current frame
  updateFocusLabelPosition();
}

// --- Settings State ---

const DEFAULT_SETTINGS = {
  colors: {
    s: "#2f6bff",
    p: "#ff3b30",
    d: "#ffd400",
    f: "#20c96b"
  },
  quality: "high", // ultra, high, medium, low, verylow
  starfield: true,
  particleView: false,
  autorotate: true,
  inertiaSpin: false,
  rotationSensitivity: 0.003
};

let AppSettings = { ...DEFAULT_SETTINGS };
try {
  const saved = localStorage.getItem("atom_visualizer_settings");
  if (saved) {
    AppSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  }
} catch (e) { console.error("Could not load settings"); }
const VALID_QUALITIES = new Set(["ultra", "high", "medium", "low", "verylow"]);
if (!VALID_QUALITIES.has(AppSettings.quality)) {
  AppSettings.quality = "high";
}

function applySavedColorMigration() {
  const legacy = {
    s: "#89c5ff",
    p: "#ff7ab8",
    d: "#c5ff63",
    f: "#d6a2ff"
  };

  const normalize = (value) => String(value || "").trim().toLowerCase();
  let changed = false;

  if (!AppSettings.colors || typeof AppSettings.colors !== "object") {
    AppSettings.colors = { ...DEFAULT_SETTINGS.colors };
    return true;
  }

  for (const key of ["s", "p", "d", "f"]) {
    if (!AppSettings.colors[key]) {
      AppSettings.colors[key] = DEFAULT_SETTINGS.colors[key];
      changed = true;
      continue;
    }
    if (normalize(AppSettings.colors[key]) === normalize(legacy[key])) {
      AppSettings.colors[key] = DEFAULT_SETTINGS.colors[key];
      changed = true;
    }
  }
  return changed;
}
if (applySavedColorMigration()) {
  try {
    localStorage.setItem("atom_visualizer_settings", JSON.stringify(AppSettings));
  } catch (_) {
    // Ignore persistence failure; runtime colors are still migrated.
  }
}

function configurePostProcessing() {
  const canUseComposer =
    typeof THREE.EffectComposer === "function" &&
    typeof THREE.RenderPass === "function" &&
    typeof THREE.UnrealBloomPass === "function";
  const shouldUse = AppSettings.quality === "ultra" && canUseComposer;

  if (!shouldUse) {
    composer = null;
    bloomPass = null;
    usePostFX = false;
    return;
  }

  if (!composer) {
    composer = new THREE.EffectComposer(renderer);
    const renderPass = new THREE.RenderPass(scene, camera);
    bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(1, 1), 1.1, 0.7, 0.82);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);
  }

  const width = rendererContainer.clientWidth || window.innerWidth;
  const height = rendererContainer.clientHeight || window.innerHeight;
  composer.setSize(width, height);
  if (typeof composer.setPixelRatio === "function") {
    composer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  }
  if (bloomPass) {
    bloomPass.strength = 1.08;
    bloomPass.radius = 0.72;
    bloomPass.threshold = 0.8;
  }
  usePostFX = true;
}

function applyGraphicsQualitySettings() {
  if (!renderer) return;

  const profiles = {
    ultra: { ambient: 0.78, hemi: 0.88, key: 1.9, fill: 1.05, rim: 2.6, exposure: 1.2, shadows: true, pixelCap: 2 },
    high: { ambient: 0.6, hemi: 0.6, key: 1.2, fill: 0.6, rim: 1.8, exposure: 1.05, shadows: true, pixelCap: 2 },
    medium: { ambient: 0.5, hemi: 0.45, key: 1.0, fill: 0.45, rim: 1.25, exposure: 1.0, shadows: false, pixelCap: 1.75 },
    low: { ambient: 0.38, hemi: 0.3, key: 0.75, fill: 0.2, rim: 0.85, exposure: 0.95, shadows: false, pixelCap: 1.35 },
    verylow: { ambient: 0.26, hemi: 0.18, key: 0.52, fill: 0.1, rim: 0.42, exposure: 0.9, shadows: false, pixelCap: 1 }
  };
  const q = profiles[AppSettings.quality] || profiles.high;

  renderer.physicallyCorrectLights = AppSettings.quality === "ultra";
  renderer.toneMapping = AppSettings.quality === "verylow" ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = q.exposure;
  renderer.shadowMap.enabled = q.shadows;
  renderer.shadowMap.type = AppSettings.quality === "ultra" ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, q.pixelCap));
  renderer.setSize(rendererContainer.clientWidth || window.innerWidth, rendererContainer.clientHeight || window.innerHeight, false);

  if (sceneLights.ambient) sceneLights.ambient.intensity = q.ambient;
  if (sceneLights.hemi) sceneLights.hemi.intensity = q.hemi;
  if (sceneLights.key) {
    sceneLights.key.intensity = q.key;
    sceneLights.key.castShadow = q.shadows;
    if (q.shadows) {
      sceneLights.key.shadow.mapSize.set(2048, 2048);
      sceneLights.key.shadow.bias = -0.0002;
    }
  }
  if (sceneLights.fill) sceneLights.fill.intensity = q.fill;
  if (sceneLights.rim) sceneLights.rim.intensity = q.rim;

  configurePostProcessing();
}

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
  if (AppSettings.quality === "ultra") segs = 96;
  if (AppSettings.quality === "medium") segs = 36;
  if (AppSettings.quality === "low") segs = 18;
  if (AppSettings.quality === "verylow") segs = 12;

  let pSegs = segs;
  let tSegsR = segs, tSegsT = segs * 2;
  // Reduce detail for inner electron spheres since they are small
  let eSegs = 32;
  if (AppSettings.quality === "ultra") eSegs = 42;
  if (AppSettings.quality === "medium") eSegs = 24;
  if (AppSettings.quality === "low") eSegs = 12;
  if (AppSettings.quality === "verylow") eSegs = 8;

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
    color: 0xffc96d, emissive: 0xffcc88, emissiveIntensity: 0.15,
    roughness: 0.2, metalness: 0.3, transparent: true, opacity: 0.96,
    clearcoat: 1, clearcoatRoughness: 0.1, depthWrite: true
  });
  const mesh = new THREE.Mesh(geo.nucleus, mat);
  mesh.scale.setScalar(radius);
  // Force nucleus to draw early so that orbitals correctly blend over it or are hidden behind it
  mesh.renderOrder = 1;

  // No glow sphere around nucleus — avoids confusion with orbitals
  return mesh;
}

// --- Radial Node Computation (Hydrogen-like Wavefunction) ---
// The radial wavefunction R_nl(r) has (n - l - 1) radial nodes.
// Node positions are zeros of the associated Laguerre polynomial L^(2l+1)_(n-l-1)(ρ)
// where ρ = 2r/(n·a₀). We store pre-computed zeros scaled in units of (n·a₀/2).

/**
 * Compute zeros of the associated Laguerre polynomial L^α_k(x)
 * using Newton's method. These give radial node positions.
 * Returns array of k zeros in ascending order.
 */
function laguerreZeros(k, alpha) {
  if (k <= 0) return [];

  // Evaluate L^α_k(x) using the recurrence relation
  function laguerre(x, k, alpha) {
    if (k === 0) return 1;
    if (k === 1) return 1 + alpha - x;
    let Lm2 = 1;
    let Lm1 = 1 + alpha - x;
    let L = 0;
    for (let j = 2; j <= k; j++) {
      L = ((2 * j - 1 + alpha - x) * Lm1 - (j - 1 + alpha) * Lm2) / j;
      Lm2 = Lm1;
      Lm1 = L;
    }
    return L;
  }

  // Derivative via recurrence: d/dx L^α_k(x) = -L^(α+1)_(k-1)(x)
  function laguerreDeriv(x, k, alpha) {
    if (k === 0) return 0;
    return -laguerre(x, k - 1, alpha + 1);
  }

  const zeros = [];
  // Initial guesses using approximation from Tricomi (1947)
  for (let i = 1; i <= k; i++) {
    // Approximate i-th zero
    let x = (Math.PI * (4 * i - 1)) / (4 * k + 2 * alpha + 2);
    x = x * x * (k + (alpha + 1) / 2);
    // Better initial guess: Stroud & Secrest formula
    if (i === 1) {
      x = (1 + alpha) * (3 + 0.92 * alpha) / (1 + 2.4 * k + 1.8 * alpha);
    } else if (i === 2) {
      x = zeros[0] + (4 + alpha) / (1 + 0.156 * alpha) * (1 + 0.2 * alpha);
    } else {
      const ratio = (1 + 2.55 * (i - 2)) / (1.9 * (i - 2));
      x = zeros[i - 2] + ratio * (zeros[i - 2] - (zeros[i - 3] || 0));
    }

    // Newton's method refinement
    for (let iter = 0; iter < 50; iter++) {
      const val = laguerre(x, k, alpha);
      const deriv = laguerreDeriv(x, k, alpha);
      if (Math.abs(deriv) < 1e-15) break;
      const dx = val / deriv;
      x -= dx;
      if (Math.abs(dx) < 1e-12 * Math.max(1, Math.abs(x))) break;
    }
    zeros.push(x);
  }
  return zeros.sort((a, b) => a - b);
}

/**
 * Get radial node positions for orbital (n, l) scaled to visual shell radius.
 * ρ_node = zeros of L^(2l+1)_(n-l-1)(ρ), then r_node = ρ_node × n / 2 × (shellRadius/n)
 * Returns fractional positions (0..1) relative to shellRadius.
 */
function getRadialNodeFractions(n, l) {
  const k = n - l - 1; // number of radial nodes
  if (k <= 0) return [];
  const alpha = 2 * l + 1;
  const rhoZeros = laguerreZeros(k, alpha);
  // Convert ρ zeros to r in units of a₀: r = ρ × n·a₀/2
  // Maximum r for the orbital scales as ~n²·a₀, so fraction = (ρ×n/2) / n² = ρ/(2n)
  // But for visual mapping we want fraction relative to the displayed shell radius
  const rMax = rhoZeros.length > 0 ? Math.max(...rhoZeros) * 1.5 : 1;
  return rhoZeros.map(rho => rho / (rMax + alpha * 0.5));
}

// --- Particle View (Probability Density |Ψ|² Point Cloud) ---
// Generates point clouds sampling the hydrogen-like probability density
// |Ψ_nlm(r,θ,φ)|² = |R_nl(r)|² × |Y_lm(θ,φ)|²

/**
 * Evaluate the radial wavefunction R_nl(r) for hydrogen-like atom.
 * R_nl(r) = N × (2r/n)^l × e^(-r/n) × L^(2l+1)_(n-l-1)(2r/n)
 * Returns |R_nl(r)|² (probability density radial part).
 * r is in units of a₀ (Bohr radius), scaled to visualization coords.
 */
function radialProbability(r, n, l) {
  if (r < 0) return 0;
  const rho = 2 * r / n;

  // Associated Laguerre polynomial L^(2l+1)_(n-l-1)(rho)
  const k = n - l - 1;
  const alpha = 2 * l + 1;
  let Lm2 = 1, Lm1 = 1 + alpha - rho, L;
  if (k === 0) L = 1;
  else if (k === 1) L = 1 + alpha - rho;
  else {
    for (let j = 2; j <= k; j++) {
      L = ((2 * j - 1 + alpha - rho) * Lm1 - (j - 1 + alpha) * Lm2) / j;
      Lm2 = Lm1;
      Lm1 = L;
    }
  }

  // Normalization (simplified — we only need relative density for visualization)
  const rhoL = Math.pow(rho, l);
  const expPart = Math.exp(-rho / 2);
  const R = rhoL * expPart * L;
  return R * R;
}

/**
 * Evaluate |Y_lm(θ,φ)|² (angular probability density).
 * Uses real spherical harmonics for visualization.
 */
function angularProbability(theta, phi, l, m) {
  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);

  if (l === 0) {
    // Y_00 = 1/(4π)^½ → |Y|² = 1/(4π) (uniform)
    return 1;
  }

  if (l === 1) {
    // Real spherical harmonics for p orbitals
    if (m === 0) {
      // p_z: Y ∝ cos(θ)
      return cosTheta * cosTheta;
    } else if (m === 1 || m === -1) {
      // p_x or p_y: Y ∝ sin(θ)cos(φ) or sin(θ)sin(φ)
      const trig = m === 1 ? Math.cos(phi) : Math.sin(phi);
      return sinTheta * sinTheta * trig * trig;
    }
  }

  if (l === 2) {
    // Real spherical harmonics for d orbitals
    if (m === 0) {
      // d_z²: Y ∝ (3cos²θ - 1)
      const val = 3 * cosTheta * cosTheta - 1;
      return val * val;
    } else if (Math.abs(m) === 1) {
      // d_xz or d_yz: Y ∝ sinθ·cosθ·cos(φ) or sin(φ)
      const trig = m > 0 ? Math.cos(phi) : Math.sin(phi);
      return sinTheta * sinTheta * cosTheta * cosTheta * trig * trig;
    } else {
      // d_xy or d_x²-y²: Y ∝ sin²θ·cos(2φ) or sin(2φ)
      const trig = m > 0 ? Math.cos(2 * phi) : Math.sin(2 * phi);
      return Math.pow(sinTheta, 4) * trig * trig;
    }
  }

  if (l === 3) {
    // Exact associated Legendre polynomials for f orbitals (l=3)
    const absM = Math.abs(m);
    const cos2 = cosTheta * cosTheta;
    const sin2 = sinTheta * sinTheta;

    if (absM === 0) {
      // f_z³: P_3^0(cosθ) ∝ 5cos³θ - 3cosθ
      const P = cosTheta * (5 * cos2 - 3);
      return P * P;
    } else if (absM === 1) {
      // f_xz² / f_yz²: P_3^1(cosθ) ∝ (5cos²θ - 1)sinθ
      const P = (5 * cos2 - 1) * sinTheta;
      const trig = m > 0 ? Math.cos(phi) : Math.sin(phi);
      return P * P * trig * trig;
    } else if (absM === 2) {
      // f_xyz / f(x²-y²)z: P_3^2(cosθ) ∝ cosθ·sin²θ
      const P = cosTheta * sin2;
      const trig = m > 0 ? Math.sin(2 * phi) : Math.cos(2 * phi);
      return P * P * trig * trig;
    } else {
      // m = ±3: f_x³ / f_y³: P_3^3(cosθ) ∝ sin³θ
      const P = sinTheta * sin2;
      const trig = m > 0 ? Math.sin(3 * phi) : Math.cos(3 * phi);
      return P * P * trig * trig;
    }
  }

  // l >= 4 (g+ orbitals — not found in known elements, but handle gracefully)
  // Use the general associated Legendre formula as a fallback
  const absM = Math.abs(m);
  const P = Math.pow(sinTheta, absM) * Math.pow(cosTheta, l - absM);
  const trig = m >= 0 ? Math.cos(absM * phi) : Math.sin(absM * phi);
  return P * P * trig * trig;
}

// --- Quantum CDF Probability Sampling (Exact Legendre Eigenstates) ---
const quantumCdfCache = new Map();

// ── Exact port of YouTuber's CDF sampling (C++ → JS) ──────────────────────
// Credit: [YouTuber name/link] for the sampling approach

function buildQuantumCDFs(n, l, m) {
  const key = `${n}_${l}_${m}`;
  if (quantumCdfCache.has(key)) return quantumCdfCache.get(key);

  const a0 = 1; // Bohr radius in atomic units

  // ── Radial CDF (his sampleR) ─────────────────────────────────────────────
  const rSteps = 4096;
  const rMax = 10 * n * n * a0;
  const dr = rMax / (rSteps - 1);
  const radialCDF = new Float64Array(rSteps);
  let rSum = 0;

  for (let i = 0; i < rSteps; i++) {
    const r = i * dr;
    const rho = 2 * r / (n * a0);
    const k = n - l - 1;   // degree of Laguerre polynomial
    const a = 2 * l + 1;   // alpha parameter

    // Associated Laguerre polynomial via recurrence (his lines 44-47)
    let L = 1, L1 = 1 + a - rho;
    if (k === 0)      { L = 1; }
    else if (k === 1) { L = L1; }
    else {
      for (let j = 2; j <= k; j++) {
        const Lnew = ((2*j - 1 + a - rho) * L1 - (j - 1 + a) * L) / j;
        L = L1;
        L1 = Lnew;
      }
      L = L1;
    }

    // Full normalized radial wavefunction R_nl (his lines 50-51)
    // R = sqrt((2/na0)^3 * (n-l-1)! / (2n*(n+l)!)) * exp(-rho/2) * rho^l * L
    const norm = Math.sqrt(
      Math.pow(2 / (n * a0), 3) *
      gamma(n - l) /          // (n-l-1)! = gamma(n-l)
      (2 * n * gamma(n + l + 1)) // (n+l)!  = gamma(n+l+1)
    );
    const R = norm * Math.exp(-rho / 2) * Math.pow(rho, l) * L;

    // r² |R|² is the radial probability density (his line 53)
    rSum += r * r * R * R;
    radialCDF[i] = rSum;
  }
  for (let i = 0; i < rSteps; i++) radialCDF[i] /= rSum;

  // ── Theta CDF (his sampleTheta) ──────────────────────────────────────────
  const thetaSteps = 2048;
  const dTheta = Math.PI / (thetaSteps - 1);
  const thetaCDF = new Float64Array(thetaSteps);
  const absM = Math.abs(m); // his code uses |m| throughout
  let thetaSum = 0;

  for (let i = 0; i < thetaSteps; i++) {
    const theta = i * dTheta;
    const x = Math.cos(theta); // x = cos(θ)

    // Associated Legendre P_l^|m|(x) via his recurrence (lines 73-81)
    let Pmm = 1.0;
    if (absM > 0) {
      const s = Math.sqrt((1 - x) * (1 + x)); // sin(θ)
      let f = 1;
      for (let j = 1; j <= absM; j++) {
        Pmm *= -f * s;
        f += 2;
      }
    }

    let Plm;
    if (l === absM) {
      Plm = Pmm;
    } else {
      let Pm1m = x * (2 * absM + 1) * Pmm;
      if (l === absM + 1) {
        Plm = Pm1m;
      } else {
        Plm = Pm1m; // will be overwritten
        for (let ll = absM + 2; ll <= l; ll++) {
          const Pll = ((2*ll - 1) * x * Pm1m - (ll + absM - 1) * Pmm) / (ll - absM);
          Pmm = Pm1m;
          Pm1m = Pll;
          Plm = Pll;
        }
      }
    }

    // sin(θ) * P_l^|m|(cosθ)² (his line 82)
    thetaSum += Math.sin(theta) * Plm * Plm;
    thetaCDF[i] = thetaSum;
  }
  for (let i = 0; i < thetaSteps; i++) thetaCDF[i] /= thetaSum;

  const cdfs = { radialCDF, thetaCDF, rMax };
  quantumCdfCache.set(key, cdfs);
  return cdfs;
}

// Gamma function (needed for the normalization constant above)
// Uses Lanczos approximation — accurate to ~15 significant figures
function gamma(z) {
  if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
  z -= 1;
  const g = 7;
  const c = [
    0.99999999999980993,  676.5203681218851,    -1259.1392167224028,
    771.32342877765313,   -176.61502916214059,   12.507343278686905,
    -0.13857109526572012,  9.9843695780195716e-6, 1.5056327351493116e-7
  ];
  let x = c[0];
  for (let i = 1; i < g + 2; i++) x += c[i] / (z + i);
  const t = z + g + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
}

function sampleCDF(cdf, maxVal) {
  const r = Math.random();
  let low = 0, high = cdf.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (cdf[mid] < r) low = mid + 1;
    else high = mid - 1;
  }
  if (low >= cdf.length) low = cdf.length - 1;
  return (low / (cdf.length - 1)) * maxVal;
}



// --- Spin Arrow Sprites ---
// Creates a sprite showing ↑ (spin up, m_s = +½) or ↓ (spin down, m_s = -½)

function createSpinArrowTexture(spinUp) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Clear
  ctx.clearRect(0, 0, 64, 64);

  // Draw arrow
  ctx.fillStyle = spinUp ? "#00ffaa" : "#ff6688";
  ctx.strokeStyle = spinUp ? "#00ffaa" : "#ff6688";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const cx = 32, cy = 32;

  if (spinUp) {
    // ↑ arrow
    ctx.beginPath();
    ctx.moveTo(cx, 12);      // tip
    ctx.lineTo(cx - 12, 28); // left barb
    ctx.moveTo(cx, 12);
    ctx.lineTo(cx + 12, 28); // right barb
    ctx.moveTo(cx, 12);
    ctx.lineTo(cx, 52);      // shaft
    ctx.stroke();
  } else {
    // ↓ arrow
    ctx.beginPath();
    ctx.moveTo(cx, 52);      // tip
    ctx.lineTo(cx - 12, 36); // left barb
    ctx.moveTo(cx, 52);
    ctx.lineTo(cx + 12, 36); // right barb
    ctx.moveTo(cx, 52);
    ctx.lineTo(cx, 12);      // shaft
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Cache spin textures
let spinUpTexture = null;
let spinDownTexture = null;

function getSpinTexture(spinUp) {
  if (spinUp) {
    if (!spinUpTexture) spinUpTexture = createSpinArrowTexture(true);
    return spinUpTexture;
  } else {
    if (!spinDownTexture) spinDownTexture = createSpinArrowTexture(false);
    return spinDownTexture;
  }
}

function createSpinArrowSprite(spinUp) {
  const texture = getSpinTexture(spinUp);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    sizeAttenuation: true
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.3, 0.3, 0.3);
  return sprite;
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

function getOrbitalVisualProfile() {
  const map = {
    ultra: { emissiveMult: 1.45, opacityMult: 1.45 },
    high: { emissiveMult: 1.22, opacityMult: 1.22 },
    medium: { emissiveMult: 1.08, opacityMult: 1.1 },
    low: { emissiveMult: 1.0, opacityMult: 1.0 },
    verylow: { emissiveMult: 0.9, opacityMult: 0.9 }
  };
  return map[AppSettings.quality] || map.high;
}

/**
 * s orbital: sphere
 * Radius proportional to n
 */
function createSOrbital(n, shellRadius, color, fillRatio) {
  const geo = getSharedGeometries();
  const group = new THREE.Group();
  const v = getOrbitalVisualProfile();

  const mat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: (0.2 + fillRatio * 0.2) * v.emissiveMult,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: Math.min(0.72, (0.14 + fillRatio * 0.16) * v.opacityMult),
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
  const v = getOrbitalVisualProfile();

  // Use a stretched sphere for each lobe (ellipsoid)
  const lobeGeo = new THREE.SphereGeometry(1, getSharedGeometries().lobeSegments, getSharedGeometries().lobeSegments);
  const lobeMat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: (0.2 + fillRatio * 0.2) * v.emissiveMult,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: Math.min(0.72, (0.14 + fillRatio * 0.15) * v.opacityMult),
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
  lobe2.material.emissiveIntensity = (0.13 + fillRatio * 0.13) * v.emissiveMult;
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
 * d orbital: four-lobed cloverleaf shapes or torus+dumbbell (dz²).
 * m_l: actual magnetic quantum number (-2 to +2).
 * Standard real spherical harmonic convention:
 *   m_l=0  → d_z²: torus (equatorial belt) + two polar lobes
 *   m_l=±1 → d_xz / d_yz: two lobes in xz / yz plane
 *   m_l=±2 → d_xy / d_(x²-y²): four-lobed cloverleaf in xy plane
 */
function createDOrbital(n, m_l, shellRadius, color, fillRatio) {
  const group = new THREE.Group();
  const sg = getSharedGeometries();
  const v = getOrbitalVisualProfile();
  const lobeGeo = new THREE.SphereGeometry(1, sg.lobeSegments, sg.lobeSegments);
  const lobeMat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: (0.16 + fillRatio * 0.16) * v.emissiveMult,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: Math.min(0.7, (0.12 + fillRatio * 0.13) * v.opacityMult),
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const lobeSize = shellRadius * 0.3;
  const lobeOffset = shellRadius * 0.45;

  if (m_l === 0) {
    // d_z²: torus (equatorial belt) + two polar lobes along z-axis
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
  } else if (Math.abs(m_l) === 1) {
    // d_xz (m_l=+1) or d_yz (m_l=-1): two lobes
    // Default lobe axis is y; rotate to place lobes in the correct plane
    const lobeMatNeg = lobeMat.clone();
    lobeMatNeg.emissiveIntensity = (0.1 + fillRatio * 0.1) * v.emissiveMult;

    const topLobe = new THREE.Mesh(lobeGeo, lobeMat);
    topLobe.scale.set(lobeSize * 0.8, lobeSize * 1.1, lobeSize * 0.8);
    topLobe.position.y = lobeOffset;
    group.add(topLobe);

    const botLobe = new THREE.Mesh(lobeGeo, lobeMatNeg);
    botLobe.scale.set(lobeSize * 0.8, lobeSize * 1.1, lobeSize * 0.8);
    botLobe.position.y = -lobeOffset;
    group.add(botLobe);

    if (m_l === 1) {
      // d_xz: lobes in xz plane — rotate around y-axis
      group.rotation.y = Math.PI / 2;
    } else {
      // d_yz: lobes in yz plane — rotate around x-axis
      group.rotation.x = Math.PI / 2;
    }
  } else {
    // m_l = ±2: d_xy (m_l=+2) or d_(x²-y²) (m_l=-2)
    // Four-lobed cloverleaf in xy plane
    const angles = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];
    for (const angle of angles) {
      const lobe = new THREE.Mesh(lobeGeo, lobeMat);
      lobe.scale.setScalar(lobeSize);
      lobe.position.x = lobeOffset * Math.cos(angle);
      lobe.position.z = lobeOffset * Math.sin(angle);
      group.add(lobe);
    }

    if (m_l === 2) {
      // d_xy: cloverleaf rotated 45° from axes
      group.rotation.y = Math.PI / 4;
    }
    // m_l=-2 → d_(x²-y²): cloverleaf aligned with axes (default, no rotation)
  }

  return group;
}

/**
 * f orbital: multi-lobed shapes following real spherical harmonics (l=3).
 * m_l: actual magnetic quantum number (-3 to +3).
 * Standard real spherical harmonic convention:
 *   m_l=0   → fz³: 2 polar lobes + 6 equatorial (3 planar nodes)
 *   m_l=±1  → fxz²/fyz²: 4 lobes in xz/yz plane
 *   m_l=±2  → fxyz/f(x²-y²)z: 4 lobes rotated 45° around z
 *   m_l=±3  → fx³/fy³: 4 lobes in xy-oriented planes
 */
function createFOrbital(n, m_l, shellRadius, color, fillRatio) {
  const group = new THREE.Group();
  const sg = getSharedGeometries();
  const v = getOrbitalVisualProfile();
  const lobeGeo = new THREE.SphereGeometry(1, sg.lobeSegments, sg.lobeSegments);
  const lobeMat = new THREE.MeshPhysicalMaterial({
    color: color.main,
    emissive: color.emissive,
    emissiveIntensity: (0.14 + fillRatio * 0.14) * v.emissiveMult,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: Math.min(0.68, (0.1 + fillRatio * 0.1) * v.opacityMult),
    side: THREE.DoubleSide,
    depthWrite: false
  });

  const lobeSize = shellRadius * 0.22;
  const lobeOffset = shellRadius * 0.45;

  if (m_l === 0) {
    // fz³ type: 2 large polar lobes + 6 smaller equatorial lobes
    // (axial symmetry with 3 planar nodes at specific angles)
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
  } else if (Math.abs(m_l) <= 2) {
    // m_l = ±1: fxz² / fyz² — 4 lobes in xz or yz plane
    // m_l = ±2: fxyz / f(x²-y²)z — 4 lobes at 45° to axes
    // Both are 4-lobe structures with different plane orientations
    const d = lobeOffset * 0.65;
    const posLobe = new THREE.Mesh(lobeGeo, lobeMat);
    posLobe.scale.setScalar(lobeSize);
    posLobe.position.set(d, d, 0);
    group.add(posLobe);

    const negLobe = new THREE.Mesh(lobeGeo, lobeMat.clone());
    negLobe.scale.setScalar(lobeSize);
    negLobe.position.set(-d, -d, 0);
    group.add(negLobe);

    const posLobe2 = new THREE.Mesh(lobeGeo, lobeMat.clone());
    posLobe2.scale.setScalar(lobeSize);
    posLobe2.position.set(-d, d, 0);
    group.add(posLobe2);

    const negLobe2 = new THREE.Mesh(lobeGeo, lobeMat.clone());
    negLobe2.scale.setScalar(lobeSize);
    negLobe2.position.set(d, -d, 0);
    group.add(negLobe2);

    if (Math.abs(m_l) === 1) {
      // fxz² (m_l=+1) or fyz² (m_l=-1): in xz or yz plane
      if (m_l === -1) group.rotation.y = Math.PI / 2;
    } else {
      // fxyz (m_l=+2) or f(x²-y²)z (m_l=-2): rotated 45° around z
      group.rotation.z = Math.PI / 4;
      if (m_l === -2) group.rotation.y = Math.PI / 2;
    }
  } else {
    // m_l = ±3: fx³ / fy³ — 4 lobes in rotated planes
    const d = lobeOffset * 0.6;
    const offsets = [
      [1, 1, 0], [-1, -1, 0], [1, -1, 0], [-1, 1, 0]
    ];
    for (const off of offsets) {
      const lobe = new THREE.Mesh(lobeGeo, lobeMat.clone());
      lobe.scale.setScalar(lobeSize);
      lobe.position.set(off[0] * d, off[1] * d, off[2] * d);
      group.add(lobe);
    }
    // Rotate 60° around z for m_l=+3, 60°+90° for m_l=-3
    group.rotation.z = (m_l > 0) ? Math.PI / 3 : Math.PI / 3 + Math.PI / 2;
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

      // Create the orbital shape (surface mesh)
      let orbitalShape;
      if (l === 0) {
        orbitalShape = createSOrbital(n, shellRadius, color, mFillRatio);
      } else if (l === 1) {
        orbitalShape = createPOrbital(n, mIdx, shellRadius, color, mFillRatio);
      } else if (l === 2) {
        orbitalShape = createDOrbital(n, ml, shellRadius, color, mFillRatio);
      } else {
        orbitalShape = createFOrbital(n, ml, shellRadius, color, mFillRatio);
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

          // --- Spin arrow sprite ---
          const isSpinUp = e === 0;
          const spinArrow = createSpinArrowSprite(isSpinUp);
          spinArrow.position.set(0.15, 0.2, 0);
          eMesh.add(spinArrow);

          rootGroup.add(eMesh);

          const phase = (e / numElectrons) * Math.PI * 2 + orbitalIndex * 0.7;
          const speed = 0.5 + 0.15 / Math.max(1, n * 0.5);

          let pathFn;
          if (l === 0) {
            const tiltX = orbitalIndex * 1.2 + e * 0.5;
            const tiltZ = orbitalIndex * 0.8 + e * 0.3;
            pathFn = sOrbitalPath(shellRadius * 0.85, tiltX, tiltZ);
          } else if (l === 1) {
            const axes = ["x", "y", "z"];
            pathFn = pOrbitalPath(shellRadius * 1.1, axes[mIdx] || "y");
          } else {
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

  // Set dynamic zoom cap so the full atom is always visible.
  // FOV-aware: camera distance ≥ extent / tan(half-FOV) with 20% margin.
  const maxLForMaxN = Math.min(maxN - 1, 3);
  const outermostShellRadius = maxN * visualScale * 0.9 + maxLForMaxN * visualScale * 0.15;
  const halfFov = (40 * Math.PI / 180) / 2;
  maxZoomRadius = Math.max(200, (outermostShellRadius / Math.tan(halfFov)) * 1.2);

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
  let intersects = [];
  if (!isExplorerMode && rootGroup.visible) {
    intersects = raycaster.intersectObjects(clickTargets, false);
  }

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
    if (mat.emissiveIntensity !== undefined) mat.emissiveIntensity = emissiveIntensity;
    if (mat.wireframe !== undefined) mat.wireframe = false;
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

  // Ensure matrices are strictly updated even if rootGroup is bypassed
  if (rootGroup) rootGroup.updateMatrixWorld(true);

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
  gradient.addColorStop(0, "#f5f7ff");
  gradient.addColorStop(1, "#c6d3ff");

  ctx.beginPath();
  ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.shadowColor = "rgba(198, 211, 255, 0.5)";
  ctx.shadowBlur = 12;
  ctx.fill();
  ctx.shadowBlur = 0; // reset shadow

  // Nucleus Text (Symbol)
  ctx.fillStyle = "#0d1538";
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
const quantumModeBtn = document.getElementById("quantum-mode-btn");
const quantumModeDot = document.getElementById("quantum-mode-dot");
const infoElement = document.getElementById("info-element-text");
const infoZ = document.getElementById("info-Z");
const infoConfig = document.getElementById("info-config");
const infoOrbitals = document.getElementById("info-orbitals");

// Orbital Explorer Elements
const expUi = document.getElementById("explorer-ui");
const expLabel = document.getElementById("explorer-label");
const expCloseBtn = document.getElementById("explorer-close-btn");

const expN = document.getElementById("exp-n");
const expL = document.getElementById("exp-l");
const expM = document.getElementById("exp-m");
const expPts = document.getElementById("exp-pts");
const expSize = document.getElementById("exp-size");
const expColor = document.getElementById("exp-color");

const expValN = document.getElementById("exp-val-n");
const expValL = document.getElementById("exp-val-l");
const expValM = document.getElementById("exp-val-m");
const expValPts = document.getElementById("exp-val-pts");
const expValSize = document.getElementById("exp-val-size");

let isExplorerMode = false;
let explorerGroup = new THREE.Group();
let explorerRenderTimeout = null;

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
const setInertia = document.getElementById("set-inertia");
const setSens = document.getElementById("set-sensitivity");

// Report issues elements
const reportBtn = document.getElementById("report-button");
const reportModal = document.getElementById("report-modal");
const reportText = document.getElementById("report-text");
const reportStatus = document.getElementById("report-status");
const reportCancelBtn = document.getElementById("report-cancel-btn");
const reportSendBtn = document.getElementById("report-send-btn");
const creditsBtn = document.getElementById("credits-button");
const creditsModal = document.getElementById("credits-modal");
const creditsCloseBtn = document.getElementById("credits-close-btn");

function populateSettingsUI() {
  setColS.value = AppSettings.colors.s;
  setColP.value = AppSettings.colors.p;
  setColD.value = AppSettings.colors.d;
  setColF.value = AppSettings.colors.f;
  setQual.value = AppSettings.quality;
  setStarfield.checked = AppSettings.starfield;
  setAuto.checked = AppSettings.autorotate;
  setInertia.checked = AppSettings.inertiaSpin;
  if (setSens) setSens.value = AppSettings.rotationSensitivity || 0.003;
}

function saveAndApplySettings() {
  AppSettings.colors.s = setColS.value;
  AppSettings.colors.p = setColP.value;
  AppSettings.colors.d = setColD.value;
  AppSettings.colors.f = setColF.value;
  AppSettings.quality = setQual.value;
  AppSettings.starfield = setStarfield.checked;
  AppSettings.autorotate = setAuto.checked;
  AppSettings.inertiaSpin = setInertia.checked;
  if (setSens) AppSettings.rotationSensitivity = parseFloat(setSens.value) || 0.003;

  localStorage.setItem("atom_visualizer_settings", JSON.stringify(AppSettings));

  // Apply changes visually
  updateColorsFromSettings();
  applyGraphicsQualitySettings();

  const starEntity = scene.getObjectByName("starfield");
  if (starEntity) starEntity.visible = AppSettings.starfield;

  initShootingStars();
  const ssGroup = scene.getObjectByName("shootingStarsGroup");
  if (ssGroup) ssGroup.visible = AppSettings.starfield;

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

function closeCreditsModal() {
  if (creditsModal) creditsModal.style.display = "none";
}

function openCreditsModal() {
  if (!creditsModal) return;
  creditsModal.style.display = "flex";
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

    const API_BASE_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "http://localhost:3000"
      : "https://your-backend-url.example.com"; // Replace with actual deployed URL

    const response = await fetch(`${API_BASE_URL}/api/report-bug`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) {
      const errMsg = data.error || "Could not send report. Make sure backend server is reachable.";
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

if (creditsBtn) {
  creditsBtn.addEventListener("click", openCreditsModal);
}

if (creditsCloseBtn) {
  creditsCloseBtn.addEventListener("click", closeCreditsModal);
}

if (creditsModal) {
  creditsModal.addEventListener("click", (e) => {
    if (e.target === creditsModal) {
      closeCreditsModal();
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

// --- Orbital Explorer Logic ---

function renderOrbitalExplorer() {
  while(explorerGroup.children.length > 0){ 
      const child = explorerGroup.children[0];
      if(child.geometry) child.geometry.dispose();
      if(child.material) child.material.dispose();
      explorerGroup.remove(child); 
  }

  const n = parseInt(expN.value);
  const l = parseInt(expL.value);
  const m = parseInt(expM.value);
  const numPoints = parseInt(expPts.value);
  const pSize = parseFloat(expSize.value);
  const hexColor = expColor.value;

  let mSign = m < 0 ? "-" : "";
  let mVal = Math.abs(m);
  expLabel.innerHTML = `&psi;<sub>${n},${l},${mSign}${mVal}</sub>`;

  const visualScale = 25.0;
  const shellRadius = n * visualScale * 0.9 + l * visualScale * 0.15;

  const cdfs = buildQuantumCDFs(n, l, m);
  const rScale = shellRadius / (n * n * 0.5 + l * 0.5 + 0.5);

  // Set zoom cap based on actual point cloud extent, accounting for the
  // 40° FOV perspective camera. To see extent E centered at origin, the
  // camera must be at distance ≥ E / tan(20°) ≈ E × 2.75. Use 3.0 margin
  // so the orbital comfortably fits on screen from any angle.
  const pointCloudExtent = cdfs.rMax * rScale;
  const minCameraDist = pointCloudExtent / Math.tan((40 * Math.PI / 180) / 2);
  // Fit radius is what we jump to when entering quantum, so we never start
  // "inside" the cloud (white-out) or clipped. The zoom cap stays larger.
  explorerFitRadius = Math.max(10, minCameraDist * 1.35);
  maxZoomRadius = Math.max(200, explorerFitRadius * 3.0);

  const positions = [];
  const colors = [];
  let placed = 0;
  let attempts = 0;
  const maxAttempts = numPoints * 8;

  const baseColor = new THREE.Color(hexColor);
  const whiteColor = new THREE.Color(0xffffff);

  while (placed < numPoints && attempts < maxAttempts) {
    attempts++;

    const r = sampleCDF(cdfs.radialCDF, cdfs.rMax);
    const theta = sampleCDF(cdfs.thetaCDF, Math.PI);
    const phi = Math.random() * 2 * Math.PI;

    if (m !== 0) {
      const abm = Math.abs(m);
      const phiProb = m > 0
        ? Math.cos(abm * phi) * Math.cos(abm * phi)
        : Math.sin(abm * phi) * Math.sin(abm * phi);
      if (Math.random() > phiProb) continue;
    }

    const rVis = r * rScale;
    const sinTheta = Math.sin(theta);
    const x = rVis * sinTheta * Math.cos(phi);
    const y = rVis * Math.cos(theta);
    const z = rVis * sinTheta * Math.sin(phi);

    positions.push(x, y, z);

    const distFactor = Math.min(1, rVis / (shellRadius * 1.5));
    const c = baseColor.clone().lerp(whiteColor, distFactor * 0.2);
    colors.push(c.r, c.g, c.b);
    placed++;
  }

  // Refine fit radius using the *actual sampled* cloud bounds.
  // This avoids cases where the analytical rMax underestimates the visible cloud
  // and you start partially inside (white-out) on first switch.
  let maxRSq = 0;
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];
    const rSq = x * x + y * y + z * z;
    if (rSq > maxRSq) maxRSq = rSq;
  }
  const sampledExtent = Math.sqrt(maxRSq);
  if (Number.isFinite(sampledExtent) && sampledExtent > 0) {
    const fovRad = (40 * Math.PI) / 180;
    const distToFit = sampledExtent / Math.tan(fovRad / 2);
    explorerFitRadius = Math.max(explorerFitRadius, distToFit * 1.35);
    maxZoomRadius = Math.max(maxZoomRadius, explorerFitRadius * 3.0);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: pSize,
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });

  const points = new THREE.Points(geometry, material);
  explorerGroup.add(points);
}

function debounceOrbitalRender() {
  if (explorerRenderTimeout) clearTimeout(explorerRenderTimeout);
  explorerRenderTimeout = setTimeout(() => {
    if (isExplorerMode) renderOrbitalExplorer();
  }, 200);
}

function enterExplorerMode() {
  isExplorerMode = true;
  // Preserve the current normal zoom so we can restore/clamp it later.
  if (orbitState) lastNormalRadius = orbitState.radius;

  rootGroup.visible = false;
  explorerGroup.visible = true;
  expUi.style.display = "block";
  expLabel.style.display = "flex";
  
  const infoPanel = document.getElementById("info-panel");
  if (infoPanel) infoPanel.style.display = "none";
  
  if (quantumModeBtn) {
    quantumModeBtn.style.borderColor = "rgba(255, 59, 186, 0.6)";
    quantumModeDot.style.background = "#ff3bba";
    quantumModeDot.style.boxShadow = "0 0 8px #ff3bba";
  }

  // Hide starry background in quantum mode
  const starEntity = scene.getObjectByName("starfield");
  if (starEntity) starEntity.visible = false;
  const ssGroup = scene.getObjectByName("shootingStarsGroup");
  if (ssGroup) ssGroup.visible = false;

  // Clamp slider bounds to valid ranges for current n
  const n = parseInt(expN.value);
  expL.max = n - 1;
  if (parseInt(expL.value) > n - 1) expL.value = n - 1;
  const l = parseInt(expL.value);
  expM.min = -l;
  expM.max = l;
  if (parseInt(expM.value) < -l) expM.value = -l;
  if (parseInt(expM.value) > l) expM.value = l;
  document.getElementById("exp-val-n").textContent = expN.value;
  document.getElementById("exp-val-l").textContent = expL.value;
  document.getElementById("exp-val-m").textContent = expM.value;

  renderOrbitalExplorer();

  // Always auto-zoom so the full orbital is visible from the first frame.
  // Use the computed fit radius (not the zoom cap).
  if (orbitState) {
    orbitState.target.set(0, 0, 0);
    // Reset zoom cap for quantum mode and clamp radius into it.
    lastQuantumRadius = null;
    orbitState.radius = Math.min(Math.max(3, explorerFitRadius), maxZoomRadius);
    orbitState.theta = Math.PI / 4;
    orbitState.phi = Math.PI / 2;
    updateCameraFromOrbit();
  }
}

function exitExplorerMode() {
  isExplorerMode = false;
  rootGroup.visible = true;
  explorerGroup.visible = false;
  expUi.style.display = "none";
  expLabel.style.display = "none";
  
  const infoPanel = document.getElementById("info-panel");
  if (infoPanel) infoPanel.style.display = "block";
  
  if (quantumModeBtn) {
    quantumModeBtn.style.borderColor = "";
    quantumModeDot.style.background = "#607cff";
    quantumModeDot.style.boxShadow = "0 0 8px #607cff";
  }

  // Restore starry background based on user settings
  const starEntity = scene.getObjectByName("starfield");
  if (starEntity) starEntity.visible = AppSettings.starfield;
  const ssGroup = scene.getObjectByName("shootingStarsGroup");
  if (ssGroup) ssGroup.visible = AppSettings.starfield;

  // Reset camera to normal mode defaults.
  // Without this, the extreme quantum zoom distance makes the atom appear
  // tiny/wrong, and the camera orientation from quantum pan/drag persists.
  if (orbitState) {
    // Restore normal zoom cap and clamp the current radius into it.
    // If you were max-zoomed out in quantum, normal mode lands at its own max.
    maxZoomRadius = NORMAL_MAX_ZOOM_RADIUS;
    orbitState.radius = Math.max(3, Math.min(maxZoomRadius, lastNormalRadius || orbitState.radius));
    orbitState.theta = Math.PI / 4;
    orbitState.phi = Math.PI / 2;
    updateCameraFromOrbit();
  }

  // Reset any pan/rotation applied to the explorer group
  if (explorerGroup) {
    explorerGroup.position.set(0, 0, 0);
    explorerGroup.quaternion.identity();
  }

  // Reset rotation inertia so quantum mode spin doesn't carry over
  rotateInertia.identity();

  // Clear quantum point cloud from the scene
  while(explorerGroup.children.length > 0){ 
      const child = explorerGroup.children[0];
      if(child.geometry) child.geometry.dispose();
      if(child.material) child.material.dispose();
      explorerGroup.remove(child); 
  }
}

if (expN && expL && expM) {
  const updateExplorerBounds = () => {
    const n = parseInt(expN.value);
    expL.max = n - 1;
    if (parseInt(expL.value) > n - 1) expL.value = n - 1;
    
    const l = parseInt(expL.value);
    expM.min = -l;
    expM.max = l;
    if (parseInt(expM.value) < -l) expM.value = -l;
    if (parseInt(expM.value) > l) expM.value = l;

    expValN.textContent = expN.value;
    expValL.textContent = expL.value;
    expValM.textContent = expM.value;
    expValPts.textContent = expPts.value;
    expValSize.textContent = expSize.value;

    debounceOrbitalRender();
  };

  expN.addEventListener("input", updateExplorerBounds);
  expL.addEventListener("input", updateExplorerBounds);
  expM.addEventListener("input", updateExplorerBounds);
  expPts.addEventListener("input", updateExplorerBounds);
  expSize.addEventListener("input", updateExplorerBounds);
  expColor.addEventListener("input", debounceOrbitalRender);
  
  expCloseBtn.addEventListener("click", exitExplorerMode);
}

if (quantumModeBtn && quantumModeDot) {
  quantumModeBtn.addEventListener("click", () => {
    if (isExplorerMode) exitExplorerMode();
    else enterExplorerMode();
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

