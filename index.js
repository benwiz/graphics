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
  return null;
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

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
  return null;
};

// Returns a random integer from 0 to range - 1.
const randomInt = range => Math.floor(Math.random() * range);

// Fill the buffer with the values that define a rectangle.
const setRectangle = (gl, x, y, width, height) => {
  const x1 = x;
  const x2 = x + width;
  const y1 = y;
  const y2 = y + height;
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]),
    gl.STATIC_DRAW,
  );
};

// Main funciton
const main = async () => {
  //
  // Initialization.
  //

  // Get A WebGL context
  const canvas = document.getElementById('c');
  const gl = canvas.getContext('webgl');
  if (!gl) {
    return;
  }

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

  // Look up where the vertex data needs to go.
  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');

  // look up uniform locations
  const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
  const colorUniformLocation = gl.getUniformLocation(program, 'u_color');

  // Create a buffer and put three 2d clip space points in it
  const positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Three 2d points
  const positions = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  //
  // Rendering.
  //

  // Make the number of pixels in the canvas match the size it's displayed
  webglUtils.resizeCanvasToDisplaySize(gl.canvas);

  // Tell WebGL how to convert from clip space to pixels
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 1, 0.01); // Background color
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  // Turn on the attribute
  gl.enableVertexAttribArray(positionAttributeLocation);

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  const size = 2; // 2 components per iteration (since the shader is expecting vec4, the latter 2 properties default to 0 and 1)
  const type = gl.FLOAT; // the data is 32bit floats
  const normalize = false; // don't normalize the data
  const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  const offset = 0; // start at the beginning of the buffer

  // A hidden part of gl.vertexAttribPointer is that it binds the current
  // ARRAY_BUFFER to the attribute. In other words now this attribute is bound
  // to positionBuffer. That means we're free to bind something else to the
  // ARRAY_BUFFER bind point. The attribute will continue to use positionBuffer.
  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

  // Set the resolution
  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

  // Draw 50 random rectangles in random colors
  for (let i = 0; i < 50; i++) {
    // Setup a random rectangle. This will write to positionBuffer because
    // its the last thing we bound on the ARRAY_BUFFER bind point.
    setRectangle(
      gl,
      randomInt(canvas.width),
      randomInt(canvas.height),
      randomInt(canvas.width),
      randomInt(canvas.height),
    );

    // Set a random color.
    gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);

    // Draw the rectangle.
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
};

main();
