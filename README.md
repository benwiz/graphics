# art-warp

Make a bad drawing and turn it into a nice painting reminiscent of a selected artist using 

## How to Run Webserver

```sh
npm install
```

```sh
npm run webpack
```

```sh
npm start
```

## How to Train

### Preparing the data

Before getting started, create a Python3 virtualenv and install the requirements. Specifically this is OpenCV and Numpy. Also enter the training directory. It is also helpful to set the `MODEL_NAME` variable.

```sh
venv
cd training/
MODEL_NAME=edges2mountains
```

1. Download the image-net training data. Optionally pass in `--dry-run` as the second argument to download only 10 images.

```sh
./scripts/download_images_from_url.sh $MODEL_NAME --dry-run
```

2. Detect the edges on the recently downloaded pictures. First ensure the directory exists and is empty. Any bad files will be skipped.

```sh
mkdir -p ./$MODEL_NAME/data/ && rm -f ./$MODEL_NAME/data/*
python3 ./scripts/get_edges.py $MODEL_NAME
```

3. Manually look through all the files in `./$MODEL_NAME/data/*` and delete any images that are bad for training. Suck as Flickr error screens.

```sh
open ./$MODEL_NAME/data/
```

4. Sort the data into train, test, and validation sets


```sh
./scripts/sort_data.sh $MODEL_NAME
```

5. Upload the data to S3.

```sh
./scripts/upload_data.sh edges2mountains
```

### Training the model

TODO

## First Brainstorm

- A website
- User selects a pretrained pix2pix model in the style of a famous artist (or any artist with a large quantity of available target data)
- User draws a simple black-and-white picture with the mouse
  - Later iterations can be optimized for and include color drawing, multiple pen sizes, photo uploads, and more
- Start with Pikachu ml5.js example
- Learn to train my own models either using ml5.js or Tensorflow directly. Ideally use Tensorflow directly.
  - Thoughts about training
  - I will have to create the inputs. Maybe the simplest way to get started is to use OpenCV to detect edges.

- Two types of results
  - Results reminiscent of great artists
  - Totally abstract results
  - Remember, both the drawer and over/underfitting the model will impact the results

## Notes

- An essentially identical project I came across https://affinelayer.com/pixsrv/ which is based on https://phillipi.github.io/pix2pix/ 
  - implementation https://github.com/affinelayer/pix2pix-tensorflow/blob/master/pix2pix.py
  - An original? https://ml4a.github.io/guides/Pix2Pix/
- The pre-trained Edges2Pikachu model is trained on 256x256 images. So the input images can only be 256x256 or 512x512, or multiple of 256.

- The pip tensorflow is not optimized for this CPU. I can improve training speed by building Tensorflow myself. https://bazel.build/

### How to Train using pix2pix

In `~/code/pix2pix-tensorflow/` run

```sh
docker run -it --rm -v $PWD:/tmp -w /tmp tensorflow/tensorflow bash
```

Train the model

```sh
python pix2pix.py --mode train --output_dir facades_train --max_epochs 200 --input_dir facades/train --which_direction BtoA
```

Test the model

```sh
python pix2pix.py --mode test --output_dir facades_test --input_dir facades/val --checkpoint facades_train
```

## To Do

- Read training guide https://affinelayer.com/pix2pix/ in full

- upload_data.sh
  - Need a script that will upload the results of get_data.sh to 
- Easy-to-use `docker run` command for training.
  - I am expecting two different Docker images. One for CPU and one for GPU. The command should look something like `docker run benwiz/art-warp-training-cpu edges2mountains`.

- Later
  - README, blog post
  - Get clever 
    - Maybe hold a handdrawn sketch up to webcam and it takes photo
    - Maybe keep experimenting but stop using edges
    - Style can be broad: "all art between 1100 and 1800" or specific "Van Gogh"
  - Compile tensorflow to use CPU better


docker run -it --rm tensorflow/tensorflow python -c "import tensorflow as tf; tf.enable_eager_execution(); print(tf.reduce_sum(tf.random_normal([1000, 1000])))"
