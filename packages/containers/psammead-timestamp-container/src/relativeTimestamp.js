const pluralise = (timeDiffInMins, timeUnit, singular) => {
  let timeDiff;
  let unit;

  if (singular !== 'minute') {
    timeDiff = parseInt(timeDiffInMins / timeUnit, 10);
    unit = timeDiff > 1 ? `${singular}s` : singular;
    return `${timeDiff} ${unit} ago`;
  }
  timeDiff = timeDiffInMins <= 1 ? 1 : timeDiffInMins;
  unit = timeDiff === 1 ? singular : `${singular}s`;
  return `${timeDiff} ${unit} ago`;
};

const constructTimestamp = timeDiffInMins => {
  const twentyFourHours = 1440;
  const oneHour = 60;
  const oneMin = 1;

  if (timeDiffInMins >= twentyFourHours) {
    return pluralise(timeDiffInMins, twentyFourHours, 'day');
  }
  if (timeDiffInMins >= oneHour) {
    return pluralise(timeDiffInMins, oneHour, 'hour');
  }
  return pluralise(timeDiffInMins, oneMin, 'minute');
};

const relativeTime = receivedTimestamp => {
  const currentTime = Date.now();
  const timeDifferenceMilliseconds = currentTime - receivedTimestamp;
  const timeDifferenceMinutes = parseInt(
    timeDifferenceMilliseconds / (1000 * 60),
    10,
  );

  const isInFuture = timeDifferenceMilliseconds < 0;

  if (isInFuture) {
    return null;
  }

  return constructTimestamp(timeDifferenceMinutes);
};

export default relativeTime;
