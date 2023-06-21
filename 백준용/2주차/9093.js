const input = `2
I am happy today
We want to win the first prize`.toString().split("\n").slice(1).map(item => 
    item.split(' ').map(item => 
        item.split('').reverse().join(''))
    .join(' '));

console.log(input.join('\n'));

// console.log(require("fs").readFileSync('/dev/stdin').toString().split("\n").slice(1).map(item => item.split(' ').map(item => item.split('').reverse().join('')).join(' ')).join('\n'))
