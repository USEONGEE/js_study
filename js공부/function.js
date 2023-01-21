
function allArithemics(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}
let a = 3, b = 4;
allArithemics(a, b);
let c = 10, d = 2;
allArithemics(c, d);
let e = 7, f = 5;
allArithemics(e, f);

isOdd()
function isOdd(x) {
    return !!(x % 2);
}
let num = 15;
console.log(
    `${num}은 ${isOdd(num) ? '홀' : '짝'}수 입니다.`
);

// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add(x, y) {
    return x + y;
}

// 함수를 정의하는 다양한 방법들 (feat.함수도 객체이다.)
// 1. 함수를 객체로 인식해서 변수에 할당하는 방식
const subt = function (x, y) {
    return x - y;
}
console.log(subt(1, 2));
// 2. 화살표 함수 / (parameters) => return / 호이스팅이 되지 않는다.
const mult = (x, y) => x * y;
console.log(mult(2, 7));