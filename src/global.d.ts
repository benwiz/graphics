declare interface BobaOptions {
  // Location and size of canvas
  x: number;
  y: number;
  width: number;
  height: number;
  // Points configurations
  numPoints: number;
  // Lines configurations
  numNeighbors: number;
  // Shapes configurations
  numSides: number;
}

declare interface Point {
  id: number;
  x: number;
  y: number;
  speed: number;
  angle: number;
  runAwayMultiplier: number;
  radius: number;
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

declare interface Line {
  point1: Point;
  point2: Point;
}

declare interface Adjacency {
  pointID: number;
  neighborIDs: number[];
}

declare interface Shape {
  numSides: number;
  points: Point[];
}

declare interface UpdateResult {
  points: Point[];
  lines: Line[];
  shapes: Shape[];
}
