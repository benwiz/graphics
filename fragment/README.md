# fragment

## What

Take an image and output a fragmented (low-poly) version. 

## How

It works by using OpenCV's (inside a Python AWS Lambda Function) to detect "key points" then (in a Clojure AWS Lambda Function) connects those key points with delaunay triangulation. Then (in Clojure Lambda function again) it fills each triangle with the average color of the pixels within that triangle.

It works but the images are rarely nice looking. I've used both Canny edge detection and key point detection. Either could probably be good with some more work.

Maybe with the new release of AWS Lambda Layers I can use the Clojure OpenCV library and have it all be in Clojure, which was my original intention.

Used [ghostwriternr/lowpolify](https://github.com/ghostwriternr/lowpolify/blob/master/scripts/lowpolify.py) as a guide for using Canny Detection.

## Getting Started

### docs (UI)

#### Run Locally

```bash
bundle exec jekyll serve
```

#### Deploy

Just push to master branch.

### py-detect-features

Use Python to identify key the features (points) within the image that will be used to partition the image into fragments. I initially tried to use an OpenCV2 wrapper in Clojure but it turned out to be too large for AWS Lambda.

#### Run Locally

Create and activate a Python2 virtualenv in the root dir. For some inexplicable reason I am getting virtualenv errors when trying to create the virtualenv within the `py-detect-features` dir. Nor will `pip install` work within `py-detect-features/`. I have not dug into this issue but it is probably some sort of weird permissions issue on my fresh install of ElementaryOS.

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

NOTE: Requires Java 8

#### Deploy

The `libs` directory is committed to GitHub so should never need to be re-installed. But using Docker to set up the Lambda server environment is important for numpy. Use something like the below.

```bash
docker run -it -v $(pwd):/home/proj lambci/lambda:build bash

cd /home/proj
# export PYTHONPATH=/local/lib/python2.7/site-packages/
easy_install pip
/local/bin/pip install numpy -t libs/
/local/bin/pip install dlib -t libs/
```

Then

```bash
sudo chmod 777 libs/*
```

In `py-detect-features` dir run the following command ensuring that the default aws configs are for my personal aws account.

```bash
./deploy.sh
```

### Partition

#### Run Locally

```bash
lein run
```

#### Deploy

```bash
lein lambda deploy production
```

### Color

#### Run Locally

```bash
lein run
```

#### Deploy

```bash
lein lambda deploy production
```

## Initial Plan

- Pre-process the input image to remove noise and reduce image size (OpenCV)
- Detect edges in the input image (OpenCV)
- If the image contains humans faces, detect facial features as well (DLib)
- Triangulate using Delaunay Triangulation or create a Voronoi diagram
- Fill the ~triangles~ polygons with the mean value of all pixels contained by it (in parallel for faster computation)

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

NOTE: Do not run a `pip freeze`, there is stuff installed on the _venv_ on Marg's Mac I don't want or need

- Now
  - Put an end to this project. The only time I should be touching this project is if I finish `clj-detect-features` using AWS Lambda Layers and get rid of `py-detect-features`.

- Later
  - UI
    - Create and post config file
      - Max point selection
      - Algorithm selection
    - Sort out image rotation (maybe iPhone specific)
    - Handle timeouts correctly (2, 1, 1)
  - Feature detect
    - Consume config file for max number of points
    - Use Numpy arrays
    - Consider adding noise to canny points (maybe other points too, not facial)
  - Partition
    - Voronoi option (pre-requisite: Prepare all services to handle polygons instead of triangles... this is a significant amount of work)
  - Color
    - It appears to never return and always time out
    - Figure out a reasonable number of points to look at (right now, hardcoded to every 10 pixels). Possibly make this configurable.
    - If variance in a polygon is too large, split it into two?
  - Email service
    - New service that will email a link or even the file when coloring is complete if an email was provided
