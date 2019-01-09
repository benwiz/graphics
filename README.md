# art-warp

Make a bad drawing and turn it into a nice painting reminiscent of a selected artist using 

## First Brainstorm

- A website
- User selects a pretrained pix2pix model in the style of a famous artist (or any artist with a large quantity of available target data)
- User draws a simple black-and-white picture with the mouse
  - Later iterations can be optimized for and include color drawing, multiple pen sizes, photo uploads, and more
- Start with Pikachu ml5.js example
- Learn to train my own models either using ml5.js or Tensorflow directly. Ideally use Tensorflow directly.
  - Thoughts about training
    - I will have to create the inputs. Maybe the simplest way to get started is to use OpenCV to detect edges.

## To Do

- Create a rudimentary website based off ml5js pix2pix Pikachu example
    - Need to rewrite it entirely in my own style after proving it works.
    - Probably even before proving it works
- Find another pre-trained pix2pix model
- Use the new pix2pix model and implement the feature in the website for the user to select the desired model
- Find more pre-trained models and add them to the website
- Make the website pretty
- Try to train my own models
- Consider if/when it will be worth it to offer a "purchase" feature