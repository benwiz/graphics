import * as Setup from './setup';
import * as Draw from './draw';
import * as Update from './update';

// Global variables a necessary evil for the game loop. There is probably another way.
let CTX: CanvasRenderingContext2D;
let POINTS: Point[];
let LINES: Line[];
let SHAPES: Shape[];
let LAST_RENDER: number;
let OPTIONS: BobaOptions;

const loop = (timestamp: number): void => {
  const progress = timestamp - LAST_RENDER;

  const result: UpdateResult = Update.update(
    progress,
    CTX,
    OPTIONS,
    POINTS,
    LINES,
    SHAPES,
  );
  POINTS = result.points;
  LINES = result.lines;
  SHAPES = result.shapes;
  Draw.draw(CTX, POINTS, LINES, SHAPES);

  LAST_RENDER = timestamp;
  window.requestAnimationFrame(loop);
};

export const start = (options: BobaOptions): void => {
  // Make options available globally
  OPTIONS = options;

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

  // Initialize shapes list as an empty array, I think
  SHAPES = [];

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
