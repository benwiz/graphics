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

const roughShapesRandom = (p5) => {
  const drawSquare = (canvas, side) => {
    // Set random location and size
    const minX = 0.1 * p5.width;
    const maxX = (0.8 * p5.width) / 2;
    const minY = 0.1 * p5.height;
    const maxY = 0.8 * p5.height;
    const minW = 0.02 * p5.width;
    const maxW = 0.1 * p5.width;

    let x = Util.getRandomFloat(minX, maxX);
    const y = Util.getRandomFloat(minY, maxY);
    const w = Util.getRandomFloat(minW, maxW);
    const h = w;

    const options = {
      roughness: p5.randomGaussian(4.0),
      stroke: 'black',
      fill: 'white',
    };

    // Override some location and options if drawing on the right (black) side
    if (side === 'right') {
      x += p5.width / 2;
      options.stroke = 'white';
      options.fill = 'black';
    }

    canvas.rectangle(x, y, w, h, options);
  };

  // Set up rough.js canvas
  const canvas = Rough.canvas(document.querySelector('canvas'));

  // Set background color to be white
  p5.background(255);

  // Draw a few squares
  const numSquaresLeft = Util.getRandomInt(3, 5);
  for (let i = 0; i < numSquaresLeft; i++) {
    drawSquare(canvas, 'left');
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

  // Draw a few squares
  const numSquaresRight = Util.getRandomInt(3, 5);
  for (let i = 0; i < numSquaresRight; i++) {
    drawSquare(canvas, 'right');
  }
};

const roughShapesMirror = (p5) => {
  const createRect = (canvas) => {
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

    const rect = {
      x,
      y,
      w,
      h,
    };
    const options = {
      roughness: p5.randomGaussian(2.5),
      stroke: 'black',
      fill: 'white',
    };

    return { rect, options };
  };

  // Set up rough.js canvas
  const canvas = Rough.canvas(document.querySelector('canvas'));

  // Set background color to be white
  p5.background(255);

  // Make the right half black
  canvas.rectangle(p5.width / 2, 0, p5.width / 2, p5.height, {
    roughness: 0,
    strokeWidth: 0,
    fill: 'black',
    fillStyle: 'solid', // 'hachure',
    fillWeight: 3,
    hachureGap: 3,
  });

  // Create and draw a few rects
  const numRects = Util.getRandomInt(3, 5);
  for (let i = 0; i < numRects; i++) {
    const { rect, options } = createRect(canvas);

    // Draw the left side
    canvas.rectangle(rect.x, rect.y, rect.w, rect.h, options);

    // Draw the right side
    rect.x += 2 * (p5.width / 2 - (rect.x + rect.w / 2));
    options.roughness *= 3;
    options.stroke = 'white';
    options.fill = 'black';
    canvas.rectangle(rect.x, rect.y, rect.w, rect.h, options);
  }
};

export const draw = (options) => {
  const { p5 } = options;

  // noisyShapes(p5);
  // roughShapesRandom(p5);
  roughShapesMirror(p5);
};
