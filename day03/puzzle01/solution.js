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
    let biggest = 0;
    let biggestSecond = 0;
    for (let i = 0; i < battery.length; i++) {
      if (battery[i] > biggest && i + 1 !== battery.length) {
        biggest = battery[i];
        biggestSecond = 0;
      } else if (battery[i] > biggestSecond) {
        biggestSecond = battery[i];
      }
    }
    const fullNum = biggest.toString() + biggestSecond.toString();
    sum += parseInt(fullNum);
  });
  console.log(sum);
};

solution();
