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

- Two types of results
    - Results reminiscent of great artists
    - Totally abstract results
    - Remember, both the drawer and over/underfitting the model will impact the results

## Notes

- An essentially identical project I came across https://affinelayer.com/pixsrv/ which is based on https://phillipi.github.io/pix2pix/ 
    - implementation https://github.com/affinelayer/pix2pix-tensorflow/blob/master/pix2pix.py
    - I'd like to focus more on creating art than

## To Do

- Try to reduce the bundle size... maybe switch back to local p5.min.js or figure out how to access the min file in npm package
- Improve the UX and make it pretty
    - Include model selection
    - Need better signalling for "thinking" time
    - Use my own default image, not `images/pikachu.png`

- Next
    - FYI: The pre-trained Edges2Pikachu model is trained on 256x256 images. So the input images can only be 256x256 or 512x512, or multiple of 256.
    - Find more pre-trained models and add them to the website
    - Make the website pretty
    - Try to train my own models
        - I may need to hire an nVidia GPU
    - Consider if/when it will be worth it to offer a "purchase" feature

- Later
    - It really should be very easy to remove p5.js entirely and just use canvas, but it's probably not worth the effort
