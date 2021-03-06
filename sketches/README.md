# Sketches

This is a repository to keep my standalone 2D and 3D drawings. I am using [canvas-sketch](https://github.com/mattdesl/canvas-sketch) which is a sort of boilerplate tool for projects using canvas, p5.js, and three.js. The reason I am choosing to use `canvas-sketch` is so that I spend more time focusing on development of the creative piece rather than the infrastructure surrounding.

Projects that are standalone drawings where only a still image, gif, or video is expected as output are good projects. Early experiments and prototyping are also good for this repo.

## File Structure

Each sketch will have a directory in `src/`. The main script file will always be called `index.js`.

## NPM Scripts

Create a new sketch with the given sketch name. Options for template name are: `default` (canvas), `p5`, `three`, `regl`, and `penplot`. You may also point to your own template file instead of one of the previously mentioned key words.

```sh
npm run new SKETCH_NAME TEMPLATE_NAME
```

Run an existing sketch

```sh
npm run start SKETCH_NAME
```

Run an existing sketch with hot reloading

```sh
npm run hot SKETCH_NAME
```

Build the sketch into an html and js file

```sh
npm run build SKETCH_NAME
```

Run the built html and js on a webserver

```sh
npm run server SKETCH_NAME
```

Build a gif from files inside the `~/Downloads/` folder. First agument is `sketch-name`, second argument is `output-filename` (without extension), third agument is `fps` for the gif.

```sh
npm run gif blinking-eyeballs 2 24
```

## To Do

- spotify-track-analysis-grid
  - curve-landscape.js
    - Use pitch or something else to affect the quality of the line. Idk what the "quality of the line" actually means. Dashed and dotted are the familiar basics.
    - Maybe I need some sort of config to modify the timbre multipliers (and whatever else)
  - WEIRD IDEA: Maybe I could constrain the lines to be within a shape... so the lines could be inside the shape of a dog or state
  - AFTER HAVING SOMETHING ON THE WALL: Make it draw along with the song by creating a new github project just for this and hook up to spotify. Select song, pull json api, display result, allow user to click play and the song will play and their device and draw out the song in time.

- Create a customized html template (don't start from scratch but copy an already built example)
  - Needs dropdown or radio buttons to select between functions
  - Maybe a refresh button
  - Maybe a save button

- Later
  - Figure out if I can speed up the reloading during development
  - Contribute to canvas-sketch repo... maybe tackle a simple issue

- Frozen / stalled / lost interest
  - scales
    - Spirals
    - Other noise based graphics or designs... not necessarily constrained to ellipses and circles
    - Maybe I can actually make rainbow fish by doing more advanced constraints
      - Maybe I could even take an edge drawing, use canny edge detection, and use the resulting edges as border constraints... or just a svg. Maybe its easiest to create a svg using Gimp.
  - animated-scales
    - hypnotic evil eye
    - pointilism spiral hypnotic evil eye
    - wavy concentric circles
      - Consider using rough.js?
  - blinking-eyeballs
    - Optimize the pause
  - wet-and-sharp
    - Look into more abstract reflections (check out out/cool-bug.png)
  - river-walk
    - Create initial walk algorithm. Data should be randomly generated during preload. Later data can be manually gathered from spotify and read in from a json file.
  - noisy-shapes
    - rough.js implementation
      - Once `roughShapesMirror()` is mostly done, copy it and make `roughShapesMirrorTetris()` using tetris shapes. It could be animated.
      - Consider a sketch where there is a box. Inside the box use high roughness, outside use low roughness. Representing chaotic inside and calm outside.
      - Consider an animation because the roughness is a sort of randomness
    - custom implementation
