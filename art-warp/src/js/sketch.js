import * as ML5 from '../../vendor/js/ml5.min';

const SIZE = 256;

const sketch = (p5) => {
  let pix2pix;
  let modelReady = false;
  let isTransfering = false;

  // Draw the input image to the canvas
  const drawImage = (img) => {
    p5.image(img, 0, 0);
  };

  const transfer = () => {
    // Set isTransfering to true
    isTransfering = true;

    // Update status message
    const statusMessage = document.querySelector('#status');
    const message =
      'Crete a drawing in the left box and the computer will respond with its own drawing';
    statusMessage.innerHTML = message;

    // Select canvas DOM element
    const canvasElement = document.querySelector('canvas'); // .elt;

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
        statusMessage.innerHTML = message;
      }
    });
  };

  // Clear the canvas
  const clearCanvas = (event) => {
    p5.background(255);
    transfer();
    event.target.blur();
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

    // Enable and set click event to clearButton
    const clearButton = document.querySelector('#clearButton');
    clearButton.removeAttribute('disabled');
    clearButton.addEventListener('click', clearCanvas);

    // Enable radio buttons
    const radioButtons = document.querySelectorAll('#container .mdc-radio');
    radioButtons.forEach((rb) => {
      rb.classList.remove('mdc-radio--disabled');
      const i = rb.querySelector('input');
      i.removeAttribute('disabled');
    });

    // Transfer the drawing using the newly loaded model
    transfer();
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

    // Set up radio buttons to switch models
    const radioButtons = document.querySelectorAll('#container .mdc-radio');
    radioButtons.forEach((radioButton) => {
      const input = radioButton.querySelector('input');
      input.addEventListener('change', (event) => {
        // Disable radio buttons
        radioButtons.forEach((rb) => {
          rb.classList.add('mdc-radio--disabled');
          const i = rb.querySelector('input');
          i.setAttribute('disabled', null);
        });

        // Update status message
        const statusMessage = document.querySelector('#status');
        statusMessage.innerHTML = 'Downloading model...';

        // Create a pix2pix method with a pre-trained model
        const modelName = event.target.id;
        const modelPath = `./models/${modelName}.pict`;
        pix2pix = ML5.pix2pix(modelPath, modelLoaded);
      });
    });

    // Update status message
    const statusMessage = document.querySelector('#status');
    statusMessage.innerHTML = 'Downloading model...';

    // Create a pix2pix method with a pre-trained model
    const modelPath = './models/edges2pikachu.pict';
    pix2pix = ML5.pix2pix(modelPath, modelLoaded);
  };

  p5.draw = () => {
    if (
      p5.mouseIsPressed &&
      modelLoaded &&
      !isTransfering &&
      // Ensure mouse is within canvas
      p5.mouseX >= 0 &&
      p5.mouseY >= 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY < p5.height
    ) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };
};

export default sketch;
