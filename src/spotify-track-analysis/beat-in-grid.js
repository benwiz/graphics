import * as Util from '../util';
import * as ComputeStdev from 'compute-stdev';

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

const getDurationRange = (timeIntervals) => {
  const durations = timeIntervals.map(timeInterval => timeInterval.loudness_max);
  const stdev = ComputeStdev.default(durations);
  const mean = Util.getMean(durations);

  let minDuration = Infinity;
  let maxDuration = -Infinity;
  for (let i = 0; i < timeIntervals.length; i++) {
    const timeInterval = timeIntervals[i];
    const { duration } = timeInterval;

    // If duration is greater than 2*stdev away, skip this iteration
    const dist = Math.abs(duration - mean);
    if (dist > 2 * stdev) {
      continue;
    }

    // Update min and max
    if (duration < minDuration) {
      minDuration = duration;
    }
    if (duration > maxDuration) {
      maxDuration = duration;
    }
  }

  return { min: minDuration, max: maxDuration };
};

const drawEllipse = (p5, width, height, i, n, beat, TrackAnalysis) => {
  // Get segment and section
  const segment = TrackAnalysis.segments[beat.segmentIndex];
  // const section = TrackAnalysis.sections[beat.sectionIndex];

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

  // Calculate ranges for loudness and segment duration
  const loudnessRange = getLoudnessRange(TrackAnalysis.segments);
  const segmentDurationRange = getDurationRange(TrackAnalysis.segments);

  // Determine radii
  const minRadius = 4;
  const maxRadius = Math.min(xStep, yStep);
  const radius1 = p5.map(
    segment.loudness_max,
    loudnessRange.min,
    loudnessRange.max,
    minRadius,
    maxRadius,
    true,
  );
  const radius2 = p5.map(
    segment.duration,
    segmentDurationRange.min,
    segmentDurationRange.max,
    minRadius,
    maxRadius,
    true,
  );

  // Determine rotation
  const rotation = p5.random() * p5.TWO_PI; // TODO: Maybe use key or scale

  // The actual translating, rotating, and drawing
  p5.push();
  p5.translate(x, y);
  p5.rotate(rotation);
  p5.ellipse(0, 0, radius2, radius1);
  p5.pop();
};

const drawFlower = (p5, width, height, i, n, beat, TrackAnalysis) => {
  // Get segment and section
  const segment = TrackAnalysis.segments[beat.segmentIndex];
  // const section = TrackAnalysis.sections[beat.sectionIndex];

  // Calculate position
  const xStep = width / n;
  const yStep = height / n;
  const x = (i % n) * xStep + xStep / 2;
  const y = Math.floor(i / n) * yStep + yStep / 2;

  // Determine colors
  p5.strokeWeight(1);
  const color = beat.isFirstBeat ? 'red' : 'black';
  if (beat.sectionIndex % 2) {
    p5.stroke(color);
    p5.fill(255);
  } else {
    p5.stroke(color);
    p5.fill(255);
  }

  // // Calculate ranges for loudness and segment duration
  // const loudnessRange = getLoudnessRange(TrackAnalysis.segments);
  // const segmentDurationRange = getDurationRange(TrackAnalysis.segments);

  // The actual translating, rotating, and drawing
  p5.push();
  p5.translate(x, y);

  // Hardcode radius of little circles as a percent of the width
  const radius = 8;

  // Calculate positions of ellipses
  const x1 = p5.random([-1, 0, 1]) * 2.0 * radius;
  const y1 = -4 * radius;
  const x2 = p5.random([-1, 0, 1]) * 1.5 * radius;
  const y2 = -3 * radius;
  const x3 = p5.random([-1, 0, 1]) * 1.0 * radius;
  const y3 = -2 * radius;
  const x4 = p5.random([-1, 0, 1]) * 0.5 * radius;
  const y4 = -1 * radius;

  // Draw bezier curves from base to each ellipse
  const xBase = 0;
  const yBase = 3 * radius;
  p5.bezier(xBase, yBase, xBase, yBase - 1.5 * radius, 0.25 * x1, y1, x1, y1);
  p5.bezier(xBase, yBase, xBase, yBase - 1.5 * radius, 0.25 * x2, y2, x2, y2);
  p5.bezier(xBase, yBase, xBase, yBase - 1.5 * radius, 0.25 * x3, y3, x3, y3);
  p5.bezier(xBase, yBase, xBase, yBase - 1.5 * radius, 0.25 * x4, y4, x4, y4);

  // Draw the baseline
  p5.line(-0.75 * radius, yBase, 0.75 * radius, yBase);

  // Draw the four ellipses
  p5.ellipse(x1, y1, radius, radius);
  p5.ellipse(x2, y2, radius, radius);
  p5.ellipse(x3, y3, radius, radius);
  p5.ellipse(x4, y4, radius, radius);

  p5.pop();
};

export const draw = (p5, width, height, TrackAnalysis) => {
  // Translate and scale for padding
  p5.push();
  const scale = 0.85;
  p5.translate(((1 - scale) / 2) * width, ((1 - scale) / 2) * height);
  p5.scale(scale);

  // Run drawing function for each beat
  let n = Math.ceil(Math.sqrt(TrackAnalysis.beats.length));
  n = Math.ceil(n / 3); // To make drawing bigger
  n = 9;
  TrackAnalysis.beats.forEach((beat, beatIndex) => {
    // drawEllipse(p5, width, height, beatIndex, n, beat, TrackAnalysis);
    drawFlower(p5, width, height, beatIndex, n, beat, TrackAnalysis);
  });

  // Pop the padding matrix
  p5.pop();
};
