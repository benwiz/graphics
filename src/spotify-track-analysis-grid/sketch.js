import * as Util from '../util';

//
// All setup functions here
//

export const setup = (_options) => {};

//
// All drawing functions below here
//

export const draw = (options) => {
  const { p5, width, height } = options;

  // Set background color
  p5.background(255);
  p5.stroke(0);
  p5.fill(0);

  // Draw n circles in a grid pattern using translate
  const nTotal = 250;
  const n = Math.ceil(Math.sqrt(nTotal));
  const xStep = width / n;
  const yStep = height / n;
  let count = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (count >= nTotal) break;

      const x = i * xStep + xStep / 2;
      const y = j * yStep + yStep / 2;
      p5.push();
      p5.translate(x, y);
      p5.ellipse(0, 0, 10);
      p5.pop();

      count += 1;
    }
  }
};
