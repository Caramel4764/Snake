let gameMap = {
  rowLength: 10,
  get blockSize(){ return canvas.width / this.rowLength},
  skeleton: [
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
  ],
};

const updateMap = function(newMap) {
  gameMap.skeleton = newMap;
}

const checkMap = function(target) {
  let listOfFound = [];
  for (let i = 0; i < gameMap.skeleton.length; i++) {
    for (let j = 0; j < gameMap.skeleton[i].length; j++) {
      if (gameMap.skeleton[i][j] == target) {
        listOfFound.push([i, j]);
      }
    }
  } 
  return listOfFound;
}

export { gameMap, updateMap, checkMap };