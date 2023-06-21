let input = Number(`1`.toString().trim());

// let input  = parseInt(require("fs").readFileSync('/dev/stdin').toString().split('\n')[0])
if(input < 10) input *= 10;

let foo = input;
let cal;
let count = 0;
while(true){
    cal = foo % 10 + parseInt(foo / 10);
    foo = (foo % 10)*10 + cal % 10;
    count++;
    if(foo === input) break;
}

console.log(count);