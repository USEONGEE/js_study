// // 콜백 지옥
// const DEADLINE = 1400;
// function relayRun(name,start,nextFunc,failMsg) {
//     console.log(`${name} 출발`);
//     const time = 1000 + Math.random() * 500;
//     setTimeout(() => {
//         if(time < DEADLINE) {
//             console.log(`${name} 도착 - ${(start + time)/1000}초`);
//             nextFunc?.(start + time);
//     }
//     else {
//         console.log(failMsg);
//         console.log(`완주 실패 ㅜㅜ`)
//     }
//     if(time >= DEADLINE || !nextFunc) {
//         console.log(`경기종료`);
//     }},1000)
// }
// relayRun('철수',0,start1 => {
//     relayRun('영희',start1,start2 => {
//         relayRun('돌준',start2,start3=>{
//             relayRun('정아', start3, null,'아아 아깝습니다...')
//         },'돌준 탈락')
//     },'영희 탈락')
// },'철수 탈락')

// promise, 시간이 걸리는 과정 이후 주어진 동작을 실행할 것이라는 약속을 의미
// const borrow = 20;
// const payWith10perc = new Promise((resolve, reject) => { // 인자로 콜백함수를 받음, 콜백함수의 첫번째 인자 : 약속 이행 성공시 반환하는 객체
//     resolve(borrow * 1.1); // 성공시 반환하는 객체, resolve의 parameter로 반환할 값을 넣으면된다. 만약에 함수 실행값을 반환하고 싶으면 함수를 넣으면 된다.
// }) // payWith10perc는 조건에 맞는 값을 담은(resolve or reject) promise 객체이다.
// payWith10perc
// .then(result => {
//     console.log(result)} // then에는 resolve로 받은 값을 인자로하는 콜백 함수를 넣는다.
//     // 위처럼 직접 그 인자를 result로 받아서 사용할 수 있다.
// )

// // 예시 2
// const borrow = 20;
// const payWith10perc = new Promise((resolve, reject) => {
//     if(Math.random() < 0.5) {
//         reject('사업이 망했읍니다 ㅜㅜ');
//     }
//     setTimeout(() => {
//         resolve(borrow * 1.1); // 1초 후에 resolve로 반환, then method에서 인자로 받아 사용 가능
//     }, 1000) // 1초후에 갚는 것
// });
// payWith10perc
// .then(console.log)
// .catch(console.log)
// .finally(()=>{
//     console.log('this is finally');
// })

// // then은 연속적으로 메서드 체이닝이 가능하다.
// new Promise((resolve) => {
//     resolve(20)
// })
//     .then(i => {
//         console.log("then 메소드입니당");
//         return i * 2
//     })
//     .then(i => {
//         console.log("then 메소드입니당2");
//         return i - 3
//     })
//     .then(console.log) // then method 체이닝은 순차적으로 진행된다. then method의 콜백 함수의 반환값을 다른 then method가 받을 수 있다.
// // 위 아래는 같은 함수
// new Promise((resolve) => {
//     resolve(20);
// })
//     .then(i => i * 2)
//     .then(i => i - 3)
//     .then(console.log)

// // 맨 위에 콜백 지옥을 Promise를 이용해서 작성해보기 
// const DEADLINE = 1400;
// function relayRun(name, start, failMsg) {
//     console.log(`${name} 출발`)
//     const time = 1000 + Math.random() * 500;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time > DEADLINE) {
//                 console.log(failMsg);
//                 reject(`${time/1000} 초가 걸렸답니다. `);
//             }
//             else {
//                 console.log(`${name} 통과, ${time/1000}초 걸렸습니다.`)
//                 resolve(start + time)
//             }
//         }, time)
//     })
// }
// relayRun(`철수`, 0, '철수 탈락')
//     .then(result => { return relayRun('영희', result, '영희는 실패입니다.') })
//     .then(result => { return relayRun('들준', result, '돌준은 실패입니다.') })
//     .then(result => { return relayRun('정아', result, '정아는 실패입니다.') })
//     .catch(msg => console.log(msg))
//     .finally(() => {
//         console.log('경기 종료')
//     });

// 한 번 더
const DEADLINE = 1400;
function relayRun(name, start, failMsg) {
    console.log(`${name} 출발`);
    return new Promise((resolve, reject) => {
        const time = 1000 + 500 * Math.random(); // Promise의 인자로 넘어가는 콜백 함수 안에서만 쓰이는 변수이므로 안에서 선언해주는게 더 좋다.
        setTimeout(() => {
            if(time>DEADLINE) {
                console.log(failMsg)
                reject(`${time/1000}초로 시간 초과입니다.`);
            }
            else {
                console.log(`${name} 통과 ${time/1000}초 걸렸습니다.`);
                resolve(time + start)
            }
        },time)
    })
}
relayRun(`철수`, 0, '철수 탈락')
    .then(result => { return relayRun('영희', result, '영희는 실패입니다.') })
    .then(result => { return relayRun('들준', result, '돌준은 실패입니다.') })
    .then(result => { return relayRun('정아', result, '정아는 실패입니다.') })
    .catch(msg => console.log(msg))
    .finally(() => {
        console.log('경기 종료')
    });