import * as Draw from './draw';
import * as Update from './update';
import * as Util from './util';

interface StartOptions {
  // Provide optional location and size of canvas
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  // Points configurations
  numPoints: number;
}

const createCanvas = (
  x: number,
  y: number,
  width: number,
  height: number,
): HTMLCanvasElement => {
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  // Set css-based location
  canvas.style.position = 'absolute';
  canvas.style.left = String(x);
  canvas.style.top = String(y);
  canvas.style.zIndex = '-1';

  // Append canvas to dom and return canvas
  document.body.appendChild(canvas);
  return canvas;
};

const createPoints = (
  numPoints: number,
  maxX: number,
  maxY: number,
): Point[] => {
  const points: Point[] = [];
  for (let i: number = 0; i < numPoints; i++) {
    // TODO: Many of these configs will need to be abstractd to be configurable, and maybe into
    // lists rather than just single values
    const point: Point = {
      x: Util.getRandomInt(0, maxX),
      y: Util.getRandomInt(0, maxY),
      speed: 1,
      angle: Util.getRandomFloat(0, 360),
      runAwayMultiplier: 1,
      radius: Util.getRandomFloat(8, 16),
      color: {
        r: 30,
        g: 144,
        b: 255,
        a: 16,
      },
    };
    points.push(point);
  }
  return points;
};

const updateLoop = (ctx: CanvasRenderingContext2D, points: Point[]): void => {
  points = Update.update(ctx, points);
  setTimeout(() => updateLoop(ctx, points), 0);
};

const drawLoop = (ctx: CanvasRenderingContext2D, points: Point[]): void => {
  Draw.draw(ctx, points);
  setTimeout(() => drawLoop(ctx, points), 0);
};

export const start = (options: StartOptions): void => {
  console.log('Start boba');

  // Create canvas and get context
  const x: number = options.x || 0;
  const y: number = options.y || 0;
  const width: number = options.width || document.documentElement.scrollWidth;
  const height: number =
    options.height || document.documentElement.scrollHeight;
  const canvas: HTMLCanvasElement = createCanvas(x, y, width, height);
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  // Check that context was found, if not exit with an error. TODO: Make this proper.
  if (ctx === null) {
    throw new Error('Oh no! `ctx` is null!');
  }

  // Initialize data
  const points: Point[] = createPoints(
    options.numPoints,
    width - 1,
    height - 1,
  );

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
