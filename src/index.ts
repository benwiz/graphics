import * as Drawing from './drawing';

interface StartOptions {
  // Provide optoinal location and size of canvas
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

let point: Drawing.Point = { x: 10, y: 10 };
const mainLoop = (startTime: number, ctx: CanvasRenderingContext2D): void => {
  point = Drawing.update(startTime, point);
  Drawing.drawPoint(ctx, point.x, point.y);
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
  const canvas: HTMLCanvasElement = Drawing.createCanvas(x, y, width, height);
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  // Check that context was found, if not exit with an error. TODO: Make this proper.
  if (ctx === null) {
    throw new Error('Oh no! `ctx` is null!');
  }

  mainLoop(startTime, ctx);
};
