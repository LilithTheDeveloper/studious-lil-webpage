const daysMS = 86400000;
const hourMS = 3600000;
const minuteMS = 60000;
const secondMS = 1000;

function getTimeStringFromDate(date){
  var hoursString = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
  var minutesString = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  var secondsString = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  return hoursString + ":" + minutesString;
}

function getTimeStringObjectFromDate(date){
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return {
    hours: hours,
    minutes: minutes,
  }
}

function getRemainingTime(maximumTime, workedTime){
  var hoursLeft = maximumTime.hours - workedTime.hours;
  var minutesLeft = maximumTime.minutes - workedTime.minutes;
  if(minutesLeft < 0 && hoursLeft > 0) minutesLeft = 60 + minutesLeft;
  return `${hoursLeft}:${Math.abs(minutesLeft)}`;
}