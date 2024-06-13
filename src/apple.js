import player from "./data/player.js";
import { gameMap, checkMap } from "./data/map.js";

const scoreBoard = document.getElementsByClassName("score");

const spawnApple = function (playerDirection = [0, 0]) {
  if (checkMap(2).length == 0) {
    //pick a random location
    let x = Math.floor(Math.random() * gameMap.rowLength);
    let y = Math.floor(Math.random() * gameMap.rowLength);
    //if location occupied, pick a new location
    while (gameMap.skeleton[y][x] == 1 || gameMap.skeleton[y][x] == 9) {
      x = Math.floor(Math.random() * gameMap.rowLength);
      y = Math.floor(Math.random() * gameMap.rowLength);
    }
    console.log(`${gameMap.skeleton[y][x] == 1} X: ${x} Y: ${y}`);
    console.log(gameMap.skeleton);

    gameMap.skeleton[y][x] = 2;
  }
};

const eatApple = function () {
  player.score++;
  for (let i = 0; i < scoreBoard.length; i++) {
  scoreBoard[i].innerHTML = player.score;
  }
};

export { spawnApple, eatApple };
