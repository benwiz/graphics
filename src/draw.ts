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

const drawLine = (ctx: CanvasRenderingContext2D, line: Line): void => {
  ctx.strokeStyle = `rgba(${line.point1.color.r}, ${line.point1.color.g}, ${
    line.point1.color.b
  }, ${line.point1.color.a})`;

  ctx.beginPath();
  ctx.moveTo(line.point1.x, line.point1.y);
  ctx.lineTo(line.point2.x, line.point2.y);
  ctx.stroke();
};

export const draw = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  lines: Line[],
): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (const point of points) {
    drawPoint(ctx, point);
  }

  for (const line of lines) {
    drawLine(ctx, line);
  }
};
