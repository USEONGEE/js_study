// let input = `15
// push_back 1
// push_front 2
// front
// back
// size
// empty
// pop_front
// pop_back
// pop_front
// size
// empty
// pop_back
// push_front 3
// empty
// front`.toString().trim().split('\n');
let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map(item => item.split(' '));

const deque = [];
const result = [];

for(let i of input){
    switch(i[0])  {
        case "size" :
            result.push(deque.length);
            break;
        case "empty" :
            result.push(!!deque.length ? 0 : 1);
            break;
        case "front" :
            result.push(deque[0] ?? -1);
            break;
        case "back" :
            result.push(deque[deque.length - 1] ?? -1);
            break;
        case "pop_front" :
            result.push(!!deque[0] ? deque.splice(0,1) : -1 );
            break;
        case "pop_back" : 
            result.push(deque.pop() ?? -1);
            break;
        case "push_front" :
            deque.reverse();
            deque.push(i[1]);
            deque.reverse();
            break;
        default :
            deque.push(i[1]);
    }
}
console.log(result.join('\n'));