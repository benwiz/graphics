import * as Util from '../util';
import * as TrackAnalysis from './data/tarlabasi.json';

//
// All setup functions here
//

export const setup = (_options) => {};

//
// All drawing functions below here
//

const getLoudnessRange = (segments) => {
  let minLoudness = Infinity;
  let maxLoudness = -Infinity;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const loudness = segment.loudness_max;
    if (loudness < minLoudness) {
      minLoudness = loudness;
    }
    if (loudness > maxLoudness) {
      maxLoudness = loudness;
    }
  }

  return { min: minLoudness, max: maxLoudness };
};

const drawLocationToTimestamp = (p5, width, height) => {
  // Get loudness range
  const loudnessRange = getLoudnessRange(TrackAnalysis.segments);

  // Draw n ellipses in a grid pattern using translate
  const songDuration = Math.floor(TrackAnalysis.track.duration);
  const n = Math.ceil(Math.sqrt(songDuration));
  const xStep = width / n;
  const yStep = height / n;
  let count = 0;
  let currSectionIndex = 0;
  let currSegmentIndex = 0;
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

      // Determien which segment the current timestamp falls into. Only search
      // current and future segments. Right now, this is used to set the
      // ellipse's radius.
      const minRadius = 1;
      const maxRadius = Math.min(xStep, yStep);
      let radius = minRadius;
      for (let l = currSegmentIndex; l < TrackAnalysis.segments.length; l++) {
        const segment = TrackAnalysis.segments[l];
        const isThisSegment =
          timestamp >= segment.start && timestamp <= segment.start + segment.duration;
        if (isThisSegment) {
          radius = Util.scale(
            segment.loudness_max,
            loudnessRange.min,
            loudnessRange.max,
            minRadius,
            maxRadius,
          );

          currSegmentIndex = l;
          break;
        }
      }

      // Draw ellipse at correct location
      const x = i * xStep + xStep / 2;
      const y = j * yStep + yStep / 2;
      p5.push();
      p5.translate(x, y);
      p5.ellipse(0, 0, radius);
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
