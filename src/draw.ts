const drawPoint = (ctx: CanvasRenderingContext2D, point: Point): void => {
  ctx.strokeStyle = `rgba(${point.color.r}, ${point.color.g}, ${
    point.color.b
  }, ${point.color.a})`;
  ctx.fillStyle = `rgba(${point.color.r}, ${point.color.g}, ${
    point.color.b
  }, ${point.color.a / 2})`;

  ctx.beginPath();
  ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
};

export const draw = (ctx: CanvasRenderingContext2D, points: Point[]): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (const point of points) {
    drawPoint(ctx, point);
  }
};
