class Game {
  constructor(board) {
    this.board = board;
    board.game = this;

    this.boats = [];
    this.currentPlayerIndex = 0;

    var colors = CONFIG.COLORS;
    var index = 0;
    var currentTile = board.start;
    while (index < colors.length) {
      var boat = new Boat(colors[index], currentTile);
      this.boats.push(boat);

      currentTile = space.nextTileInDirection(currentTile, board.startDirection);

      index++;
    }
  }

  draw() {
    this.board.draw();
  }

  getCurrentPlayer() {
    var player = this.boats[this.currentPlayerIndex];
    return player;
  }

  endTurn() {
    this.currentPlayerIndex++;
    this.currentPlayerIndex %= this.boats.length;
  }
}

