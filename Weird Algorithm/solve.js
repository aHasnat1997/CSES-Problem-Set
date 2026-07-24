const n = parseInt(require("fs").readFileSync(0, "utf-8").trim());

let current = n;
const sequence = [];

while (current !== 1) {
  sequence.push(current);
  if (current % 2 === 0) {
    current = current / 2;
  } else {
    current = 3 * current + 1;
  }
}
sequence.push(1);

console.log(sequence.join(" "));
