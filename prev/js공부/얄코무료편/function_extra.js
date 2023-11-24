// // 중첩된 함수
// function outer() {
//     const name = '바깥쪽'
//     console.log(name, '함수');
//     function inner() {
//         const name = '안쪽' // 더 위쪽에 있는 스코프
//         console.log(name, '함수');
//     }
//     inner();
// }
// outer();




// // recursive function, factorial
// function fact(x) {
//     return x === 0 ? 1 : x * fact(x - 1);
// }
// console.log(
//     fact(1),
//     fact(2),
//     fact(3),
//     fact(4)
// )




// // 즉시 실행 함수
// (function () { // 익명 함수이다.
//     console.log('IIFE');
// })();

// const initialMessage = (function () { 
//     // ⚠️ var를 사용함에 주목
//     var month = 8;
//     var day = 15;
//     var temps = [28, 27, 27, 30, 32, 32, 30, 28];
//     var avgTemp = 0;
//     for (const temp of temps) {
//         avgTemp += temp
//     }
//     avgTemp /= temps.length;

//     return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
// })(); // 위의 함수는 단 한 번 실행될 함수이기 때문에 익명 함수로 제작되었으며, 위에 선언된 많은 변수들 또한 한 번만 사용될 변수들이기에
// // 즉시 실행 함수를 두었다.
// console.log(initialMessage);
// console.log(month); // month는 위 함수 내에서 정의된 변수이므로 사용할 수 없다.




// // 즉시 실행 함수 대체
// let initialMessage;
// {
//     const month = 8;
//     const day = 15;
//     const temps = [28, 27, 27, 30, 32, 32, 30, 28];
//     let avgTemp = 0;
//     for (const temp of temps) {
//         avgTemp += temp
//     }
//     avgTemp /= temps.length;

//     initialMessage = `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
// }; // 요즘에는 {}를 이용한 스코프를 활용한다.
// console.log(initialMessage);
// console.log(month); // 새로고침 후 const를 var로 바꾸고 실행해볼 것 -> var로 바꾸면 {}내에서 선언되었어도 그 밖 스코프에서 사용이 가능하다 ㅎㄷㄷ..




// // immutability, 불변성
// let x = 1;
// let y = {
//     name: '홍길동',
//     age: 15
// }
// let z = [1, 2, 3];
// function changeValue(a, b, c) {
//     a++;  // x 값은 변하지 않는다.
//     b.name = '전우치'; // y의 property들은 변한다.
//     b.age++;
//     c[0]++; // z의 proterty들도 변한다. -> 참조 타입이기 때문.

//     console.log(a, b, c);
// }
// changeValue(x, y, z);