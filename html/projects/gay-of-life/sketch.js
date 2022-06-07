var grid;
var gridSize = 20;
var tileSize = 30;
var canvasSize = gridSize*tileSize
var currentGeneration = 0
var simulationStarted = false;
var startButton;

var generation;

function setup() 
{
	createCanvas(canvasSize, canvasSize);
	grid = new Grid(gridSize, tileSize);
	grid.generateGrid();
	frameRate(5);

	startButton = createButton('Start');
	startButton.mousePressed(function(){
		if(!simulationStarted){
			simulationStarted = true;
			startButton.html = 'Stop';
		}
		else{
			simulationStarted = false;
			startButton.html = 'Start';
		}
	});

	var resetButton = createButton('Reset');
	resetButton.mousePressed(function(){
		resetSimulation();
	});

	var skipButton = createButton('Skip');
	skipButton.mousePressed(function(){
		checkGeneration();
		updateGenerationLabel();
	});
	

	console.log(simulationStarted)

	generation = createP('generation: ' + currentGeneration);

	var slider = createSlider(1, 60, 0);
	slider.input(function(){
		frameRate(slider.value());
	}
	);

	

}

function draw()
{
	background(222);
	grid.draw();

	if(simulationStarted){
		checkGeneration();
		updateGenerationLabel();
		if(!grid.hasAliveCells()){
			console.log("Life has died after " + currentGeneration + " generations");
			resetSimulation();
		}
	}
}

function mousePressed(event){
	grid.clickTile();
}

function updateGenerationLabel(){
	generation.html('generation: ' + currentGeneration);
}

function checkGeneration(){
	for(var i = 0; i < grid.tiles.length; i++){
		var tile = grid.tiles[i];
		var neighbours = grid.getNeighbouringTiles(tile);

		aliveNeighbours = tile.getAliveNeighbours(neighbours).length;

		console.log(aliveNeighbours)
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
	currentGeneration++;
}

function resetSimulation(){
	currentGeneration = 0;
	grid.reset();
	updateGenerationLabel();
	simulationStarted = false;
}