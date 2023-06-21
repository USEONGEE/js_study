// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).sort((a, b)=> +a - (+b)).map(item=>+item).join('\n');
const input = `5
5
4
3
2
1`.toString().split('\n').slice(1).sort((a, b)=> +a - (+b)).map(item=>+item).join('\n');


console.log(input);