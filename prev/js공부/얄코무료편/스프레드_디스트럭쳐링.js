// // 기본 문법
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; // arr1의 elements를 펼쳐서(, 로 연결해서서 arr2에 넣는다
// console.log(arr2);

// // 예시 2
// const arr1 = ['B', 'C'];
// const arr2 = ['D'];
// const arr3 = ['E'];
// const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']
// console.log(arr4);

// // 예시 3, Math.max()
// const arr = [1,2,3,4,5];
// console.log(
//     Math.max(...arr) // spread를 하지 않으면 NaN이 리턴된다
// );

// // 예시 4, concat보다 가독성 좋은 코드
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// const arr4 = [...arr1,...arr2];
// console.log(arr3);
// console.log(arr4)

// // 예시 5, 얕은 복사
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);
// arr1[0] = 0;
// console.log(arr1, arr2);

// // 예시 6, 깊은 복사는 안됨
// const arr1 = [{ x: 1 }, { x: 2 }];
// const arr2 = [...arr1];
// arr1[0].x = 0;
// console.log(arr1, arr2);

// 예시 7, push, unshift 대신에 사용

// // 예시 8, 특정 배열의 일정 부분들을 복사하여 새로운 배열을 만들 때 사용된다
// const org = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr1 = [
//     ...org.slice(0, 3),
//     ...org.slice(6, 9)
// ];
// console.log(arr1);





// // destructuring - 배열
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);

// // 예시 2, 일부만 가져올 수도 있음
// const arr = [1, 2, 3];
// const [x, y] = arr;
// console.log(x, y);

// // 예시 3, 나머지 변수 사용 가능
// const arr = [1, 2, 3, 4, 5];
// const [x, ...y] = arr;
// console.log(x, y);

// 예시 4, 활용
// const players = [
//     { name: '순이', score: 91 },
//     { name: '정환', score: 65 },
//     { name: '윤수', score: 72 },
//     { name: '철웅', score: 88 },
//     { name: '지우', score: 98 },
//     { name: '세아', score: 40 }
// ];
// function logTop3([first, second, third]) { // 배열 중 첫 3개만 가져옴
//     console.log(
//         `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
//     );
// }
// logTop3(
//     [...players] // 💡 원본의 얕은 복사본을 정렬
//         .sort((a, b) => b.score - a.score) // 오름차순으로 정렬
//         .map(({ name }) => name) // 이름만 가져와서 새로운 배열 생성
// );

// 예시 5, 활용
let [a, b, c, d] = '@-&='.split('');

for (let i = 0; i < 24; i++) {
    [a, b, c, d] = [d, a, b, c];
    console.log([a, b, c, d].join('   '));
}