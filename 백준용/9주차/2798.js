const input = `10 500
93 181 245 214 315 36 185 138 216 295`.toString().trim().split('\n');

// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const target = +(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(item => +item);

const length = arr.length;
let max = 0;

for (let i = 0; i < length - 2; i++) {
  for (let j = i + 1; j < length - 1; j++) {
    for (let k = j + 1; k < length; k++) {
      const sum = arr[i] + arr[j] + arr[k]; 
      if(sum > target) continue;
      if(sum > max) max = sum;
    }
  }
}
console.log(max);