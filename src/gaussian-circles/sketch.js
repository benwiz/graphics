const circles = [];

//
// All setup functions here
//

export const setup = (options) => {
  const { p5, width, height } = options;

  const n = 1000;
  for (let i = 0; i < n; i += 1) {
    const circle = {
      x: p5.randomGaussian(0, 0.2 * width),
      y: p5.randomGaussian(0, 0.2 * height),
      radius: p5.randomGaussian(12, 6),
    };
    circles.push(circle);
  }
};

//
// All drawing functions below here
//

const drawBorder = (p5, width, height) => {
  p5.fill('lightcyan');
  p5.stroke('orange');
  console.log('draw rect', 0, 0, 0.5 * width, 0.5 * height);
  p5.rect(0, 0, 0.5 * width, 0.5 * height);
};

export const draw = (options) => {
  const { p5, width, height } = options;

  // Make background white
  p5.background(255);

  // Translate to center
  p5.translate(0.5 * width, 0.5 * height);

  // Set fill and stroke colors
  const color = {
    r: 0,
    g: 255,
    b: 0,
    a: 0.25,
  };
  p5.fill(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
  p5.stroke(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 1.25})`);

  // Draw circles
  circles.forEach((circle) => {
    p5.ellipse(circle.x, circle.y, circle.radius, circle.radius);
  });

  // Draw a white border around the edge of the canvas
  // TODO: inputs should be: thickness, color, shape?
  drawBorder(p5);
};
