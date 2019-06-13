/* global webglUtils:readable, Delaunator:readable */

const createShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  gl.deleteShader(shader);
};

const createProgram = (gl, vertexShader, fragmentShader) => {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  gl.deleteProgram(program);
};

const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(randomFloat(min, max));
// const distance = (point1, point2) => {
//   // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
//   const x1 = point1.x;
//   const y1 = point1.y;
//   const x2 = point2.x;
//   const y2 = point2.y;
//   const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
//   return dist;
// };

// const createPoints = (gl, n) => {
//   const points = [];
//   for (let i = 0; i < n; i++) {
//     const point = [randomInt(0, gl.canvas.width), randomInt(0, gl.canvas.height)];
//     points.push(point);
//   }
//   return points;
// };

const createTriangles = (points) => {
  // Returns a flat list of coordinates
  const triangles = [];
  const delaunay = Delaunator.from(points);
  for (let i = 0; i < delaunay.triangles.length; i += 3) {
    const triangle = [
      points[delaunay.triangles[i]],
      points[delaunay.triangles[i + 1]],
      points[delaunay.triangles[i + 2]],
    ];
    triangles.push(triangle);
  }
  return triangles;
};

const createPositions = (gl, n) => {
  // First, randomly generate n points. Some points should exist outside the
  // bounds of the canvas.
  const points = createPoints(gl, n);

  // Second, generate triangles using those points
  const triangles = createTriangles(points);

  // Third, create the flattened postitions array
  const positions = triangles.flat(2);

  // Return positions list
  return positions;
};

const main = async () => {
  // Get A WebGL context
  const canvas = document.getElementById('c');
  const gl = canvas.getContext('webgl');
  if (!gl) {
    return;
  }

  //
  // Initializations
  //

  // Get the strings for our GLSL shaders
  const vertexShaderResponse = await fetch('./2d.vert');
  const vertexShaderSource = await vertexShaderResponse.text();
  const fragmentShaderResponse = await fetch('./2d.frag');
  const fragmentShaderSource = await fragmentShaderResponse.text();

  // create GLSL shaders, upload the GLSL source, compile the shaders
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  // Link the two shaders into a program
  const program = createProgram(gl, vertexShader, fragmentShader);

  // look up where the vertex data needs to go.
  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');

  // Look up uniform locations
  const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
  const colorUniformLocation = gl.getUniformLocation(program, 'u_color');

  // Create a buffer and put three 2d clip space points in it
  const positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = createPositions(gl, 20);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  //
  // Rendering.
  //

  webglUtils.resizeCanvasToDisplaySize(gl.canvas);

  // Tell WebGL how to convert from clip space to pixels
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 1, 0.2); // Background
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  // Turn on the attribute
  gl.enableVertexAttribArray(positionAttributeLocation);

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  const size = 2; // 2 components per iteration
  const type = gl.FLOAT; // the data is 32bit floats
  const normalize = false; // don't normalize the data
  const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  let offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

  // Set the resolution
  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

  // draw
  const primitiveType = gl.TRIANGLES;
  offset = 0;
  const count = 3;
  while (offset < positions.length - count - 1) {
    // Set a random color.
    gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);

    // Draw triangle
    gl.drawArrays(primitiveType, offset, count);
    offset += count;
  }
};

main();
