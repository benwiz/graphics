// import * as P5Dom from '../../vendor/js/p5.dom.min';
import * as ML5 from '../../vendor/js/ml5.min'; // TODO: Try to use npm if I can use the minified file

const SIZE = 256;

const sketch = (p5) => {
  let pix2pix;
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
    statusMessage.innerHTML = 'Applying Style Transfer...';

    // Select canvas DOM element
    const canvasElement = document.querySelector('canvas'); // .elt;

    // TODO: Disable select

    // Apply pix2pix transformation
    pix2pix.transfer(canvasElement, (err, result) => {
      if (err) {
        console.error('error:', err);
        return;
      }

      if (result && result.src) {
        // Set isTransfering back to false
        isTransfering = false;
        // Update the output img src
        const img = document.querySelector('#output img');
        img.src = result.src;
        // Show 'Done!' message
        statusMessage.innerHTML = 'Transfer complete!';

        // TODO: Enable select
      }
    });
  };

  // A function to be called when the models have loaded
  const modelLoaded = () => {
    // Update status message
    const statusMessage = document.querySelector('#status');
    statusMessage.innerHTML = 'Model Loaded';

    // Set modelReady to true
    modelReady = true;

    // Call transfer function after the model is loaded
    transfer();

    // Unhide and set click event to clearButton
    const clearButton = document.querySelector('#clearButton');
    clearButton.removeAttribute('hidden');
    clearButton.addEventListener('click', clearCanvas);

    // // Unhide and set click event to transferButton
    // const transferButton = document.querySelector('#transferButton');
    // transferButton.removeAttribute('hidden');
    // transferButton.addEventListener('click', transfer);

    // Enable the model selector
    const select = document.querySelector('#container select');
    select.removeAttribute('disabled');
  };

  // When mouse is released, transfer the current image if the model is loaded and it's not in the
  // process of another transformation
  p5.mouseReleased = () => {
    if (modelReady && !isTransfering) {
      transfer();
    }
  };

  //
  // Setup and Draw functions
  //

  p5.setup = () => {
    // Create a canvas
    const inputCanvas = p5.createCanvas(SIZE, SIZE);
    inputCanvas.class('border-box').parent('canvasContainer');

    // Display initial input image
    // TODO: Use my own default image
    p5.loadImage('images/pikachu1.png', drawImage);

    // Set stroke to black
    p5.stroke(0);
    p5.pixelDensity(1);

    // Update status message
    const statusMessage = document.querySelector('#status');
    statusMessage.innerHTML = 'Downloading model...';

    // Create a pix2pix method with a pre-trained model
    let modelPath = './models/edges2pikachu.pict';
    pix2pix = ML5.pix2pix(modelPath, modelLoaded);

    // NOTE: There is a lot of code repetition, this needs to be cleaned up.
    // Initialize the select element for picking a model
    const select = document.querySelector('#container select');
    select.addEventListener('change', (event) => {
      // Disable
      select.setAttribute('disabled', null);

      // Update status message
      statusMessage.innerHTML = 'Downloading model...';

      // Create a pix2pix method with a pre-trained model
      const modelName = event.target.value;
      console.log('modelName:', modelName);
      modelPath = `./models/${modelName}.pict`;
      pix2pix = ML5.pix2pix(modelPath, modelLoaded);

      // Transfer the drawing
      transfer();
    });
  };

  p5.draw = () => {
    if (p5.mouseIsPressed && modelLoaded && !isTransfering) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };
};

export default sketch;
