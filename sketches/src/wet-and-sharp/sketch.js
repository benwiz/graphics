import * as Util from '../util';

const GOLDEN_RATIO = 1 / 1.61803398875;

//
// All setup functions here
//

export const setup = (_options) => {};

//
// All drawing functions below here
//

const peaksAndReflections = (p5) => {
  // Set background color to be white
  p5.background(255);

  // Translate down to the golden ratio
  p5.translate(0, GOLDEN_RATIO * p5.height);

  // Shut off borders
  p5.strokeWeight(0);

  // Draw the bottom (golden) half of the canvas black
  p5.fill(0);
  const rectHeight = p5.height * (1 - GOLDEN_RATIO);
  p5.rect(0, 0, p5.width, rectHeight);

  // Create the points for the mountain
  const startX = (1 / 3) * p5.width;
  const endX = p5.width - (1 / 3) * p5.width;
  const width = endX - startX;
  const maxHeight = GOLDEN_RATIO * rectHeight;
  const peakPoints = [];
  const n = 9;
  const step = width / n;
  for (let i = 0; i < n; i++) {
    const x = startX + i * step;
    let y;
    if (i === 0 || i === n - 1) {
      y = 0;
    } else {
      const prevPoint = peakPoints[i - 1];
      if (i % 2 === 0) {
        // If index is even, the point must be below the previous point
        const maxY = Math.abs(prevPoint.y);
        y = p5.random(0.2 * maxHeight, maxY);
      } else {
        // If index is odd, the point must be above the previous point
        const minY = Math.abs(prevPoint.y);
        y = p5.random(minY, maxHeight);
      }
      y *= -1;
    }
    const point = { x, y };
    peakPoints.push(point);
  }

  // Draw the reflections filled with white
  p5.fill(255);
  p5.curveTightness(-4); // MESS WITH THIS [-5, 5], IT HAS A LARGE IMPACT
  p5.beginShape();
  for (let i = 0; i < peakPoints.length; i++) {
    const point = peakPoints[i];
    p5.curveVertex(point.x, -point.y);

    // If first or last, repeat it
    if (i === 0 || i === peakPoints.length - 1) {
      p5.curveVertex(point.x, -point.y);
    }
  }
  p5.endShape();

  // Draw the mountain second so it covers any oddities caused by curve tightness
  p5.fill(0);
  p5.beginShape();
  for (let i = 0; i < peakPoints.length; i++) {
    const point = peakPoints[i];
    const y = Util.scale(point.y, 0, maxHeight, 0, GOLDEN_RATIO * p5.height); // Mess around
    p5.vertex(point.x, y);
  }
  p5.endShape();
};

export const draw = (options) => {
  const { p5 } = options;

  peaksAndReflections(p5);
};
