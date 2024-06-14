import { moveForward, changeDirection } from "./src/controller.js";
import { restart, startGame } from "./src/gameState.js";
import player from "./src/data/player.js";
import { spawnApple } from "./src/apple.js";
import { drawMap } from "./src/data/map.js";

let playAgainButton = document.getElementById("playAgainButton");
playAgainButton.addEventListener("click", restart);

let playButton = document.getElementById("startButton");
playButton.addEventListener("click", startGame);
window.addEventListener("keydown", changeDirection);

drawMap();
spawnApple();

let hiddenScoreInput = document.getElementById("hiddenScoreInput");

setInterval(function () {
  if (player.alive == true) {
    moveForward();
    drawMap();
    hiddenScoreInput.value = player.score;
  }
}, player.speed);
