import drawMap from "./src/environment.js";
import {moveForward, changeDirection} from "./src/controller.js";
//import gameOver from "./src/gameOver.js";
import player from "./src/data/player.js";
import { spawnApple} from "./src/apple.js"
import { gameMap } from "./src/data/map.js";

let playAgainButton = document.getElementById("playAgainButton");
playAgainButton.addEventListener("click", restart);

function restart() {
  gameMap.skeleton = [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  player.score = 0;
  player.direction = "down";
  player.location = [0, 0];
  player.prevLocation = [];
  drawMap();
  spawnApple();
  player.alive=true;

}

window.addEventListener('keydown', changeDirection)

drawMap();
spawnApple();

setInterval(function () {
  if (player.alive == true) {
    moveForward();
    drawMap();
  }
}, 200);
