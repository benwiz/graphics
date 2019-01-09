// import * as P5Dom from '../../vendor/js/p5.dom.min';
import * as ML5 from '../../vendor/js/ml5.min'; // TODO: Try to use npm if I can use the minified file

const SIZE = 256;

const sketch = (p5) => {
  let pix2pix;
  let clearBtn;
  let transferBtn;
  let modelReady = false;
  let isTransfering = false;

  // Draw the input image to the canvas
  const drawImage = (img) => {
    p5.image(img, 0, 0);
  };

  // Clear the canvas
  const clearCanvas = () => {
    p5.background(255);
  };

  const transfer = () => {
    // Set isTransfering to true
    isTransfering = true;

    // Update status message
    const statusMessage = document.querySelector('#status');
    statusMessage.innerHTML = 'Applying Style Transfer...!';

    // Select canvas DOM element
    const canvasElement = document.querySelector('canvas'); // .elt;

    // Apply pix2pix transformation
    pix2pix.transfer(canvasElement, (err, result) => {
      if (err) {
        console.log('err:', err);
        console.log('exit because error.');
        return;
      }

      if (result && result.src) {
        // Set isTransfering back to false
        isTransfering = false;
        // Update the output img src
        const img = document.querySelector('#output img');
        img.src = result.src;
        // Show 'Done!' message
        statusMessage.innerHTML = 'Done!';
      }
    });
  };

  // A function to be called when the models have loaded
  const modelLoaded = () => {
    console.log('model loaded');

    // Show 'Model Loaded!' message
    const statusMessage = document.querySelector('#status');
    statusMessage.innerHTML = 'Model Loaded!';

    // Set modelReady to true
    modelReady = true;

    // Call transfer function after the model is loaded
    transfer();

    // Attach a click event to the transfer button
    transferBtn.addEventListener('click', () => {
      transfer();
    });
  };

  // When mouse is released, transfer the current image if the model is loaded and it's not in the process of another transformation
  p5.mouseReleased = () => {
    if (modelReady && !isTransfering) {
      transfer();
    }
  };

  //
  // Setup and Draw functions
  //

  p5.setup = () => {
    console.log('setup');

    // Create a canvas
    const inputCanvas = p5.createCanvas(SIZE, SIZE);
    inputCanvas.class('border-box').parent('canvasContainer');

    // Display initial input image
    // TODO: Use my own default image
    p5.loadImage('images/pikachu.png', drawImage);

    // Select 'transfer' button html element
    transferBtn = document.querySelector('#transferBtn');

    // Select 'clear' button html element then assign click event.
    clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click', () => {
      console.log('clear');
      clearCanvas();
    });

    // Set stroke to black
    p5.stroke(0);
    p5.pixelDensity(1);

    // Create a pix2pix method with a pre-trained model
    pix2pix = ML5.pix2pix(
      'https://rawgit.com/ml5js/pix2pix_models/master/edges2pikachu_AtoB.pict',
      modelLoaded,
    );
  };

  // Draw on the canvas when mouse is pressed
  p5.draw = () => {
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };
};

export default sketch;
