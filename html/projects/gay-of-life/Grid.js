function Grid(gridSize, tileSize){

  this.gridSize = gridSize
  this.tiles = [];

  this.generateGrid = function(){
    for(var i = 0; i < gridSize; i++){
      for(var j = 0; j < gridSize; j++){
        this.tiles.push(new Tile(i*tileSize, j*tileSize, tileSize, this));
      }
    }
  }

  this.getNeighbouringTiles = function(tile){
    var neighbours = [];
    for(var i = -1; i < 2; i++){
      for(var j = -1; j < 2; j++){
        if(i == 0 && j == 0){
          continue;
        }
        var x = tile.x + i*tileSize;
        var y = tile.y + j*tileSize;
        var neighbour = this.getTile(x, y);
        if(neighbour){
          neighbours.push(neighbour);
        }
      }
    }
    return neighbours;
  }

  this.getAliveTiles = function(){
    var aliveTiles = [];
    for(var i = 0; i < this.tiles.length; i++){
      if(this.tiles[i].alive){
        aliveTiles.push(this.tiles[i]);
      }
    }
    return aliveTiles;
  }

  this.setPattern = function(pattern){
    for(var i = 0; i < this.tiles.length; i++){
      this.tiles[i] = pattern[i];
    }
  }

  this.getTile = function(x, y){
    for(var i = 0; i < this.tiles.length; i++){
      if(this.tiles[i].x == x && this.tiles[i].y == y){
        return this.tiles[i];
      }
    }
  }

  this.hasAliveCells = function(){
    for(var i = 0; i < this.tiles.length; i++){
      if(this.tiles[i].alive){
        return true;
      }
    }
    return false;
  }

  this.clickTile = function(){
    for(var i = 0; i < this.tiles.length; i++){
      this.tiles[i].click();
    }
  }

  this.draw = function(){
    for(var i = 0; i < this.tiles.length; i++){
      this.tiles[i].draw();
    }
  }

  this.nextGeneration = function(){
    for(var i = 0; i < this.tiles.length; i++){
      this.tiles[i].alive = this.tiles[i].nextState;
    }
  }

  this.reset = function(){
    for(var i = 0; i < this.tiles.length; i++){
      this.tiles[i].alive = false;
      this.tiles[i].nextState = false;
    }
  }
}

