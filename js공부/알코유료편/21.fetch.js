// // fetch method, 네트워크 통신으로 원격으로 요청을 보내고 답을 받아와 Promise로 반환
// // 💡 결과가 Promise의 인스턴스임 확인
// console.log(
//     fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
// );





// // json method를 통해서 결과의 body로 받은 텍스트를 json 객체로 변환한다.
// fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
//     .then(response => {
//         console.log(response);
//         return response;
//     })
//     .then(response => response.json())
//     .then(console.log);





// // 오류가 있으면 catch 문으로 받아서 처리할 수 있다.
// fetch('https://WRONG-ADDRESS')
//     .then(response => response.json())
//     .then(console.log)
//     .catch(msg => {
//         console.error(`😳 에러 발생: ${msg}`)
//     })
//     .finally(() => {
//         console.log('- - 통신 종료 - -')
//     })





// // 예제
// const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';
// fetch(SERVER_URL + 'race-result')
// .then(response => response.json())
// .then(console.log)
// .catch(console.error);
// [1, 2, 3, 4, 5].forEach(item => {
//     fetch(`${SERVER_URL}runners/${item}`)
//         .then(response => response.json())
//         .then(console.log)
//         .catch(console.error);
// });
// [1, 2, 3].forEach(item => {
//     fetch(`${SERVER_URL}schools/${item}`)
//         .then(response => response.json())
//         .then(console.log)
//         .catch(console.error);
// });

// // 예제2, 1등 주자의 학교 정보 받아오기
// const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';
// fetch(SERVER_URL + 'race-result')
//     .then(response => response.json())
//     .then(arry => {
//         return arry.sort((a, b) => {
//             return a.record - b.record
//         })[0].runner_idx
//     })
//     .then(winnerIdx => {
//         return fetch(`${SERVER_URL}runners/${winnerIdx}`)
//     })
//     .then(result => result.json())
//     .then(({school_idx}) => school_idx)
//     .then(school_idx => {
//         return fetch(`${SERVER_URL}schools/${school_idx}`)
//     } )
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => {console.log(`done`)})

// 예제3, async await으로 구현하기
const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';
async function getWinnersSchool() {
    const raceResult = await fetch(SERVER_URL + 'race-result')
        .then(result => result.json());

    const winnerIdx = raceResult
        .sort((a, b) => { return a.record - b.record })[0]['runner_idx'];

    const winnerInfo = await fetch(`${SERVER_URL}runners/${winnerIdx}`)
        .then(result => result.json());
    
    const {school_idx} = winnerInfo;
    
    const schoolInfo = await fetch(`${SERVER_URL}schools/${school_idx}`)
    .then(result => result.json())
    console.log(schoolInfo)
}
getWinnersSchool();