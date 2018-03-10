# lowpoly

Take an image and output a low-poly version.

Inspired by [this project](https://github.com/ghostwriternr/lowpolify/blob/master/scripts/lowpolify.py).

[OpenCV clojure tutorial](https://docs.opencv.org/3.1.0/d7/d1e/tutorial_clojure_dev_intro.html)

## Useful commands

Run worker.

```bash
lein run
```

Deploy.

```bash
lein lambda deploy production
```

## How

- Pre-process the input image to remove noise and reduce image size (OpenCV 2)
- Detect edges in the input image (OpenCV 2)
- If the image contains humans faces, detect facial features as well (DLib)
- Choose a random subset of the above detected points / edges
- Triangulate using Delaunay Triangulation
- Fill the triangles with the mean value of all pixels contained by it (in parallel for faster computation)

## To Do

- Decide language. Considering Go, Clojure, or C. Leaning toward C.
