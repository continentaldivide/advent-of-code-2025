/*

map over dataArray and make each item map to an object with 'direction' and 'value' properties
create "zero counter"
create "current value"
iterate over new dataArray
ternary: element.direction === "L" ? subtract element.value from current value : add them instead
check if current value === 0 -- if so, increment zero counter
check if current value < 0 -- if so, add 99
after loop completes, return zero counter

*/

import { promises as fs } from "fs";

const solution = async () => {
  const data = await fs.readFile("./input.txt", "utf8");
  let lines = data.split(/\r\n|\r|\n/);
  const dataArray = lines.map((e) => {
    return { direction: e.slice(0, 1), value: parseInt(e.slice(1)) };
  });

  let zeroCounter = 0;
  let currentValue = 50;

  dataArray.forEach((e) => {
    e.direction === "L" ? (currentValue -= e.value) : (currentValue += e.value);
    if (currentValue % 100 === 0) {
      zeroCounter++;
      currentValue = 0;
    } else if (currentValue > 100) {
      currentValue = parseInt(currentValue.toString().slice(-2));
    }
    while (currentValue < 0) {
      currentValue += 100;
    }
  });
  console.log(zeroCounter);
};

solution();
