// // 유효하지 않은 참조에 대한 에러가 발생시 프로그램이 종료된다.
// // 예시
// // undefined로부터 값에 접근할 때
// let undefObj;
// console.log(undefObj.x);





// // 에러를 피하기 위해서는 다음과 같은 방법이 제시된다.
// const rand = () => Math.random() < 0.75;
// const notSure = () => rand() ? {
//     prop1: rand() ? {
//         prop2: rand() ? {
//             prop3: rand() ? '성공!' : undefined
//         } : undefined
//     } : undefined
// } : undefined;
// // 1. 중첩 if 문
// // 2. && 연산자
// // 방법 2
// const result = notSure();
// console.log(
//     result
//     && result.prop1
//     && result.prop1.prop2
//     && result.prop1.prop2.prop3
// );
// // 3. try-catch 문






// // ?. optional chaining, 호출 대상이 undefined 이거나 null 이어도 오류를 발생시키지 않는다 -> undefined를 반환할 뿐이다.
// let undef = undefined;  
// console.log(
//     undef?.x,
//     undef?.['x'],
//     undef?.[1],
//     {}.func?.()
// );


// // optional chaining을 이용한 에러 해결
// // 최소 undefined
// // 최대 {prop1:{prop2:{prop3:'성공!'}}}
// // 까지 반환하는 함수
// const rand = () => Math.random() < 0.75;
// const notSure = () => rand() ? {
//     prop1: rand() ? {
//         prop2: rand() ? {
//             prop3: rand() ? '성공!' : undefined
//         } : undefined
//     } : undefined
// } : undefined;
// // 옵셔널 체이닝을 사용한 방법
// const result = notSure();
// console.log(
//     result?.prop1?.prop2?.prop3
// );





// 유무가 불확실한 함술들을 호출할 때도 사용한다.
const objs = [
    { func() { console.log(1) } },
    {}, // 함수가 아님
    { func() { console.log(2) } },
    {}, // 함수가 아님
    { func() { console.log(3) } },
]

objs.forEach(o => o.func?.()); // 실행 가능