const drawCircle = (p5, width, height, i, n, beat) => {
  p5.rectMode(p5.CENTER);

  // Get segment and section
  const segment = TrackAnalysis.segments[beat.segmentIndex];
  const section = TrackAnalysis.sections[beat.sectionIndex];

  // Calculate loudness range
  const loudnessRange = getLoudnessRange(TrackAnalysis.segments);

  // Calculate position
  const xStep = width / n;
  const yStep = height / n;
  const x = (i % n) * xStep + xStep / 2;
  const y = Math.floor(i / n) * yStep + yStep / 2;

  // Determine colors
  const color = beat.isFirstBeat ? 'red' : 'black';
  if (beat.sectionIndex % 2) {
    p5.stroke(color);
    p5.fill(color);
  } else {
    p5.stroke(color);
    p5.noFill();
  }

  // Determine radius
  const minRadius = 1;
  const maxRadius = Math.min(xStep, yStep);
  // const radius = Util.scale(
  //   segment.loudness_max,
  //   loudnessRange.min,
  //   loudnessRange.max,
  //   minRadius,
  //   maxRadius,
  // );
  const radius = Util.scale(
    segment.pitches.indexOf(Math.max(...segment.pitches)),
    11,
    0,
    minRadius,
    maxRadius,
  );

  // The actual translating and drawing
  p5.push();
  p5.translate(x, y);
  if (section.key === 1) {
    p5.rect(0, 0, radius, radius);
  } else {
    p5.ellipse(0, 0, radius);
  }
  p5.pop();
};

export const draw = (p5, width, height, TrackAnalysis) => {
  const n = Math.ceil(Math.sqrt(TrackAnalysis.beats.length));
  TrackAnalysis.beats.forEach((beat, beatIndex) => {
    drawCircle(p5, width, height, beatIndex, n, beat);
  });
};
