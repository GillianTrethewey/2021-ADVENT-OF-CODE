const fs = require("fs");

const file = fs.readFileSync("day02.txt", "utf8");
const data = file.split("\n");

// Problem 1
{
  let forward = 0;
  let down = 0;

  for (let i = 0; i < data.length; i++) {
    const [direction, strQuantity] = data[i].split(" ");
    const quantity = Number(strQuantity);

    switch (direction) {
      case "up":
        down -= quantity;
        break;
      case "down":
        down += quantity;
        break;
      case "forward":
        forward += quantity;
        break;
      default:
        console.log(`Unknown direction: ${direction}`);
    }
  }

  console.log(`Count 1: ${forward * down}`);
} //1727835

// Problem 2
{
  let forward = 0;
  let down = 0;
  let aim = 0;

  for (let i = 0; i < data.length; i++) {
    const [direction, strQuantity] = data[i].split(" ");
    const quantity = Number(strQuantity);

    switch (direction) {
      case "up":
        aim -= quantity;
        break;
      case "down":
        aim += quantity;
        break;
      case "forward":
        forward += quantity;
        down += quantity * aim;
        break;
      default:
        console.log(`Unknown direction: ${direction}`);
    }
  }

  console.log(`Count 1: ${forward * down}`);
} //1544000595
