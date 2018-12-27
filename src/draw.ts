const drawVertex = (ctx: CanvasRenderingContext2D, vertex: Vertex): void => {
  ctx.strokeStyle = `rgba(${vertex.color.r}, ${vertex.color.g}, ${
    vertex.color.b
  }, ${vertex.color.a})`;
  ctx.fillStyle = `rgba(${vertex.color.r}, ${vertex.color.g}, ${
    vertex.color.b
  }, ${vertex.color.a / 2})`;

  ctx.beginPath();
  ctx.arc(vertex.x, vertex.y, vertex.radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();

  // ctx.font = '12px Arial black';
  // ctx.fillStyle = 'black';
  // ctx.textAlign = 'center';
  // ctx.fillText(String(vertex.id), vertex.x, vertex.y);
};

const drawLine = (ctx: CanvasRenderingContext2D, line: Line): void => {
  ctx.strokeStyle = `rgba(${line.vertex1.color.r}, ${line.vertex1.color.g}, ${
    line.vertex1.color.b
  }, ${line.vertex1.color.a})`;

  ctx.beginPath();
  ctx.moveTo(line.vertex1.x, line.vertex1.y);
  ctx.lineTo(line.vertex2.x, line.vertex2.y);
  ctx.stroke();
};

const drawShape = (ctx: CanvasRenderingContext2D, shape: Shape): void => {
  ctx.fillStyle = `rgba(${shape.vertices[0].color.r}, ${
    shape.vertices[0].color.g
  }, ${shape.vertices[0].color.b}, ${shape.vertices[0].color.a / 2})`;

  ctx.beginPath();
  ctx.moveTo(shape.vertices[0].x, shape.vertices[0].y);
  for (let i = 1; i < shape.vertices.length; i++) {
    const vertex: Vertex = shape.vertices[i];
    ctx.lineTo(vertex.x, vertex.y);
  }
  ctx.fill();
};

export const draw = (
  ctx: CanvasRenderingContext2D,
  vertices: Vertex[],
  lines: Line[],
  shapes: Shape[],
): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (const vertex of vertices) {
    drawVertex(ctx, vertex);
  }

  for (const line of lines) {
    drawLine(ctx, line);
  }

  for (const shape of shapes) {
    drawShape(ctx, shape);
  }
};
