const input = Number(`10`.toString().trim())
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const d = new Array(input + 1).fill(NaN);
d[0] = 0; d[1] = 0; d[2] = 1;
for (let i = 3; i <= input; i++) {
    d[i] = d[i - 1] + 1;

    if (i % 2 === 0) d[i] = Math.min(d[i], d[i / 2] + 1);
    if (i % 3 === 0) d[i] = Math.min(d[i], d[i / 3] + 1);
}
console.log(d[input])