//Grid
var grid;
var gridSize = 20;
var tileSize = 30;

//Canvas
var canvas;
var canvasSize = gridSize*tileSize
var cnvX;
var cnvY;

//Generations
var globalGenerations = 1;
var curGenerationNo = 0

var generationPattern;
var generationRecords = []

//Menu
var buttonPositionX = cnvX;
var buttonPositionY = cnvY+canvasSize+10;

var buttonWidth = 100;
var buttonHeight = 30;

	//Buttons
	var startButton;
	var resetButton;
	var skipButton;

	//Text
	var generationNoText;
	var frameRateLabel;
	var pastGenerationsLabel;

	//Lists
	var pastGenerationsUL;

	//Slider
	var frameRateSlider;

//Simulation
var simulationStarted = false;

function setup() 
{
	canvas = setupCanvas();
	grid = new Grid(gridSize, tileSize);
	grid.generateGrid();
	frameRate(5);
	createMenu();
}

function draw()
{
	background(222);
	grid.draw();

	if(simulationStarted){
		checkRules();
		updateGenerationLabel();
		if(!grid.hasAliveCells()){
			console.log("Life has died after " + curGenerationNo + " generations");
			resetSimulation();
		}
	}
}

function mousePressed(event){
	grid.clickTile();
}

function updateGenerationLabel(){
	generationNoText.html('Current Generation: ' + curGenerationNo);
}

function checkRules(){
	for(var i = 0; i < grid.tiles.length; i++){
		var tile = grid.tiles[i];
		var neighbours = grid.getNeighbouringTiles(tile);

		aliveNeighbours = tile.getAliveNeighbours(neighbours).length;

		if(tile.alive){
			if(aliveNeighbours != 2 && aliveNeighbours != 3){
				tile.nextState = false;
			}else{
				tile.nextState = true;
			}
		}
		else{
			if(!tile.alive && aliveNeighbours == 3){
				tile.nextState = true;
			}
		}
	}	
	grid.nextGeneration();
	curGenerationNo++;
}

function record(){
	var startPattern = Array.from(grid.tiles);
  generationPattern = startPattern;
}

function addRecordToList(){
	var buttonPositionX = cnvX;
	var buttonPositionY = cnvY+canvasSize+10;
	
	var buttonWidth = 100;
	var buttonHeight = 30;

	var genRecord = {
		generation: globalGenerations++,
		pattern: generationPattern,
		aliveTiles: grid.getAliveTiles().length,
		survivedGenerations: curGenerationNo

	}
	generationRecords.push(genRecord);
	pastGenerationsUL.html(pastGenerationsUL.html() + '<li>' +  `[${genRecord.generation}] - Tiles alive (${genRecord.aliveTiles}) - Generations survived [${genRecord.survivedGenerations}]` + '</li>');

	// //add a button next to the list that will set the simulation to the pattern saved
	// var btm = createButton('Set');
	// btm.position(cnvX+canvasSize,0);
	// btm.size(100,30);
	// console.log(btm.elt);
	// btm.mousePressed(function(){
	// 	resetSimulation();
	// 	grid.setPattern(genRecord.pattern);
	// });
}

function resetSimulation(){
	addRecordToList();
	curGenerationNo = 0;
	grid.reset();
	updateGenerationLabel();
	simulationStarted = false;
}

function createMenu(){
	var buttonPositionX = cnvX;
	var buttonPositionY = cnvY+canvasSize+10;
	
	var buttonWidth = 100;
	var buttonHeight = 30;

	generationNoText = createP("Game of Life");
	generationNoText.position(cnvX+200,cnvY-80);
	generationNoText.style('font-size', '30px');
	

	startButton = createButton('Start');
	startButton.position(buttonPositionX, buttonPositionY);
	startButton.size(buttonWidth, buttonHeight);

	startButton.mousePressed(function(){
		if(!simulationStarted){
			record();
			simulationStarted = true;
			startButton.html = 'Pause';
		}
		else{
			simulationStarted = false;
			startButton.html = 'Start';
		}
	});

	resetButton = createButton('Reset');
	resetButton.position(buttonPositionX+buttonWidth+10, buttonPositionY);
	resetButton.size(buttonWidth, buttonHeight);
	resetButton.mousePressed(function(){
		resetSimulation();
	});

	skipButton = createButton('Skip');
	skipButton.position(buttonPositionX+2*buttonWidth+20, buttonPositionY);
	skipButton.size(buttonWidth, buttonHeight);

	skipButton.mousePressed(function(){
		checkRules();
		updateGenerationLabel();
	});

	generationNoText = createP('Current Generation: ' + curGenerationNo);
	generationNoText.position(buttonPositionX+3*buttonWidth+150, buttonPositionY-5);
	generationNoText.style('font-size', '16px');

	frameRateLabel = createP('Speed: ' + 5);
	frameRateLabel.position(buttonPositionX+3*buttonWidth+150, buttonPositionY+buttonHeight+10);
	
	frameRateSlider = createSlider(5, 60, 0);
	frameRateSlider.position(buttonPositionX, buttonPositionY+buttonHeight+10);
	frameRateSlider.size(buttonWidth*3, buttonHeight);
	frameRateSlider.input(function(){
		var value = frameRateSlider.value();
		frameRate(Math.abs(value));
		frameRateLabel.html('Speed: ' + value);
	});

	pastGenerationsLabel = createP('Past Generations');
	pastGenerationsLabel.position(buttonPositionX, buttonPositionY+2*buttonHeight+20);

	pastGenerationsUL = createElement('ul');
	pastGenerationsUL.position(buttonPositionX, buttonPositionY+2*buttonHeight+80);
	pastGenerationsUL.style('list-style-type', 'none');







}

function setupCanvas(){
	var cnv = createCanvas(canvasSize, canvasSize);
	cnvX = (windowWidth - canvasSize)/2;
	cnvY = (windowHeight - canvasSize)/2;
	cnv.position(cnvX, cnvY);
	cnv.style('border', '1px solid black');
	return cnv;
}