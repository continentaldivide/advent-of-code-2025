import { promises as fs } from "fs";

const solution = async () => {
  const data = await fs.readFile("./input.txt", "utf8");
  const dataArray = data.split(",");
  let sum = 0;
  dataArray.forEach((range, j) => {
    const [start, end] = range.split("-").map((e) => {
      return parseInt(e);
    });

    for (let i = start; i <= end; i++) {
      const stringOfNum = i.toString();
      const halfLength = Math.floor(stringOfNum.length / 2);
      let firstHalf = stringOfNum.slice(0, halfLength);
      let secondHalf = stringOfNum.slice(halfLength);
      if (firstHalf === secondHalf) {
        sum += i;
      }
    }
  });
  console.log(sum);
};

solution();
