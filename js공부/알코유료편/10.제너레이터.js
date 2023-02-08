// 함수 내 코드들을 모두 실행하지 않고 외부 호출자에게 제어권을 양도
// 이터러블과 이터레이터를 보다 간결하게 구현 가능
// function* getFunction() {
//     console.log('하나를 반환합니다.');
//     yield '하나';

//     console.log('둘을 반환합니다.');
//     yield '둘';

//     console.log('셋을 반환합니다.');
//     yield '셋';
// }
// const getFunc = getFunction();
// console.log(getFunc.next());
// console.log(getFunc.next());
// console.log(getFunc.next());
// console.log(getFunc.next());





// // 1. 제너레이터 함수/메서드 선언
// function* getFunc1() { // 함수 선언
//     yield 'getFunc1';
// }
// const getFunc2 = function* () { // 값으로 대입
//     yield 'getFunc2';
// }
// const obj = {
//     *getFunc3() {
//         yield 'getFunc3';
//     }
// }
// class MyClass {
//     *getFunc4() {
//         yield 'getFunc4';
//     }
// }
// // 테스트
// console.log(
//     getFunc1().next().value,
//     getFunc2().next().value,
//     obj.getFunc3().next().value,
//     new MyClass().getFunc4().next().value,
// );





// // 제너레이터 객체
// function* genFunction() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }
// let genObj = genFunction();
// // 로그 펼쳐서 살펴볼 것
// console.log(genObj);
// // 💡 이터러블임 확인
// console.log(genObj[Symbol.iterator]);
// // 스프레드는 next()를 계속 실행해서 done : ture가 나올 때까지 실행한다.
// console.log([...genObj]);
// console.log([...genObj]); // genObj는 일회용이다.
// // 이터러블로서는 바로 호출이 적합
// console.log([...genFunction()]);
// console.log([...genFunction()]); // 얘는 일회용이 아니다.
// for (const num of genFunction()) { // iterable
//     console.log(num);
// }





// // 피보나치 제너레이터
// function* fibonacci(maxCount) {
//     let count = 0;
//     let [x, y] = [0, 1];
//     while (count++ < maxCount) {
//         [x, y] = [y, x + y];
//         yield y;
//     }
// }
// console.log(
//     [...fibonacci(10)]
// );
// const fibo = fibonacci(10);
// console.log(...fibo);
// // iterable 이므로 for문을 돌릴 수 있다.
// let fiboGenObj = fibonacci(5);
// for (let i = 0; i < 7; i++) {
//     console.log(
//         fiboGenObj.next()
//     );
// }





// 순번 이터레이터
function* workersGen(people) {
    let idx = 0;
    while (idx < people.length) {
        yield people[idx++];
    }
}
const team1 = [
    '철수', '영희', '돌준', '미나', '준희'
];
console.log(
    [...workersGen(team1)]
);
// 이터레이터로 사용
// 인원 순번 넘기기
function switchWorker(iter) {
    const next = iter.next();
    console.log(
        next.done
            ? '-- 인원 없음 -- '
            : `${next.value} 차례입니다.`
    );
}
workersIter1 = workersGen(team1); // 'workersIter1' 는 이터레이터이다. 
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);