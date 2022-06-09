function Calender(){
  const _dayBoxWidth = cnvWidth/7;
  const _dayBoxHeight = cnvHeight/6;


  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();

  const april = new Date().getMonth(4)

  this.days = [];

  this.generateDays = function(){
    var day = 1;
    
    //generate days for current month
    for(var i = 0; i < daysInMonth[currentMonth]/6; i++){
      this.days.push(new Day(day, currentMonth, currentYear));
      day++;
    }


    console.log(this.days)
    //this.days.push(new Day(i*_dayBoxWidth, j*_dayBoxHeight, day));
  }


  this.draw = function(){
    for(var i = 0; i < this.days.length; i++){
      this.days[i].draw();
    }
  }

}

function Day(x,y, day){
  const _dayBoxWidth = cnvWidth/7;
  const _dayBoxHeight = cnvHeight/6;

  this.day = day;

  this.x = x;
  this.y = y;

  this.draw = function(){
    strokeWeight(2);
    rect(x, y,_dayBoxWidth, _dayBoxHeight);
    text(this.day, x+_dayBoxWidth/2, y+_dayBoxHeight/2);
  }
}