const input = `apple`.toUpperCase()
// const input = require("fs").readFileSync('/dev/stdin').toString().toUpperCase().split('\n')[0];

const data = {};
for(let i of input) {
    if(!!data[i]) 
        data[i] = data[i] + 1;
    else
        data[i] = 1;
} 

let max = 0;
const maxKey = []
for(let i in data) {
    if(data[i] > max) { 
        maxKey.length = 0;
        maxKey.push(i);
        max = data[i];
    }
    else if (data[i] === max) {
        maxKey.push(i);
    }
}


if(maxKey.length === 1)
    console.log(maxKey[0]);   
else
    console.log('?');

