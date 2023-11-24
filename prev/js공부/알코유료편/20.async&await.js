// // Promise를 기반으로 동작
// function getMult10Promise(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(number * 10)
//         }, 1000);
//     });
// }

// // 예시
// async function doAnyncWorks() {
//     const result1 = await getMult10Promise(1);
//     console.log(result1);
//     const result2 = await getMult10Promise(2);
//     console.log(result2);
//     const result3 = await getMult10Promise(3);
//     console.log(result3)
// }
// doAnyncWorks();
// console.log("이게 먼저지롱")
// // async function도 promise를 직관적으로(동기적으로) 하게 해주지만 결국엔 비동기 프로그래밍이므로 async의 코드는 비동기를 처리해주는 곳으로 간다.
// // 그러므로 동기적 코드가 먼저 실행이 되는 것이다.

// 예시2
function moneyLend(borrow) {
    return new Promise((resolve, reject) => {
        console.log(`채무 ${borrow}만원`);

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(`채무자 파산`)
            }
            resolve(borrow * 1.1);
        }, 1000);
    });
}
async function lend5times() {
    let money = 20;
    try {
        for (let i = 0; i < 5; i++) {
            money = await moneyLend(money);
        }
        console.log(`반납 완료`);
    }
    catch (msg) {
        console.error(msg);
    }
    finally {
        console.log('대금업 종료');
    }
}
lend5times()