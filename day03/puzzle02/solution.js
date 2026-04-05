/*

was going to solve this recursively...then found a note from myself from three months ago saying to use a reducer instead...thanks past me, that was way easier

*/

import { promises as fs } from "fs";

const solution = async () => {
  const data = await fs.readFile("./input.txt", "utf8");
  let dataArray = data.split(/\r\n|\r|\n/);
  dataArray = dataArray.map((line) => {
    return line.split("").map((e) => {
      return parseInt(e);
    });
  });
  let sum = 0;
  dataArray.forEach((battery) => {
    let batteryPointer = 0;
    let fullNum = "";
    for (let i = 12; i > 0; i--) {
      // find the highest num with at least i places remaining after it. evaluate the array starting at either 0 or the index of the last found num, and ending i places from the end
      let batterySlice = battery.slice(batteryPointer, battery.length + 1 - i);
      const highestNum = batterySlice.reduce((a, b) => Math.max(a, b));
      // find the index of the first instance of the highest num inside the slice, update pointer
      batteryPointer += batterySlice.indexOf(highestNum) + 1;
      fullNum += highestNum.toString();
    }
    sum += parseInt(fullNum);
  });
  console.log(sum);
};

solution();
