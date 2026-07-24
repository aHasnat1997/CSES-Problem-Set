const fs = require("fs");
const lines = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = parseInt(lines[0]);
const numbers = lines[1].split(" ").map(Number);

// Calculate expected sum: 1 + 2 + ... + n
const expectedSum = (n * (n + 1)) / 2;

// Calculate actual sum of given numbers
const actualSum = numbers.reduce((a, b) => a + b, 0);

// Missing number is the difference
const missing = expectedSum - actualSum;

console.log(missing);
