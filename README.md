# 3D Schrödinger Atom Visualizer

An interactive, high-fidelity WebGL-based visualization tool that renders 3D electron orbital probability distribution clouds for elements of the periodic table, as well as arbitrary hydrogenic wavefunctions.

This application solves the spatial parts of the Schrödinger equation for hydrogen-like atoms in real-time, displaying volumetric point clouds derived from the wavefunctions.

## Features

### 1. Element Visualizer
* Full Periodic Table Support: Renders orbital structures for elements from Hydrogen (Z = 1) to Oganesson (Z = 118).
* Electronic Configuration: Real electron configurations are loaded or calculated using Aufbau principle approximations, showing shell levels, subshell occupancies (s, p, d, and f), and overall electron configurations.
* Volumetric Orbitals: Displays orbital shells simultaneously with realistic visual radii.

### 2. Quantum Orbital Explorer
* Custom Wavefunctions: Allows users to explore arbitrary states by manually setting the principal (n), azimuthal (l), and magnetic (m) quantum numbers via sliders.
* Point Cloud Adjustment: Control the total point count (from 10,000 to 250,000) and individual point sizes to optimize graphics fidelity or performance.
* Color Customization: Modify the base color of the active custom quantum state point cloud.

### 3. Dynamic 2D Bohr Model
* Live Canvas Representation: A clean, concentric 2D Bohr diagram updates in real-time to show the shell configuration and current occupancy of the selected element.

### 4. Interactive Viewport
* Three-Dimensional Manipulation: Rotate, pan, and zoom using standard orbit mouse/touch interactions.
* Focus Mode: Clicking an orbital in the viewport focuses it, highlighting its mathematical shape, formulas, quantum numbers, and nodes.
* Camera Reset: Easily return to the origin via a double-click on the canvas or using the floating camera reset interface button.

### 5. Detailed Quantum Statistics
* Real-time info panel displaying atomic number, configuration string, and list of occupied orbitals.
* Detailed subshell breakdown with individual toggle buttons to hide or isolate s, p, d, and f orbitals.
* Orbital information (when focused): Wavefunction naming, geometric shape description, exact values for quantum numbers (n, l, m_l, m_s), and node statistics (radial and angular node counts).

### 6. Visual and Performance Customizations
* Color Pickers: Set customized display colors for s, p, d, and f orbital subshell groupings.
* Performance Scaling: Graphics configurations spanning Ultra (Postprocessed Unreal Bloom, Anti-aliasing), High, Medium, Low, and Very Low (battery saver, minimum point sizes/count).
* Environment Settings: Toggleable background starfields, automated atom rotation, drag inertia, and rotation speed sensitivity.

### 7. Utilities
* Screenshot Capture: Export high-resolution PNG representations of the current viewport.
* Built-in Bug Reporter: Submit feedback and issues directly from the app interface.
* Offline Capabilities: Works instantly when opening the HTML file directly in any modern web browser.

## Mathematical Formulation

The visualizer computes the hydrogenic wavefunctions analytically in spherical coordinates (r, theta, phi) using:

Psi_{n,l,m}(r, theta, phi) = R_{n,l}(r) * Y_l^m(theta, phi)

### Radial Wavefunction
The radial part, R_{n,l}(r), is computed using Associated Laguerre Polynomials:

R_{n,l}(r) = N * ((2 * r) / n)^l * e^(-r / n) * L_{n-l-1}^{2l+1}((2 * r) / n)

The zeros of the Laguerre polynomials are calculated using Newton-Raphson iteration to plot the exact locations of radial nodes.

### Angular Wavefunction
The angular part, Y_l^m(theta, phi), is computed using Real Spherical Harmonics based on Associated Legendre Polynomials:

Y_l^m(theta, phi) propto P_l^|m|(cos(theta)) * cos(m * phi) (for m >= 0)
Y_l^m(theta, phi) propto P_l^|m|(cos(theta)) * sin(|m| * phi) (for m < 0)

Recurrence relations are used to resolve Legendre polynomials up to f subshells (l = 3) and higher.

### Point Cloud Sampling
Points are distributed in space using a probability density function:

P(r, theta, phi) = |Psi_{n,l,m}(r, theta, phi)|^2

A Monte Carlo rejection sampling method matches coordinates in space to these calculated probability densities, rendering points only where the probability of finding an electron is high.

## Technology Stack

* Frontend: Vanilla HTML5, CSS3, and JavaScript (ES6+).
* 3D Rendering: Three.js (r149) utilizing WebGL, with UnrealBloomPass and EffectComposer for glowing quantum effects.
* 2D Visuals: HTML5 Canvas API for the interactive Bohr model.
* Serverless Backend: Vercel serverless function (Node.js API) integrated with the Resend API to handle issues submission.
* Unit Testing: Native Node.js test runner for serverless api handlers.

## Getting Started

### Prerequisites

No special installation is required to run the frontend visualization. You only need a web browser supporting WebGL.

### Running Locally

1. Clone or download the repository.
2. Open the index.html file directly in your web browser, or serve it using a lightweight local server:
   npx serve .
3. Enter chemical symbols like H, He, C, or Fe in the input field and select Render.

### Running Tests

To run the test suite for the serverless bug-reporting handler, use:
npm test

### Environment Variables

For Vercel deployment and bug reporting functionalities, configure the following values in a local .env file:
RESEND_API_KEY=your_resend_api_key
REPORT_TO_EMAIL=your_reporting_email@example.com

## Credits

Created by Srivarenya Vempati. Special thanks to Srinidhaya Vempati for debugging support and Daniel Yang for beta testing.
