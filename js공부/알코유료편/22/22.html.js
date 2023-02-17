document.querySelector('span').innerText = '텍스트 변경됨';

// // window창이 다 열리고 나서 실행되라고 만든 비동기 코드
// // 하지만 이 마저도 계속 window.onload를 남발해야하지 좋지 않음
// window.onload = function () { 
//     document.querySelector('span').innerText = '텍스트 변경됨';
// }