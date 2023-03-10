export class TicTacToe {
  constructor() {
    // Getting elements from html
    this.board = document.getElementById("board");
    this.playersForm = document.getElementById("players-form");
    this.currentPlayer = document.getElementById("current-player");

    this.players = {
      player1: "Player 1",
      player2: "Player 2",
    };
    this.currentValue = "X";

    // Prevent losing `this` reference (Using this in events loose the reference of the class) in other words:
    // Executing this in the right context
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Using event delegation
    this.board.addEventListener("click", this.handleClick);
    this.playersForm.addEventListener("submit", this.handleSubmit);

    this.updateCurrentPlayer();
  }

  handleClick(e) {
    //Accept only clicks on board
    if (e.target.id !== "board") {
      e.target.textContent = this.currentValue;
      //CSS transition class
      e.target.classList.add("has-text");
      //Preventing more clicks in cells that already play
      e.target.classList.add("cell-played");
      //Toggle between X and O on click
      this.currentValue = this.currentValue === "X" ? "O" : "X";
      //Update player name on click
      this.updateCurrentPlayer();
    }
  }

  handleSubmit(e) {
    // Prevent default behavior of form submit (Do not reload the page)
    e.preventDefault();
    // Setting the players name's by getting the input value
    this.players = {
      player1: this.playersForm.elements[0].value,
      player2: this.playersForm.elements[1].value,
    };
    // Updating current players value
    this.updateCurrentPlayer();
  }

  updateCurrentPlayer() {
    this.currentPlayer.textContent =
      this.currentValue === "X"
        ? `Its your turn ${this.players.player1}`
        : `Its your turn ${this.players.player2}`;
  }
}
