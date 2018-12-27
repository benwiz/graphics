import * as Util from './util';
import * as Graph from './graph';

const updatePoint = (ctx: CanvasRenderingContext2D, point: Point): Point => {
  // Update location
  point.x +=
    point.speed *
    Math.cos(Util.degToRadians(point.angle)) *
    point.runAwayMultiplier;
  point.y +=
    point.speed *
    Math.sin(Util.degToRadians(point.angle)) *
    point.runAwayMultiplier;

  // Constrain the point to within the borders
  if (point.x < 0 + point.radius) {
    point.x = 0 + point.radius;
  }
  if (point.x > ctx.canvas.width - point.radius) {
    point.x = ctx.canvas.width - point.radius;
  }
  if (point.y < 0 + point.radius) {
    point.y = 0 + point.radius;
  }
  if (point.y > ctx.canvas.height - point.radius) {
    point.y = ctx.canvas.height - point.radius;
  }

  // Keep the point's angle reasonable
  if (point.angle >= 360) {
    point.angle -= 360;
  } else if (point.angle <= -360) {
    point.angle += 360;
  }

  // Update angle if hit wall. Account for radius.
  if (
    point.x <= 0 + point.radius ||
    ctx.canvas.width - point.radius <= point.x
  ) {
    point.angle = 180 - point.angle;
  } else if (
    point.y <= 0 + point.radius ||
    ctx.canvas.height - point.radius <= point.y
  ) {
    point.angle = 0 - point.angle;
  }

  return point;
};

const createLines = (points: Point[], numNeighbors: number): Line[] => {
  const lines: Line[] = [];

  // For each point
  for (const point1 of points) {
    // TODO: This (i.e. these steps to get the k-nearest-neighbors) can be more efficient

    // Create a line to all points other than itself
    const linesForPoint: Line[] = [];
    for (const point2 of points) {
      if (point1 === point2) continue;

      // Create the line so that point1 has the lower id
      let pointA: Point;
      let pointB: Point;
      if (point1.id <= point2.id) {
        pointA = point1;
        pointB = point2;
      } else {
        pointA = point2;
        pointB = point1;
      }

      // Record the formatted line
      const line: Line = { point1: pointA, point2: pointB };
      linesForPoint.push(line);
    }

    // Sort the lines by distance
    linesForPoint.sort((lineA, lineB) => {
      const distA = Util.distance(lineA.point1, lineA.point2);
      const distB = Util.distance(lineB.point1, lineB.point2);
      return distA - distB;
    });

    // Keep the first `numNeighbors` lines
    linesForPoint.splice(numNeighbors);

    // Add those lines to the main lines array as long as the line is not already in the list
    for (const line of linesForPoint) {
      const matches = lines.filter(
        l => l.point1.id === line.point1.id && l.point2.id === line.point2.id,
      );

      if (matches.length === 0) {
        lines.push(line);
      }
    }
  }

  return lines;
};

const createAdjacencyList = (points: Point[], lines: Line[]): Adjacency[] => {
  const adjList: Adjacency[] = [];
  for (const point of points) {
    const adj: Adjacency = {
      pointID: point.id,
      neighborIDs: [],
    };

    // Find all the lines that contain this point and add the neighbor if not alraedy added
    for (const line of lines) {
      if (point.id === line.point1.id) {
        if (adj.neighborIDs.indexOf(line.point2.id) === -1) {
          adj.neighborIDs.push(line.point2.id);
        }
      } else if (point.id === line.point2.id) {
        if (adj.neighborIDs.indexOf(line.point1.id) === -1) {
          adj.neighborIDs.push(line.point1.id);
        }
      }
    }

    adjList.push(adj);
  }

  return adjList;
};

// To create shapes we run a depth-first search from every point on the graph. We only make
// `numSides` steps. If we can return to the original point without repeating edges, then we have
// formed out shape.
const createShapes = (adjList: Adjacency[], numSides: number): Shape[] => {
  const shapes: Shape[] = [];

  Graph.dfs(adjList);

  return shapes;
};

export const update = (
  progress: number,
  ctx: CanvasRenderingContext2D,
  options: BobaOptions,
  points: Point[],
  lines: Line[],
  shapes: Shape[],
): UpdateResult => {
  // Move points
  for (const point of points) {
    // updatePoint(ctx, point);
  }

  // Create/find the new set of lines
  lines = createLines(points, options.numNeighbors);

  // Create adjacency list (eventually, this should be generated in place of the lines list)
  const adjList = createAdjacencyList(points, lines);

  // Create/find the new set of shapes
  shapes = createShapes(adjList, options.numSides);

  return { points, lines, shapes };
};
