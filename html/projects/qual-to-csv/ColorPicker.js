function ColorPicker(){
  this.colorPicker;

  this.selectedColor;

  this.init = function(){
    this.colorPicker = createColorPicker('#ffffff');
    this.colorPicker.position(cnvX,cnvY+cnvHeight);
  }

  this.update = function(){
    this.selectedColor = this.colorPicker.color();
  }

  this.setPosition = function(x,y){
    this.colorPicker.position(x,y);
  }
}