function Tile(x,y,tileSize,grid){


  const aliveColor = color(124,255,0);
  const deadColor = color(255,255,255);

  this.grid = grid;

  this.tileSize

  this.x = x;
  this.y = y;

  this.tileSize = tileSize;

  this.alive = false;
  this.nextState = false;

  
  this.draw = function(){
    if(this.alive){
      fill(aliveColor);
      square(this.x, this.y, this.tileSize)
    }
    else if (!this.alive){
      fill(deadColor)
      square(this.x, this.y, this.tileSize)
    }
  }
  
  this.click = function(){
    if(mouseX > this.x && mouseX < this.x + this.tileSize && mouseY > this.y && mouseY < this.y + this.tileSize){
      this.alive = !this.alive;
      console.log(this.getAliveNeighbours());
      

    }
  }

  this.getAliveNeighbours = function(){
    var neighbours = [];
    for(var i = -1; i < 2; i++){
      for(var j = -1; j < 2; j++){
        if(i == 0 && j == 0){
          continue;
        }
        var x = this.x + i*this.tileSize;
        var y = this.y + j*this.tileSize;
        var neighbour = this.grid.getTile(x, y);
        if(neighbour && neighbour.alive){
          neighbours.push(neighbour);
        }
      }
    }
    return neighbours;
  }

  this.getNeighbouringTiles = function(){
    var neighbours = [];
    for(var i = -1; i < 2; i++){
      for(var j = -1; j < 2; j++){
        if(i == 0 && j == 0){
          continue;
        }
        var x = this.x + i*this.tileSize;
        var y = this.y + j*this.tileSize;
        var neighbour = this.grid.getTile(x, y);
        if(neighbour){
          neighbours.push(neighbour);
        }
      }
    }
    return neighbours;
  }
}