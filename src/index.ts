import * as Setup from './setup';
import * as Draw from './draw';
import * as Update from './update';

// Global variables a necessary evil for the game loop. There is probably another way.
let CTX: CanvasRenderingContext2D;
let VERTICES: Vertex[];
let EDGES: Edge[];
let SHAPES: Shape[];
let LAST_RENDER: number;
let OPTIONS: BobaOptions;

const loop = (timestamp: number): void => {
  const progress = timestamp - LAST_RENDER;

  const result: UpdateResult = Update.update(
    progress,
    CTX,
    OPTIONS,
    VERTICES,
    EDGES,
    SHAPES,
  );
  VERTICES = result.vertices;
  EDGES = result.edges;
  SHAPES = result.shapes;
  Draw.draw(CTX, OPTIONS, VERTICES, EDGES, SHAPES);

  LAST_RENDER = timestamp;
  window.requestAnimationFrame(loop);
};

const constrainOptions = (options: BobaOptions): BobaOptions => {
  if (options.edgeColors.length > 1) {
    console.log(
      'Boba.js: `edgeColors` currently only supports one color. Keeping only the first color.',
    );
  }
  if (options.shapeColors.length > 1) {
    console.log(
      'Boba.js: `shapeColors` currently only supports one color. Keeping only the first color.',
    );
  }

  return options;
};

export const start = (options: BobaOptions): void => {
  // Handle option constraings
  options = constrainOptions(options);

  // Make options available globally
  OPTIONS = options;

  // Create canvas and get context if the context is not already set (meaning the canvas already
  // exists). The reason we do this is to allow `start` to be called to override the setup with
  // new options. It's not the most elegant workflow but it is simple and it works well enough,
  // for now.
  if (CTX === undefined) {
    const x: number = options.x;
    const y: number = options.y;
    const width: number = options.width;
    const height: number = options.height;
    const canvas: HTMLCanvasElement = Setup.createCanvas(x, y, width, height);
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    // Check that context was found, if not exit with an error. TODO: Make this proper.
    if (ctx === null) {
      throw new Error('Oh no! `ctx` is null!');
    }

    // Now that we know `ctx` exists, assign it globally
    CTX = ctx;
  }

  // Initialize data in three step
  // 1. Create vertices
  VERTICES = Setup.createVertices(options);

  // 2. Initialize edges list as an empty array
  EDGES = [];

  // Initialize shapes list as an empty array, I think
  SHAPES = [];

  // Game loop
  LAST_RENDER = 0;
  window.requestAnimationFrame(loop);
};

export const getDefaultOptions = (): BobaOptions => {
  const options = {
    // Location and size of canvas
    x: 0,
    y: 0,
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
    // Vertices configurations
    numVertices: 30,
    drawVertices: true,
    vertexMinSize: 8,
    vertexMaxSize: 16,
    vertexMinSpeed: 0.5,
    vertexMaxSpeed: 2,
    vertexColors: [
      {
        r: 30,
        g: 144,
        b: 255,
        a: 0.1,
      },
    ],
    // Edges configurations
    numNeighbors: 2,
    drawEdges: true,
    edgeColors: [
      {
        r: 30,
        g: 144,
        b: 255,
        a: 0.1,
      },
    ],
    // Shapes configurations
    drawShapes: true,
    shapeColors: [
      {
        r: 30,
        g: 144,
        b: 255,
        a: 0.05,
      },
    ],
  };
  return options;
};
