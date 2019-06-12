// Fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
precision mediump float;

// Color vector
uniform vec4 u_color;

void main() {
  // gl_FragColor is a special variable a fragment shader
  gl_FragColor = vec4(1, 0, 0.5, 1); // u_color;
}
