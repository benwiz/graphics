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

export const update = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
): Point[] => {
  // Move points
  for (let point of points) {
    point = updatePoint(ctx, point);
  }

  return points;
};
