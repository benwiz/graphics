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

## To Do

- download_images_from_url.sh
  - How to handle bad data like the flickr images? Maybe manually curate a list and store in S3.
- get_edges.py
  - optimize edge detection
- sort_data.sh
- run.sh must ensure every step of the way is success or exit on error
- train_edges2mountains... maybe make this a docker image and teach dad to `docker run benwiz/pix2pix-edges2mountains`

- Create a docker file that will call `cd ./training/ && ./scripts/run.sh` which will download data then

- Read training guide https://affinelayer.com/pix2pix/ in full

- Later
  - README, blog post
  - Get clever 
    - Maybe hold a handdrawn sketch up to webcam and it takes photo
    - Maybe keep experimenting but stop using edges
    - Style can be broad: "all art between 1100 and 1800" or specific "Van Gogh"
  - Compile tensorflow to use CPU better


docker run -it --rm tensorflow/tensorflow python -c "import tensorflow as tf; tf.enable_eager_execution(); print(tf.reduce_sum(tf.random_normal([1000, 1000])))"
