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

## Things to remember

- For a while, do my best to not create a custom template. Focus on the content... or maybe not.
- Use dat.gui for easy configs

## Ideas

- Connect some circles with others with lines or triangles
  - Make the resulting sections colored in some way
- Make them look like eyes
  - Evil eyes
- Balloons (or hot air balloons) rising
  - Use a physics engine (matter.js?) to make them pop. I think they'll need to be made up of lines or particles to pop correctly... probably just lines will do fine.

## To Do

- Reimplement: Stacked Discs: https://www.instagram.com/p/BtBNnoinZwu/
  - Maybe have a class or a file that contains the functions that make the different designed discs. Start off using his then customize.
  - Having an issue importing noise lib inside disc.js

- Later
  - Customize the HTML template... don't create it from scratch but use what exists as a starting point
  - Figure out if I can speed up the reloading
