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

  // Calculate x and y offsets if the alt/option key is pressed
  let offsetX;
  let offsetY;
  if (p5.keyIsPressed && p5.keyCode === 18) {
    offsetX = 0;
    offsetY = 0;
  } else {
    offsetX = p5.randomGaussian(0, range);
    offsetY = p5.randomGaussian(0, range);
  }

  for (let i = 0; i < n; i += 1) {
    const circle = {
      x: mouseX + offsetX,
      y: mouseY + offsetY,
      radius: p5.randomGaussian(50, 6),
      strokeweight: p5.randomGaussian(25, 5),
    };
    circle.innerRadius = circle.radius - circle.strokeweight * (1 + p5.randomGaussian(0.5, 0.25));

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

  // If the esc button is pressed, clear CIRCLES array
  if (p5.keyIsPressed && p5.keyCode === 27) {
    CIRCLES.length = 0;
  }

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
  const gray = {
    r: 200,
    g: 200,
    b: 200,
    a: 0.5,
  };
  const color = {
    r: 255,
    g: 0,
    b: 0,
    a: gray.a / 2,
  };

  p5.strokeCap(p5.SQUARE);

  // Draw circles
  CIRCLES.forEach((circle) => {
    // Draw the center
    p5.fill(`rgba(${gray.r}, ${gray.g}, ${gray.b}, ${gray.a})`);
    p5.strokeWeight(0);
    p5.ellipse(circle.x, circle.y, circle.innerRadius, circle.innerRadius);

    // Draw the colored, top half
    p5.noFill();
    p5.strokeWeight(circle.strokeweight);
    p5.stroke(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
    p5.arc(circle.x, circle.y, circle.radius, circle.radius, -p5.PI, 0);

    // Draw the gray, bottom half
    p5.stroke(`rgba(${gray.r}, ${gray.g}, ${gray.b}, ${gray.a / 2})`);
    p5.arc(circle.x, circle.y, circle.radius, circle.radius, 0, -p5.PI);
  });

  // Draw a white border around the edge of the canvas
  const borderThickness = 50;
  const borderColor = BACKGROUND_COLOR;
  drawBorder(p5, width, height, borderThickness, borderColor);
};
