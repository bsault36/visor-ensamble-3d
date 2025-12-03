// QR con la URL de GitHub Pages
const currentURL = window.location.href;

QRCode.toDataURL(currentURL, { width: 200 }, (err, url) => {
  document.getElementById("qrImage").src = url;
});

// THREE JS
let scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(2, 2, 3);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

let controls = new THREE.OrbitControls(camera, renderer.domElement);

let light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
scene.add(light);

// Cambia "tu_modelo.glb" por el nombre real de tu archivo
let loader = new THREE.GLTFLoader();
loader.load("assets/tu_modelo.glb", function (gltf) {
  scene.add(gltf.scene);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});