import player from "./data/player.js";
import { gameMap } from "./data/map.js";

const scoreBoard = document.getElementById("score");

const spawnApple = function (playerDirection) {
  //pick a random location
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  //if location occupied, pick a new location

  while (
    x + playerDirection[0] < 0 && x + playerDirection[0] > gameMap.rowLength-1 && y + playerDirection[1] < 0 && y + playerDirection[1] > gameMap.rowLength-1 && gameMap.skeleton[x][y] != 0 &&
    gameMap.skeleton[x + playerDirection[0]][y + playerDirection[0]] != 0
  ) {
    //&& gameMap.skeleton[player.prevLocation][player.prevLocation] != 0
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  }

  gameMap.skeleton[y][x] = 2;
};

const eatApple = function () {
  player.score++;
  scoreBoard.innerHTML = player.score;
};

export { spawnApple, eatApple };
