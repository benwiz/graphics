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

## Things to remember

- For a while, do my best to not create a custom template. Focus on the content... or maybe not.
- Use dat.gui for easy configs

## Ideas

- Balloons (or hot air balloons) rising
  - Use a physics engine (matter.js?) to make them pop. I think they'll need to be made up of lines or particles to pop correctly... probably just lines will do fine.

## To Do

- blinking-eyeballs
  - Create a pause before the next blink
  - Create a gif with a full screen of eyeballs (about 4000)
    - Create an npm script for `../../node_modules/.bin/canvas-sketch-gif ~/Downloads/ output/2.gif --fps=24`
  - look into using a shader then try using an already built fur shader
  - try creating my own shader using GLSL

- wet-and-sharp
  - Look into more abstract reflections (check out out/cool-bug.png)

- Create a customized html template (don't start from scratch but copy an already built example)
  - Needs dropdown or radio buttons to select between functions
  - Maybe a refresh button
  - Maybe a save button

- Later
  - Figure out if I can speed up the reloading
  - Contribute to canvas-sketch repo... maybe tackle a simple issue

- Frozen / stalled / lost interest
  - scales
    - Spirals
    - Other noise based graphics or designs... not necessarily constrained to ellipses and circles
    - Maybe I can actually make rainbow fish by doing more advanced constraints
      - Maybe I could even take an edge drawing, use canny edge detection, and use the resulting edges as border constraints... or just a svg. Maybe its easiest to create a svg using Gimp.
