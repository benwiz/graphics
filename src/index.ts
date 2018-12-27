import * as Setup from './setup';
import * as Draw from './draw';
import * as Update from './update';

interface StartOptions {
  // Provide optional location and size of canvas
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  // Points configurations
  numPoints: number;
}

const updateLoop = (ctx: CanvasRenderingContext2D, points: Point[]): void => {
  points = Update.update(ctx, points);
  setTimeout(() => updateLoop(ctx, points), 0);
};

const drawLoop = (ctx: CanvasRenderingContext2D, points: Point[]): void => {
  Draw.draw(ctx, points);
  setTimeout(() => drawLoop(ctx, points), 0);
};

export const start = (options: StartOptions): void => {
  // TODO: Rather than setting defaults below, set defaults in a single block here

  // Create canvas and get context
  const x: number = options.x || 0;
  const y: number = options.y || 0;
  const width: number = options.width || document.documentElement.scrollWidth;
  const height: number =
    options.height || document.documentElement.scrollHeight;
  const canvas: HTMLCanvasElement = Setup.createCanvas(x, y, width, height);
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  // Check that context was found, if not exit with an error. TODO: Make this proper.
  if (ctx === null) {
    throw new Error('Oh no! `ctx` is null!');
  }

  // Initialize data in three step
  // 1. Create points
  const points: Point[] = Setup.createPoints(
    options.numPoints,
    width - 1,
    height - 1,
  );

  // TODO: 2. Find and create lines
  // TODO: 3. Find and create shapes

  // Execute update and draw. Infinitely, in parallel.
  updateLoop(ctx, points);
  drawLoop(ctx, points);
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
