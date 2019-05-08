import * as Util from '../util';
import * as TrackAnalysis from './data/tarlabasi.json';

//
// All setup functions here
//

export const setup = (_options) => {};

//
// All drawing functions below here
//

const drawLocationToTimestamp = (p5, width, height) => {
  // Draw n ellipses in a grid pattern using translate
  const songDuration = Math.floor(542.43964);
  const n = Math.ceil(Math.sqrt(songDuration));
  const xStep = width / n;
  const yStep = height / n;
  let count = 0;
  let currSectionIndex = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (count >= songDuration) break;

      // Using the current method, the current timestamp is the count
      const timestamp = count;

      // Determine which section the current timestamp falls into. Only search
      // current and future sections.
      for (let k = currSectionIndex; k < TrackAnalysis.sections.length; k++) {
        const section = TrackAnalysis.sections[k];
        const isThisSection =
          timestamp >= section.start && timestamp <= section.start + section.duration;
        if (isThisSection) {
          if (k % 2) {
            p5.fill(0);
          } else {
            p5.noFill();
          }

          currSectionIndex = k;
          break;
        }
      }

      // Draw ellipse at correct location
      const x = i * xStep + xStep / 2;
      const y = j * yStep + yStep / 2;
      p5.push();
      p5.translate(x, y);
      p5.ellipse(0, 0, 10);
      p5.pop();

      count += 1;
    }
  }
};

export const draw = (options) => {
  const { p5, width, height } = options;

  // Set background color
  p5.background(255);
  p5.stroke(0);
  p5.fill(0);

  // Draw using the location as the dictator of the drawing
  drawLocationToTimestamp(p5, width, height);

  // TODO: Draw using the timestamp from the data to dictate the location
  // TODO: Draw using the timestamp from the data but lock into grid locations
};
