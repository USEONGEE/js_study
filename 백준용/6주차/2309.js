
let input = `20
7
23
19
10
15
25
8
13`.toString().trim().split('\n').map(item => +item);

// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(item => +item);

let result = []
for(i in input) {
    const except = input.splice(0,1);
    for(j in input) {
        const currArray = input.filter((_,index) =>  index != j)
        const sum = currArray.reduce((acc, curr) => acc + curr, 0);
        if(sum === 100){
            result = currArray
            break;
        }
    }
    if(result.length > 0 ) break;
    else input.push(except[0]);
}
console.log(result.sort((a,b) => a - b).join('\n'));
