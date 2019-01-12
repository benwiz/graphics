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
    statusMessage.innerHTML = '&nbsp;';

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
        statusMessage.innerHTML = '&nbsp;';
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

    // Unhide and set click event to clearButton
    const clearButton = document.querySelector('#clearButton');
    clearButton.removeAttribute('disabled');
    clearButton.addEventListener('click', clearCanvas);

    // TODO: Enable radio buttons
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

    // Use radio buttons, not the select element
    const radioButtons = document.querySelectorAll('#container #model-radio-buttons input');
    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('change', (event) => {
        // Update status message
        statusMessage.innerHTML = 'Downloading model...';

        // Create a pix2pix method with a pre-trained model
        const modelName = event.target.id;
        console.log('pick modelName:', modelName);
        modelPath = `./models/${modelName}.pict`;
        pix2pix = ML5.pix2pix(modelPath, modelLoaded);

        // Transfer the drawing
        transfer();
      });
    });
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
      console.log('draw!!');
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };
};

export default sketch;
