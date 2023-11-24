// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const size = input.length;
// const obj = {};
// const answer = [];

// for (let tree of input) {
//   obj[tree] = obj[tree] ? obj[tree] + 1 : 1;
// }

// for (let tree in obj) {
//   const total = obj[tree];
//   obj[tree] = ((total * 100) / size).toFixed(4);
//   answer.push(`${tree} ${obj[tree]}`);
// }
// console.log(answer.sort().join('\n'));

const c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
n=5;
console.log([...c.splice(0,n), ... c.splice(1)]);