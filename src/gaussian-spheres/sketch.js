/* global global, require */

const THREE = require('three');
// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = THREE;
// Include any additional ThreeJS examples below
require('three/examples/js/controls/OrbitControls');

const randomBM = (min, max, skew) => {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = randomBM(min, max, skew); // resample between 0 and 1 if out of range
  num **= skew; // Skew
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  return num;
};

const createSpheres = (n) => {
  const meshes = [];

  const colors = ['red', 'blue', 'yellow'];

  for (let i = 0; i < n; i += 1) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhysicalMaterial({
      color: colors[i % colors.length],
      roughness: 0.75,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geometry, material);

    const x = randomBM(-10, 10, 1);
    const y = randomBM(-10, 10, 1);
    const z = randomBM(-10, 10, 1);
    mesh.position.set(x, y, z);

    meshes.push(mesh);
  }

  return meshes;
};

export const setup = (options) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    context: options.context,
  });

  // WebGL background color
  renderer.setClearColor('#000', 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
  camera.position.set(2, 2, -4);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera);

  // Setup your scene
  const scene = new THREE.Scene();

  // Create the mesh and add to the scene
  const meshes = createSpheres(30);
  meshes.forEach(mesh => scene.add(mesh));

  // Specify an ambient/unlit colour
  scene.add(new THREE.AmbientLight('#59314f'));

  // Add some light
  const light = new THREE.PointLight('#45caf7', 1, 15.5);
  light.position.set(2, 2, -4).multiplyScalar(1.5);
  scene.add(light);

  return {
    renderer,
    camera,
    controls,
    scene,
    meshes,
  };
};

export const resize = (components, { pixelRatio, viewportWidth, viewportHeight }) => {
  const { renderer, camera } = components;

  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(viewportWidth, viewportHeight);
  camera.aspect = viewportWidth / viewportHeight;
  camera.updateProjectionMatrix();
};

export const render = (components, { time }) => {
  const {
    renderer, controls, meshes, scene, camera,
  } = components;

  meshes.forEach((mesh) => {
    mesh.rotation.y = time * ((10 * Math.PI) / 180);
  });
  controls.update();
  renderer.render(scene, camera);
};

export const unload = (components) => {
  const { renderer, controls } = components;

  controls.dispose();
  renderer.dispose();
};
