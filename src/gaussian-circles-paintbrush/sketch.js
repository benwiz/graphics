const BACKGROUND_COLOR = 255;
const CIRCLES = [];

//
// All setup functions here
//

export const setup = (options) => {
  const { p5, width, height } = options;

  // Make background white
  p5.background(BACKGROUND_COLOR);

  // Create circles
  const n = 1000;
  for (let i = 0; i < n; i += 1) {
    const circle = {
      x: p5.randomGaussian(0, 0.22 * width),
      y: p5.randomGaussian(0, 0.22 * height),
      radius: p5.randomGaussian(12, 6),
    };
    CIRCLES.push(circle);
  }
};

//
// All drawing functions below here
//

const drawCircles = (p5, circles) => {
  circles.forEach((circle) => {
    p5.ellipse(circle.x, circle.y, circle.radius, circle.radius);
  });
};

const drawBorder = (p5, width, height, thickness, color) => {
  p5.rectMode(p5.CENTER);
  p5.noFill();
  p5.strokeWeight(thickness);
  p5.stroke(color);
  p5.rect(0, 0, width, height);
};

export const draw = (options) => {
  const { p5, width, height } = options;

  // Translate to center
  p5.translate(0.5 * width, 0.5 * height);

  // Set fill and stroke colors
  const color = {
    r: 255,
    g: 0,
    b: 0,
    a: 0.25,
  };
  p5.fill(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
  p5.stroke(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 1.25})`);

  // Draw circles
  drawCircles(p5, CIRCLES);

  // // Draw a white border around the edge of the canvas
  // const borderThickness = 50;
  // const borderColor = BACKGROUND_COLOR;
  // drawBorder(p5, width, height, borderThickness, borderColor);
};
