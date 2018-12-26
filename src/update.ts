const movePoint = (point: Point): Point => {
  point.x += 1;
  return point;
};

export const update = (startTime: number, points: Point[]): Point[] => {
  // const time = new Date().getTime() - startTime;
  // const linearSpeed = 100;

  // TODO: Probably don't need startTime, instead just call at a frame rate

  // TODO: use a map function not a loop, I think
  for (let point of points) {
    point = movePoint(point);
  }
  return points;
};
