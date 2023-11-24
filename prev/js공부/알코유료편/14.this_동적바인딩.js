// // this, 자신이 속한 곳을 가리킴
// // 전역 객체에서 this는 브라우저에서는 window, node.js에는 빈 객체 반환
// // 기본적으로 this는 객체 안에서 쓰인다.
// // a. 객체 리터럴
// const obj = {
//     x: 123,
//     getX: function () {
//         return this.x; // this는 obj를 가리킨다.
//     }
// }
// console.log(obj.getX());


// // b. 생성자 함수 -> 생성될 인스턴스를 가리킨다.
// function Person(name, age) {
//     this.name = name;
//     this.age = age; 
//     this.introduce = function () {
//         return `저는 ${this.name}, ${this.age}세입니다.`// instance의 age // instance의 name
//     }
// }
// console.log(
//     new Person('홍길동', 20).introduce()
// );

// // c. 클래스 선언 -> 생성될 인스턴스를 가리킨다.
// class YalcoChicken {
//     constructor (name, no) {
//         this.name = name;
//         this.no = no;
//     }
//     introduce() {
//         return `안녕하세요 ${this.no}호 ${this.name}점 입니다.!`
//     }
// }
// console.log(new YalcoChicken('강남', 17).introduce())





// // ★ 동적 바인딩
// const korean = {
//     favorite: '김치',
//     makeStew: function (isHot, pots) {
//         return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`
//     }
// };
// const italian = {
//     favorite: '피자'
// };
// console.log(
//     korean.makeStew(true, 1)
// )
// // 이탈리아인에게 한국인이 찌개 끓이는 법을 알려줌
// italian.makeStew = korean.makeStew;
// console.log(
//     italian.makeStew(false, 2) // korean의 makeStew를 받은 이탈리안인은 피자찌개를 만들어버렸다..
// );
// // 누가 어떻게 호출되었는지에 따라 this가 가리키는 대상이 달라짐
// // 해결방법들
// // 1. call(), 첫 번째 인자로 this가 가리킬 객체 넣어주기, makeStew()의 인자들을 차례로 넣어주기
// console.log(
//     italian.makeStew.call(korean, false, 2)
// );
// // 2. apply(), 첫 번째 인자로 this가 가리킬 객체 넣어주기, makeStew()의 인자들기 배열로 묶어서 넣어주기
// console.log(
//     italian.makeStew.apply(korean, [false, 2])
// );
// // 3. bind()로 묶기
// // ⭐ this가 바인딩된 새 함수를 만듦
// italian.makeRightStew = korean.makeStew.bind(korean);
// console.log(
//     italian.makeRightStew(false, 2)
// );
// // 💡 추가 인자들까지 바인딩 가능 
// italian.makeClassicStew = korean.makeStew.bind(korean, true, 1);
// console.log(
//     italian.makeClassicStew()
// );

// // 4. 바인딩된 함수를 내보내는 함수
// const korean = {
//     favorite: '김치',
//     makeStew: function (isHot, pots) {
//         return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
//     },
//     teachMakingStew: function () {
//         return this.makeStew.bind(this); // 현재 객체의 함수를 bind 하며 bind()의 인자로 현재 객체를 준다.
//     }
// };
// const italian = {
//     favorite: '피자'
// };
// italian.makeStew = korean.teachMakingStew();
// console.log(
//     italian.makeStew(false, 2)
// );

// // 5. 생성자 함수일 경우 - 함수 자체를 미리 인스턴스에 바인딩하기
// function Korean() {
//     this.favorite = '김치';
//     this.makeStew = function (isHot, pots) {
//         return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
//     };
//     // 💡 여기서 바인딩을 고정시켜버림
//     this.makeStew = this.makeStew.bind(this);
// }
// function Italian() {
//     this.favorite = '피자';
// }
// const korean = new Korean();
// const italian = new Italian();
// italian.makeStew = korean.makeStew;
// console.log(
//     italian.makeStew(false, 2)
// );

// // call, apply, bind의 다른 활용
// const korean = {
//     favorite: '김치',
//     makeStew: function(isHot, pots) {
//         return `${isHot?'매운':'순한'} ${this.favorite}찌개 ${pots}냄비`
//     }
// };
// console.log(
//     korean.makeStew.call({favorite:'된장'},true,2) // 특수한 목적으로 사용하기 위해 사용, 어차피 첫 번째 인자로 객체가 넘어가면 됨
// )

// // 객체들이 가져다 쓰도록 만든 함수
// function intro(job) {
//     return `${this.name}(${this.age}세) - ${job}`
// }
// const hong = {
//     name: '홍길동',
//     age: 20
// };
// const jeon = {
//     name: '전우치',
//     age: 25
// };
// // 동적 바인딩 특성 활용
// hong.intro = intro; // hong 객체에 intro() 함수를 넣음
// console.log(
//     hong.intro('개발자')
// );
// // 혹은
// console.log(intro.call(hong, '개발자')); // call, apply는 본래 함수의 메소드다. 이렇게 사용해도 된다!
// console.log(intro.apply(jeon, ['사무직']));





// 배열 메소드의 thisArg
function recommendForYou(me) {
    const products = [
        { sex: 'F', size: 'M' },
        { sex: 'M', size: 'L' },
        { sex: 'F', size: 'M' },
        { sex: 'U', size: 'S' },
        { sex: 'M', size: 'L' },
        { sex: 'F', size: 'S' },
    ];
    products
        .map((itm, idx) => { // map을 이용해 새로운 배열 생성
            return { ...itm, idx }
        })
        // ⚠️ 화살표 함수 대신 function 선언 함수 사용 주성
        .filter(function ({ sex, size }) { // 해당 배열에서 조건에 맞는 객체들만 뽑아 새 배열 생성
            return ['U', this.sex].includes(sex)
                && size === this.size
        }, me) // 💡 thisArg, 인자로 함수가 받은 인자(객체) me를 넣는다.
        .forEach(function ({ idx }) {
            console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
        }, me); // 💡 thisArg
}
const peter = {
    name: '피터',
    sex: 'M',
    size: 'L'
};
const jane = {
    name: '제인',
    sex: 'F',
    size: 'S'
};
recommendForYou(peter);
recommendForYou(jane);