import * as ComputeStdev from 'compute-stdev';
import * as Util from '../util';

// Yes, this is copy-pasted from `./beat-in-grid.js` :(
const getLoudnessRange = (segments) => {
  const loudnesses = segments.map(segment => segment.loudness_max);
  const stdev = ComputeStdev.default(loudnesses);
  const mean = Util.getMean(loudnesses);

  let minLoudness = Infinity;
  let maxLoudness = -Infinity;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const loudness = segment.loudness_max;

    // If loudness is greater than 2*stdev away, skip this iteration
    const dist = Math.abs(loudness - mean);
    if (dist > 2 * stdev) {
      continue;
    }

    // Update min and max
    if (loudness < minLoudness) {
      minLoudness = loudness;
    }
    if (loudness > maxLoudness) {
      maxLoudness = loudness;
    }
  }

  return { min: minLoudness, max: maxLoudness };
};

const drawCurveLandscape = (p5, width, height, TrackAnalysis) => {
  const n = TrackAnalysis.segments.length;
  let previousShape = [];
  let currentShape = [];
  const loudnessRange = getLoudnessRange(TrackAnalysis.segments);

  for (let segmentIndex = 0; segmentIndex < n; segmentIndex++) {
    const segment = TrackAnalysis.segments[segmentIndex];

    // Calculate y, skip if y is larger than height
    const step = 5;
    const y = segmentIndex * step + step / 2;
    if (y > height) continue;

    //
    // Create line shape by adding vertices
    //
    // First define the characteristics of the line
    p5.noFill();
    // p5.fill('white'); // TODO: Fills can have a cool effect https://www.instagram.com/p/Be2wfb1Butf/, https://www.instagram.com/p/Bq7Fc4ZnSRJ/
    p5.strokeWeight(p5.map(segment.loudness_max, loudnessRange.min, loudnessRange.max, 0.5, 1.0));
    p5.curveTightness(0);

    // Begin drawing the shape. Note the first and last vertices because when
    // using `curveVertex` the first and last points must be duplicated.
    p5.beginShape();
    const timbreMultiplier = 0.2; // I tried scaling up multiplier with i but didn't like it as much as expected
    const timbreSecondMultipler = 1.0;
    const firstVertex = {
      x: p5.randomGaussian(0, 10),
      y: y + timbreMultiplier * segment.timbre[0],
    };
    const lastVertex = {
      x: width + p5.randomGaussian(0, 10),
      y: y + timbreMultiplier * segment.timbre[segment.timbre.length - 1],
    };
    p5.curveVertex(firstVertex.x, firstVertex.y);
    for (let i = 0; i < segment.timbre.length; i++) {
      const timbre = segment.timbre[i];
      let timbreAdjust = timbreMultiplier * timbre;
      if (i > segment.timbre.length / 2) {
        timbreAdjust *= 3.5;
      }
      const vertex = {
        x: (i / (segment.timbre.length - 1)) * width,
        y: y + timbreAdjust,
      };
      // If not the first shape (line) and there is vertex crossing
      if (previousShape.length > 0) {
        if (vertex.y < previousShape[i].y) {
          // NOTE: Only allowing positive adjustments (downward). Not ideal for
          // an accurate visual representation... but I guess I shouldn't care
          // about an accurate visual representation of the timbre of the music.
          vertex.y =
            timbre < 0
              ? previousShape[i].y
              : previousShape[i].y + timbreSecondMultipler * timbreAdjust;
        }
      }

      // Add x offsets to first and last vertices
      if (i === 0) vertex.x = firstVertex.x;
      if (i === segment.timbre.length - 1) vertex.x = lastVertex.x;

      // Add the vertex and save it
      p5.curveVertex(vertex.x, vertex.y);
      currentShape.push(vertex);
    }
    p5.curveVertex(lastVertex.x, lastVertex.y);
    p5.endShape();

    // Update previous shape
    previousShape = currentShape.slice();
    currentShape = [];
  }
};

export const draw = (p5, width, height, TrackAnalysis) => {
  // Translate and scale for padding
  p5.push();
  const scale = 0.85;
  p5.translate(((1 - scale) / 2) * width, ((1 - scale) / 2) * height);
  p5.scale(scale);

  drawCurveLandscape(p5, width, height, TrackAnalysis);

  // Pop the padding matrix
  p5.pop();
};
