// 이터러블 프로토콜이란 반복, 순회 기능을 사용하는 주체들의 "통일된 규격"
// 공통 기능 : for of, 스프레드, 배열 디스트럭쳐링 등
// 이터러블: 이터러블 프로토콜을 준수하는 객체

// console.log(
//     [][Symbol.iterator], // 이터러블 객체에 [Symbol.iterator] 라는 method가 있으며 실행시 '이터레이터'를 반환한다
//     ''[Symbol.iterator],
//     new Set()[Symbol.iterator],
//     new Map()[Symbol.iterator]
// );
// // 다른 타입의 인스턴스에는 없음
// console.log(
//     (1)[Symbol.iterator],
//     (true)[Symbol.iterator],
//     { x: 1 }[Symbol.iterator]
// );
// // 실행시 이터레이터를 반환한다
// console.log(
//     [][Symbol.iterator](),
//     ''[Symbol.iterator](),
//     new Set()[Symbol.iterator](),
//     new Map()[Symbol.iterator]()
// );





// // 이터레이터
// // next method()를 통해 이터러블을 순회하며 값을 반환한다
// const arr = [1, 'A', true, null, { x: 1, y: 2 }];
// const arrIterator = arr[Symbol.iterator](); // [Symbol.iterator] method를 실행해서 arr의 iterator를 생성했다
// console.log(
//     arrIterator.next // method이다.
// );
// console.log(arrIterator.next()); // ⭐ 반복 실행해 볼 것
// console.log(arrIterator.next());
// console.log(arrIterator.next()); // next() method는 value와 done을 반환한다 -> Iterator의 protocol





// 이터레이터 만들기
const diceTenTimes = {
    [Symbol.iterator]() { // 이 method를 갖는 것이 iterable protocol
        let count = 0;
        let maxCount = 10;
        return {
            next() {
                return {
                    value: Math.ceil(Math.random() * 6),
                    done: count++ >= maxCount
                }
            }
        }
    }
}
const diceIterator = diceTenTimes[Symbol.iterator](); // 변수에 diceTenTimes의 iterator를 할당했다
for (let i = 0; i < 12; i++) {
    console.log(
        diceIterator.next()
    );
}
// 스프레드 (...)를 쓰면은 이터레이터가 실행되고 next()함수를 n번 실행해서 그 결과를 담아서 내어준다.