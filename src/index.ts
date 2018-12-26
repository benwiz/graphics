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

const createPoints = (
  numPoints: number,
  maxX: number,
  maxY: number,
): Point[] => {
  const points: Point[] = [];
  for (let i: number = 0; i < numPoints; i++) {
    const x: number = Util.getRandomInt(0, maxX);
    const y: number = Util.getRandomInt(0, maxY);
    const point: Point = { x, y };
    points.push(point);
  }
  return points;
};

const updateLoop = (startTime: number, points: Point[]): void => {
  // TODO: Probably don't need startTime, instead just call at a frame rate = 1000 / fps;
  points = Update.update(startTime, points);
  setTimeout(() => updateLoop(startTime, points), 0);
};

const drawLoop = (ctx: CanvasRenderingContext2D, points: Point[]): void => {
  Draw.draw(ctx, points);
  setTimeout(() => drawLoop(ctx, points), 0);
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
  const points: Point[] = createPoints(
    options.numPoints,
    width - 1,
    height - 1,
  );

  // Execute update and draw loops infinitely, in parallel
  updateLoop(startTime, points);
  drawLoop(ctx, points);
};
