
let input = `5
1`.toString().trim().split('\n').map(item => +item);
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(item => +item);

input.shift();
input = input.sort((a, b) => a - b);

let mean = Math.round(input.reduce((acc, curr) => acc + curr, 0) / input.length);

let median = input[Math.floor(input.length / 2)];

const dict = {}
const manyList = []
new Set(input).forEach(item => dict[item] = 0)
input.forEach(item => dict[item]++);

const many = Math.max(...Object.values(dict))
Object.entries(dict).forEach(([key, value]) => {
    if (value == many) manyList.push(+key);
})
const mode = manyList.length === 1 ? manyList[0] : manyList.sort((a, b) => a - b)[1]

let range = input.at(-1) - input[0];

console.log(mean + '\n' + median + '\n' + mode + '\n' + range)