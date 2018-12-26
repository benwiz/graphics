export const update = (startTime: number, points: Point[]): Point[] => {
  const time = new Date().getTime() - startTime;
  const linearSpeed = 100;
  for (const point of points) {
    point.x = (linearSpeed * time) / 1000;
  }
  return points;
};
