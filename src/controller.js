import { gameMap, updateMap } from "./data/map.js";

const player = {
  location: [0, 0],
  direction: "down",
  score: 0,
};

const moveForward = function () {
  if (player.direction == 'down') {
    player.location[0]++;
  } else if (player.direction == 'up') {
    player.location[0]--;
  } else if (player.direction == 'left') {
    player.location[1]--;
  } else if (player.direction == 'right') {
    player.location[1]++;
  }
  gameMap.skeleton[player.location[0]][player.location[1]] = 1;
};

const changeDirection = function (e) {
  if (e.key == 'a') {
    player.direction = 'left';
  } else if (e.key == 'w') {
    player.direction = 'up';
  } else if (e.key == 'd') {
    player.direction = 'right';
  } else if (e.key == "s") {
    player.direction = 'down';
  }
};

export {moveForward, changeDirection};
