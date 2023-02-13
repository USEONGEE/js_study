// // 자바스크립의 모든 객체는 prototype을 가진다.
// // object는 모든 것의 조상이다.
// // Number 객체는 number prototype을 가지고 그 안에 object prototype를 가지고 있다.
// // 코드로 프로토타입에 접근하기
// // 1. __proto__, 곧 없어질 기능
// console.log(
//     {}.__proto__
// )
// // 2. Object.getPrototypeOf
// console.log(
//     Object.getPrototypeOf({})
// )
// // 3. 생성자 함수에서는 prototype으로 접근 가능
// function Person (name) {
//     this.name = name;
// }
// console.log(Object.getPrototypeOf(Person.prototype));





// // 인스턴스 vs 프로토타입 프로퍼티
// // 생성자 함수도 생성자 함수의 프로퍼티가 있다, 사용자가 설정한 생성자 함수는 Object라는 이름으로 프로토타입이 생성되고 그 안에 constructor에 함수명이 적혀있다.
// function YalcoChicken(name, no) {
//     this.name = name
//     this.no = no;
//     this.introduce = function () {
//         return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`;
//     }
// }
// const chain1 = new YalcoChicken('판교', 3);
// // 새로운 업무 추가하기
// YalcoChicken.prototype.introEng = function() {
//     return `Welcome to Yalco Chicken at ${this.name}!`
// }
// introduce는 만들어지는 instance마다 있지만, introEng는 프로토타입에 한 번만 정의되어 있기에 메모리가 절약된다.

// // 위의 코드를 아래와 같이 작성하여 메모리를 줄일 수 있다.
// function YalcoChicken(name, no) {
//     this.name = name;
//     this.no = no;
// }
// // 공통된 요소는 프로토타입에 작성하기
// YalcoChicken.prototype.titleEng = 'YalcoChicken';
// YalcoChicken.prototype.introduce = function () {
//     return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`; // 생성자로 생성된 instance
// };
// YalcoChicken.prototype.introEng = function () {
//     return `Welcome to ${this.titleEng} at ${this.name}!`;
// };
// const chain1 = new YalcoChicken('판교', 3);
// console.log(chain1.introduce());
// console.log(chain1.introEng());
// // 만약에 프로토타입에서 정의한 함수가 마음에 안들면 ? ? 
// const chain2 = new YalcoChicken('평양', 456);
// chain2.introduce = function () { // 수정할 수 있다.
//     return `어서오시라요, ${this.no}호 ${this.name}점입네다!`;
// }
// console.log(chain2.introduce());

// 클래스에서도 적용이 가능하다
class Dog {
    constructor(name) {
        this.name = name;
    }
}
Dog.prototype.sound = '멍멍'; // Dog의 프로토타입에 작성
Dog.prototype.bark = function () { // 메서드로 만드는 것과 같음
    console.log(this.sound)
};
const badugi = new Dog('바둑이');
badugi.bark();