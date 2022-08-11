/* eslint-disable prettier/prettier */
function humanReadable(seconds) {
  let hours = seconds / 3600;
  let res = '';
  let minutes;
  if (hours >= 1) {
    minutes = seconds % 3600;
    hours = Math.floor(hours) > 9 ? Math.floor(hours) : '0' + Math.floor(hours);
    res = res + hours + ':';
  } else {
    res += '00:';
  }
  minutes = seconds / 60;
  if (seconds / 3600 > 1) {
    minutes = minutes % 60;
    minutes =
      Math.floor(minutes) > 9 ? Math.floor(minutes) : '0' + Math.floor(minutes);
    res = res + '' + minutes;
    seconds = seconds % 60;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    res = res + ':' + seconds;
    return res;
  }
  if (seconds / 60 >= 1) {
    seconds = seconds % 60;
    if (minutes % 60 === 0) {
      res = res + '00';
    } else {
      minutes =
        Math.floor(minutes) > 9
          ? Math.floor(minutes)
          : '0' + Math.floor(minutes);
      res = res + '' + minutes;
    }
  } else {
    res += '00';
  }
  seconds = seconds > 9 ? seconds : '0' + seconds;
  res = res + ':' + seconds;
  return res;
}

console.log(humanReadable(86400));
console.log(humanReadable(356611));

console.log(humanReadable(86400));
console.log(humanReadable(356611));
