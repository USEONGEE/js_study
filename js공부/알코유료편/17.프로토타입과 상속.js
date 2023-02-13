// // 두 생성자 함수를 만들어서 instance를 만들었지만 둘은 서로 상속 관계가 아니다.
// function Bird(name, sound) {
//     this.name = name;
//     this.sound = sound;
// }
// Bird.prototype.fly = function () {
//     console.log(`${this.name} ${this.sound} 비행중`);
// }
// function Eagle(name, sound, prey) {
//     this.name = name;
//     this.sound = sound;
//     this.prey = prey;
// }
// Eagle.prototype.hunt = function () {
//     console.log(`${this.name} ${this.prey} 사냥중`);
// }
// const bird = new Bird('새돌이', '파닥파닥');
// const eagle = new Eagle('독돌이', '푸드덕', '토끼');
// console.log(bird);
// console.log(eagle);

// // 둘을 상속 관계로 만들어주려면?
// // 1. 프로토타입을 상속하기, Object.create()
// function Bird(name, sound) {
//     this.name = name;
//     this.sound = sound;
// }
// Bird.prototype.fly = function () {
//     console.log(`${this.name} ${this.sound} 비행중`);
// }
// function Eagle(name, sound, prey) {
//     this.name = name;
//     this.sound = sound;
//     this.prey = prey;
// }
// Eagle.prototype = Object.create(Bird.prototype); // 상속을 받는다, Bird의 프로토타입을 갖는 새로운 프로토타입을 만들어서 Bird의 프로토타입에 넣는다.
// Eagle.prototype.hunt = function () {
//     console.log(`${this.name} ${this.prey} 사냥중`);
// };
// const bird = new Bird('새돌이', '파닥파닥');
// const eagle = new Eagle('독돌이', '푸드덕', '토끼');
// console.log(bird);
// console.log(eagle);
// console.log(
//     eagle instanceof Bird, // ealge은 Bird에 상속되어 있지만
//     bird instanceof Eagle // bird는 Eagle에 상속되어 있지 않다.
// );
// bird.fly();
// eagle.fly();
// eagle.hunt();

// 2. 부모의 constructor 활용하기
function Bird(name, sound) {
    this.name = name;
    this.sound = sound;
}
Bird.prototype.fly = function() { // Bird의 프로토타입에 함수 정의
    console.log(`${this.name} ${this.sound} 비행중`);
}
function Eagle(name,sound,prey) { // Eagle이 갖는 변수들을 정의
    Bird.call(this, name,sound); // Bird도 생성자 "함수" 이므로 call 을 사용해서 Bird, 다른 생성자 함수를 사용할 수 있다.
    this.prey = prey;
}
Eagle.prototype = Object.create(Bird.prototype);
Eagle.prototype.hunt = function() {
    console.log(`${this.name} ${this.prey} 사냥중` );
}
const eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(eagle);
eagle.fly();
eagle.hunt();