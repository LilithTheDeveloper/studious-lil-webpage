function getInputTimeValueById(id) {
    var input = document.getElementById(id);
    if (input) {
        return input.value;
    }
    return "";
}

function getDateByTimeString(str) {
  var date = new Date, time = str.split(/\:|\-/g);
  date.setHours(time[0]);
  date.setMinutes(time[1]);
  return date;
}