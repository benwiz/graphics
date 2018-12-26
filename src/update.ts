export const update = (startTime: number, point: Point): Point => {
  const time = new Date().getTime() - startTime;
  const linearSpeed = 100;
  point.x = (linearSpeed * time) / 1000;
  return point;
};
