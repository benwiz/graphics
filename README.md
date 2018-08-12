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

Zip.

```bash
zip -r9 py-detect-features.zip *
```

Run jekyll site locally

```bash
bundle exec jekyll serve
```

## Getting Started

### py-detect-features

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

I had the following notes about install AWS Lambda compatible packages. Fortunately, I have committed these packages to github so I should not have to deal with them again.

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

#### Deploy

TODO

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

### Feature Detection

~~Clojure AWS Lambda function that uses OpenCV to identify key points.~~

The clojure OpenCV library I was using was too large for Lambda functions. I've switched to Python2.

### Partition

Clojure AWS Lambda function that performs Delaunay triangulation given a set of points.

https://docs.oracle.com/javase/7/docs/api/java/awt/Graphics.html#drawLine(int,%20int,%20int,%20int)

### Color

Clojure AWS Lambda function that colors each triangle according to some algorithm. For now that is the average color.

## To Do

- UI
  - Create and post config file
  - Sort out image rotation (maybe iPhone specific)
  - Handle timeouts correctly (right now, each step has a 3 min timeout)
- Feature detect
  - Consume config file for radius property
  - Try different algorithms
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
