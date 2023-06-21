const input = "baekjoon"
// const input = require("fs").readFileSync('/dev/stdin').toString().trim()

const obj = {};
for(let i = 97; i <= 122; i++ ) obj[String.fromCharCode(i)] = 0;
for(let i of input) obj[i]++;
console.log(Object.values(obj).join(' '))