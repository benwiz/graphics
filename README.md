# squiggle

Create my first ClojureScript website. Using [Quil](http://quil.info) which is build on [Processing](https://processing.org/).

## Squiggles

### Ten Print Remake

Copy of [this example](http://quil.info/sketches/local/c8a0c07b009b4f5d29e5a30e444ffc741fd99ccef22598ddc78bf0f5ca8571af) without looking at the examples code.

### Solar System

I initially wanted to make it scientifically accurate. But the scale of the orbits and size of the sun and outer planets made that not feasible for a small (300 x 300) canvas. I ended up just doing what looked good instead for size and orbit. Angular velocity is accurate.

### Conway's Game of Life

[Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of
square "cells", each of which is in one of two possible states, alive or dead,
(or "populated" and "unpopulated" respectively). Every cell interacts with its eight
neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.
At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbors dies, as if caused by under population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by
applying the above rules simultaneously to every cell in the seed—births and deaths occur
simultaneously, and the discrete moment at which this happens is sometimes called a tick
(in other words, each generation is a pure function of the preceding one). The rules continue
to be applied repeatedly to create further generations.

### Tentacles

A paintbrush that kind of looks like a tentacle. Paths can be improved by calculating a curve then accessing points along the curve.

### Pointillism

Draw dots based on color of pixel.

### Primitive

https://github.com/fogleman/primitive

The algorithm tries to find the single most optimal shape that can be drawn to minimize the error between the target image and the drawn image. It repeats this process, adding one shape at a time. Around 50 to 200 shapes are needed to reach a result that is recognizable yet artistic and abstract.

## Notes

Dev

```bash
lein figwheel
```

Build for prod

```bash
lein cljsbuild once optimized
```

https://www.openprocessing.org

## Ideas

- Flashing, twinkling shapes
- Constellations, if I can find a dataset. Or just an explorable map of the sky with constellation lines as a bonus.
- Beating heart / heart beat from hospital. Ideally use real data.
- Tree creation
- Twisting rotating shapes, like the loading scene on https://devart.withgoogle.com/
- Flapping butterfly
- Piece created by listening to music then display it with Spotify play button
- Swimming squid
- Particle clock
- https://www.openprocessing.org/sketch/427308 (press button)

## To Do

- Now
  - Delaunay Monsters
    - Monster construct
      - Monster must have overall angle of movement
      - Overall health of monster needs to be considered. Each monster's life is finite, do not spawn infinite points. Do spawn infinite monsters.
      - Multiple monsters

- Next
  - Stretch Pixels
    - Figure out how to draw once
    - https://www.behance.net/gallery/65894481/-color_palettesjpg

- Later
  - Tentacles
    - Improve path
    - Improve colors
  - Ten Print Remake
    - Hue list should turn into a HSV list so that better color scheme can be selected
  - Website
    - Create header and subtitle
    - Create nice looking layout for the website – keep it very basic
  - Game of Life
    - Allow user to input start state or select from a few options
  - Pointillism
    - Consider stop updating at a max iterations
  - Primitive
    - Try all locations, orientations, sizes, colors for a rectangle
    - Measure mse for each
    - Select that with the lowest mse
    - Possible to draw with alpha channel for transparency?
