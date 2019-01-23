const BACKGROUND_COLOR = 255;
const CIRCLES = [];
let LAST_CIRCLE_ADDED_AT = new Date();

//
// All setup functions here
//

export const setup = (options) => {
  const { p5, width, height } = options;
};

//
// All drawing functions below here
//

const addCircles = (p5, n, range) => {
  const mouseX = p5.mouseX - p5.width / 2; // Since we will translate to center before drawing
  const mouseY = p5.mouseY - p5.height / 2;
  for (let i = 0; i < n; i += 1) {
    const circle = {
      x: mouseX + p5.randomGaussian(0, range),
      y: mouseY + p5.randomGaussian(0, range),
      radius: p5.randomGaussian(12, 6),
      strokeweight: p5.randomGaussian(50, 10),
    };
    CIRCLES.push(circle);
  }
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

  // Add more circles where the mouse button is pressed
  const drawCirclesFPS = 8;
  const currDate = new Date();
  if (currDate - LAST_CIRCLE_ADDED_AT > 1000 / drawCirclesFPS && p5.mouseIsPressed) {
    const n = 1;
    const range = 50;
    addCircles(p5, n, range);
    LAST_CIRCLE_ADDED_AT = currDate;
  }

  // Clear the canvas
  p5.background(BACKGROUND_COLOR);

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
  CIRCLES.forEach((circle) => {
    p5.strokeWeight(circle.strokeweight);
    p5.ellipse(circle.x, circle.y, circle.radius, circle.radius);
  });

  // Draw a white border around the edge of the canvas
  const borderThickness = 50;
  const borderColor = BACKGROUND_COLOR;
  drawBorder(p5, width, height, borderThickness, borderColor);
};
