import * as Rough from 'roughjs/dist/rough.umd';
import * as Util from '../util';

let DO_DRAW = true;

//
// All setup functions here
//

export const setup = (_options) => {};

//
// All drawing functions below here
//

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
const roughShapesRandom = (p5) => {
  const createRect = () => {
    const minX = 0.1 * p5.width;
    const maxX = (0.8 * p5.width) / 2;
    const minY = 0.1 * p5.height;
    const maxY = 0.8 * p5.height;
    const minW = 0.02 * p5.width;
    const maxW = 0.1 * p5.width;
    const minH = minW;
    const maxH = maxW;

    const x = Util.getRandomFloat(minX, maxX);
    const y = Util.getRandomFloat(minY, maxY);
    const w = Util.getRandomFloat(minW, maxW);
    const h = Util.getRandomFloat(minH, maxH);

    const rect = {
      x,
      y,
      w,
      h,
    };

    return rect;
  };

  const createEllipse = () => createRect();

  const createTriangle = () => {
    const minX = 0.1 * p5.width;
    const maxX = (0.8 * p5.width) / 2;
    const minY = 0.1 * p5.height;
    const maxY = 0.8 * p5.height;
    const minW = 0.02 * p5.width;
    const maxW = 0.1 * p5.width;
    const minH = minW;
    const maxH = maxW;

    const x = Util.getRandomFloat(minX, maxX);
    const y = Util.getRandomFloat(minY, maxY);
    const w = Util.getRandomFloat(minW, maxW);
    const h = Util.getRandomFloat(minH, maxH);

    const triangle = [[x, y], [x + w / 2, y + h], [x - w / 2, y + h]];
    return triangle;
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

  // Create and draw a few rects on the left
  const numRectsLeft = Util.getRandomInt(1.2, 3);
  for (let i = 0; i < numRectsLeft; i++) {
    const rect = createRect(canvas);
    const options = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'black',
      fill: 'black',
    };
    canvas.rectangle(rect.x, rect.y, rect.w, rect.h, options);
  }

  // Create and draw a few rects on the right
  const numRectsRight = Util.getRandomInt(1.2, 3);
  for (let i = 0; i < numRectsRight; i++) {
    const rect = createRect(canvas);
    rect.x += p5.width / 2;
    const options = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'white',
      fill: 'white',
    };
    canvas.rectangle(rect.x, rect.y, rect.w, rect.h, options);
  }

  // Create and draw a few ellipses on the left
  const numEllipsesLeft = Util.getRandomInt(1, 3);
  for (let i = 0; i < numEllipsesLeft; i++) {
    const ellipse = createEllipse();
    const options = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'black',
      fill: 'black',
    };
    canvas.ellipse(ellipse.x, ellipse.y, ellipse.w, ellipse.h, options);
  }

  // Create and draw a few ellipses on the right
  const numEllipsesRight = Util.getRandomInt(1, 3);
  for (let i = 0; i < numEllipsesRight; i++) {
    const ellipse = createEllipse();
    ellipse.x += p5.width / 2;
    const options = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'white',
      fill: 'white',
    };
    canvas.ellipse(ellipse.x, ellipse.y, ellipse.w, ellipse.h, options);
  }

  // Create and draw a few triangles on the left
  const numTrianglesLeft = Util.getRandomInt(1.2, 3);
  for (let i = 0; i < numTrianglesLeft; i++) {
    const triangle = createTriangle();
    const options = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'black',
      fill: 'black',
    };
    canvas.polygon(triangle, options);
  }

  // Create and draw a few triangles on the right
  const numTrianglesRight = Util.getRandomInt(1.2, 3);
  for (let i = 0; i < numTrianglesRight; i++) {
    const triangle = createTriangle();
    triangle[0][0] += p5.width / 2;
    triangle[1][0] += p5.width / 2;
    triangle[2][0] += p5.width / 2;
    const options = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'white',
      fill: 'white',
    };
    canvas.polygon(triangle, options);
  }
};

