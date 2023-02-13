// const obj = {
//     // function 선언 함수
//     func1: function () { return true; },
//     // 메서드
//     func2() { return true; },
//     // 화살표 함수
//     func3: () => true
// }
// console.log(
//     obj.func1(),
//     obj.func2(),
//     obj.func3()
// );
// const func1 = new obj.func1();
// const func2 = new obj.func2(); // 생성자로 사용 불가
// const func3 = new obj.func3(); // 생성자로 사용불가





// // 화살표 함수, this, 객체에서
// const obj = {
//     x: 1,
//     y: 2,
//     func1: function () {
//         console.log('1.', this);
//     },
//     func2() {
//         console.log('2.', this);
//     },
//     func3: () => {
//         console.log('3.', this);
//     }
// }
// obj.func1();
// obj.func2(); // this가 해당 객체를 가리킴
// obj.func3(); // 💡 this가 상위 스코프를 가리킴

// // 예시 2
// const outer = {
//     a: true,
//     b: false,
//     func: function () {
//         const inner = {
//             x: 1,
//             y: 2,
//             func1: function () {
//                 console.log('1.', this);
//             },
//             func2() {
//                 console.log('2.', this);
//             },
//             func3: () => {
//                 console.log('3.', this);
//             }
//         }
//         inner.func1(); // this가 inner를 가리킴 
//         inner.func2(); // this가 inner를 가리킴 
//         inner.func3(); // this가 outer를 가리킴
//     }
// }
// outer.func();





// // 생성자 함수, 클래스에서
// function Korean() {
//     this.favorite = '김치';
//     this.makeStew = function (isHot) { // 생성자 함수로 사용할 거라서 this를 사용
//         return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
//     };
//     this.fryRice = (isHot) => { // 생성자 함수로 사용할 거라서 this를 사용
//         return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
//     };
// }
// function Italian() {
//     this.favorite = '피자';
// }
// const korean = new Korean();
// const italian = new Italian();
// console.log(korean.makeStew(true));
// console.log(korean.fryRice(true)); // 동일
// italian.makeStew = korean.makeStew;
// italian.fryRice = korean.fryRice;
// console.log(italian.makeStew(false)); // function에서의 this는 동적바인딩이므로 피자찌개를 끓임
// console.log(italian.fryRice(false)); // 화살표함수에서는 정적바인딩이므로 김치찌개를 끓임
// // 객체에서는 함수 상관없이 객체 리터럴을 this는 가리키지만 생성자 함수나 class에서는 this는 그 object를 가리킨다.

// 클래스에서
// ♻️ 새로고침 후 실행
class Korean {
    constructor() {
        this.favorite = '김치';
        this.fryRice = (isHot) => {
            return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
        }
    }
    makeStew(isHot) {
        return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
    }
}
class Italian {
    constructor() {
        this.favorite = '피자';
    }
}
const korean = new Korean();
const italian = new Italian();
console.log(korean.makeStew(true));
console.log(korean.fryRice(true));
italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;
console.log(italian.makeStew(false));
console.log(italian.fryRice(false));
// call, apply, bind의 인자들은 무시된다.