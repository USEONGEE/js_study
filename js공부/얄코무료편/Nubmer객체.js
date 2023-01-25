// const num = new Number(123);
// console.log(typeof num); // data type : object
// console.log(num.valueOf());
// console.log(
//     new Number('-123123'), // 수로 입력된다.
//     new Number('ABC'), // NaN
//     new Number(true) // 1로 입력된다.
// );





// // Number의 static property
// console.log(Number.EPSILON); // 자바스크립트에서 0에 가장 가까운 수, 부동소수점 문제를 해결하는데 사용된다.
// console.log(Number.MAX_VALUE); // JS에서 가장 큰 수
// console.log(Number.MIN_VALUE); // JS에서 가장 작은 수 
// console.log(
//     Number.parseInt('123.4567'),
//     Number.parseFloat('123.4567')
// ) // 자료형 변환
// console.log(
//     Number.isInteger('123'),
//     Number.isInteger(true),
//     Number.isInteger(Infinity)
// )





// instance method
const num = (123.4567).toExponential(); // 해당 수르 지수 표기법으로 변환, parameter로 몇 자리까지 나오게 할 지 표기할 수 있음
console.log(
    typeof num, num // data type : string
);

const num1 = 123.4567;
console.log(
    num1.toFixed(),
    num1.toFixed(2),
    typeof num1.toFixed(2) // data type : string
);

console.log(
    (11).toString(), // 값을 문자열로 바꿔줌 
    (11).toString(2), // parameter로 넘어가는 값에 해당하는 진법으로 값을 바꿔준다, 해당 경우에서는 2진법
    (11).toString(7) // 앞의 경우에서는 7진법, paramter로는 36까지의 정수가 들어갈 수 있다.
)