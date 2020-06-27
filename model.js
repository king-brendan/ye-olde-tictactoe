class Model {
  constructor(i) {
    this.board = this.createBoard();
    this.whoseMove = i;
    this.winner = "-";
    this.loser = "-";
  }

  //creates empty board
  createBoard() {
    var b = new Array(3);
    for (var i = 0; i < b.length; i++) {
      b[i] = new Array(3);
      for (var j = 0; j < b.length; j++) {
        b[i][j] = "-";
      }
    }
    return b;
  }

  //displays the game state
  displayState() {
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board.length; j++) {
        console.log(this.board[i][j] + " ");
      }
      console.log("\n");
    }
  }

  //registers a move to the game board
  //r: row #, c: column #
  //note that this.board is indexed from 0
  //returns 1 if move was successfulo, 0 if not
  move(r, c) {
    if (this.board[r][c] == "-") {
      this.board[r][c] = this.whoseMove;
      this.whoseMove = otherMove(this.whoseMove);
      return 1;
    } else {
      return 0;
    }
  }

  //determines whether the game is won or not
  gameWon() {
    for (var i = 0; i < 3; i++) {
      if ((this.board[i][0] != "-") && ((this.board[i][0] == this.board[i][1]) && (this.board[i][0] == this.board[i][2])))  {
        this.winner = this.board[i][0];
        this.loser = otherMove(this.board[i][0]);
        return true;
      } else if ((this.board[0][i] != "-") && ((this.board[0][i] == this.board[1][i]) && (this.board[0][i] == this.board[2][i])))  {
        this.winner = this.board[0][i];
        this.loser = otherMove(this.board[0][i]);
        return true;
      }
    }

    if ((this.board[0][0] != "-") && ((this.board[0][0] == this.board[1][1]) && (this.board[0][0] == this.board[2][2]))) {
      this.winner = this.board[0][0];
      this.loser = otherMove(this.board[0][0]);
      return true;
    }

    if ((this.board[0][2] != "-") && ((this.board[0][2] == this.board[1][1]) && (this.board[0][2] == this.board[2][0]))) {
      this.winner = this.board[0][2];
      this.loser = otherMove(this.board[0][2]);
      return true;
    }

    console.log(this.displayState());
  }

  //gets a tile value at a certain spot
  getTile(r, c) {
    var t = this.board[r][c];
    return t;
  }
}

//returns the opposite move from the one entered
function otherMove(m) {
  if (m == "X") {
    return "O";
  } else {
    return "X";
  }
}
