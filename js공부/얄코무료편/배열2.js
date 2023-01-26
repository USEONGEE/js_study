// 배열의 기본 메소드들

// // isArray(static)
// console.log(
//     Array.isArray([1, 2, 3]),
//     Array.isArray('123'),
//     Array.isArray('123'.split()) // split()을 쓰면 반환값이 배열이다
// );
// const arrays = [
//     [], [1, 2, 3], new Array(),
//     // ⚠️ instanceof에서는 결과가 다름
//     Array.prototype // 배열임
// ];
// const notArrays = [
//     1, 'abc', true, null, {}
// ];
// for (const item of arrays) {
//     console.log(
//         item,
//         Array.isArray(item),
//         item instanceof Array
//     );
// } // Array.prototype은 배열이 맞는데 instanceof Array에서는 배열이 아니라고함. 그래서 실무에서는 Array.isArray()가 더 선호됨.
// for (const item of notArrays) {
//     console.log(
//         item,
//         Array.isArray(item),
//         item instanceof Array
//     );
// }// notArrays는 싹다 false로 나온다





// // includes(instance), 인자로 주어진 element 유무 확인
// const arr = [1, 2, 3, 4, 5];
// console.log(
//     arr.includes(2),
//     arr.includes('abc'),
//     arr.includes(true)
// );
// // 주의 사항
// const obj1 = { x: 1, x: 2 };
// const obj2 = { x: 1, x: 2 };
// const arrr = [
//     obj1,
//     { x: 3, y: 4 }
// ];
// console.log(
//     arrr.includes(obj1), // obj1은 arrr의 element이다.
//     arrr.includes(obj2), // obj1과 obj2는 같은 내용의 객체이지만 서로 다른 주소를 참조한다. 그래서 false가 나온다
//     arrr.includes({ x: 1, x: 2 }), // obj2와 마찬가지로 obj1과 다른 주소를 참조한다
//     arrr.includes({ x: 3, x: 4 }) // 신기하게 이 녀석도 다른 주소이다 ㅎㄷㄷ..
// );





// // indexOf, lastIndexOf(instance), 앞/뒤에서 첫 번째 값의 index 반환
// const arr = [1,2,3,2,1];
// console.log(
//     arr.indexOf(2),
//     arr.lastIndexOf(2)
// );





// // join(instance)
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, true, null, 'abc', { x: 0, y: 1 }, [1, 2, 3]];
// console.log(arr1.join()); // 인자가 없다면 쉼표로 구분
// console.log(arr1.join(''))
// console.log(arr1.join(' '));
// console.log(arr2.join(':'))
// // 4-3강 예제에서 더 간편한 코드를 작성하는데 사용된다





// // 배열에 값 추가하기
// // push
// const arr1 = [1, 2, 3];
// const x = arr1.push(4); // 결과의 길이를 반환한다
// console.log(arr1, x);
// const y = arr1.push(100,200);
// console.log(arr1, y)
// // unshift
// const arr2 = [5,6,7];
// const z = arr2.unshift(4); // 결과의 길이를 반환한다
// console.log(arr2,z);
// // 원본의 배열을 변경하기에 스프레드 문법을 권장





// // 배열에 값 삭제하기
// // pop()
// const arr1 = [1, 2, 3, 4, 6];
// const x = arr1.pop(); // 제거한 값을 반환한다
// console.log(arr1, x);
// const y = arr1.pop()
// console.log(y)
// // shift()
// const arr2 = [1, 2, 3, 4, 5];
// const z = arr2.shift();
// console.log(arr2, z)





// // splice(instance), 원하는 위치에 element를 추가, 삭제
// // parameter : (x,y,z), x : 변경을 시작할 위치, y : 제거할 개수, z : 추가할 element
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2);
// console.log(arr);
// arr.splice(3, 0, 'a', 'b', 'c'); // 3개의 element를 지나 'a', 'b', 'c'를 추가
// console.log(arr);
// // delete의 한계
// delete arr[2];
// console.log(arr[2]); // 앞으로 남은 요소들을 당겨오지 않고 undefined로 나타남





// // fill(instance), 배열을 특정 값으로 채운다
// const arr = Array(10);
// arr.fill(1);
// console.log(arr);





// // reverse(instance), 배열을 뒤집는다
// const arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);





// // concat(instance), 배열을 이어붙혀서 반환
// // 얕은 복사
// const arr1 = [1,2,3];
// const arr2 = ['a','b','c'];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);





// // slice(instance), parameter로 주어진 범주의 값을 잘라서 반환
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = arr1.slice(3); // 3번째 index부터 끝까지
// const arr3 = arr1.slice(1, 3); // index 1~3까지
// console.log(arr2, arr3)





// flat(instance), 배열 안의 배열을 전부다 펴서 보여줌. 주름을 "평평하게" 피는 것처럼!
const orgArr = [
    1, 2,
    [3, 4],
    [5, [6, [7, 8]]]
];
// 인자가 없으면 1을 넣은 것과 같음
const arr0 = orgArr.flat();
const arr1 = orgArr.flat(1);
const arr2 = orgArr.flat(2);
const arr3 = orgArr.flat(3);
console.log('N:', arr0);
console.log('1:', arr1);
console.log('2:', arr2);
console.log('3:', arr3);