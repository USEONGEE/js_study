// const input = require("fs").readFileSync('/dev/stdin').toString();
const input = 'Baekjoon Online Judge';
let result = '';
for (let i = 0; i < input.length; i++) {
    const value = input.charCodeAt(i);
    // a-m
    if(value >= 65 && value <= 77) {
        result += String.fromCharCode(value + 13);
        continue;
    }
    // n -z
    if(value >= 78 && value <= 90) {
        result += String.fromCharCode(value - 13);
        continue;
    }
    // A - M
    if(value >= 97 && value <= 109) {
        result += String.fromCharCode(value + 13);
        continue;
    }
    // N - Z
    if(value >= 110 && value <= 122) {
        result += String.fromCharCode(value - 13);
        continue;
    }
    result += input[i]
}

console.log(result);