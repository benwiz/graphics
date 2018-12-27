const movePoint = (point: Point): Point => {
  point.x += point.speed;
  return point;
};

export const update = (points: Point[]): Point[] => {
  // Move points
  for (let point of points) {
    point = movePoint(point);
  }

  return points;
};
