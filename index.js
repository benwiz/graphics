/* global webglUtils:readable */

const createShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
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

const main = async () => {
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

  // Create a buffer and put three 2d clip space points in it
  const positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Three 2d points
  const positions = [0, 0, 0, 0.5, 0.7, 0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // code above this line is initialization code.
  // code below this line is rendering code.

  // webglUtils.resizeCanvasToDisplaySize(gl.canvas);

  // // Tell WebGL how to convert from clip space to pixels
  // gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // // Clear the canvas
  // gl.clearColor(0, 0, 0, 0);
  // gl.clear(gl.COLOR_BUFFER_BIT);

  // // Tell it to use our program (pair of shaders)
  // gl.useProgram(program);

  // // Turn on the attribute
  // gl.enableVertexAttribArray(positionAttributeLocation);

  // // Bind the position buffer.
  // gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  // const size = 2; // 2 components per iteration
  // const type = gl.FLOAT; // the data is 32bit floats
  // const normalize = false; // don't normalize the data
  // const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  // var offset = 0; // start at the beginning of the buffer
  // gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

  // // draw
  // const primitiveType = gl.TRIANGLES;
  // var offset = 0;
  // const count = 3;
  // gl.drawArrays(primitiveType, offset, count);
};

main();
