import * as Util from './util';

const updateVertex = (
  ctx: CanvasRenderingContext2D,
  vertex: Vertex,
): Vertex => {
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

const createEdges = (
  options: BobaOptions,
  vertices: Vertex[],
  numNeighbors: number,
): Edge[] => {
  const edges: Edge[] = [];

  // For each vertex
  for (const vertex1 of vertices) {
    // TODO: This (i.e. these steps to get the k-nearest-neighbors) can be more efficient

    // Create a edge to all vertices other than itself
    const edgesForVertex: Edge[] = [];
    for (const vertex2 of vertices) {
      if (vertex1 === vertex2) continue;

      // Create the edge so that vertex1 has the lower id
      let vertexA: Vertex;
      let vertexB: Vertex;
      if (vertex1.id <= vertex2.id) {
        vertexA = vertex1;
        vertexB = vertex2;
      } else {
        vertexA = vertex2;
        vertexB = vertex1;
      }

      // Record the formatted edge
      const edge: Edge = {
        vertex1: vertexA,
        vertex2: vertexB,
        color:
          options.edgeColors[
            Util.getRandomInt(0, options.edgeColors.length - 1)
          ],
      };
      edgesForVertex.push(edge);
    }

    // Sort the edges by distance
    edgesForVertex.sort((edgeA, edgeB) => {
      const distA = Util.distance(edgeA.vertex1, edgeA.vertex2);
      const distB = Util.distance(edgeB.vertex1, edgeB.vertex2);
      return distA - distB;
    });

    // Keep the first `numNeighbors` edges
    edgesForVertex.splice(numNeighbors);

    // Add those edges to the main edges array as long as the edge is not already in the list
    for (const edge of edgesForVertex) {
      const matches = edges.filter(
        l =>
          l.vertex1.id === edge.vertex1.id && l.vertex2.id === edge.vertex2.id,
      );

      if (matches.length === 0) {
        edges.push(edge);
      }
    }
  }

  return edges;
};

const findEdgeInEdges = (testEdge: Edge, edges: Edge[]): Boolean => {
  for (const edge of edges) {
    if (
      testEdge.vertex1.id === edge.vertex1.id &&
      testEdge.vertex2.id === edge.vertex2.id
    ) {
      return true;
    }
  }

  return false;
};

const createTriangles = (
  options: BobaOptions,
  vertices: Vertex[],
  edges: Edge[],
): Shape[] => {
  const triangles: Shape[] = [];

  for (const edge of edges) {
    for (const vertex of vertices) {
      // If vertex is part of the edge, skip
      if (edge.vertex1 === vertex || edge.vertex2 === vertex) continue;

      // If (edge.vertex1, vertex) && (vertex, edge.vertex2) are edges that exist. Create the test
      // edges here. Color doesn't actually matter since comparisons are done against id.
      let testEdge1: Edge;
      const color: Color = { r: 0, g: 0, b: 0, a: 0 };
      if (vertex.id < edge.vertex1.id) {
        testEdge1 = { vertex1: vertex, vertex2: edge.vertex1, color };
      } else {
        testEdge1 = { vertex1: edge.vertex1, vertex2: vertex, color };
      }

      let testEdge2: Edge;
      if (vertex.id < edge.vertex2.id) {
        testEdge2 = { vertex1: vertex, vertex2: edge.vertex2, color };
      } else {
        testEdge2 = { vertex1: edge.vertex2, vertex2: vertex, color };
      }

      // Find if there are matching edges
      const test1 = findEdgeInEdges(testEdge1, edges);
      const test2 = findEdgeInEdges(testEdge2, edges);

      // Run the test
      if (test1 && test2) {
        const triangle: Shape = {
          vertices: [vertex, edge.vertex1, edge.vertex2],
          color:
            options.shapeColors[
              Util.getRandomInt(0, options.shapeColors.length - 1)
            ],
        };
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
  edges: Edge[],
  shapes: Shape[],
): UpdateResult => {
  // Move vertices
  for (const vertex of vertices) {
    updateVertex(ctx, vertex);
  }

  // Create/find the new set of edges
  edges = createEdges(options, vertices, options.numNeighbors);

  // Create/find the new set of shapes
  shapes = createTriangles(options, vertices, edges);

  return { vertices, edges, shapes };
};
