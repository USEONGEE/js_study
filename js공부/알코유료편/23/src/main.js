// 여러 스크립트 파일을 index.html에 가져와서 사용하면은
// 1. 스크립트 파일 간의 변수명이 중복되어 오류가 발생하는 것을 막을 수 없다 -> 스크립트 파일간의 개입이 생긴다.
// 2. 그러므로 스크립트 파일을 로드하는데 순서에 의존해야 하므로 좋은 프로그래밍이 아님

// 그래서 모듈화해서 사용한다, main.js 파일에 다른 js파일들을 모듈화해서 사용한다.


// // module1
// import { x, y, person } from './module1.js';
// console.log(x, y);
// console.log(person);
// // 이름을 바꿔서 가져올 수도 있다.
// import {
//     x as a,
//     y as b,
//     person as individual
// } from './module1.js'
// console.log(a,b);
// console.log(individual)





// 💡 필요한 것만 선별하여 가져오기
import { x, y } from './module1.js';
import { add, mult } from './module2.js';
import { Eagle } from './module3.js';
console.log(
    add(x, y), mult(x, y)
);
const eagle = new Eagle('독돌이', '푸드덕', '토끼');
eagle.hunt();

import * as funcs from './module4.js';
// 💡 로그 살펴볼 것!
console.log(funcs); // type: module
funcs.logResult(
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
        .filter(funcs.isOdd)
        .map(funcs.square)
        .join(', ')
);

import mod5 from './module5.js';
console.log(mod5);
console.log(
    mod5.arry
        .filter(mod5.isEven)
        .join(', ')
);

const raceResults = await fetch( // 모듈에서는 바로 await을 쓸 수 있다. main.js 자체가 하나의 async function 안에 있는 거나 마찬가지이기 때문
    'https://showcases.yalco.kr/javascript/mockserver/race-result'
)
    .then(response => response.json())

console.log(raceResults);