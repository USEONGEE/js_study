// // 2진법, 0b뒤에 2진법으로 표현
// [
//     0b1,
//     0b10,
//     0b11,
//     0b100,
//     0b101
// ].forEach(i => console.log(i))

// // 8진법, 0o뒤에 8진법으로 표현
// [
//     0o7,
//     0o10,
//     0o100,
//     0o1000,
// ].forEach(i => console.log(i))

// // 16진법, 0x뒤에 16진법으로 표현
// [
//     0x9,
//     0xA,
//     0xB,
//     0xC,
//     0xd,
//     0xe,
//     0xf,
//     0x10,
//     0xFFFFFF
// ].forEach(i => console.log(i))





// // 진법간 변환
// const num = 12345; // 10진법
// const binStr = num.toString(2);
// const octStr = num.toString(8);
// console.log(binStr, octStr);
// console.log(typeof binStr); // 변환된 타입은 string이다 + type casting을 하려면 parseInt, parseFloat을 사용





// // 비트연산자
// let x = 0b1010101010; // 682
// let y = 0b1111100000; // 992
// // 양쪽 모두 1인 자리에 1
// const bitAnd = x & y; // and 연산
// // 한 쪽이라도 1인 자리에 1
// const bitOr = x | y // or 연산
// // 양쪽이 다른 자리에 1
// const bitXor = x ^ y; // xor 연산
// // 각 비트 반전
// console.log(bitAnd,bitOr,bitXor);
// console.log(~x,(~x).toString(2));





// <<, >> 연산
let x = 0b101; // 5
console.log(x.toString(2), x);
x = x << 1; // << 방향으로 한 칸씩 이동한다는 뜻, 10진법에서 뒤에 0을 붙히면 10을 곱하는 것, 2진법에서 0을붙히면 2를 곱하는 것이다
console.log(x.toString(2), x);