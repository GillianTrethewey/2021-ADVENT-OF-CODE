const fs = require("fs");

const lines = fs
  .readFileSync("day03.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x));

const length = lines[0].length;

// counting the zeros and ones in each column in the data

function getCount(lines) {
  const zeros = Array(length).fill(0);
  const ones = Array(length).fill(0);

  for (const line of lines) {
    const bits = [...line];
    bits.forEach((bit, index) => {
      if (bit === "0") {
        zeros[index]++;
      } else {
        ones[index]++;
      }
    });
  }

  return { zeros, ones };
}

// determining whether zeros or ones dominated for each column

function part1() {
  const { zeros, ones } = getCount(lines);
  let gammaRate = ""; // Most common bits
  let epsilonRate = ""; // Least common bits

  for (let i = 0; i < length; i++) {
    let bit = 0;
    if (ones[i] > zeros[i]) {
      bit = 1;
    }
    gammaRate += bit;
    epsilonRate += bit === 1 ? 0 : 1;
  }

  console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
}
part1();

// recursive functions to filter the data

function getO2Rating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  let mostCommonBit = "1";
  if (zeros[index] > ones[index]) {
    mostCommonBit = "0";
  }
  const filtered = lines.filter((line) => line[index] === mostCommonBit);
  if (filtered.length === 1) {
    return filtered[0];
  }
  return getO2Rating(filtered, index + 1);
}

function getCO2Rating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  let leastCommonBit = "0";
  if (zeros[index] > ones[index]) {
    leastCommonBit = "1";
  }
  const filtered = lines.filter((line) => line[index] === leastCommonBit);
  if (filtered.length === 1) {
    return filtered[0];
  }
  return getCO2Rating(filtered, index + 1);
}

function part2() {
  const O2 = getO2Rating(lines);
  const CO2 = getCO2Rating(lines);

  console.log(parseInt(O2, 2) * parseInt(CO2, 2));
}

part2();
/*2724524
2775870*/
