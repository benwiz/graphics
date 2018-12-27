export const getRandomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const getRandomInt = (min: number, max: number): number =>
  Math.floor(getRandomFloat(min, max));

export const degToRadians = (angle: number) => angle * (Math.PI / 180);

export const radiansToDeg = (angle: number) => angle * (180 / Math.PI);

export const distance = (
  point1: { x: number; y: number },
  point2: { x: number; y: number },
) => {
  // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
  const x1 = point1.x;
  const y1 = point1.y;
  const x2 = point2.x;
  const y2 = point2.y;
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return dist;
};
