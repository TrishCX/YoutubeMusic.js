export function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  if (hours > 0) {
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  } else if (minutes > 0) {
    return `${minutesStr}:${secondsStr}`;
  } else {
    return `0:${secondsStr}`;
  }
}
