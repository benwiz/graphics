# squiggle

Create my first ClojureScript website and learn to use http://quil.info

## Squiggles

### Ten Print Remake

Copy of [this example](http://quil.info/sketches/local/c8a0c07b009b4f5d29e5a30e444ffc741fd99ccef22598ddc78bf0f5ca8571af) without looking at the examples code.

### Solar System

I initially wanted to make it scientifically accurate. But the scale of the orbits and size of the sun and outer planets made that not feasible for a small (300 x 300) canvas. I ended up just doing what looked good instead for size and orbit. Angular velocity is accurate.

## Notes

Dev

```bash
lein figwheel
```

Build for prod

```bash
lein cljsbuild once optimized
```

## Ideas

- Flashing, twinkling shapes
- Constellations, if I can find a dataset

## To Do

- Now
  - Game of Life
    - Draw the current state
    - Update the state
    - Allow user to input start state or select from a few options

- Next
  - Create header and subtitle
  - Create nice looking format

- Later
  - Piece created by listening to music then display it with Spotify play button
  - Swimming squid
