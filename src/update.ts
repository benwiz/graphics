const movePoint = (point: Point): Point => {
  point.x += 1;
  return point;
};

export const update = (points: Point[]): Point[] => {
  // Move points
  for (let point of points) {
    point = movePoint(point);
  }

  return points;
};
