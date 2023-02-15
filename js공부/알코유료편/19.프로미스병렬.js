// // 다섯 주자들이 동시에 질주
// // 데드라인(밀리초) 안에 들어오지 못하면 탈락
// let DEADLINE = 1450;
// function getRunPromise(name) {
//     return new Promise((resolve, reject) => {
//         const time = 1000 + Math.random() * 500;
//         setTimeout(() => {
//             if (time < DEADLINE) {
//                 console.log(`🚩 ${name} 도착 - ${(time) / 1000}초`);
//                 resolve({ name, time });
//             } else {
//                 reject((`${name} 시간초과`));
//             }
//         }, time);
//     });
// }
// console.log(
//     '철수,영희,돌준,정아,길돈' // 병렬 처리
//         .split(',')
//         .map(getRunPromise)
// );





// // Promise의 static method
// // all(), Promise의 배열을 받아서 동시에 진행한다, 모두 성공하면 resolve된 값들을 배열로 반환
// // 하나라도 실패하면 catch를 실행한다
// // 다섯 주자들이 동시에 질주
// // 데드라인(밀리초) 안에 들어오지 못하면 탈락
// let DEADLINE = 1450;
// function getRunPromise(name) {
//     return new Promise((resolve, reject) => {
//         const time = 1000 + Math.random() * 500;
//         setTimeout(() => {
//             if (time < DEADLINE) {
//                 console.log(`🚩 ${name} 도착 - ${(time) / 1000}초`);
//                 resolve({ name, time }); // 이름과 시간을 객체로 만들어서 반환
//             } else {
//                 reject((`${name} 시간초과`));
//             }
//         }, time);
//     });
// }
// Promise.all(
//     `철수,영희,돌준,정아,길돈`
//         .split(',') // String을 받아서 ','을 기준으로 split하고 배열 반환
//         .map(getRunPromise) // 해당 배열을 받아서 map함수 실행, 콜백함수로 promise 객체를 반환하는 함수를 넘김
// )
//     .then(arr => { // 모든 Promise에서 resolve를 받으면 실행
//         return arr.sort((a, b) => {
//             return a.time - b.time;
//         }) // time을 기준으로 정렬
//             .map(({ name }) => name) // 객체에서 name property만 받아서 배열로 반환
//             .splice(0, 3) // 0번부터 3개의 배열을 반환
//             .join(', ') // 모든 배열의 요소를 ', '로 묶음
//     })
//     .then(top3 => {
//         console.log(`top3 : ${top3}`)
//     })
//     .catch(console.error) // 하나라도 reject가 반환되면 실행
//     .finally(() => {
//         console.log(`경기 종료.`)
//    })

// // 2. allSettled, 주어진 promise들의 결과를 "배열"로 출력, 실패 유무 없이 then으로 배열 반환 => catch문이 필요 없음
// // 다섯 주자들이 동시에 질주
// // 데드라인(밀리초) 안에 들어오지 못하면 탈락
// let DEADLINE = 1450;
// function getRunPromise(name) {
//     return new Promise((resolve, reject) => {
//         const time = 1000 + Math.random() * 500;
//         setTimeout(() => {
//             if (time < DEADLINE) {
//                 console.log(`🚩 ${name} 도착 - ${(time) / 1000}초`);
//                 resolve({ name, time });
//             } else {
//                 reject((`${name} 시간초과`));
//             }
//         }, time);
//     });
// }
// Promise.allSettled(
//     '철수,영희,돌준,정아,길돈'
//         .split(',')
//         .map(getRunPromise)
// )
//     .then(console.log) // 반환된 배열의 객체에는 status라는 property와 promise 값이 담긴 value property가 있다.
//     // status는 resolve, reject 둘 중 무엇인지에 대한 상태를 기술한다.
//     // ⚠️ catch는 동작하지 않음
//     .finally(() => {
//         console.log('- - 경기 종료 - -');
//     });

// // 3. any, 가장 먼저 성공한 promise를 then으로 반환
// let DEADLINE = 1450;
// function getRunPromise(name) {
//     return new Promise((resolve, reject) => {
//         const time = 1000 + Math.random() * 500;
//         setTimeout(() => {
//             if (time < DEADLINE) {
//                 console.log(`🚩 ${name} 도착 - ${(time) / 1000}초`);
//                 resolve({ name, time });
//             } else {
//                 reject((`${name} 시간초과`));
//             }
//         }, time);
//     });
// }
// Promise.any(
//     '철수,영희,돌준,정아,길돈'
//         .split(',')
//         .map(getRunPromise)
// )
//     .then(console.log) 
//     // ⚠️ 모두 실패해도 catch는 동작하지 않음
//     .finally(() => {
//         console.log('- - 경기 종료 - -'); // 첫번째 프로미스가 반환된 후 then -> finally 모두 실행된다. 하지만 그 후에도 promise 값들이 도착한다.
//         // 즉 any method를 쓰더라도 기존의 promise의 동작이 멈추는 것은 아니다.
//     });

// // 4. race
// // 다섯 주자들이 선택한 도착지로 질주
// // 도착지에 '꽝'이 있으면(50% 확률) 실패
// function getBombRunPromise(name) {
//     return new Promise((resolve, reject) => {
//         const time = 1000 + Math.random() * 500;
//         setTimeout(() => {
//             console.log(`🚩 ${name} 도착 - ${(time) / 1000}초`);
//             if (Math.random() < 0.5) {
//                 resolve((`🙌 ${name} 승리!`));
//             } else {
//                 reject((`💣 ${name} 꽝!`));
//             }
//         }, time);
//     });
// }
// Promise.race(
//     '철수,영희,돌준,정아,길돈'
//         .split(',')
//         .map(getBombRunPromise)
// )
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => {
//         console.log('- - 경기 종료 - -');
//     });