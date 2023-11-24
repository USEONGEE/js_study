// // stringify, 직렬화, 객체를 문자열로
// const person = {
//   name: '김달순',
//   age: 23,
//   languages: ['Korean', 'English', 'French'],
//   education: {
//     school: '한국대',
//     major: ['컴퓨터공학', '전자공학'],
//     graduated: true,
//   }
// };
// const personStr = JSON.stringify(person);
// console.log(typeof personStr);
// console.log(personStr);
// // 함수, 심볼 등은 직렬화가 되지 않음

// // stringify의 2번째 parameter : replacer 함수 -> 직렬화의 방식을 지정
// const obj = {
//   a: 1,
//   b: '2',
//   c: 3,
//   d: true,
//   e: false
// }
// const objStr1 = JSON.stringify(obj, (key, value) => { // key와 value 매개변수
//   if (key && key < 'a' || key > 'c') {
//     // 해당 프로퍼티 생략
//     return undefined;
//     // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
//     // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
//     // key와 value를 로그로 출력해보며 확인해 볼 것
//   }
//   if (typeof value === 'number') {
//     return value * 10;
//   }
//   return value;
// });
// console.log(objStr1);
// // 직렬화된 값은 띄어쓰기나 줄바꿈 없이 보여진다.

// // 3번째 parameter: 인덴트, 값을 띄어쓰기 + 줄바꿈을 해서 보여줄 수 있게 한다
// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   }
// };

// [
//   JSON.stringify(obj, null), // 2번재 인자인 replacer 함수가 없으므로 null을 입력
//   JSON.stringify(obj, null, 1),
//   JSON.stringify(obj, null, 2),
//   JSON.stringify(obj, null, '\t')
// ].forEach(i => console.log(i));

// // toJSON 프로퍼티, JSON.stringify를 실행했을 때 반환할 값을 지정할 수 있는 함수
// const obj = {
//   x: 1,
//   y: 2,
//   toJSON: function () { 
//     return `toJSON property를 실행하셨습니다.`;
//   }
// }
// console.log(
//   JSON.stringify(obj)
// );





// // parse - 역직렬화
// [
//   JSON.parse('1'),
//   JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
//   JSON.parse('true'),
//   JSON.parse('null'),
//   JSON.parse('[1, 2, 3]'),
//   JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
// ]
// .forEach(i => console.log(i, typeof i));

// // parse의 2번째 parameter : receiver 함수
// const objStr = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';
// const obj = JSON.parse(objStr, (key, value) => {
//   if (key === 'c') {
//     // 해당 프로퍼티 생략
//     return undefined;
//   }
//   if (typeof value === 'number') {
//     return value * 100;
//   }
//   return value;
// });
// console.log(obj); // ⚠️ 내부까지 적용(배열 확인해 볼 것)





// deep copy
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}
const obj2 = JSON.parse(JSON.stringify(obj1)); // JSON으로 직화 후 파싱한 값이기에 obj2는 obj1과 완전히 새로운 object 이다.
console.log(obj1);
console.log(obj2);