// NOTE: Be very careful what is added to here. It really should only be the most very basic
// and frequently used utility functions.

export const distance = (x1, y1, x2, y2) => {
  // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return dist;
};

export const scale = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

export const randomElement = items => items[Math.floor(Math.random() * items.length)];

export const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

export const getRandomInt = (min, max) => Math.floor(getRandomFloat(min, max));
