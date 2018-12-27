export const getRandomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const getRandomInt = (min: number, max: number): number =>
  Math.floor(getRandomFloat(min, max));

export const degToRadians = (angle: number) => angle * (Math.PI / 180);

export const radiansToDeg = (angle: number) => angle * (180 / Math.PI);
