import player from "./data/player.js";
import { gameMap, checkMap } from "./data/map.js";

const scoreBoard = document.getElementById("score");

const spawnApple = function (playerDirection) {
  if (checkMap(2).length == 0) {
  //pick a random location
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  //if location occupied, pick a new location

  while (
    x !== player.location[0] && y != player.location[1]
  ) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  }
  gameMap.skeleton[y][x] = 2;
  }
};

const eatApple = function () {
  player.score++;
  scoreBoard.innerHTML = player.score;
};

export { spawnApple, eatApple };
