import * as Rough from 'roughjs/dist/rough.umd';
import * as Matter from 'matter-js';
import * as Util from '../util';

let ROUGH_CANVAS;
let BALLS;
const BALL_DIAMETER = 38;

//
// All setup functions here
//

const createBalls = (width, height) => {
  const balls = [
    {
      id: 0,
      x: 0.5 * width,
      y: 0.8 * height,
      color: 'white',
    },
    {
      id: 1,
      x: 0.5 * width,
      y: 0.3 * height,
      color: 'yellow',
    },
    {
      id: 2,
      x: 2 * 38,
      y: 0,
      color: 'blue',
    },
    {
      id: 3,
      x: 3 * 38,
      y: 0,
      color: 'red',
    },
    {
      id: 4,
      x: 4 * 38,
      y: 0,
      color: 'violet',
    },
    {
      id: 5,
      x: 5 * 38,
      y: 0,
      color: 'orange',
    },
    {
      id: 6,
      x: 6 * 38,
      y: 0,
      color: 'lightgreen',
    },
    {
      id: 7,
      x: 7 * 38,
      y: 0,
      color: 'maroon',
    },
    {
      id: 8,
      x: 8 * 38,
      y: 0,
      color: 'black',
    },
    {
      id: 9,
      x: 9 * 38,
      y: 0,
      color: 'yellow',
    },
    {
      id: 10,
      x: 10 * 38,
      y: 0,
      color: 'blue',
    },
    {
      id: 11,
      x: 11 * 38,
      y: 0,
      color: 'red',
    },
    {
      id: 12,
      x: 12 * 38,
      y: 0,
      color: 'violet',
    },
    {
      id: 13,
      x: 13 * 38,
      y: 0,
      color: 'orange',
    },
    {
      id: 14,
      x: 14 * 38,
      y: 0,
      color: 'lightgreen',
    },
    {
      id: 15,
      x: 15 * 38,
      y: 0,
      color: 'maroon',
    },
  ];

  return balls;
};

const createBallBodies = (balls) => {
  const bodies = [];
  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    const radius = 19;
    const body = Matter.Bodies.circle(ball.x, ball.y, radius);
    bodies.push(body);
  }

  return bodies;
};

const createWallBodies = (width, height) => {
  const bodies = [
    // Top
    Matter.Bodies.rectangle(width / 2, -50, width, 100, { isStatic: true }),
    // Bottom
    Matter.Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true }),
    // Left
    Matter.Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true }),
    // Right
    Matter.Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true }),
  ];
  return bodies;
};

const setupMatter = (balls, width, height) => {
  // Create a Matter engine
  const engine = Matter.Engine.create();

  // Shut off gravity
  // engine.world.gravity.y = 0;

  // Create and add balls to the world
  const ballBodies = createBallBodies(balls);
  Matter.World.add(engine.world, ballBodies);

  // Create and add walls to the world
  const wallBodies = createWallBodies(width, height);
  Matter.World.add(engine.world, wallBodies);

  // Run the Matter engine
  Matter.Engine.run(engine);

  return ballBodies;
};

export const setup = (_options) => {
  // Set up rough.js canvas
  ROUGH_CANVAS = Rough.canvas(document.querySelector('canvas'));

  // Create the balls
  const { width, height } = ROUGH_CANVAS.canvas;
  BALLS = createBalls(width, height);

  // Set up matter.js
  const bodies = setupMatter(BALLS, width, height);

  // Add bodies to balls
  for (let i = 0; i < BALLS.length; i++) {
    BALLS[i].body = bodies[i];
  }
};

//
// All drawing functions below here
//

const drawBackground = (canvas) => {
  const x = 0;
  const y = 0;
  const w = canvas.canvas.width;
  const h = canvas.canvas.height;
  const options = {
    roughness: 1.5,
    strokeWidth: 2.0,
    stroke: 'saddlebrown',
    fill: 'green',
    fillStyle: 'hachure',
    fillWeight: 3,
    hachureGap: 1.3,
  };
  canvas.rectangle(x, y, w, h, options);
};

const drawBalls = (canvas, balls, diameter) => {
  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    const { x, y } = ball.body.position;
    const options = {
      stroke: 'black',
      strokeWidth: 1.0,
      fill: ball.color,
      fillStyle: 'zigzag',
      fillWeight: 1.0,
    };
    canvas.circle(x, y, diameter, options);
  }
};

export const draw = (options) => {
  const { p5 } = options;

  // Clear screen
  p5.background(255);

  // Draw background
  drawBackground(ROUGH_CANVAS);

  // Draw balls
  drawBalls(ROUGH_CANVAS, BALLS, BALL_DIAMETER);
};
