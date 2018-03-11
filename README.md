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

Zip.

```bash
zip -r9 py-detect-features.zip *
```

## Initial Plan

- Pre-process the input image to remove noise and reduce image size (OpenCV)
- Detect edges in the input image (OpenCV)
- If the image contains humans faces, detect facial features as well (DLib)
- Choose a random subset of the above detected points / edges
- Triangulate using Delaunay Triangulation
- Fill the triangles with the mean value of all pixels contained by it (in parallel for faster computation)

## Parts

### S3 Structure

- lowpoly
  - session id
    - start.png
    - points.json
    - points.png
    - trianges.json
    - triangles.png
    - lowpoly.png

### UI

- Github pages static site

#### Image Upload

- [Image upload](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html)

#### Results display and download

### Feature Detections

Clojure AWS Lambda function that uses OpenCV to identify key points.

### Delaunay Triangulation

Clojure AWS Lambda function that performs Delaunay triangulation given a set of points.

### Coloring

Go? Clojure? Python?

## To Do

- Calculate trianges
- Write to S3 in JSON file (human readable, ideally)

### Later

- Figure out how to make _clj-detect-features_ small enough for Lambda.
