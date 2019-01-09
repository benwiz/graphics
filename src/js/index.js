// import * as P5 from '../../vendor/js/p5.min';
import * as P5 from 'p5'; // TODO: Try to use p5.min or maybe point to the local file
// import * as P5Dom from '../../vendor/js/p5.dom.min';
import * as ML5 from '../../vendor/js/ml5.min'; // TODO: Try to use npm if I can use the minified file

const sketch = (p5) => {
  // The pre-trained Edges2Pikachu model is trained on 256x256 images
  // So the input images can only be 256x256 or 512x512, or multiple of 256
  const SIZE = 256;
  let inputImg;
  let inputCanvas;
  let outputContainer;
  let statusMsg;
  let pix2pix;
  let clearBtn;
  let transferBtn;
  let modelReady = false;
  let isTransfering = false;

  // Draw the input image to the canvas
  const drawImage = () => {
    p5.image(inputImg, 0, 0);
  };

  // Clear the canvas
  const clearCanvas = () => {
    p5.background(255);
  };

  const transfer = () => {
    // Set isTransfering to true
    isTransfering = true;

    // Update status message
    statusMsg.innerHTML = 'Applying Style Transfer...!';

    // Select canvas DOM element
    const canvasElement = document.querySelector('canvas').elt;

    // Apply pix2pix transformation
    pix2pix.transfer(canvasElement, (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result && result.src) {
        // Set isTransfering back to false
        isTransfering = false;
        // Clear output container
        outputContainer.innerHTML = '';
        // Create an image based result
        p5.createImg(result.src)
          .class('border-box')
          .parent('output');
        // Show 'Done!' message
        statusMsg.innerHTML = 'Done!';
      }
    });
  };

  // A function to be called when the models have loaded
  const modelLoaded = () => {
    // Show 'Model Loaded!' message
    statusMsg.innerHTML = 'Model Loaded!';

    // Set modelReady to true
    modelReady = true;

    // Call transfer function after the model is loaded
    transfer();

    // Attach a mousePressed event to the transfer button
    transferBtn.addEventListener('mousepressed', () => {
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
    console.log('setup!');

    // Create a canvas
    inputCanvas = p5.createCanvas(SIZE, SIZE);
    inputCanvas.class('border-box').parent('canvasContainer');

    // Display initial input image
    inputImg = p5.loadImage('images/pikachu.png', drawImage);

    // Selcect output div container
    outputContainer = document.querySelector('#output');
    statusMsg = document.querySelector('#status');

    // Select 'transfer' button html element
    transferBtn = document.querySelector('#transferBtn');

    // Select 'clear' button html element
    clearBtn = document.querySelector('#clearBtn');
    // Attach a mousePressed event to the 'clear' button
    clearBtn.addEventListener('mousepressed', () => {
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
    console.log('draw!');

    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };
};

const p5 = new P5.default(sketch);
