// 고차함수(higher order function)
// 다른 함수(콜백함수)를 인자로 받는다

// // forEach(Array의 insatnce method)
// // for문의 대체체이나, 예외를 exception으로 처리해야함, break나 continue를 사용할 수 없다.
// // callback function - parameter : (현재값, 현재값의 index, 해당 배열 참조)
// const arr = [1,2,3,4,5];
// const result = arr.forEach(itm => {
//     console.log(itm);
// })
// console.log('반환값 : ', result);
// // 콜백함수로 화살표 함수가 아니라 기존 함수를 넣어도 된다
// function callback(itm,idx) {
//     console.log(itm, idx);
// }
// const result2 = arr.forEach(callback);
// // 인자를 3개를 다 쓴다면?
// arr.forEach((itm, idx, ar) => {
//     ar[idx]++
//     console.log(itm); // 얘는 지금 함수 밖의 arr에서 값을 받아오는 것이므로 ar[idx]++의 영향을 받지 않는다
// })
// console.log(arr); // 함수가 끝난 후 출력을 하면은 영향을 받았음을 알 수 있다





// // map(Array의 instance method), 각 element를 주어진 콜백함수로 처리한 새 배열을 반환한다
// const orgArr = [1, 2, 3, 4, 5];
// const arr1 = orgArr.map(i => i + 1);
// const arr2 = orgArr.map(i => i % 2 ? '홀' : '짝');
// console.log(orgArr); // 원본 함수에 영향을 주지 않는다
// console.log(arr1);
// console.log(arr2);

// // map 예시 2
// const orgArr = [
//     { name: '사과', cat: '과일', price: 3000 },
//     { name: '오이', cat: '채소', price: 1500 },
//     { name: '당근', cat: '채소', price: 2000 },
//     { name: '살구', cat: '과일', price: 2500 },
//     { name: '피망', cat: '채소', price: 2500 },
//     { name: '딸기', cat: '과일', price: 5000 }
// ];
// const arr1 = orgArr.map(itm => {
//     // 💡 블록 안에서는 return 문 필요함
//     return {
//         name: itm.name,
//         cat: itm.cat
//     }
// });
// console.log(arr1);

// // map 예시 3
// // 디스트럭쳐링 사용 (편의에 따라 적절히)
// // 각각의 인자로 넘어오는 값들이 객체이므로 디스트럭쳐링을 사용해서 좀 더 간단한 코드를 구현 가능
// const orgArr = [
//     { name: '사과', cat: '과일', price: 3000 },
//     { name: '오이', cat: '채소', price: 1500 },
//     { name: '당근', cat: '채소', price: 2000 },
//     { name: '살구', cat: '과일', price: 2500 },
//     { name: '피망', cat: '채소', price: 2500 },
//     { name: '딸기', cat: '과일', price: 5000 }
// ];
// const arr2 = orgArr.map(({ name, cat }) => {
//     return { name, cat }
// });
// console.log(arr2);





// // 콜백함수를 인자로 넣었을 경우 true를 반환하는
// // find : 첫 번째 값 반환, findLast : 마지막 값 반환
// // findIndex : 첫 번째 값의 index 반환, findLastIndex : 마지막 값의 index 반환
// // callback function - parameter : (현재값, 현재값의 index, 해당 배열 참조)
// const arr = [1,2,'삼',4,5,6,'칠',8,9];
// const isString = i => typeof i === 'string';
// const isBoolean = i => typeof i === 'boolean';
// console.log(
//     arr.find(isString),
//     arr.findLast(isString),
//     arr.findIndex(isString),
//     arr.findLastIndex(isString)
// );
// // 없는 값은 undefined, index는 -1을 반환
// console.log(
//     arr.find(isBoolean),
//     arr.findLast(isBoolean),
//     arr.findIndex(isBoolean),
//     arr.findLastIndex(isBoolean)
// )

