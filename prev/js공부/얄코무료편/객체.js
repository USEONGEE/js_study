// // 표현식으로 키값 정의하기
// let idx = 0;
// const obj = {
//     ['key-' + ++idx]: `value-${idx}`, // 객체의 key값을 연산을 통해 정의할 수 있다. -> 동적으로 객체를 작성할 수 있다.
//     ['key-' + ++idx]: `value-${idx}`,
//     ['key-' + ++idx]: `value-${idx}`,
//     [idx ** idx]: 'POWER'
// }
// console.log(obj);




// // 객체의 key값을 배열, 객체로 했을 때
// const objKey = { x: 1, y: 2 };
// const arrKey = [1, 2, 3];
// const obj = {
//     [objKey]: '객체를 키값으로', // 객체를 key 값으로 넣으면 [object Object] 라는 문자열로 객체가 치환된다.
//     [arrKey]: '배열을 키값으로' // 배열을 key 값으로 넣으면 property들을 이어붙인 string이 만들어진다. -> '1,2,3'
// }
// for (const i in obj) {
//     console.log(i);
// }




// // property 삭제
// const person1 = {
//     name: '홍길동',
//     age: 24,
//     school: '한국대',
//     major: '컴퓨터공학'
// };
// console.log(person1);
// delete person1.name; // person1 객체의 name property가 삭제됨.
// console.log(person1);




// // ES6 추가 문법
// const x = 1, y = 2;
// const obj1 = {
//     x: x,
//     y: y
// }
// console.log(obj1);
// const obj2 = { x, y };// 객체 선언 시 property의 key값과 대입할 변수명이 같을 경우에는 이렇게 선언이 가능하다.
// console.log(obj2); 




// // method : 객체에 축약표현으로 정의된 함수로 된 property (value값이 함수인 property랑 method는 차이가 있다.)
// // ⭐️ 메서드 정의
// const person = {
//     name: '홍길동',
//     salutate(formal) { // 이게 method이다.
//         return formal
//             ? `안녕하십니까, ${this.name}입니다.`
//             : `안녕하세요, ${this.name}이에요.`;
//     }
// }
// console.log(person.salutate(true));




