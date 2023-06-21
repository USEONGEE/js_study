
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split(' ').map(item=>+item);
const input = `7 3`.toString().trim().split(' ').map(item=>+item);

const round = new Array(input[0]).fill().map((_,i) => i+1);

let now = 0

const result = [];

while(round.length > 0) {
    now = (now + input[1]-1 ) % (round.length);
    result.push(round.splice(now,1));
}
console.log(`<${result.join(', ')}>`);