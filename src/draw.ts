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

const drawEdge = (ctx: CanvasRenderingContext2D, edge: Edge): void => {
  ctx.strokeStyle = `rgba(${edge.vertex1.color.r}, ${edge.vertex1.color.g}, ${
    edge.vertex1.color.b
  }, ${edge.vertex1.color.a})`;

  ctx.beginPath();
  ctx.moveTo(edge.vertex1.x, edge.vertex1.y);
  ctx.lineTo(edge.vertex2.x, edge.vertex2.y);
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
  edges: Edge[],
  shapes: Shape[],
): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (const vertex of vertices) {
    drawVertex(ctx, vertex);
  }

  for (const edge of edges) {
    drawEdge(ctx, edge);
  }

  for (const shape of shapes) {
    drawShape(ctx, shape);
  }
};
