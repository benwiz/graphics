const circles = [];

export const setup = (p5) => {
  const n = 1000;
  for (let i = 0; i < n; i += 1) {
    const circle = {
      x: p5.randomGaussian(0.5 * p5.width, 0.2 * p5.width),
      y: p5.randomGaussian(0.5 * p5.height, 0.2 * p5.height),
      radius: p5.randomGaussian(10, 5),
    };
    circles.push(circle);
  }
};

export const draw = ({
  p5, time, width, height,
}) => {
  p5.background(0);

  // Set fill and stroke colors
  const color = {
    r: 0,
    g: 255,
    b: 0,
    a: 0.25,
  };
  p5.fill(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
  p5.stroke(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 2})`);

  // Draw circles
  circles.forEach((circle) => {
    p5.ellipse(circle.x, circle.y, circle.radius, circle.radius);
  });
};
