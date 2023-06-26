const input = `32 6
27 16 30 11 6 23`.trim().toString().split('\n');

// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = new Array(+(input[0].split(' ')[0]) + 1).fill('').map((_,i) => i);
arr.shift();
const next = input[1].split(' ').map(item => +item);
let acc = 0;

for(let i of next) {
  const nextIndex = arr.indexOf(i);
  acc += arr.length / 2 > nextIndex ? nextIndex : arr.length - nextIndex;
  arr = [...(arr.splice(nextIndex)), ...arr];
  arr.shift();
}

console.log(acc);
