// // Obejct
// console.log(
//     new Object(),
//     new Object(null),
//     new Object(undefined),
//     {} // {}도 결국엔 Object로 선언됨을 알 수 있다
// );

// // 값을 넣으면 적절한 wraaping function으로 작용한다
// console.log(
//     new Object(1),
//     new Object('ABC'),
//     new Object(true),
//     new Object([1,2,3])
// )





// Object의 static method

// // assign, 인자로 주어진 객체의 property를 대상 객체에 붙힘
// const intro1 = {
//     name: '홍길동'
// };
// const intro2 = { ...intro1 };
// const personal = {
//     age : 25,
//     marrid : false
// };
// const career = {
//     job:'개발자',
//     position :'팀장'
// };
// Object.assign(intro1, personal); // intro1에 personal 객체를 붙혀넣음
// console.log(intro1);
// // 두 개 이상의 가져올 수도 있음
// Object.assign(intro2, personal, career);
// console.log(intro2);





// // keys, values, entries : 객체의 키 / 값 / [키, 값]을 배열로 반환
// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };
// console.log(
//     Object.keys(obj),
//     Object.values(obj),
//     Object.entries(obj)
// );

// // 객체가 아닐 경우 객체로 반환
// const str = 'ABCDEFG'; // 유사배열객체
// console.log(
//     Object.keys(str), // 객체로 변환되어 출력된다.
//     Object.values(str)
// )
// // 배열도 결국엔 객체이다.





// // prevenExtensions, property 추가 금지, 삭제는 가능
// const obj = { x: 1, y: 2 };
// console.log(Object.isExtensible(obj)); // 확장이 가능한지 묻는 함수
// Object.preventExtensions(obj);
// obj.z = 3;
// console.log(obj); // 추가가 안된다...ㅎ

// // 배열도 동일하게
// const arr = [1, 2];
// Object.preventExtensions(arr);
// arr[2] = 3;
// console.log(arr); // 추가 x





// // seal, property 추가, 삭제 금지
// const obj = { x: 1, y: 2 };
// console.log(Object.isSealed(obj));
// Object.seal(obj);
// console.log(Object.isSealed(obj));
// obj.x++; delete obj.x; obj.z = 3; // 추가 삭제는 안됨
// console.log(obj);





// freeze, 객체 동결 - 읽기만 가능
const obj = { x: 1, y: 2 };
console.log(Object.isFrozen(obj));
Object.freeze(obj);
console.log(Object.isFrozen(obj));
obj.x++;
console.log(obj);