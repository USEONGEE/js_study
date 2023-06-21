// const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');
const input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.toString().split('\n');

const queue = [];
const result = [];

input.shift();

for(let i of input){
    switch(i)  {
        case "pop" : 
            result.push(queue.shift() ?? -1);
            break;
        case "size" :
            result.push(queue.length);
            break;
        case "empty" :
            result.push(!!queue.length ? 0 : 1);
            break;
        case "front" :
            result.push(queue[0] ?? -1);
            break;
        case "back" :
            result.push(queue.at(-1) ?? -1);
            break;
        default :
            queue.push(i.split(' ')[1]);
    }
}
console.log(result.join('\n'));