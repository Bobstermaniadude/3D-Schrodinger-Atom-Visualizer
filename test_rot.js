const THREE = require('three');

function testRotation(rx, ry, rz) {
    const euler = new THREE.Euler(rx, ry, rz, 'XYZ');
    const v1 = new THREE.Vector3(1, 0, 0); // Lobe 1 (X axis)
    const v2 = new THREE.Vector3(0, 0, 1); // Lobe 2 (Z axis)
    v1.applyEuler(euler);
    v2.applyEuler(euler);
    console.log(`v1: ${v1.x.toFixed(2)}, ${v1.y.toFixed(2)}, ${v1.z.toFixed(2)}`);
    console.log(`v2: ${v2.x.toFixed(2)}, ${v2.y.toFixed(2)}, ${v2.z.toFixed(2)}`);
}

console.log("m_l = -1 (d_yz):");
testRotation(Math.PI/4, 0, Math.PI/2);

console.log("m_l = 2 (d_xy):");
testRotation(Math.PI/2, 0, Math.PI/4);

console.log("m_l = -2 (d_x2-y2):");
testRotation(Math.PI/2, 0, 0);
