/*
for each range...
for each number in that range...
check the length of the number. if even, max "foot" size = length/2. if odd, max "foot" size = floor(length/2)
for each possible "foot" from 1 to maxfootsize...
if (length % foot !== 0) {continue} (this foot doesn't go into num an even amount of times)
else if (foot.repeat(length/foot) === number) {
we found it!
}
*/

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
      const maxFootSize =
        stringOfNum.length % 2 === 0
          ? stringOfNum.length / 2
          : Math.floor(stringOfNum.length / 2);
      for (let h = 1; h <= maxFootSize; h++) {
        const foot = stringOfNum.slice(0, h);
        if (stringOfNum.length % h !== 0) {
          continue;
        } else if (foot.repeat(stringOfNum.length / h) === stringOfNum) {
          sum += i;
          break;
        }
      }
    }
  });
  console.log(sum);
};

solution();
