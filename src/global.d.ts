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

declare interface Triangle {
  point1: Point;
  point2: Point;
  point3: Point;
}

declare interface UpdateResult {
  points: Point[];
  lines: Line[];
  triangles: Triangle[];
}
