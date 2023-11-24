// 생성자 함수를 타 객체지향언어처럼 쉽게 사용하기 위해서 만들어짐
// class는 호이스팅이 되지 않음
// new 가 없으면 실행되지 않음


// class YalcoChicken {
//     constructor(name, no) { // constructor는 class당 하나만 선언 가능하다, constructor는 필수적으로 사용하지 않아도 된다.
//         this.name = name;
//         this.no = no;
//     }
//     introduce() { // 메소드
//         return `안녕하세요 , ${this.no}호 ${this.name}점 입니다!`;
//     }
// }
// const chain1 = new YalcoChicken('판교', 3);
// const chain2 = new YalcoChicken('강남', 17);
// const chain3 = new YalcoChicken('제주', 24);




// class Person {
//     constructor(name,age,married = false) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }
// const person1 = new Person('박영희',30,true);
// const person2 = new Person('노유성',24);
// console.log(person1, person2);





// class Dog {
//     bark() {
//         return `멍멍`;
//     }
// }
// const badugi = new Dog(); // instance의 property로 bark()가 존재하는 것이 아니라 bark()는 prototype에 정의되어 있다.
// // 같은 구조를 생성자 함수에서는 property에 존재하는 것이 아니라 instance의 property로 bark()를 가지고 있다.
// console.log(badugi,badugi.bark()); 





// // 필드 (Java class랑 비슷해짐)
// class Slime {
//     hp = 50;
//     op = 4;
//     attack(enemy) {
//         enemy.hp -= this.op;
//         this.hp += this.op / 4;
//     }
// }
// const slime1 = new Slime();
// const slime2 = new Slime();
// console.log(slime1, slime2);
// slime1.attack(slime2);
// console.log(slime1, slime2);
// // class로부터 정의된 instance들은 각각 객체의 property값을 바꿀 수 있다.
// slime1.hp = 100;
// console.log(slime1, slime2);





// // 정적 변수와 메소드
// class YalcoChicken {
//     static brand = '얄코치킨';
//     static contanct() { // static method 이므로 메소드 내부에서 사용하는 모든 변수또한 static variable이어야 한다.
//         return `${this.brand}입니다. 무엇을 도와드릴까요..?`
//     }

//     constructor(name,no) {
//         this.name = name;
//         this.no = no;
//     }

//     introduce(){
//         return `안녕하세요, ${this.no}호 ${this.name}점 입니다.`
//     }
// }
// console.log(YalcoChicken);
// console.log(YalcoChicken.contanct());
// console.log(typeof YalcoChicken); // 클래스도 함수에 속한다.




// 클래스도 함수이다.
class Dog {
    bark() {
        return '멍멍';
    }
}
console.log(typeof Dog);

const 개 = Dog;
const 바둑이 = new 개();
console.log(바둑이);