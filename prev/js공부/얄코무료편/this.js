// // 전역에서 this
// console.log(this); // 브라우저에서는 window객체를 의미한다.




// // 시발 뭐야 이거
// let num = 0;
// function addNum() {
//     this.num = 100; // 전역 객체 num을 지칭한다.
//     num++; // 여기서도 전역 객체 num이다.
//     console.log(this.num); // 101
// }
// console.log(num);
// console.log(this.num);
// addNum();




// // 함수 내부 함수의 this, 문제점
// const cat = {
//     name: 'meow',
//     foo1: function () {
//         const foo2 = function () {
//             console.log(this.name);
//         }
//         foo2();
//     }
// };
// cat.foo1();	// undefined




// // 이를 해결한 화살표 함수
// const cat = {
//     name: 'meow',
//     foo1: function () {
//         const foo2 = () => {
//             console.log(this.name); // 여기서 this는 cat을 의미한다. because는 화살표 함수에서는 this가 없기 때문이다.
//             // 즉 정상적인 함수에서는, 함수 내에서의 this가 자기 자신을 의미하지만 화살표 함수는 그렇지 않다.
//             // 다시 말해 화살표 함수를 포함하는 함수, 현재로서는 익명 함수를 this가 가리키는 것이 아니라 cat을 가리킨다.
//         }
//         foo2();
//     }
// };
// cat.foo1();	// meow




// // 화살표 함수의 한계점
// const cat = {
//     name: 'meow',
//     callName: () => console.log(this.name) // 여기서 this는 cat이 아니라 그 한 단계 위인 전역 객체를 의미한다.
// }

// cat.callName();	// undefined