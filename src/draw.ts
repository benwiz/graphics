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

  ctx.font = '12px Arial black';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(String(point.id), point.x, point.y);
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

const drawShape = (ctx: CanvasRenderingContext2D, shape: Shape): void => {
  ctx.fillStyle = `rgba(${shape.points[0].color.r}, ${
    shape.points[0].color.g
  }, ${shape.points[0].color.b}, ${shape.points[0].color.a / 2})`;

  ctx.beginPath();
  ctx.moveTo(shape.points[0].x, shape.points[0].y);
  for (let i = 1; i < shape.numSides; i++) {
    const point: Point = shape.points[i];
    ctx.lineTo(point.x, point.y);
  }
  ctx.fill();
};

export const draw = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  lines: Line[],
  shapes: Shape[],
): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (const point of points) {
    drawPoint(ctx, point);
  }

  for (const line of lines) {
    drawLine(ctx, line);
  }

  console.log(shapes);
  for (const shape of shapes) {
    drawShape(ctx, shape);
  }
};
