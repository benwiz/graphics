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

- Find another pre-trained pix2pix model and save it locally
- Improve the UX and make it pretty
    - Use my own default image, not `images/pikachu.png`
    - Include model selection
    - Need better signalling for "thinking" time

- Next
    - FYI: The pre-trained Edges2Pikachu model is trained on 256x256 images. So the input images can only be 256x256 or 512x512, or multiple of 256.
    - Find more pre-trained models and add them to the website
    - Make the website pretty
    - Try to train my own models
    - Consider if/when it will be worth it to offer a "purchase" feature

- Later
    - It really should be very easy to remove p5.js entirely and just use canvas, but it's probably not worth the effort