const input = `7
6 3
3 5
4 1
2 4
4 7
1 6`.toString().trim().split('\n');

// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const len = +(input.shift());

const parent = new Array(len + 1).fill('');
const hasParent = new Array(len + 1).fill(false);

hasParent[1] = true;

for (let i of input) {
  const [l, r] = i.split(' ').map(item => +item);
  if (hasParent[l]) {
    parent[r] = l
    hasParent[r] = true;
  } else if (hasParent[r]) {
    parent[l] = r;
    hasParent[l] = true;
  } else {
    input.push(i);
  }
}
console.log(parent.splice(2).join('\n'));