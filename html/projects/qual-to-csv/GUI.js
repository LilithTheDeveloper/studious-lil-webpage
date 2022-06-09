function GUI(){
  this.colorPicker;

  this.x;
  this.y;

  this.elements = []



  this.init = function(){
    this.colorPicker = new ColorPicker();
    this.colorPicker.init();
  }
  
  this.addElement = function(element){
    this.elements.push(element);


  }

  this.update = function(){
    for(var i = 0; i < this.elements.length; i++){
      this.elements[i];
    }
  }

}