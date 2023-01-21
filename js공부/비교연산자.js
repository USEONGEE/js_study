console.log(
    '안녕하세요~' === "안녕하세요~",
    '안녕하세요~' === `안녕하세요~`,
    "안녕하세요~" === `안녕하세요~`,
); // 표기 방식을 구분하지 않는다.

console.log(
    'Hello!' === 'hello!'
); // 대소문자 구분을 한다.

console.log(
    '1' == '1', //true
    '1' == 1, //true
    '1' == 2
);
console.log(
    '1' != '1',
    '1' != 1,
    '1' != 2
);// ==은 자료형을 구분하지 않는다. "암묵적으로 타입을 변환해준다."

console.log(
    '1' === '1', // true
    '1' === 1, // false
    '1' === 2
);
console.log(
    '1' !== '1',
    '1' !== 1,
    '1' !== 2
); // ===은 자료형을 구분한다.

const x = null;
const y = "문자열입니다.";
console.log(x);
console.log(y);
console.log(x + y); // 서로 다른 자료형을 더하면 문자열이 반환된다.
const z = 3;
console.log(x + z);
console.log(typeof (x + z)); // null과 number을 더하면 number이다.

let a = 1 / 'abc';
console.log(a);
console.log(typeof (a)); // NaN의 자료형은 number이다.
console.log(a == NaN); // false
console.log(a === NaN); // false
console.log(isNaN(a)); // true, 숫자가 아닐 시 true를 반환한다.
console.log(isNaN('안녕')); // true, 문자열인데 true를 반환한다.. 이름이 왜 isNaN()일까? ㅎㅎ
console.log(Number.isNaN(a)); // true
console.log(Number.isNaN('안녕')); // false, NaN인지 아닌지 확실하게 판단해서 반환한다.

let b = true;
let c = b ? '참입니다.' : '거짓입니다.'; // 삼항연산자, b에는 boolean이 와야한다(혹은 조건).
console.log(c);
// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(
    !!1, !!-999, !!'hello',
    !!0, !!'', !!null
);

let d = 1, e = 2, f = 3;
console.log(d, e, f);

let k;
k ?? console.warn(k, 'x에 값이 없습니다.'); // undefined이므로 console.log를 실행

k = 0;
k ?? console.warn(k, 'x에 값이 없습니다.'); // k에 0이라는 값이 할당되어 있으므로 실행되지 않음

k = null;
k ?? console.warn(k, 'x에 값이 없습니다.'); // null 이므로 console.log를 실행