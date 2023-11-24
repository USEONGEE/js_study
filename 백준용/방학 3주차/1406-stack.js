const input = `abc
9
L
L
L
L
L
P x
L
B
P y`.toString().trim().split('\n');

// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const front = input.shift().split('');
input.shift();
const back= [];

for (let i of input) {
  switch (i) {
    case ('L'):
      if(front.length !== 0){
        back.push(front.pop());
      }
      continue;
    case ('D'):
      if(back.length !== 0){
        front.push(back.pop());
      }
      continue;
    case ('B'):
      front.pop();
      continue;
    default:
      front.push(i[2]);
  }
}

console.log(front.join('')+back.join(''))