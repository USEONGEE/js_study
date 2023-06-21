// const input = `6
// (())())
// (((()())()
// (()())((()))
// ((()()(()))(((())))()
// ()()()()(()()())()
// (()((())()(`.toString().split('\n');

const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

input.shift();

let [left,right] = [0,0];
result = input.map((items) => {
    const value = items.split('').map(item => {
        if(item === '(') left++;
        else right++;
        if(left < right) return "NO";
    })
    if (left !== right) value.push("NO");
    [left,right] =[0,0];
    return value;
})
result = result.map(item => item.includes("NO") ? "NO" : "YES");
console.log(result.join('\n'));