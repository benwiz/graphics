import * as Util from '../util';
import * as TrackAnalysis from './data/bedroom.json';

//
// All setup functions here
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

const findBarForTimeInterval = (timeInterval) => {
  for (let i = 0; i < TrackAnalysis.bars.length; i++) {
    const bar = TrackAnalysis.bars[i];
    if (
      timeInterval.start >= bar.start &&
      timeInterval.start < bar.start + bar.duration - 0.00009
    ) {
      return i;
    }
  }
  return -1;
};

const isFirstBeatOfBar = (beat, bar) => {
  if (!bar) return false;
  return beat.start === bar.start;
};

const findSegmentForTimeInterval = (timeInterval) => {
  for (let i = 0; i < TrackAnalysis.segments.length; i++) {
    const segment = TrackAnalysis.segments[i];
    if (
      timeInterval.start >= segment.start &&
      timeInterval.start <= segment.start + segment.duration
    ) {
      return i;
    }
  }
  return -1; // Should never be reached
};

const findSectionForTimeInterval = (timeInterval) => {
  for (let i = 0; i < TrackAnalysis.sections.length; i++) {
    const section = TrackAnalysis.sections[i];
    if (
      timeInterval.start >= section.start &&
      timeInterval.start <= section.start + section.duration
    ) {
      return i;
    }
  }
  return -1; // Should never be reached
};

// To each beat, add index IDs for bar, segment, and section.
const organizeAnalysisByBeat = () => {
  TrackAnalysis.beats.forEach((beat) => {
    const barIndex = findBarForTimeInterval(beat);
    const isFirstBeat = isFirstBeatOfBar(beat, TrackAnalysis.bars[barIndex]);
    const segmentIndex = findSegmentForTimeInterval(beat);
    const sectionIndex = findSectionForTimeInterval(beat);

    beat.barIndex = barIndex;
    beat.isFirstBeat = isFirstBeat;
    beat.segmentIndex = segmentIndex;
    beat.sectionIndex = sectionIndex;
  });
};

export const setup = (_options) => {
  organizeAnalysisByBeat();
};

//
// All drawing functions below here
//

// eslint-disable-next-line no-unused-vars
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

      // Determine which segment the current timestamp falls into. Only search
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

// eslint-disable-next-line no-unused-vars
const drawSegmentInGrid = (p5, width, height) => {
  // Get loudness range
  const loudnessRange = getLoudnessRange(TrackAnalysis.segments);

  // Draw n ellipses in a grid pattern using translate
  const n = Math.ceil(Math.sqrt(TrackAnalysis.segments.length));
  const xStep = width / n;
  const yStep = height / n;
  let currBarIndex = 0;
  let currSectionIndex = 0;
  for (let i = 0; i < TrackAnalysis.segments.length; i++) {
    const segment = TrackAnalysis.segments[i];

    // Determine if this segment is the beginning of a bar. Do this by checking
    // the current bar to see if its start timestamp falls within this segment.
    const bar = TrackAnalysis.bars[currBarIndex];
    let color;
    if (bar.start >= segment.start && bar.start <= segment.start + segment.duration) {
      color = 'red';
      currBarIndex += 1;
    } else {
      color = 'black';
    }

    // Determine which section the current segment falls into. Only search
    // current and future sections. Use start timestamp.
    for (let j = currSectionIndex; j < TrackAnalysis.sections.length; j++) {
      const section = TrackAnalysis.sections[j];
      const isThisSection =
        segment.start >= section.start && segment.start <= section.start + section.duration;
      if (isThisSection) {
        if (j % 2) {
          p5.stroke(color);
          p5.fill(color);
        } else {
          p5.stroke(color);
          p5.noFill();
        }

        currSectionIndex = j;
        break;
      }
    }

    // Determine radius using loudness/pitch
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
      0,
      11,
      minRadius,
      maxRadius,
    );

    // Draw ellipse at correct grid placement
    const x = (i % n) * xStep + xStep / 2;
    const y = Math.floor(i / n) * yStep + yStep / 2;
    p5.push();
    p5.translate(x, y);
    p5.ellipse(0, 0, radius);
    p5.pop();
  }
};

const drawCircle = (p5, width, height, i, n, beat) => {
  // Calculate position
  const xStep = width / n;
  const yStep = height / n;
  const x = (i % n) * xStep + xStep / 2;
  const y = Math.floor(i / n) * yStep + yStep / 2;

  // Determine colors
  const color = beat.isFirstBeat ? 'red' : 'black';
  p5.stroke(color);
  p5.fill(color);

  // Determine radius
  const radius = 10;

  // The actual translating and drawing
  p5.push();
  p5.translate(x, y);
  p5.ellipse(0, 0, radius);
  p5.pop();
};

// eslint-disable-next-line no-unused-vars
const drawBeatInGrid = (p5, width, height) => {
  const n = Math.ceil(Math.sqrt(TrackAnalysis.beats.length));
  TrackAnalysis.beats.forEach((beat, beatIndex) => {
    drawCircle(p5, width, height, beatIndex, n, beat);
  });
};

export const draw = (options) => {
  const { p5, width, height } = options;

  // Set background color
  p5.background(255);
  p5.stroke(0);
  p5.fill(0);

  // // Draw using the location as the dictator of the drawing
  // drawLocationToTimestamp(p5, width, height);

  // // Draw each segment as a point in the grid
  // drawSegmentInGrid(p5, width, height);

  // Draw each beat as a point in the grid
  drawBeatInGrid(p5, width, height);
};
