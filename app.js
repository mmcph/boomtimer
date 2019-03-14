const colonHours = document.getElementById('colon-1');
const colonMinutes = document.getElementById('colon-2');
let seconds = document.getElementById('seconds-1');
let minutes = document.getElementById('minutes-1');
let hours   = document.getElementById('hours-1');


// 'Working' stopwatch code that fails to account for the inherent inaccuracy of setInterval() - you live and you learn :P
// setInterval(() => {
//   let seconds = document.getElementById('seconds-1');
//   let minutes = document.getElementById('minutes-1');
//   let hours   = document.getElementById('hours-1');
//   let secondsVal = seconds.innerHTML;
//   let minutesVal = minutes.innerHTML;
//   let hoursVal   = hours.innerHTML;
//   if (secondsVal == 0) {
//     seconds.innerHTML = '01';
//   } else if (secondsVal == 59) {
//     seconds.innerHTML = '00';
//     if (!minutesVal) {
//       minutes.innerHTML = '01';
//       colonMinutes.innerHTML = ':';
//     } else if (minutesVal == 59) {
//       minutes.innerHTML = '00';
//       if (!hoursVal) {
//         hours.innerHTML = '01';
//         colonHours.innerHTML = ':';
//       } else if (-1 < hoursVal && hoursVal < 9) {
//         hoursVal++;
//         hours.innerHTML = `0${hoursVal}`;
//       } else {
//         hoursVal++;
//         hours.innerHTML = hoursVal;
//       }
//     } else if (-1 < minutesVal && minutesVal < 9) {
//       minutesVal++;
//       minutes.innerHTML = `0${minutesVal}`;
//     } else {
//       minutesVal++;
//       minutes.innerHTML = minutesVal;
//     }
//   } else if (-1 < secondsVal && secondsVal < 9) {
//     secondsVal++;
//     seconds.innerHTML = `0${secondsVal}`;
//   } else {
//     secondsVal++;
//     seconds.innerHTML = secondsVal;
//   }
// }, 1000);

const start = document.getElementById('start-1');
start.addEventListener('click', () => {

  start.blur();

  var interval = 1000; // ms
  var expected = Date.now() + interval;
  setTimeout(step, interval);
  function step() {

    let secondsVal = seconds.innerHTML;
    let minutesVal = minutes.innerHTML;
    let hoursVal   = hours.innerHTML;

      var dt = Date.now() - expected; // the drift (positive for overshooting)
      if (dt > interval) {
          // something really bad happened. Maybe the browser (tab) was inactive?
          // possibly special handling to avoid futile "catch up" run
          alert('Something went wrong...please tell Marlon and stop using this piece of garbage immediately.');
      }

      if (secondsVal == 0) {
        seconds.innerHTML = '01';
      } else if (secondsVal == 59) {
        seconds.innerHTML = '00';
        if (!minutesVal) {
          minutes.innerHTML = '01';
          colonMinutes.innerHTML = ':';
        } else if (minutesVal == 59) {
          minutes.innerHTML = '00';
          if (!hoursVal) {
            hours.innerHTML = '01';
            colonHours.innerHTML = ':';
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
      
      expected += interval;
      setTimeout(step, Math.max(0, interval - dt)); // take into account drift
  }

});