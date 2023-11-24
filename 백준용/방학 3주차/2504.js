const input = `(()[[]])([])`.toString();

// const input = require("fs").readFileSync('/dev/stdin').toString();

const reg = new RegExp(/\(\)|\[\]/g);
let copy = input;
while(copy != (copy = copy.replace(reg, ''))){}

if(copy.length !== 0) {
  console.log(0);
}
else {
  result = [];

  for (let i of input.split('')) {
    if (i === '(') {
      if (result[result.length - 1] === ')') {
        result.push('+');
        result.push(2);
      } else if (typeof result[result.length - 1] === 'number') {
        result.push('*');
        result.push('(');
        result.push(2);
      }
      else {
        result.push(2);
      }
  
      continue;
    }
  
    if (i === '[') {
      if (result[result.length - 1] === ')') {
        result.push('+');
        result.push(3);
      } else if (typeof result[result.length - 1] === 'number') {
        result.push('*');
        result.push('(');
        result.push(3);
      }
      else {
        result.push(3);
      }
  
      continue;
    }
  
    if (i === ')') {
      if(typeof result[result.length- 1] === 'number'){
        result.push('+');
      } else if (result[result.length - 1] === '+') {
        result.pop();
        result.push(')');
      } else {
        result.push(')');
      }
  
      continue;
    }
  
    if ( i ===']') {
      if(typeof result[result.length- 1] === 'number'){
        result.push('+');
      } else if (result[result.length - 1] === '+') {
        result.pop();
        result.push(')');
      } else {
        result.push(')');
      }
  
      continue;
    }
  }
  console.log(eval(result.join('')));
}


// 1. (, [ 이면 숫자를 적는다.
//   1-1. 바로 이전이 닫는 괄호면 +를 하고 숫자를 적는다.
// 2. 숫자 다음에 숫자가 나오면 * ( 를 추가한다음에 숫자를 적는다.
// 3. 괄호가 닫히면 두 가지의 경우가 있다.
//   3-1. 이전 값이 숫자면  + 를 넣는다.
//   3-2. 이전 값이 + 면 +를 제거하면 )를 넣는다.
//   3-3. 이전값이 ) 이면 )를 넣는다.
