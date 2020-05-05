export const getRandomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const getRandomInt = (min: number, max: number): number =>
  Math.floor(getRandomFloat(min, max));

export const degToRadians = (angle: number) => angle * (Math.PI / 180);

export const radiansToDeg = (angle: number) => angle * (180 / Math.PI);

export const distance = (
  vertex1: { x: number; y: number },
  vertex2: { x: number; y: number },
) => {
  // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
  const x1 = vertex1.x;
  const y1 = vertex1.y;
  const x2 = vertex2.x;
  const y2 = vertex2.y;
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return dist;
};
