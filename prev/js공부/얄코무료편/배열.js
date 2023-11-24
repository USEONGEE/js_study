// Java와 같은 프로그래밍 언어는 배열에 같은 타입의 값들만 들어갈 수 있지만 자바스크립트의 배열에는 다양한 데이터 타입이 들어갈 수 있다
// 다른 배열들과 다르게 데이터에 대한 접근은 느리지만 데이터의 추가와 제거는 빠르다
// 자바스크립트의 배열은 배열의 형태와 동작을 흉내내는 "특수 객체"이다
// 자바스크립트에는 여러 종류의 배열이 있으므로 메모리의 활용을 극한으로 해야하는 상황에는 다른 배열을 사용하면 좋다

// // 배열 생성 방법
// // 1.배열 리터럴
// const arr1 = [];
// const arr2 = [1, 2, 3];
// const arr3 = [1, , 2, , 3];
// console.log(arr1.length);
// console.log(arr2.length);
// console.log(arr3.length);
// // 2.생성자 함수
// const arr4 = new Array();
// console.log(arr4);
// const arr5 = new Array(3); // 배열의 길이가 3인 배열을 생성하는 것
// console.log(arr5);
// const arr6 = new Array(3,4,5);
// console.log(arr6)





// // static method 'of', 무조건 parameter을 element로 갖는 배열을 생성
// const arr1 = Array.of(3);
// const arr2 = Array.of(1,2,3);
// console.log(arr1);
// console.log(arr2);





// // static method 'from', 배열, 유사배열, 이터러블을 인자로 받아서 배열로 반환 *얕은 복사*
// const arr1 = Array.from([1,2,3]);
// const arr2 = Array.from('ABCDE');
// const arr3 = Array.from({
//     '0' : true,
//     '1' : false,
//     '2' : null,
//     length : 3
// }); // arr3은 유사배열객체이다. 배열처럼 element와 legnth를 가지고 있지만, 배열과 다르게 Array method를 사용할 수는 없다
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(Array.isArray(arr3)); // 유사배열객체를 인자로 받아서 배열 객체로 만든다





// // 유사배열객체 : length와 indexing property를 가진 객체
// const arrLike = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3
// };
// // for문으로 순회 가능
// for (let i = 0; i < arrLike.length; i++) {
//     console.log(arrLike[i]);
// };
// for(const item of arrLike) {
//     console.log(item);
// }; // 이거 안된다. 배열이 아니라서!





// // 얕은 복사임을 주의하자
// const arr1 = [{ x: 1, y: 2 }];
// const arr2 = Array.from(arr1);
// arr2.push({ x: 3 });
// console.log(arr1, arr2); // arr1에 추가가 되지는 않는다.
// arr1[0].x = 100;
// console.log(arr1, arr2); // 하지만 arr1의 참조타입 요소의 내부값이 바뀔 경우 arr2에도 반영된다





// from method의 두 번째 parameter : 매핑 함수
// 매핑 : 각 element가 특정 알고리즘을 거쳐 새 값으로 변환됨
const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from(arr1, x => x + 1);
const arr3 = Array.from(arr1, x => x % 2 ? '홀' : '짝'); // 삼항연산자
console.log(arr2);
console.log(arr3);
//근데 instance method인 'map'이 더 자주 사용됨