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

// Tmp learning function. TODO: Delete and use `draw`
export const drawPoint = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillRect(x, y, 10, 10);
};

export const draw = (): void => {
  // Use this func, once I move past this demo moving dot
};
