// 접근자 프로퍼티
// getter, setter 라고도 부름
// instance의 property 값을 읽거나 저장하기 위해서 사용한다
// **사용할 때 method, function처럼 ()를 붙히지 않고 property처럼 사용한다

// // 객체 literal
// const person1 = {
//     age: 17,
//     get koreanAge() {
//         return this.age;
//     },
//     set koreanAge(krAge) {
//         this.age = krAge + 1;
//     }
// };
// console.log(person1, person1.koreanAge); // ()없이 사용
// person1.koreanAge = 20; // ()없이 사용 => java와 다르다
// console.log(person1, person1.koreanAge);





// // Class에서 사용하기
// class YalcoChicken {
//     constructor(name, no) {
//         this.name = name;
//         this.no = no
//     }
//     get chainTitle() {
//         return `${this.no}호 ${this.name}점`;
//     }
//     set chainNo(chainNo) {
//         if (typeof chainNo !== 'number') return;
//         if (chainNo < 0) return;
//         this.no = chainNo;
//     }
// }
// const chain1 = new YalcoChicken('판교',3);
// console.log(chain1.chainTitle);
// chain1.chainNo = 4;
// console.log(chain1.chainTitle);





// // setter 사용 오류 예시, 무한 반복
// class YalcoChicken {
//     constructor(name, no) {
//         this.name = name;
//         this.no = no; // 1. 생성자 함수 실행 -> 2. setter 함수 실행
//     }
//     get no() {
//         return this.no;
//     }
//     set no(no) {
//         this.no = no; // 3. setter함수 실행 (재귀) => 무한 루프
//     }
// }
// // const chain1 = new YalcoChicken('판교', 3); // 실행시 오류





// // 이를 해결하는 방법
// class YalcoChicken {
//     constructor(name, no) {
//         this.name = name;
//         this.no = no; // 1. 새로운 instance가 선언되면 제일 먼저 setter함수가 실행된다.
//     }
//     get no() {
//         return this._no + '호점';
//     }
//     set no(no) {
//         this._no = no; // 2. setter함수에서 property에 값을 저장한다. 단, 이때의 property의 이름은 '_no'이다.
//     }
// }
// const chain1 = new YalcoChicken('판교점', 3);
// console.log(chain1); // 3. property name이 '_no'임을 알 수 있다.
// // 하지만 console.log(chain1._no) 로 chain1의 property에 직접 접근이 가능하다 => 보안에 위험하다 





// // 위 문제를 해결하기 위해서 다른 객체지향언어에서는 private 을 지원한다. JavaScript에서도 해당 기능을 제공한다.
// // 은닉(encapsulation)
// // private 필드를 통한 은닉
// class Employee {
//     #name = '';
//     #age = 0;
//     constructor(name, no) {
//         this.#name = name;
//         this.#age = 0;
//     }
// }
// const e1 = new Employee('홍길동', 20);
// console.log(e1.name); // undefined가 나온다. 즉 직접 접근이 불가능하다.
// console.log(e1['#name']); // undefined가 나온다





// 클래스 내에서는 private 필드에 접근이 가능하므로 getter, setter 함수를 이용해 값을 출력하고 입력한다.
class Employee {
    #name = '';
    #age = 0;
    constructor(name, age) {
        this.#name = name;
        this.#age = age
    }
    get name() {
        return this.#name[0] + '모씨';
    }
    get age() {
        return this.#age - (this.#age % 10) + '대';
    }
    set age(age) {
        if (typeof age === 'number' && age > 0) {
            this.#age = age;
        }
    }
    
}
