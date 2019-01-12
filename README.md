# art-warp

Make a bad drawing and turn it into a nice painting reminiscent of a selected artist using 

## How to Run

```sh
npm install
```

```sh
npm run webpack
```

```sh
npm start
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

## To Do

- Read training guide https://affinelayer.com/pix2pix/ in full
- Collect and preprocess training data https://commons.wikimedia.org/wiki/Category:Impressionist_paintings
- Try to run a very small batch of training

- Later
  - Get clever 
    - Maybe hold a handdrawn sketch up to webcam and it takes photo
    - Maybe keep experimenting but stop using edges
    - Style can be broad: "all art between 1100 and 1800" or specific "Van Gogh"
