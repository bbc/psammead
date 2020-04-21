import { formatDuration } from '@bbc/psammead-timestamp-container/utilities';

const durationDictionary = ({ duration }) => ({
  '%duration%': formatDuration(duration, getDurationFormat(duration)),
});

export default durationDictionary;
