// let input = `4
// 1 3 5 7`.toString().trim().split('\n');

let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

input = input[1].split(' ').map(item => +item);
let result = 0;

const isPrime = (number) => {
    if(number === 1) return false;

    for(let i = 2; i <= Math.sqrt(number); i++ ){
        if(number % i === 0) return false;
    }
    return true;
}

for(let i of input) if(isPrime(i)) result++;

console.log(result);
