import player from "./data/player.js";
import { gameMap, checkMap } from "./data/map.js";
import {playEat} from "../assets/audioScripts/eat.js";

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
    gameMap.skeleton[y][x] = 2;
  }
};

const eatApple = function () {
  //eat.play()
  playEat();
  player.score++;
  player.updateScore();
};

export { spawnApple, eatApple };
