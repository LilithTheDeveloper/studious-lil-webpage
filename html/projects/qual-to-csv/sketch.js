var cnv;
var cnvWidth = 800;
var cnvHeight = 600;
var cnvX;
var cnvY;

var guiCnv;
var gui;
var guiWidth = 800;
var guiHeight = 600;
var guiX;
var guiY;

var calender;



function setup() {
  cnv = setupCanvas();
  guiCnv = setupGUI();

  frameRate(60);
  calender = new Calender();
  calender.generateDays();
}

function draw() {
  background(220);
  calender.draw();
  
  //update();
}

function update(){
  var guiUpdateInterval = 1;
  if(frameCount%(guiUpdateInterval*60) == 0){
    gui.update();
  }
}

function setupCanvas() {
  var cnv = createCanvas(cnvWidth, cnvHeight);
	cnvX = (windowWidth - cnvWidth)/2;
	cnvY = (windowHeight - cnvHeight)/2;
	cnv.position(cnvX, cnvY);
	cnv.style('border', '1px solid black');
  cnv.background(100);
  return cnv;
}

function setupGUI(){
  var guiCnv = createGraphics(guiWidth, guiHeight)
  guiX = (windowWidth - cnvWidth)/2;
  guiY = cnvY+cnvHeight;
  guiCnv.position(guiX, guiY);
  guiCnv.background(100);
  guiCnv.style('border', '1px solid black');

  return guiCnv;
}