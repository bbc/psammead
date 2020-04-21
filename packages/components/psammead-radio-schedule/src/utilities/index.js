import { formatDuration } from '@bbc/psammead-timestamp-container/utilities';

const getDurationFormat = (duration, separator = ':') => {
  const timeSections = ['mm', 'ss'];
  if (duration.includes('H')) {
    timeSections.unshift('h');
  }
  return timeSections.join(separator);
};

const durationDictionary = (duration, locale) => ({
  '%duration%': formatDuration({
    duration,
    format: getDurationFormat(duration),
    locale,
  }),
});

export default durationDictionary;
