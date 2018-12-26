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

const drawPoint = (ctx: CanvasRenderingContext2D, point: Point): void => {
  ctx.fillRect(point.x, point.y, 10, 10);
};

export const draw = (ctx: CanvasRenderingContext2D, points: Point[]): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (const point of points) {
    drawPoint(ctx, point);
  }
};
