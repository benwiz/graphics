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

## Initial Plan

- Pre-process the input image to remove noise and reduce image size (OpenCV)
- Detect edges in the input image (OpenCV)
- If the image contains humans faces, detect facial features as well (DLib)
- Choose a random subset of the above detected points / edges
- Triangulate using Delaunay Triangulation
- Fill the triangles with the mean value of all pixels contained by it (in parallel for faster computation)

## Parts

### UI

#### Image Upload

- Github pages static site
- [Image upload](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html)

### Feature Detections

Clojure AWS Lambda function that uses OpenCV to identify key points.

### Delauney Triangulation

Go? Clojure?

### Coloring

Go? Clojure? Python?

## To Do

- Image upload
- Get OpenCV working on Lambda
