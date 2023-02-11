// // 렉시컬(static) scope
// // 렉시컬 환경 -> 특정 코드가 작성, 선언된 환경을 의미한다.
// const x = 1;
// const y = 1;
// const z = 1;
// function func1(a) {
//     const y = 2;
//     const z = 2;
//     function func2(b) {
//         const z = 3;
//         console.log('3.', x, y, z, b);
//     }
//     console.log('2.', x, y, z, a);
//     func2(a + 1);
// }
// console.log('1.', x, y, z)
// func1(1);
// // 스코프 내에 찾는 변수가 없으면 상위 스코프로 가서 값을 찾는다.





// // closure, 내부 함수에서 외부 함수의 값에 접근할 수 있다는 개념
// function func1() {
//     const word = 'Hello';
//     function func2() {
//         console.log(word);
//     }
//     return func2;
// }
// const logHello = func1(); // 실행 후 fucn1을 사라졌다.
// logHello(); // 하지만 func1() 안에 정의된 word를 출력할 수 있다, func2와 func2가 선언된 환경(func1)의 조합 => 클로저

// // closure 예시
// function createCounter(start) {
//     let num = start;
//     return function () { // 인자로 받은 값에 1을 더 한 값을 출력하는 함수를 반환
//         console.log(++start);
//         return start;
//     }
// }
// const count = createCounter(10); // count에는 익명함수가 선언된 환경 => 클로저가 담겨있다. => 살아있다.
// count() // 11
// count() // 12

function employeeCreator(name, age) {
    let _name = name;
    let _age = age;
    return {
        name: () => _name,
        age: () => _age,
        setAge: function (age) { _age = age; },
        getOlder: function (years) { _age += years; }
    }
}
const employee = employeeCreator('홍길동', 20); // employeeCreator()는 실행된 후 사라졌으므로 그 안에 선언된 변수들 또한 사라졌다. 
console.log(employee); 
console.log(employee.name(), employee.age()); // 하지만 employee 안에 closure로 인해 살아있다.