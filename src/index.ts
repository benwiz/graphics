import * as Drawing from './drawing';

interface StartOptions {
  // Provide optoinal location and size of canvas
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const start = (options: StartOptions): void => {
  console.log('Start boba');

  const x = options.x || 0;
  const y = options.y || 0;
  const width = options.width || window.innerWidth;
  const height = options.height || window.innerHeight;
  const canvas = Drawing.createCanvas(x, y, width, height);
  const ctx = canvas.getContext('2d');
};