// // 예시 2, 배열을 자유자재로 다루는 예시
// const arr = [
//     { name: '사과', cat: '과일', price: 3000 },
//     { name: '오이', cat: '채소', price: 1500 },
//     { name: '당근', cat: '채소', price: 2000 },
//     { name: '살구', cat: '과일', price: 2500 },
//     { name: '피망', cat: '채소', price: 3500 },
//     { name: '딸기', cat: '과일', price: 5000 }
// ];
// const isCheapFruit = i => {
//     return i.cat === '과일' && i.price < 3000;
// } // 화살표 함수의 뒷 부분이 scope이면 꼭 return을 넣어주어야 한다.
// console.log(
//     arr.find(({ cat }) => cat === '채소').name,
//     arr.findLast(isCheapFruit).name
// );





// some, every / 어떤, 모든 요소가 기준을 충족하는지 확인
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
//     arr.some(i => i % 2),
//     arr.every(i => i % 2),
//     arr.some(i => i < 0),
//     arr.every(i => i < 10)
// )

// // 예시 2
// const arr = [
//     { name: '사과', cat: '과일', price: 3000 },
//     { name: '오이', cat: '채소', price: 1500 },
//     { name: '당근', cat: '채소', price: 2000 },
//     { name: '살구', cat: '과일', price: 2500 },
//     { name: '피망', cat: '채소', price: 3500 },
//     { name: '딸기', cat: '과일', price: 5000 }
// ];

// const isCheapVege = i => {
//     return i.cat === '채소' && i.price < 2000; // true, false를 반환
// }
// const isPlant = ({ cat }) => { // destructuring
//     return ['과일', '채소'].includes(cat); // true, false를 반환
// }

// console.log(
//     arr.some(isCheapVege),
//     arr.every(isCheapVege),
//     arr.some(isPlant),
//     arr.every(isPlant)
// );





// // filter, 주어진 기준에 충족하는 요소들만 새 배열로 반환
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const odds = arr.filter(i => i % 2);
// const evens = arr.filter(i => !(i % 2));
// const largerThan3 = arr.filter(i => i > 3);
// console.log(odds);
// console.log(evens);
// console.log(largerThan3);

// // 예시 2
// const arr = [
//     { name: '사과', cat: '과일', price: 3000 },
//     { name: '오이', cat: '채소', price: 1500 },
//     { name: '당근', cat: '채소', price: 2000 },
//     { name: '살구', cat: '과일', price: 2500 },
//     { name: '피망', cat: '채소', price: 3500 },
//     { name: '딸기', cat: '과일', price: 5000 }
// ];
// console.log(
//     '과일 목록:',
//     arr
//         .filter(({ cat }) => cat === '과일')
//         .map(({ name }) => name)
//         .join(', ')
// );





// // reduce, 주어진 콜백함수에 따라 값들을 접어낙마
// // parameter 1. 콜백함수 - 인자(이전값, 현재값, 현재 인덱스, 해당 배열 참조_, 2. 초기화 값
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
//     arr.reduce((prev, curr, idx) => {
//         console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
//         return prev + curr;
//     })
// ); // 값을 접어 나가서 1부터 9까지 더한 값이 출력된다
// // index가 1부터 시작한다, 이전값과 현재값을 더한 값이 다음 루트의 이전값이 된다.

// // 초기값이 있는 경우
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
//     arr.reduce((prev, curr, idx) => {
//         console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
//         return prev + curr;
//     }, 10)
// );

// // recudeRight
// const arr = ['가', '나', '다', '라', '마', '바', '사'];
// console.log(
//     arr.reduce((prev, curr, idx) => {
//         console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
//         return prev + curr;
//     })
// );
// console.log(
//     arr.reduceRight((prev, curr, idx) => {
//         console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
//         return prev + curr;
//     })
// );





// sort, 배열을 정렬
// const arr = ['라', '사', '다', '가', '바', '마', '나'];
// arr.sort();
// console.log(arr);

// // 예시 2
// let randomWord = 'DBKGICAHFEJ';
// console.log(
//     randomWord
//         .split('')
//         .sort()
//         // .reverse()
//         .join('')
// );
// console.log(randomWord);

// 예시 3, 숫자를 문자열로 암묵적 변환함 - 오류
const arr = [1, 2, 30, 400, 10, 100, 1000];
console.log(arr.sort());