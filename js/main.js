$(document).ready(main);

var DEBUG = false;
function debug() {
  DEBUG = true;
}

var space;
var BOARD;
var GAME;
var SCREEN;
var CURR_COLOR = "yellow";

function main() {
  // load the game with the SixPlayerBoard by default.
  newGame(FullscreenBoard);
  for (button of actions.getElementsByClassName("button")){
    console.log("button id is: ", button.id);
    button.addEventListener("click", function(ev) { 
      tileTypeHandler(ev, this.id);}, 
      false);
    /*(ev) => {
        console.log("selected new color", ev.target);
        var colors = button.getElementsByClassName("color");
        var color = button.getElementsByClassName("color")[0];
        console.log("colors are ", colors);
        console.log("color is now ", color);
        CURR_COLOR = color.getAttribute("data-color");
    });
    
    button.addEventListener("click", function() {setTileFill(ev, id)});
    }
    */
  }
}

function tileTypeHandler(ev, id) {
  var id = id;
  console.log("button id for click event: ", id);
  console.log("current tile color: ", CURR_COLOR); 
}

function newGame(board) {
  if (SCREEN !== undefined) {
    SCREEN.destoryHandlers();
  }
  
  // determine the size
  var width = window.innerWidth;
  var height = window.innerHeight;

  space = new TileSpace().init(width, height);
  board = new board().init(space);
  BOARD = board;

  // hanky hacks
  space.curateBoard();
  board.registerTileSpace(space);

  GAME = new Game(board);
  SCREEN = new Screen(width, height, GAME);
  SCREEN.draw();
}

function draw() {
  SCREEN.draw();
}
