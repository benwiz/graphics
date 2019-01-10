const circles = [];

export const setup = (p5) => {
  console.log('sketch.setup');
};

export const draw = ({
  p5, time, width, height,
}) => {
  console.log('sketch.draw');

  // Draw with p5.js things
  p5.background(0);
  p5.fill(255);
  p5.noStroke();

  const anim = p5.sin(time - p5.PI / 2) * 0.5 + 0.5;
  p5.rect(0, 0, width * anim, height);
};
