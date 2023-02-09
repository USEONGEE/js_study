// // try - catch 문
// console.log("에러 전");
// (3).split('')
// console.log("에러 후"); // 에러 이후는 출력되지 않는다.

// // try - catch문 예시
// console.log('에러 발생 전');
// try {
//     (3).split('')
// }
// catch(e) {
//     console.error(e)
// }
// console.log('에러 이후');





// // try, catch, finally
// function connect() { console.log('통신 연결') }
// function disconnect() { console.log('통신 연결 해제') }
// function sendArray(arr) { console.log('전송') }
// function sendStringAsArray(str) {
//     connect();
//     try {
//         sendArray(str.split('')); // 실패시 error를 던진다
//         return true;
//     }
//     catch (e) {
//         console.error(e);
//         return false;
//     }
//     finally {
//         disconnect();
//         console.log('------------')
//     }
// }
// ['ABC', '가나다', 123, '123'].forEach(i => {
//     console.log(
//         sendStringAsArray(i)
//             ? '[성공]' : '[실패]', '\n\n'
//     );
// });





// // Error 객체, 에러 발생시 던져지는 thrown 객체
// // 기본 생성
// const error = new Error('뭔가 잘못됐어');
// console.error(error);


// // 두 번째 인자로 이유를 명시할 수도 있음
// const error = new Error(
//     '뭔가 잘못됐어',
//     { cause: '뭘 잘못했으니까' } // error의 맨 마지막에 출력된다.
// );
// console.error(error);
// console.log(error.name); // 기본 인스턴스 프로퍼티와 메서드
// console.log(error.message);
// console.log(error.cause); // cause를 입력했을 경우

// // 의도적으로 에러 발생시키기
// throw new Error('이유를 묻지 마라');





// // 에러의 여러가지 종류
// const errorFuncs = [
//     // 자료형에 맞지 않는 메서드 호출
//     () => { (3).split(''); },

//     // 선언되지 않은 함수 호출
//     () => { hello(); },

//     // 부적절한 숫자를 인자로 전달
//     () => { (123.45).toFixed(-1); }
// ];
// errorFuncs.forEach(func=>{
//     try {
//         func()
//     }
//     catch(e){
//         console.error(e);
//         console.log(e.name);
//         console.log(e.message, '\n\n');
//     }
// });





// 커스텀 에러 만들기
class MilitaryError extends Error { // Error 클래스를 상속 받는다, Error 객체를 선언할 때 인자는 e.message에 할당된다.
    constructor(position, ...params) { // instance가 정의되면 position을 첫번째 인자로 받고 나머지 인사는 부모 클래스의 constructor의 인자로 넘겨준다.
        // 넘겨준 인자는 e.meesage, e.cause 등으로 저장된다.
        super(...params);
        this.name = 'MilitaryError';
        switch (position) { // position으로 입력받은 값에 따라 출력이 다른 swithcase문을 구성
            case '이병':
                this.message = '개판이군. 맞선임 데려와봐.'; // 에러의 메세지를 변경함
                break;
            case '일병':
                this.message += ' 엎드려 뻗쳐.'; // 에러의 메세지에 추가적으로 말을 적음
                break;
            case '상병':
                this.message = '짬을 거꾸로 먹었나. ' + this.message;
                break;
            default:
                this.message = '집에 갈 때 됐다 이거지? ㅎㅎ'; // 병장은 욕을 안 먹음 ㅎㅎ
        }
    }
}
class Soldier {
    constructor(position) {
        this.position = position;
    }
    speak(word) {
        console.log(this.position + ':', word);
        try {
            if (!'다나까'.includes(word.at(-1))) { // 이 조건이 성립된다면
                throw new MilitaryError( // 위에 정의한 custom error를 발생시킨다.
                    this.position, // MilitaryError constructor의 첫 번째 인자
                    '군대에서 모든 말은 다나까로 끝낸다.' // MilitaryError constructor의 두 번째 인자
                );
            }
        } catch (e) {
            console.error(e);
        }
    }
}
['이병', '일병', '상병', '병장'].forEach(pos => {
    const soldier = new Soldier(pos);
    soldier.speak('무슨 일입니까');
    soldier.speak('왜요');
});