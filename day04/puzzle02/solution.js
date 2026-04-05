/*
  just kinda yolo it tbh
  - refactor part 1 to only evaluate rolls instead of going to each coord and checking for a roll
  - nest accessible roll count into a while loop. if count changed, remove accessed rolls from rollmap and continue loop. stop when we don't find any accessible rolls
*/

import { promises as fs } from "fs";

const solution = async () => {
  const data = await fs.readFile("./input.txt", "utf8");
  let dataArray = data.split(/\r\n|\r|\n/);
  let accessibleRollCount = 0;
  const rollMap = {};
  dataArray.forEach((line, i) => {
    const lineArray = line.split("");
    lineArray.forEach((e, j) => {
      if (e === "@") {
        rollMap[`${i}.${j}`] = true;
      }
    });
  });

  let rollCountChanged = true;

  while (rollCountChanged) {
    rollCountChanged = false;
    const accessibleRolls = [];

    for (const key in rollMap) {
      const coords = key.split(".");
      let i = parseInt(coords[0]);
      let j = parseInt(coords[1]);
      let counter = 0;
      let neighbors = [
        `${i}.${j + 1}`,
        `${i}.${j - 1}`,
        `${i + 1}.${j}`,
        `${i - 1}.${j}`,
        `${i + 1}.${j + 1}`,
        `${i - 1}.${j + 1}`,
        `${i + 1}.${j - 1}`,
        `${i - 1}.${j - 1}`,
      ];
      neighbors.forEach((e) => {
        if (rollMap[e]) {
          counter++;
        }
      });
      if (counter < 4) {
        accessibleRollCount++;
        rollCountChanged = true;
        // add this roll to rolls to be removed
        accessibleRolls.push(key);
      }
    }
    // remove all accessible rolls
    accessibleRolls.forEach((roll) => {
      delete rollMap[roll];
    });
  }
  console.log(accessibleRollCount);
};

solution();
