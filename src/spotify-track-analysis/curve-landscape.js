/*
 *  IDEAS:
 *    - Offset start and end X-values of some lines to make it look a little messier
 */

const drawCurveLandscape = (p5, width, height, TrackAnalysis) => {
  const n = TrackAnalysis.segments.length;
  let previousShape = [];
  let currentShape = [];

  for (let segmentIndex = 0; segmentIndex < n; segmentIndex++) {
    const segment = TrackAnalysis.segments[segmentIndex];

    // Calculate y, skip if y is larger than height
    const step = 10;
    const y = segmentIndex * step + step / 2;
    if (y > height) continue;

    // TODO: Look into including two segments per line

    // Create line shape by adding vertices
    p5.noFill();
    // p5.fill('white'); // TODO: Fills can have a good effect https://www.instagram.com/p/Be2wfb1Butf/, https://www.instagram.com/p/Bq7Fc4ZnSRJ/
    p5.beginShape();
    const firstVertex = { x: 0, y: y + 0.2 * segment.timbre[0] };
    const lastVertex = { x: width, y: y + 0.2 * segment.timbre[segment.timbre.length - 1] };
    p5.curveVertex(firstVertex.x, firstVertex.y);
    for (let i = 0; i < segment.timbre.length; i++) {
      const timbre = segment.timbre[i];
      const multiplier = 0.2;
      const vertex = {
        x: (i / (segment.timbre.length - 1)) * width,
        y: y + multiplier * timbre,
      };
      if (previousShape.length > 0) {
        if (vertex.y < previousShape[i].y) {
          // NOTE: Only allowing positive adjustments (downward)
          vertex.y = timbre < 0 ? previousShape[i].y : previousShape[i].y + multiplier * timbre;
        }
      }

      p5.curveVertex(vertex.x, vertex.y);
      // p5.ellipse(vertex.x, vertex.y, 10);

      currentShape.push(vertex);
    }
    p5.curveVertex(lastVertex.x, lastVertex.y);
    p5.endShape();

    // Update previous shape
    previousShape = currentShape.slice();
    currentShape = [];

    // if (segmentIndex === 3) break;
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
