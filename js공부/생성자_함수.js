// // 비효율적인 프로그래밍
// // 얄코치킨의 체인점을 나타내는 객체들
// const chain1 = {
//     name: '판교',
//     no: 3,
//     introduce() {
//         return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//     }
// };
// const chain2 = {
//     name: '강남',
//     no: 17,
//     introduce() {
//         return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//     }
// };
// const chain3 = {
//     name: '제주',
//     no: 24,
//     introduce() {
//         return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//     }
// };
// console.log(chain1, chain2, chain3);
// // 이처럼 같은 형식의 객체들을 다수 만들어야 한다면?





// 생성자 함수, 관례적으로 대문자로 시작한다.
function YalcoChicken(name, no) {
    this.name = name; // 여기서의 this는 constructor로 생성될 객체, instance를 의미한다.
    this.no = no;
    this.introduce = function () {
        reurtn`안녕하세요, ${this.no}호 ${this.name}점 입니다!`;
    }
    // this.introduce = () => `안녕하세요, ${this.no}호 ${this.name}점 입니다!`; 
    // // 원래는 화살표 함수에서의 this는 상위 단계의 
} 
const y1 = new YalcoChicken('판교', 1); // new를 붙혀줘야 생성자 함수로 역할을 한다.
console.log(y1.introduce());
console.log(typeof y1); // data type : object
// prototype, class와 다른 constructor의 강력한 기능
YalcoChicken.prototype.introEng = function () {
    return 'Welcome!';
} // 생성자의 prototype에 새로운 function을 추가할 수 있다. 이렇게 추가하면 기존에 만들어졌던 객체부터 향후의 객체까지 모든 객체에
// 새로운 기능이 탑재된다. 구조를 살펴보면 생성자의 프로토타입 안에 introEng()라는 함수가 위치해있다. 다른 함수들은 prototype 밖에 있다. (차이점)
console.log(y1.introEng());
// 생성자 함수 자체의 field와 function
YalcoChicken.brand = `얄코치킨`; // 생성자 함수 그 자체의 필드에 brand라는 property를 집어넣은 것이다.
YalcoChicken.contact = function () {
    return `안녕하세요 ${this.brand}입니다. 무엇을 도와드릴까요?`;
} // 생성자 함수 그 자체의 필드에 contact()라는 function의 property를 집어넣은 것이다.
console.log(`${YalcoChicken.brand},
${YalcoChicken.contact()}`);
console.log(y1.contact()); // 객체 y1에서는 contact()를 이용할 수 없다.... 시발 존나 어렵네 ㅜㅜ



