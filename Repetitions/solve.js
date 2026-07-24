const fs = require("fs");
const dna = fs.readFileSync(0, "utf-8").trim();

let maxLength = 1;
let currentLength = 1;

// Iterate through the string starting from index 1
for (let i = 1; i < dna.length; i++) {
  if (dna[i] === dna[i - 1]) {
    // Same character as previous, increment current length
    currentLength++;
  } else {
    // Different character, update max and reset current
    maxLength = Math.max(maxLength, currentLength);
    currentLength = 1;
  }
}

// Don't forget to check the last sequence
maxLength = Math.max(maxLength, currentLength);

console.log(maxLength);
