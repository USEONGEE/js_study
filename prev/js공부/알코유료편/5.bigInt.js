// // 매우 큰 정수를 다뤄야 하는 특수한 경우에 사용
// console.log(
//     Number.MAX_SAFE_INTEGER // Number 타입으로 표현할 수 있는 가장 큰 수
// );
// for (let i = 0; i < 10; i++) {
//     console.log(Number.MAX_SAFE_INTEGER + i); // 제대로 값이 표현되지 않는다.
// }





// // bigInt 생성 방법
// const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
// const bigInt2 = BigInt(9007199254740991);
// const bigInt3 = BigInt('9007199254740991');
// const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991
// console.log(
//     bigInt1 === bigInt2, 
//     bigInt2 === bigInt3,
//     bigInt3 === bigInt4     // 객체들끼리 서로 값이 다르지 않다.
// );
// console.log(typeof bigInt1);

// // bitInt와 number은 산술연산 불가
// console.log(1n + 1); // error

// // 같은 bigInt끼리는 가능
// console.log(
//     1n + 1n
// );

// 비교연산은 가능하다
// console.log(
//     1n === 1, // 타입은 다름
//     1n == 1,
//     1n < 2,
//     1n >= 0,
//     2n < 1
// );

// 정렬도 가능하다
// console.log(
//     [4n, 7, 6n, 3, 1, 5, 9, 2n, 8n]
//         .sort((a, b) => a > b ? 1 : -1)
// );

// // boolean으로 변환되어 사용 가능하다
// console.log(
//     !!(0n),
//     !!(1n)
// );

// 소수점은 버린다, bit"Int"이다~!