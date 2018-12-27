import * as Util from './util';

const updateVertex = (ctx: CanvasRenderingContext2D, vertex: Vertex): Vertex => {
  // Update location
  vertex.x +=
    vertex.speed *
    Math.cos(Util.degToRadians(vertex.angle)) *
    vertex.runAwayMultiplier;
  vertex.y +=
    vertex.speed *
    Math.sin(Util.degToRadians(vertex.angle)) *
    vertex.runAwayMultiplier;

  // Constrain the vertex to within the borders
  if (vertex.x < 0 + vertex.radius) {
    vertex.x = 0 + vertex.radius;
  }
  if (vertex.x > ctx.canvas.width - vertex.radius) {
    vertex.x = ctx.canvas.width - vertex.radius;
  }
  if (vertex.y < 0 + vertex.radius) {
    vertex.y = 0 + vertex.radius;
  }
  if (vertex.y > ctx.canvas.height - vertex.radius) {
    vertex.y = ctx.canvas.height - vertex.radius;
  }

  // Keep the vertex's angle reasonable
  if (vertex.angle >= 360) {
    vertex.angle -= 360;
  } else if (vertex.angle <= -360) {
    vertex.angle += 360;
  }

  // Update angle if hit wall. Account for radius.
  if (
    vertex.x <= 0 + vertex.radius ||
    ctx.canvas.width - vertex.radius <= vertex.x
  ) {
    vertex.angle = 180 - vertex.angle;
  } else if (
    vertex.y <= 0 + vertex.radius ||
    ctx.canvas.height - vertex.radius <= vertex.y
  ) {
    vertex.angle = 0 - vertex.angle;
  }

  return vertex;
};

const createLines = (vertices: Vertex[], numNeighbors: number): Line[] => {
  const lines: Line[] = [];

  // For each vertex
  for (const vertex1 of vertices) {
    // TODO: This (i.e. these steps to get the k-nearest-neighbors) can be more efficient

    // Create a line to all vertices other than itself
    const linesForVertex: Line[] = [];
    for (const vertex2 of vertices) {
      if (vertex1 === vertex2) continue;

      // Create the line so that vertex1 has the lower id
      let vertexA: Vertex;
      let vertexB: Vertex;
      if (vertex1.id <= vertex2.id) {
        vertexA = vertex1;
        vertexB = vertex2;
      } else {
        vertexA = vertex2;
        vertexB = vertex1;
      }

      // Record the formatted line
      const line: Line = { vertex1: vertexA, vertex2: vertexB };
      linesForVertex.push(line);
    }

    // Sort the lines by distance
    linesForVertex.sort((lineA, lineB) => {
      const distA = Util.distance(lineA.vertex1, lineA.vertex2);
      const distB = Util.distance(lineB.vertex1, lineB.vertex2);
      return distA - distB;
    });

    // Keep the first `numNeighbors` lines
    linesForVertex.splice(numNeighbors);

    // Add those lines to the main lines array as long as the line is not already in the list
    for (const line of linesForVertex) {
      const matches = lines.filter(
        l => l.vertex1.id === line.vertex1.id && l.vertex2.id === line.vertex2.id,
      );

      if (matches.length === 0) {
        lines.push(line);
      }
    }
  }

  return lines;
};

const findLineInLines = (testLine: Line, lines: Line[]): Boolean => {
  for (const line of lines) {
    if (
      testLine.vertex1.id === line.vertex1.id &&
      testLine.vertex2.id === line.vertex2.id
    ) {
      return true;
    }
  }

  return false;
};

const createTriangles = (vertices: Vertex[], lines: Line[]): Shape[] => {
  const triangles: Shape[] = [];

  for (const line of lines) {
    for (const vertex of vertices) {
      // If vertex is part of the line, skip
      if (line.vertex1 === vertex || line.vertex2 === vertex) continue;

      // If (line.vertex1, vertex) && (vertex, line.vertex2) are edges that exist. Create the test
      // lines here.
      let testLine1: Line;
      if (vertex.id < line.vertex1.id) {
        testLine1 = { vertex1: vertex, vertex2: line.vertex1 };
      } else {
        testLine1 = { vertex1: line.vertex1, vertex2: vertex };
      }

      let testLine2: Line;
      if (vertex.id < line.vertex2.id) {
        testLine2 = { vertex1: vertex, vertex2: line.vertex2 };
      } else {
        testLine2 = { vertex1: line.vertex2, vertex2: vertex };
      }

      // Find if there are matching lines
      const test1 = findLineInLines(testLine1, lines);
      const test2 = findLineInLines(testLine2, lines);

      // Run the test
      if (test1 && test2) {
        const triangle: Shape = { vertices: [vertex, line.vertex1, line.vertex2] };
        triangles.push(triangle);
      }
    }
  }

  return triangles;
};

export const update = (
  progress: number,
  ctx: CanvasRenderingContext2D,
  options: BobaOptions,
  vertices: Vertex[],
  lines: Line[],
  shapes: Shape[],
): UpdateResult => {
  // Move vertices
  for (const vertex of vertices) {
    updateVertex(ctx, vertex);
  }

  // Create/find the new set of lines
  lines = createLines(vertices, options.numNeighbors);

  // Create/find the new set of shapes
  shapes = createTriangles(vertices, lines);

  return { vertices, lines, shapes };
};
