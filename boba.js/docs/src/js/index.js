import * as Boba from '@benwiz/boba.js';
import * as Dat from 'dat.gui';

// Initialize boba.js options by grabbing the defaults
const options = Boba.getDefaultOptions();

// Below are all the options available. The expectation is for you to only override a subset of the
// options.

// Canvas configs
options.x = 0;
options.y = 0;
options.width = document.documentElement.scrollWidth;
options.height = document.documentElement.scrollHeight;

// Vertex configs
options.numVertices = 40;
options.drawVertices = true;
options.vertexMinSize = 8;
options.vertexMaxSize = 16;
options.vertexMinSpeed = 0.5;
options.vertexMaxSpeed = 2.0;
options.vertexColors = [
  {
    r: 0,
    g: 255,
    b: 0,
    a: 0.1,
  },
];

// Edge configs
options.numNeighbors = 2;
options.drawEdges = true;
options.edgeColors = [
  {
    r: 0,
    g: 255,
    b: 0,
    a: 0.1,
  },
];

// Shape configs
options.drawShapes = true;
options.shapeColors = [
  {
    r: 0,
    g: 255,
    b: 0,
    a: 0.05,
  },
];

// Start the animation
Boba.start(options);

//
// dat.GUI
//
const restart = (_value) => {
  Boba.stop();
  Boba.start(options);
};

const gui = new Dat.GUI();
gui
  .add(options, 'numVertices', 0, 100)
  .step(1)
  .onChange(restart);
gui.add(options, 'drawVertices').onChange(restart);
