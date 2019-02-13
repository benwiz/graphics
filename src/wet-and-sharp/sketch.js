const GOLDEN_RATIO = 1 / 1.61803398875;

//
// All setup functions here
//

export const setup = (options) => {};

//
// All drawing functions below here
//

const peaksAndReflections = (p5) => {
  // Translate down to the golden ratio
  p5.translate(0, GOLDEN_RATIO * p5.height);

  // Draw the bottom (golden) half of the canvas black
  p5.fill(0);
  const rectHeight = p5.height * (1 - GOLDEN_RATIO);
  p5.rect(0, 0, p5.width, rectHeight);

  // Draw the black mountains on the white background
  const startX = (1 / 3) * p5.width;
  const endX = p5.width - (1 / 3) * p5.width;
  const width = endX - startX;
  const numPeaks = 4;
  const maxHeight = GOLDEN_RATIO * rectHeight;
  const step = width / (2 * numPeaks + 1);
  const peakPoints = [];
  for (let x = startX; x <= endX; x += step) {
    // TODO: I need to look at the last two points and determine if the new point is above or below
    // the previous point.
    let y;
    if (x === startX || x === endX) {
      y = 0;
    } else {
      y = -1 * p5.random(0.2 * maxHeight, maxHeight);
    }
    const point = { x, y };
    peakPoints.push(point);
  }

  // Yes this could be integrated into the previous loop, readability is the goal not speed.
  p5.beginShape();
  for (let i = 0; i < peakPoints.length; i++) {
    const point = peakPoints[i];
    p5.vertex(point.x, point.y);

    p5.ellipse(point.x, 0, 5);
    p5.ellipse(point.x, point.y, 5);
  }
  p5.endShape();
};

export const draw = (options) => {
  const { p5 } = options;

  peaksAndReflections(p5);
};
