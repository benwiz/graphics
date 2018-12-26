import * as Draw from './draw';
import * as Update from './update';

interface StartOptions {
  // Provide optional location and size of canvas
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const updateLoop = (startTime: number, point: Point): void => {
  point = Update.update(startTime, point);
  setTimeout(() => updateLoop(startTime, point), 0);
};

const drawLoop = (ctx: CanvasRenderingContext2D, point: Point): void => {
  Draw.drawPoint(ctx, point.x, point.y);
  setTimeout(() => drawLoop(ctx, point), 0);
};

export const start = (options: StartOptions): void => {
  console.log('Start boba');

  // Record start time
  const startTime = new Date().getTime();

  // Create canvas and get context
  const x: number = options.x || 0;
  const y: number = options.y || 0;
  const width: number = options.width || window.innerWidth;
  const height: number = options.height || window.innerHeight;
  const canvas: HTMLCanvasElement = Draw.createCanvas(x, y, width, height);
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  // Check that context was found, if not exit with an error. TODO: Make this proper.
  if (ctx === null) {
    throw new Error('Oh no! `ctx` is null!');
  }

  // Initialize data
  const point: Point = { x: 10, y: 10 };

  // Execute update and draw loops infinitely, in parallel
  updateLoop(startTime, point);
  drawLoop(ctx, point);
};
