

setInterval(() => {
  let seconds = document.getElementById('seconds-1');
  let minutes = document.getElementById('minutes-1');
  let hours   = document.getElementById('hours-1');
  let secondsVal = seconds.innerHTML;
  let minutesVal = minutes.innerHTML;
  let hoursVal   = hours.innerHTML;
  if (secondsVal == 59) {
    seconds.innerHTML = '00';
    if (!minutesVal) {
      minutes.innerHTML = '01';
    } else if (minutesVal == 59) {
      minutes.innerHTML = '00';
      if (!hoursVal) {
        hours.innerHTML = '01';
      } else if (-1 < hoursVal && hoursVal < 9) {
        hoursVal++;
        hours.innerHTML = `0${hoursVal}`;
      } else {
        hoursVal++;
        hours.innerHTML = hoursVal;
      }
    } else if (-1 < minutesVal && minutesVal < 9) {
      minutesVal++;
      minutes.innerHTML = `0${minutesVal}`;
    } else {
      minutesVal++;
      minutes.innerHTML = minutesVal;
    }
  } else if (-1 < secondsVal && secondsVal < 9) {
    secondsVal++;
    seconds.innerHTML = `0${secondsVal}`;
  } else {
    secondsVal++;
    seconds.innerHTML = secondsVal;
  }
}, 1000);