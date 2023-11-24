// // Set 생성
// const set1 = new Set();
// // add 메서드 - 요소 추가
// set1.add(1);
// set1.add('A');
// set1.add(true);
// console.log(set1);

// // 배열을 인자 넣으면 생성 + 초기화
// // 중복된 요소 제거
// const set2 = new Set([1, 1, 1, 'A', true]); // parameter로는 하나의 인자가 들어가야 한다. []로 안 묶고 그냥 1,2,3,4 넣으면 안된다.
// console.log(set2);

// // has 메서드 - 요소 포함여부 확인
// const set2 = new Set([1, 1, 1, 'A', true]);
// console.log(
//     set2.has(1),
//     set2.has('A'),
//     set2.has(4)
// );

// // delete 메서드 - 요소 제거 & 성공 여부 반환
// const set2 = new Set([1, 1, 1, 'A', true]);
// console.log(
//     set2.delete('A'),
//     set2.delete(true),
//     set2.delete(100)
// );
// console.log(set2);





// // add 메서드는 결과 셋을 반환
// const set2 = new Set([1, 1, 1, 'A', true]);
// const set3 = set2.add(2);
// console.log(set3);

// // 💡 메서드 체이닝을 할 수 있다는 의미
// const set2 = new Set([1, 1, 1, 'A', true]);
// set2
//     .add(3)
//     .add(4)
//     .add(5)
// console.log(set2, set3); // 참조형이므로 둘이 같은 Set을 가리킴

// // size 프로퍼티 - 요소의 개수
// const set2 = new Set([1, 1, 1, 'A', true]);
// console.log(
//     set2.size
// );

// // keys, values, entries 메서드 - 값 / 값 / [값, 값] 반환
// // key를 value와 같이 취급
// const set2 = new Set([1, 1, 1, 'A', true]);
// console.log(
//     set2.keys(),
//     set2.values(),
//     set2.entries() // key와 value값이 같다.
// );





// // 추가하는 데이터가 참조형인 경우
// const objSet1 = new Set()
// .add({ x: 1, y: 2 })
// .add({ x: 1, y: 2 })
// .add([1, 2, 3])
// .add([1, 2, 3]);
// console.log(objSet1); // 각기 다른 것으로 인식 (참조하는 주소가 다르므로)

// // 추가하는 데이터가 참조형이지만 변수에 담긴 경우
// const obj = { x: 1, y: 2 };
// const arr = [1, 2, 3];
// const objSet2 = new Set()
//     .add(obj)
//     .add(obj)
//     .add(arr)
//     .add(arr);
// console.log(objSet2) // 같은 것들로 인식
// console.log(
//     objSet2
//         .add({ x: 1, y: 2 }) // 각기 다른 것으로 인식
//         .add({ x: 1, y: 2 })
//         .add([1, 2, 3]) 
//         .add([1, 2, 3])
// );






// // 이터러블로서의 set
// const arr = ['A', 'B', 'C', 'D', 'E'];
// const set = new Set(arr);
// for (item of set) { // iterable, 반복이 가능한
//     console.log(item);
// }
// // 스프레드
// const newArr = [...set]; 
// console.log(newArr); // 스프레드로 set에 담긴 값들로 배열 생용

// // 활용 - 중복을 제거한 배열 반환
// const arr1 = [1, 1, 1, 2, 2, 3, 4, 5];
// const arr2 = [...new Set(arr1)];
// console.log(arr2);





// // 디스트럭쳐링
// const arr = ['A', 'B', 'C', 'D', 'E'];
// const set = new Set(arr);
// const [x, y] = set;
// console.log(x);
// console.log(y); 
// // 나머지를 스프레드로 받을 수 있음
// const [a, b, ...rest] = set;
// console.log(a);
// console.log(b);
// console.log(rest);





// forEach()
const arr = ['A', 'B', 'C', 'D', 'E'];
const set = new Set(arr);
// ⚠️ 두 번째 인자가 인덱스가 아님!
// 배열과 달리 순서 개념이 없으므로...
// 형식을 맞추기 위한 인자일 뿐

set.forEach(console.log);

// 아래의 결과와 같음
// set.forEach((item, idx, set) => {
//   console.log(item, idx, set)
// });