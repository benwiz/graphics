declare interface BobaOptions {
  // Location and size of canvas
  x: number;
  y: number;
  width: number;
  height: number;
  // Vertices configurations
  numVertices: number;
  // Lines configurations
  numNeighbors: number;
  // Shapes configurations
  numSides: number;
}

declare interface Vertex {
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
  vertex1: Vertex;
  vertex2: Vertex;
}

declare interface Adjacency {
  vertexID: number;
  neighborIDs: number[];
}

declare interface Shape {
  vertices: Vertex[];
}

declare interface UpdateResult {
  vertices: Vertex[];
  lines: Line[];
  shapes: Shape[];
}
