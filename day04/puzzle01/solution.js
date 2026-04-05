/*
  put all rolls into map
  iterate over all coords
  if roll at coords
  build array of 8 neighbor coords
  array.foreach
  if e in map, increment
  if (counter < 4 ) {accessibleRollCount++}
*/

import { promises as fs } from "fs";

const solution = async () => {
  const data = await fs.readFile("./input.txt", "utf8");
  let dataArray = data.split(/\r\n|\r|\n/);
  let accessibleRollCount = 0;
  const rollMap = {};
  // put all rolls into map
  dataArray.forEach((line, i) => {
    const lineArray = line.split("");
    lineArray.forEach((e, j) => {
      if (e === "@") {
        rollMap[`${i}.${j}`] = true;
      }
    });
  });
  // iterate over all coords
  dataArray.forEach((line, i) => {
    const lineArray = line.split("");
    lineArray.forEach((e, j) => {
      // if roll at coords
      if (e === "@") {
        let counter = 0;
        // build array of 8 neighbor coords
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
        // array.foreach
        neighbors.forEach((e) => {
          // if e in map, increment
          if (rollMap[e]) {
            counter++;
          }
        });
        // if (counter < 4 ) {accessibleRollCount++}
        if (counter < 4) {
          accessibleRollCount++;
        }
      }
    });
  });

  console.log(accessibleRollCount);
};

solution();
