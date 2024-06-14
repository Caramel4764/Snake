const scoreBoard = document.getElementsByClassName("score");

const player = {
  location: [0, 0],
  prevLocation: [],
  direction: "down",
  tempDirection: "down",
  score: 0,
  alive: false,
  color: "green",
  speed: 200,
  updateScore: function () {
    for (let i = 0; i < scoreBoard.length; i++) {
      scoreBoard[i].innerHTML = player.score;
    }
  }
};

export default player;