// eslint-disable-next-line no-unused-vars
const roughShapesMirror = (p5) => {
  const createRect = () => {
    const minX = 0.1 * p5.width;
    const maxX = (0.8 * p5.width) / 2;
    const minY = 0.1 * p5.height;
    const maxY = 0.8 * p5.height;
    const minW = 0.02 * p5.width;
    const maxW = 0.1 * p5.width;
    const minH = minW;
    const maxH = maxW;

    const x = Util.getRandomFloat(minX, maxX);
    const y = Util.getRandomFloat(minY, maxY);
    const w = Util.getRandomFloat(minW, maxW);
    const h = Util.getRandomFloat(minH, maxH);

    const rect = {
      x,
      y,
      w,
      h,
    };

    return rect;
  };

  const createEllipse = () => createRect();

  const createTriangle = () => {
    const minX = 0.1 * p5.width;
    const maxX = (0.8 * p5.width) / 2;
    const minY = 0.1 * p5.height;
    const maxY = 0.8 * p5.height;
    const minW = 0.02 * p5.width;
    const maxW = 0.1 * p5.width;
    const minH = minW;
    const maxH = maxW;

    const x = Util.getRandomFloat(minX, maxX);
    const y = Util.getRandomFloat(minY, maxY);
    const w = Util.getRandomFloat(minW, maxW);
    const h = Util.getRandomFloat(minH, maxH);

    const triangle = [[x, y], [x + w / 2, y + h], [x - w / 2, y + h]];
    return triangle;
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
  const numRects = Util.getRandomInt(1.2, 3);
  for (let i = 0; i < numRects; i++) {
    const rect = createRect(canvas);

    // Draw the left side
    const leftOptions = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'black',
      fill: 'white',
    };
    canvas.rectangle(rect.x, rect.y, rect.w, rect.h, leftOptions);

    // Draw the right side
    rect.x += 2 * (p5.width / 2 - (rect.x + rect.w / 2));
    const rightOptions = {
      roughness: leftOptions.roughness * 3,
      stroke: 'white',
      fill: 'black',
    };
    canvas.rectangle(rect.x, rect.y, rect.w, rect.h, rightOptions);
  }

  // Create and draw a few ellipses
  const numEllipses = Util.getRandomInt(1, 3);
  for (let i = 0; i < numEllipses; i++) {
    const ellipse = createEllipse();

    // Draw the left side
    const leftOptions = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'black',
      fill: 'white',
    };
    canvas.ellipse(ellipse.x, ellipse.y, ellipse.w, ellipse.h, leftOptions);

    // Draw the right side
    ellipse.x += 2 * (p5.width / 2 - ellipse.x);
    const rightOptions = {
      roughness: leftOptions.roughness * 3,
      stroke: 'white',
      fill: 'black',
    };
    canvas.ellipse(ellipse.x, ellipse.y, ellipse.w, ellipse.h, rightOptions);
  }

  // Create and draw a few triangles
  const numTriangles = Util.getRandomInt(1.2, 3);
  for (let i = 0; i < numTriangles; i++) {
    const triangle = createTriangle();

    // Draw the left side
    const leftOptions = {
      roughness: Util.getRandomFloat(1, 2.25),
      stroke: 'black',
      fill: 'white',
    };
    canvas.polygon(triangle, leftOptions);

    // Draw the right side
    triangle[0][0] += 2 * (p5.width / 2 - triangle[0][0]);
    triangle[1][0] += 2 * (p5.width / 2 - triangle[1][0]);
    triangle[2][0] += 2 * (p5.width / 2 - triangle[2][0]);
    const rightOptions = {
      roughness: leftOptions.roughness * 3,
      stroke: 'white',
      fill: 'black',
    };
    canvas.polygon(triangle, rightOptions);
  }
};

export const draw = (options) => {
  const { p5 } = options;

  // If SPACE is pressed
  if (p5.keyIsPressed && p5.keyCode === 32) {
    DO_DRAW = true;
  }

  if (DO_DRAW) {
    // noisyShapes(p5);
    roughShapesRandom(p5);
    // roughShapesMirror(p5);

    DO_DRAW = false;
  }
};
