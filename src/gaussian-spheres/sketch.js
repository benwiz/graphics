/* global global, require */

const THREE = require('three');
// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = THREE;
// Include any additional ThreeJS examples below
require('three/examples/js/controls/OrbitControls');

const createSpheres = (n) => {
  const meshes = [];

  for (let i = 0; i < n; i += 1) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhysicalMaterial({
        color: 'white',
        roughness: 0.75,
        flatShading: true,
      }),
    );
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
  const meshes = createSpheres(3);
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
