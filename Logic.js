const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

const tesseractGeometry = new THREE.Geometry();
for (let i = 0; i < 16; i++) {
    const vertex = new THREE.Vector4(
        (i & 1) ? -1 : 1,
        (i & 2) ? -1 : 1,
        (i & 4) ? -1 : 1,
        (i & 8) ? -1 : 1
    );
    tesseractGeometry.vertices.push(vertex);
}
tesseractGeometry.faces.push(new THREE.Face3(0, 1, 2));
tesseractGeometry.faces.push(new THREE.Face3(2, 3, 0));
// ... add more faces to complete the tesseract

const tesseractMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const tesseractMesh = new THREE.Mesh(tesseractGeometry, tesseractMaterial);
scene.add(tesseractMesh);

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
