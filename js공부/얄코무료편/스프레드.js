// const class1 = {
//     x: 1, y: 'A', z: true
// };
// const class2 = class1; // 참조 복사
// const class3 = { ...class1 }; // class1의 property들을 하나하나 복사해서 가져오는 것
// console.log(class3);
// class1.x = 2;
// console.log(class3);console.log(class1); // class1의 값은 변했지만 //class3이 값은 변하지 않는다





// // 얕은 복사
// const class1 = {
//     x: 1, y: { a: 2 }, z: [3, 4]
// };
// const class2 = { ...class1 };
// class1.x++; // primitive type 이기에 class2에 영향을 주지 않는다
// class1.y.a++; // class1.y가 가리키는 변수는 reference type 이기에 class2에 영향을 준다
// class1.z[0]++;
// console.log(class1); console.log(class2);





// // 객체 생성에 객체를 이용할 수 있다
// const class1 = {
//     a: 1, b: 'a', c: true
// };
// const class2 = {
//     ...class1, z: 10
// }; // class2의 property로 class1의 property들이 들어갔다
// console.log(class2);





// 중보되는 property는 뒤의 것이 덮어쓴다
const class1 ={
    ...{a:1,b:2},
    ...{b:3,c:4,d:5}
}
console.log(class1); // b의 값은 2가 아니라 3이다.