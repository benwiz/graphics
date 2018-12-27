import * as Util from './util';

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

      // We determine the point closer to the origin, then use that as `point1` in the line. The
      // reason is so that we can dedupe later on.
      const dist1 = Util.distance({ x: 0, y: 0 }, point1);
      const dist2 = Util.distance({ x: 0, y: 0 }, point2);
      let smallerPoint: Point;
      let largerPoint: Point;
      if (dist1 < dist2) {
        smallerPoint = point1;
        largerPoint = point2;
      } else {
        smallerPoint = point2;
        largerPoint = point1;
      }

      // Record the formatted line
      const line: Line = { point1: smallerPoint, point2: largerPoint };
      linesForPoint.push(line);
    }

    // Keep the first `numNeighbors` lines
    linesForPoint.splice(numNeighbors);

    // Add those lines to the main lines array as long as the line is not already in the list
    for (const line of linesForPoint) {
      // if (lines.indexOf(line) > -1) continue;
      // const reversedLine: Line = { point1: line.point2, point2: line.point1 };
      // if (lines.indexOf(reversedLine)) continue;

      lines.push(line);
    }
  }

  console.log(lines.length);

  return lines;
};

// TODO: Don't use "any" as return type
export const update = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  lines: Line[],
): any => {
  // Move points
  for (let point of points) {
    point = updatePoint(ctx, point);
  }

  // Create new set of lines
  const numNeighbors = 3;
  lines = createLines(points, numNeighbors);

  return { points, lines };
};
