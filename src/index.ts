import * as Setup from './setup';
import * as Draw from './draw';
import * as Update from './update';

// Global variables a necessary evil for the game loop
let CTX: CanvasRenderingContext2D;
let POINTS: Point[];
let LINES: Line[];
let LAST_RENDER: number;
// Configs that have to be global so I can get them into the `loop` function. This isn't good.
const CONFIG = {
  numNeighbors: -1,
};

interface StartOptions {
  // Provide optional location and size of canvas
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  // Points configurations
  numPoints: number;
  // Lines configurations
  numNeighbors: number;
}

const loop = (timestamp: number): void => {
  const progress = timestamp - LAST_RENDER;

  const result: UpdateResult = Update.update(
    progress,
    CTX,
    CONFIG.numNeighbors,
    POINTS,
    LINES,
  );
  POINTS = result.points;
  LINES = result.lines;
  Draw.draw(CTX, POINTS, LINES);

  LAST_RENDER = timestamp;
  window.requestAnimationFrame(loop);
};

export const start = (options: StartOptions): void => {
  // Set defaults for optional options
  options.x = options.x || 0;
  options.y = options.y || 0;
  options.width = options.width || document.documentElement.scrollWidth;
  options.height = options.height || document.documentElement.scrollHeight;

  // Set config global vars
  CONFIG.numNeighbors = options.numNeighbors;

  // Create canvas and get context
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

  // Initialize data in three step
  // 1. Create points
  POINTS = Setup.createPoints(options.numPoints, width - 1, height - 1);

  // 2. Initialize lines list as an empty array
  LINES = [];

  // TODO 3. Initialize shapes list as an empty array, I think

  // Game loop
  LAST_RENDER = 0;
  window.requestAnimationFrame(loop);
};

// // Use this to help with mouse effects on the points
// document.addEventListener('mousemove', (event: MouseEvent) => {
//   const mousePos = Util.getMousePos(canvas, event);
// });
// util.js
// export const getMousePos = (canvas: HTMLCanvasElement, event: MouseEvent) => {
//   const rect: ClientRect = canvas.getBoundingClientRect();
//   return {
//     x: event.clientX - rect.left,
//     y: event.clientY - rect.top,
//   };
// };
