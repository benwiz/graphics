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

Pip packages path.

```bash
/usr/local/Cellar/python@2/2.7.14_3/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages
```

Install pip libraries

```bash
docker run -it -v $(pwd):/home/proj lambci/lambda:build bash

cd /home/proj
export PYTHONPATH=/local/lib/python2.7/site-packages/
easy_install pip
/local/bin/pip install numpy -t libs/
```

Run jekyll site locally

```bash
bundle exec jekyll serve
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
    - start.jpg
    - points.json
    - points.jpg
    - trianges.json
    - triangles.jpg
    - lowpoly.jpg

### UI

- Github pages static site

#### Image Upload

- [Image upload](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html)

#### Results display and download

### Feature Detections

Clojure AWS Lambda function that uses OpenCV to identify key points.

### Partition

Clojure AWS Lambda function that performs Delaunay triangulation given a set of points.

https://docs.oracle.com/javase/7/docs/api/java/awt/Graphics.html#drawLine(int,%20int,%20int,%20int)

### Coloring

Clojure AWS Lambda function that colors each triangle according to some algorithm. For now that is the average color.

## To Do

- UI
  - File upload should be done by clicking on the start image div

### Later

- Replace references to `triangles` with `polygons`. Anything that expects a triangle should be generalized.
- The `lein lambda-api` thing I'm using for `partition` is bloated for a non-api based event.
  - https://medium.com/@jamesleonis/clojure-and-aws-serverless-basic-lambda-201b60183d6d
- Selectable detect features algorithm
- Figure out how to make _clj-detect-features_ small enough for Lambda.
- Handle more extensions. Developed against _.jpg_
- Draw features should really be it's own function.
