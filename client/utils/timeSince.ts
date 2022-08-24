import { ISOConverter } from "./ISOConverter";
export function timeSince(createdAt: string) {
  let date = new Date(createdAt);
  let seconds = Math.floor((Number(new Date()) - Number(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return ISOConverter.format(createdAt, true);
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return ISOConverter.format(createdAt, true);
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return ISOConverter.format(createdAt, true);
  }
  interval = Math.floor(seconds / 3600);
  if (interval === 1 || interval === 21) {
    return interval + " час";
  }
  if (
    interval === 2 ||
    interval === 3 ||
    interval === 4 ||
    interval === 22 ||
    interval === 23
  ) {
    return interval + " часа";
  }
  if (interval > 4 && interval < 21) {
    return interval + " часов";
  }
  if (interval > 24 && interval < 48) {
    return "вчера";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " минут";
  }
  return Math.floor(seconds) + " секунд";
}
