# fragment

Take an image and output a fragmented (low-poly) version.

Inspired by [this project](https://github.com/ghostwriternr/lowpolify/blob/master/scripts/lowpolify.py).

## Unorganized useful commands (this section to be incorporated into "Getting Started")

Run worker.

```bash
lein run
```

Deploy.

```bash
lein lambda deploy production
```

Run jekyll site locally

```bash
bundle exec jekyll serve
```

## Getting Started

### py-detect-features

Use Python to identify key the features (points) within the image that will be used to partition the image into fragments. I initially tried to use an OpenCV2 wrapper in Clojure but it turned out to be too large for AWS Lambda.

#### Run Locally

Create and activate a Python2 virtualenv in the roobt dir. For some inexplicable reason I am getting virtualenv errors when trying to create the virtualenv within the `py-detect-features` dir. Nor will `pip install` workin `py-detect-features`. I have not dug into this issue but it is probably some sort of weird permissions issue on my fresh install of ElementaryOS.

```bash
virtualenv --python=$(which python2) venv
source venv/bin/activate
```

Install requirements.

```bash
pip install -r requirements.txt
```

or

```bash
pip install boto3 numpy opencv-contrib-python
```

#### Deploy

The `libs` directory is committed to GitHub so should never need to be re-installed. But using Docker to set up the Lambda server environment is important for numpy. Use something like the below.

```bash
docker run -it -v $(pwd):/home/proj lambci/lambda:build bash

cd /home/proj
export PYTHONPATH=/local/lib/python2.7/site-packages/
easy_install pip
/local/bin/pip install numpy -t libs/
```

In `py-detect-features` dir run the following command ensuring that the default aws configs are for my personal aws account.

```bash
./deploy.sh
```

### Partition

#### Run Locally

TODO

#### Deploy

```bash
lein lambda deploy production
```

### Color

#### Run Locally

TODO

#### Deploy

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

### S3 Structure

- lowpoly
  - session id
    - start.jpg
    - points.json
    - points.jpg
    - trianges.json
    - triangles.jpg
    - lowpoly.jpg

## To Do

- UI
  - Create and post config file
  - Sort out image rotation (maybe iPhone specific)
  - Handle timeouts correctly (right now, each step has a 3 min timeout)
- Feature detect
  - Consume config file for radius property
- Color
  - It appears to never return and always time out
  - Faster? Maybe by looking at fewer points. Will need to use logs to measure execution time.

### Later

- Replace references to `triangles` with `polygons`. Anything that expects a triangle should be generalized.
- The `lein lambda-api` thing I'm using for `partition` is bloated for a non-api based event.
  - https://medium.com/@jamesleonis/clojure-and-aws-serverless-basic-lambda-201b60183d6d
- Selectable detect features algorithm
- Figure out how to make _clj-detect-features_ small enough for Lambda.
- Handle more extensions. Developed against _.jpg_.
- Implement other partitioning algorithms like Voronio Diagrams
