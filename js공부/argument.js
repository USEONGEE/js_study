// function add(a = 2, b = 4) { // default paraemter, a와 b는 각각 2, 4로 고정된 값이다.
//     console.log(`${a} + ${b}`);
//     return a + b;
// }
// console.log(
//     add(), // 
//     add(1),
//     add(1, 3)
// );




// // arguments - 함수 내에서 사용가능한 지역 변수
// function add(a, b) {
//     console.log('1.', arguments);
//     console.log('2.', arguments[0]);
//     console.log('3.', typeof arguments);
//     return a + b;
// }
// console.log(
//     '4.', add(1, 3, 5, 7)
// );




// function add(a, b) {
//     for (const arg of arguments) {
//         console.log(arg);
//     }
//     return a + b;
// }
// console.log(
//     add(1, 3, 5, 7)
// );




// // arguments를 통해서 parameter 없이 인자들을 받아서 평균을 내는 함수
// function getAverage() {
//     let result = 0;
//     for (const num of arguments) {
//         result += num;
//     }
//     return result / arguments.length;
// }
// console.log(
//     getAverage(1, 4, 7),
//     getAverage(24, 31, 52, 80)
// );




// function getAverage() {
//     let sum = 0, count = 0;
//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             sum += num; count++;
//         }
//         else
//             continue;
//     }
//     return sum / count;
// }
// console.log(getAverage(2, '가', 8, true, 5))




// console.log(
//     '3.',
//     classIntro(3, '김민지', '영희', '철수', '보라')
// ); // 호이스팅
// function classIntro(classNo, teacher, ...children) { // ...children을 하게 되면 children은 arguments 이전에 `실제 배열`이다.
//     // ...children을 나머지 변수, rest parameter 라고 한다.
//     console.log('1.', children);
//     console.log('2.', arguments);
//     let childrenStr = '';
//     for (const child of children) {
//         if (childrenStr) childrenStr += ', ';
//         childrenStr += child;
//     }
//     return `${classNo}반의 선생님은 ${teacher}, `
//         + `학생들은 ${childrenStr}입니다.`
// }