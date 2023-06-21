const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

const stack = [];
const result = [];
const len = input.shift();

for(let i=0; i<len; i++) {
    switch(input[i]) {
        case 'pop' :
            result.push(stack.pop() ?? -1);
            break;
        case 'top' :
            result.push(stack[stack.length - 1] ?? - 1);
            break;
        case 'empty' :
            result.push(stack.length ? 0 : 1);
            break;
        case 'size' :
            result.push(stack.length);
            break;
        default :
            stack.push(input[i].split(" ")[1])
    }
}

console.log(result.join("\n"));