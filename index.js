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

const randomInt = range => Math.floor(Math.random() * range);

const createPositions = (gl, n) => {
  // To begin, create n random triangles. My goal is to create a plane of multi
  // colored triangles.

  const positions = [
    randomInt(gl.canvas.width),
    randomInt(gl.canvas.height),
    randomInt(gl.canvas.width),
    randomInt(gl.canvas.height),
    randomInt(gl.canvas.width),
    randomInt(gl.canvas.height),
  ];

  for (let i = 1; i < n; i++) {
    const x1 = positions[positions.length - 4];
    const y1 = positions[positions.length - 3];
    const x2 = positions[positions.length - 2];
    const y2 = positions[positions.length - 1];
    const x3 = randomInt(gl.canvas.width);
    const y3 = randomInt(gl.canvas.height);
    positions.push(x1);
    positions.push(y1);
    positions.push(x2);
    positions.push(y2);
    positions.push(x3);
    positions.push(y3);
  }

  console.log(positions);
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
    console.log(offset);
    gl.drawArrays(primitiveType, offset, count);
    offset += count;
  }
};

main();
