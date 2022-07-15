var workedTime;
var maximumTime;


function setDefaultTime(){
  document.getElementById("arrivalTime").value ="08:00";
  document.getElementById("maximumWorkTime").value ="16:00";
}

setDefaultTime();

function updateCurrentTime() {
  var currentTime = document.getElementById("currentTime");
  var date = new Date();
  currentTime.innerHTML = getTimeStringFromDate(date)
}
function updateCurrentWorkedTime() {
  var currentDate = new Date();
  var timestr = getInputTimeValueById("arrivalTime")
  var arrivalTime = getDateByTimeString(timestr);
  if (timestr != "") {
    var workingTime = document.getElementById("currentWorkedTime");
    var workedTimeDate = new Date((currentDate - arrivalTime) - hourMS);
    workingTime.innerHTML = getTimeStringFromDate(workedTimeDate);
    workedTime = getTimeStringObjectFromDate(workedTimeDate);
  }
}
function updateMaximumWorkTime() {
  var maximumWorkedTime = getInputTimeValueById("maximumWorkTime");
  var maximumWorkedTimeDate = getDateByTimeString(maximumWorkedTime);
  maximumTime = getTimeStringObjectFromDate(maximumWorkedTimeDate);
  
}
function updateOvertime(){
  if(maximumTime && workedTime){
    document.getElementById("timeLeft").innerHTML = getRemainingTime(maximumTime, workedTime);
  }
}
setInterval(updateCurrentTime, 1000);
setInterval(updateCurrentWorkedTime, 1000);
setInterval(updateMaximumWorkTime, 1000);
setInterval(updateOvertime, 1000);