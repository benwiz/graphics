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

## To Do

- Pokeballs
- Monsters
