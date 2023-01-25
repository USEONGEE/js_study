// // Math는 static property와 method만 지원한다, new Math()는 불가능
// console.log(
//     Math.PI
// );





// // 절대값
// console.log(
//     Math.abs(-123)
// )
// // 활용 예제
// const isEqual = (a, b) => {
//     return Math.abs(a - b) < Number.EPSILON // boolean 반환
// };
// console.log(
//     isEqual(0.1 + 0.2, 0.3)
// )





// 반올림, 올림, 내림, 정수부만
for(const num of [1.4,1.6,-1.4,-1.6]) {
    console.log(
        num + ' : ',
        Math.ceil(num), // 올림
        Math.round(num), // 반올림
        Math.floor(num), // 내림
        Math.trunc(num) // 정수부만
    )
}
// 그 외에도 sqrt(), max(), min(), random(), sin(), cos(), tan() 등 다양한 method가 있다.