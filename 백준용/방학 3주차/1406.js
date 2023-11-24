// 1. L명령을 수횅하기 이전에 커서의 위치가 -1이 아닌지 확인한다.
// 	1-1. -1이면 무시한다.
// 	1-2. -1이 아니라면 커서를 1만큼 줄인다.
// 2. D 명령을 수행하기 이전에 커서의 위치가 맨 끝이 아닌지 확인한다.
// 	2-1  커서의 값이 n-1이면 무시한다.
// 	2-2. 커서의 값이 n-1보다 작으면 1만큼 늘린다.
// 3. B명령이 들어오면
// 	3-1. 커서의 값이 -1 이면 아무 일도 일어나지 않는다.
// 	3-2. 3-1이 아니라면, input[커서]의 값을 지우고 커서의 값을 1만큼 줄인다.
// 4. P 명령이 들어왔을 때
// 	4-1. input[커서]부터 끝가지 데이터를 자른 후, input[커서]위치에 데이터를 집어넣고 그 뒤에 자른 데이터를 붙힌다.

const input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`.toString().trim().split('\n');

// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

let result = input.shift().split('');
input.shift();
let cursor = result.length - 1;

for (let i of input) {
  switch (i) {
    case ('L'):
      if (cursor !== -1) {
        cursor--;
      }
      continue;
    case ('D'):
      if (cursor < result.length - 1) {
        cursor++;
      }
      continue;
    case ('B'):
      if (cursor > -1) {
        result = [...result.splice(0, cursor), ...result.splice(1)]
        cursor--;
      }
      continue;
    default:
      result = [...result.splice(0, cursor + 1), i[2], ...result];
      cursor++;
  }
}

console.log(result.join(''));