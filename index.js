/* global webglUtils:readable */

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

const distance = (point1, point2) => {
  // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
  const x1 = point1.x;
  const y1 = point1.y;
  const x2 = point2.x;
  const y2 = point2.y;
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return dist;
};

const createPoints = (gl, n) => {
  const points = [];
  for (let i = 0; i < n; i++) {
    const point = {
      x: randomInt(0, gl.canvas.width),
      y: randomInt(0, gl.canvas.height),
    };
    points.push(point);
  }
  return points;
};

const createTriangles = (points) => {
  // This is implemented extremely naively and inneficiently. Using Delaunay
  // triangulation is probably the best method.
  //
  // Here, I find the two nearest points to the current point and call that a
  // triangle. I may need to dedupelicate later which will require sorting the
  // vertices within the triangle.
  //
  const triangles = [];

  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    // Find the first nearest poit
    let nearestPointA = { x: Infinity, y: Infinity };
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const testPoint = points[j];
      const testDist = distance(point, testPoint);
      const dist = distance(point, nearestPointA);
      if (testDist < dist) {
        nearestPointA = testPoint;
      }
    }

    // Find the second nearest poit
    let nearestPointB = { x: Infinity, y: Infinity };
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const testPoint = points[j];
      if (testPoint === nearestPointA) continue;
      const testDist = distance(point, testPoint);
      const dist = distance(point, nearestPointB);
      if (testDist < dist) {
        nearestPointB = testPoint;
      }
    }

    // Form the triangle (TODO: the points should be sorted by distance from origin for future deduplicating)
    const triangle = [point, nearestPointA, nearestPointB];
    triangles.push(triangle);
  }

  console.log('triangles:', triangles);
  return triangles;
};

const createPositions = (gl, n) => {
  // First, randomly generate n points. Some points should exist outside the
  // bounds of the canvas.
  const points = createPoints(gl, n);

  // Second, generate triangles using those points
  const triangles = createTriangles(points);

  // Third, concatenate a list of all triangles so into the positions list
  const positions = [];
  for (let i = 0; i < triangles.length; i++) {
    const triangle = triangles[i];
    for (let j = 0; j < triangle.length; j++) {
      const point = triangle[j];
      positions.push(point.x);
      positions.push(point.y);
    }
  }

  // //
  // // Hardcode positions
  // //
  // const positions = [25, 43, 236, 67, 50, 300];

  // Return positions list
  console.log('positions:', positions);
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
  const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');

  // Create a buffer and put three 2d clip space points in it
  const positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = createPositions(gl, 3);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  //
  // Rendering.
  //

  webglUtils.resizeCanvasToDisplaySize(gl.canvas);

  // Tell WebGL how to convert from clip space to pixels
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
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
  while (offset < positions.length - count) {
    gl.drawArrays(primitiveType, offset, count);
    offset += count;
  }
};

main();
