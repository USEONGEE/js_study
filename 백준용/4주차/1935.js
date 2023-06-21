const input = `1
AA+A+
1`.split('\n');
// const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');
input.shift()
const exp = input.shift();
const number = input.map(item => +item);
const stack = [];

for (let i of exp) {
    if (i >= 'A' && i<='Z') {
        stack.push(number[i.charCodeAt() - 65]);
        continue;
    }
    const [b, a] = [stack.pop(), stack.pop()];
    switch (i) {
        case '+':
            stack.push(a + b);
            break;
        case '-':
            stack.push(a - b);
            break;
        case '/':
            stack.push(a / b);
            break;
        default :
            stack.push(a * b);
    }
}
console.log(stack[0].toFixed(2));