const drawBorder = (p5, width, height, thickness, color) => {
  p5.rectMode(p5.CENTER);
  p5.noFill();
  p5.strokeWeight(thickness);
  p5.stroke(color);
  p5.rect(0, 0, width, height);
};

export const setup = (p5) => {
  console.log('sketch.setup');
};

export const draw = (options) => {
  const {
    p5, time, width, height,
  } = options;
  console.log('sketch.draw');

  // Draw with p5.js things
  p5.background(0);
  p5.fill(255);
  p5.noStroke();

  const anim = p5.sin(time - p5.PI / 2) * 0.5 + 0.5;
  p5.rect(0, 0, width * anim, height);
};
