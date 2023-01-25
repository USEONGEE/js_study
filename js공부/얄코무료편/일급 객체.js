// 자바스크립트는 함수를 변수처럼 사용하는 언어
// ⭐️ 함수의 자료형
function addNumbers(a, b) { return a + b; }
console.log(typeof addNumbers); // data type : function
console.log(addNumbers instanceof Object);




function isOddNum(number) {
    console.log(
        (number % 2 ? '홀' : '짝')
        + '수입니다.'
    );
    return number % 2 ? true : false;
};
const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의
console.log(checkIfOdd(101));
console.log(typeof (checkIfOdd)); // data type : function




let person = {
    name: '홍길동',
    age: 30,
    married: true,
    introduce: function (formal) { // 함수가 이름이 없음 대신에 key값인 introduce가 그 역할을 대신함
        return formal
            ? '안녕하십니까. 홍길동 대리라고 합니다.'
            : '안녕하세요, 홍길동이라고 해요.';
    }
};
console.log(person.introduce(true));
console.log(person.introduce(false));




let arithmetics = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
];
for (arms of arithmetics) {
    console.log(arms(5, 3));
}




let person1 = {
    name: '홍길동',
    age: 30,
    married: true,
    introduce: function () { // 함수로 정의해야 하지 "() => {}" 화살표 함수로 정의하면 this로 객체를 가리킬 수가 없다.
        return `저는 ${this.name}, ${this.age}살이고 `
            + `${this.married ? '기혼' : '미혼'}입니다.`; // this는 person1 객체를 가리킨다.
    }
}
console.log(person1.introduce());




let list = [1, 2, 3, 4, 5];
function doInArray(array, func) { // console.log라는 function이 인자로 넘어옴, console.log는 doInArray 함수 안에서 func로 사용된다.
    for (item of array) { // 전달받는 함수 : 고차 함수, 전달되는 함수 : 콜백 함수
    }
}
// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log);




function doNTimes(func, repeat, x, y) {
    let result = x;
    for (i = 0; i < repeat; i++) {
        result = func(result, y);
    }
    return result;
}
console.log(
    doNTimes((x, y) => x * y, 3, 5, 2), // 콜백 함수가 이름이 없다... 이름이 없는 함수를 "익명 함수(anonymous function)"이라고 한다.
    doNTimes((x, y) => x / y, 3, 5, 2),
);




function getIntroFunc(name, formal) {
    return formal
        ? function () {
            console.log(`안녕하십니까, ${name}입니다.`);
        } : function () {
            console.log(`안녕하세요~ ${name}이라고 해요.`);
        } // 삼항연산자를 이용한 return, return값이 function일 수 있다.
}
const hongIntro = getIntroFunc('홍길동', true);
const jeonIntro = getIntroFunc('전우치', false);





// ⭐ 커링으로 작성된 함수
function curryAddMultSubt(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return (a + b) * c - d;
            }
        }
    }
}
const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;
console.log(
    curryAddMultSubt(2,3,4,5)(3)(4)(5), // ()()()() 라는 순서를 맞춰야 한다. 이전에 (2,3,4,5)()()()를 입력하면 3,4,5는 사라진다.
    curryAddMultSubt2(2)(3)(4)(5)
);
