import * as BeatInGrid from './beat-in-grid';
import * as TrackAnalysis from './data/bedroom.json';

//
// All setup functions here
//

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

export const draw = (options) => {
  const { p5, width, height } = options;

  // Set background color
  p5.background(255);

  // TEMP: Strip the first three beats
  TrackAnalysis.beats.splice(0, 3);

  // Draw each beat as a point in the grid
  if (TrackAnalysis) {
    BeatInGrid.draw(p5, width, height, TrackAnalysis);
  }
};
