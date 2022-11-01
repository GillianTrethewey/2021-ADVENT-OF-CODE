const fs = require("fs");

const file = fs.readFileSync("day01.txt", "utf8");
const data = file.split("\n").map((n) => Number(n));

// Problem 1
{
  let count = 0;

  for (let i = 1; i < data.length; i++) {
    const curr = data[i];
    const prev = data[i - 1];

    if (curr > prev) count++;
  }

  console.log(`Count 1: ${count}`);
} //1758

// Problem 2
{
  let count = 0;

  for (let i = 1; i < data.length - 2; i++) {
    const curr = data[i] + data[i + 1] + data[i + 2];
    const prev = data[i - 1] + data[i] + data[i + 1];

    if (curr > prev) count++;
  }

  console.log(`Count 2: ${count}`);
}
//1805
