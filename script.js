//element select
const stopwatch = document.getElementById("stopwatch-time");
// console.log(stopwatch);
//all variables
let hour = 0,
  min = 0,
  sec = 0,
  pause = true;

//when user clicks starttime btn
const startTime = () => {
  //   console.log("start click");
  if (pause) {
    pause = false;
    helperfunc();
  }
};
//when user clicks pausetime btn
const startPause = () => {
  //   console.log("start pause");
  pause = true;
};
//when user clicks restarttime btn
const restartTime = () => {
  //   console.log("start reset");
  stopwatch.innerHTML = "00:00:00";
  (hour = 0), (min = 0), (sec = 0), (pause = true);
};
//helper main function
const helperfunc = function () {
  //   console.log("helper func calling");
  if (pause == false) {
    //convert to integer
    sec = parseInt(sec);
    min = parseInt(min);
    hour = parseInt(hour);
    //basic operation
    sec++;
    //if sec>=60 min  = min+1,sec=0
    if (sec == 60) {
      min++;
      sec = 0;
    }
    //if min>=60 hour++
    if (min == 60) {
      hour++;
      min = 0;
      sec = 0;
    }
    //edge case any of them <10
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour;
    //insert back to element
    stopwatch.innerHTML = `${hour}:${min}:${sec}`;
    //one sec wait
    setTimeout("helperfunc()", 1000);
  }
};
