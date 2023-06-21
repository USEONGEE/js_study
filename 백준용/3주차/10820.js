// const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');
const input = `This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`.toString().split('\n');

if (input.at(-1) === '') input.pop(); 

const result = input.map(item=> 
    [item.match(/[a-z]/g) ? item.match(/[a-z]/g).length : 0,
    item.match(/[A-Z]/g) ? item.match(/[A-Z]/g).length : 0,
    item.match(/\d/g) ? item.match(/\d/g).length : 0,
    item.match(/\s/g) ? item.match(/\s/g).length : 0].join(' ') 
).join('\n')

console.log(result)