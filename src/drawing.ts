export const createCanvas = (
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

// Tmp learning function
export const drawPoint = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
): void => {
  ctx.fillRect(x, y, 10, 10);
};

// NOTE: def don't want an interface right here
export interface Point {
  x: number;
  y: number;
}
export const update = (startTime: number, point: Point): Point => {
  const time = new Date().getTime() - startTime;
  const linearSpeed = 100;
  point.x = (linearSpeed * time) / 1000;
  return point;
};
