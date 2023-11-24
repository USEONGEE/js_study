// // 기본 생성
// const mySymbol = Symbol();
// console.log(typeof mySymbol, mySymbol); // data type : symbol

// // 심볼의 값은 유일무이하다
// // 문자열을 인자로 줄 수 있으나, 심볼에 대한 설명일 뿐 큰 의미는 없다.
// const symbol1 = Symbol('hello');
// const symbol2 = Symbol('hello');
// console.log(symbol1, symbol2);
// console.log(symbol1 === symbol2); // false

// // 래퍼 객체(Symbol)의 인스턴스 프로퍼티
// const symbol1 = Symbol('hello');
// const symbol2 = Symbol('hello');
// console.log(symbol1.description, symbol2.description); 

// // 객체의 키로 사용된다면
// const obj = {
//     [Symbol('x')]: 1,
//     [Symbol('y')]: 2
// }
// console.log(obj);
// console.log( // 유일무이한 값이므로 다음과 같이 출력 불가
//     obj[Symbol('x')], // undefined
//     obj[Symbol('y')]
// );





// // 외부 접근을 제한할 Property로 사용
// const buildingKey = Symbol('secret');
// const building = {
//     name: '얄코사옥',
//     floors: 3,
//     [buildingKey]: '1234#'
// }
// console.log(building); // buliding의 property로 buligingKey가 있지만 심볼로 할당했기에 키값이 익명의 값으로 보호된다
// console.log(
//     building.name,
//     building.floors,
//     building[buildingKey]
// );
// console.log(// 외부로부터의 접근 차단
//     building[Symbol('secret')] // Symbol('secret') 으로는 접근할 수 없다
// );

// // 아래 방법들로 접근 제한
// const buildingKey = Symbol('secret');
// const building = {
//     name: '얄코사옥',
//     floors: 3,
//     [buildingKey]: '1234#'
// }
// for (key in building) {
//     console.log(key); // buliding의 키값으로 symbol로 생성성 키는 보여주지 않는다 
// }
// console.log(
//     Object.keys(building),
//     Object.values(building),
//     Object.entries(building),
//     Object.getOwnPropertyNames(building)
// );

// // 아래 방법들로는 가능하다
// const buildingKey = Symbol('secret');
// const building = {
//     name: '얄코사옥',
//     floors: 3,
//     [buildingKey]: '1234#'
// }
// console.log( // Object의 static method
//     Object.getOwnPropertySymbols(building), // 특정 객체의 symbol로 생성된 key값들을 배열로 반환
//     Object.getOwnPropertySymbols(building)[0],
// );
// console.log(
//     building[
//     Object.getOwnPropertySymbols(building)[0]
//     ]
// );





// // 전역 심볼 레지스트리, 키가 중복되지 않는 심볼들이 저장되는 공간
// // Symbol.for()
// const symbol1 = Symbol.for('key');
// const symbol2 = Symbol.for('key'); // Symbol()로 생성한 객체는 무조건 값이 다르지만 for method를 사용하면 key값을 통해 구분되는 심볼을 생성할 수 있다.
// console.log(symbol1 === symbol2);

// // 예시
// const symbol1 = Symbol.for('key');
// const obj = {
//     [symbol1] : 'STRING'
// };
// console.log(obj[Symbol.for('key')]) // Symbol()과 다르게 symbol1에 할당된 값으로 접근 가능
// const symbol2 = Symbol('key');
// console.log(symbol1 === symbol2); // Symbol()과 Symbol.for()로 생서한 값은 다르다

// Symbol.keyFor(), Symbol.for()에 인자로 넘겨준 String값을 반환한다.
const symbol1 = Symbol.for('key');
const symbol2 = Symbol.for('key');
console.log(
    Symbol.keyFor(symbol1),
    Symbol.keyFor(symbol2)
)
const symbol3 = Symbol('key');
console.log(
    Symbol.keyFor(symbol3) // Symbol.for()로 생성하지 않은 객체에 대해서는 사용이 불가능하다.
);