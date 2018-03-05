# lowpoly

Take an image and output a low-poly version.

Inspired by https://github.com/ghostwriternr/lowpolify

## How

- Pre-process the input image to remove noise and reduce image size
- Detect edges in the input image
- If the image contains humans faces, detect facial features as well
- Choose a random subset of the above detected points / edges
- Triangulate using Delaunay Triangulation
- Fill the triangles with the mean value of all pixels contained by it (in parallel for faster computation)

# To Do

- Decide language. Considering Go, Clojure, or C.
