import * as Rough from 'roughjs/dist/rough.umd';
import * as Util from '../util';

//
// All setup functions here
//

export const setup = (_options) => {};

//
// All drawing functions below here
//

const noisyShapes = (p5) => {
  // Set background color to be white
  p5.background(255);

  // Set angle mode to degrees
  p5.angleMode(p5.DEGREES);

  // Prepare to draw black bordered shapes on white background
  p5.noFill();
  p5.stroke(0);
  p5.strokeWeight(1);

  // Draw a few noisy squares
  p5.rectMode(p5.CENTER);
  const numSquares = 1;
  for (let i = 0; i < numSquares; i++) {
    p5.push();

    const x = 100;
    const y = 100;
    const w = 50;
    const h = w;

    p5.translate(x, y);

    // Begin with a random rotation
    p5.rotate(Util.getRandomFloat(-180, 180));

    const n = Util.getRandomInt(5, 8);
    for (let j = 0; j < n; j++) {
      p5.push();

      // Random rotation
      const angle = p5.randomGaussian(20, 5) * (p5.random > 0.75 ? 1 : -1);
      p5.rotate(angle);

      // Random translate
      const xT = p5.randomGaussian(5) * (p5.random > 0.5 ? 1 : -1);
      const yT = p5.randomGaussian(5) * (p5.random > 0.5 ? 1 : -1);
      p5.translate(xT, yT);

      // Draw rect
      p5.rect(0, 0, w, h);

      p5.pop();
    }

    p5.pop();
  }

  // Make the right half black
  p5.rectMode(p5.CORNER);
  p5.fill(0);
  p5.rect(p5.width / 2, 0, p5.width / 2, p5.height);
};

const roughShapes = (p5) => {
  // Set up rough.js canvas
  const canvas = Rough.canvas(document.querySelector('canvas'));

  // Set background color to be white
  p5.background(255);

  // Draw a few squares
  const numSquares = 4;
  for (let i = 0; i < numSquares; i++) {
    // Set random location and size
    const minX = 0.1 * p5.width;
    const maxX = (0.8 * p5.width) / 2;
    const minY = 0.1 * p5.height;
    const maxY = 0.8 * p5.height;
    const minW = 0.02 * p5.width;
    const maxW = 0.1 * p5.width;

    const x = Util.getRandomFloat(minX, maxX);
    const y = Util.getRandomFloat(minY, maxY);
    const w = Util.getRandomFloat(minW, maxW);
    const h = w;

    const options = {
      roughness: p5.randomGaussian(4.0),
      stroke: 'black',
      fill: 'white',
    };
    canvas.rectangle(x, y, w, h, options);
  }

  // Make the right half black
  canvas.rectangle(p5.width / 2, 0, p5.width / 2, p5.height, {
    roughness: 1.0,
    strokeWidth: 1,
    fill: 'black',
    fillStyle: 'solid', // 'hachure',
    fillWeight: 3,
    hachureGap: 3,
  });
};

export const draw = (options) => {
  const { p5 } = options;

  // noisyShapes(p5);
  roughShapes(p5);
};
