function Button(x,y,label, width = 100, height = 30){
  this.width = width;
  this.height = height;
  
  this.x = x;
  this.y = y;
  
  this.button = createButton(label)

  this.button.position(this.x, this.y);

  this.draw = function(){
    strokeWeight(2);
    rect(x, y,_dayBoxWidth, _dayBoxHeight);
  }

  this.setPosition = function(x,y){
    this.x = x;
    this.y = y;
  }
}