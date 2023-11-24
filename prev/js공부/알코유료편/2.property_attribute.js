// const person = {
//     // 데이터 프로퍼티
//     fullName: '홍길동',
//     ageInNumber: 25,

//     // 접근자 프로퍼티
//     get name() {
//         return this.fullName.split().map((letter, idx) => idx === 0 ? letter : '*').join('');
//     },
//     get age() {
//         return this.ageInNumber + '세';
//     },
//     set age(age) {
//         this.ageInNumber = Number(age);
//     }
// };
// console.log(person.name, person.age);





// // Property attribute 관련 static method들
// // getownPropertyDescriptor
// const person = {
//     fullName: '홍길동',
//     ageInNumber: 25,
//     get name() {
//         return this.fullName
//             .split('')
//             .map((letter, idx) => idx === 0 ? letter : '*')
//             .join('');
//     },
//     get age() { return this.ageInNumber + '세'; },
//     set age(age) {
//         this.ageInNumber = Number(age);
//     }
// }
// // 특정 프로퍼티를 지정하여 반환
// // valeu : 값, writable : 수정 여부, enumerable : 배열로 나열 여부, configurable : attribute 수정 여부
// console.log('1.',
//     Object.getOwnPropertyDescriptor(person, 'fullName')
// );
// console.log('2.',
//     Object.getOwnPropertyDescriptor(person, 'ageInNumber')
// );
// console.log('3.', // set: undefined
//     Object.getOwnPropertyDescriptor(person, 'name')
// );
// console.log('4.', // get, set 모두 있음
//     Object.getOwnPropertyDescriptor(person, 'age')
// );
// // 모든 프로퍼티의 어트리뷰트 객체로 묶어 반환
// console.log(
//     Object.getOwnPropertyDescriptors(person)
// );

// // defineProperty, defineProerties -> Object의 property를 정의
// const person = {};
// Object.defineProperty(person, 'fullName', {
//     value: '홍길동',
//     writable: true
//     // 누락한 어트리뷰트는 기본값(false)으로 자동생성
// });
// Object.defineProperty(person, 'name', {
//     get() {
//         return this.fullName
//             .split('')
//             .map((letter, idx) => idx === 0 ? letter : '*')
//             .join('');
//     }
// });
// console.log(person, person.name);
// console.log( // 누락된 어트리뷰트들 확인해볼 것
//     Object.getOwnPropertyDescriptors(person)
// );

// // 예시
// const person = {
//     fullName: '홍길동',
//     ageInNumber: 25,
// };
// Object.defineProperty(person, 'fullName', {
//     value: '전우치' // person.fullName의 값을 바꾼다
// });
// console.log(person);
// console.log(Object.keys(person));
// Object.defineProperty(person, 'fullName', {
//     enumerable: false // Data property의 attribute를 바꾼 것
// });
// console.log(person); // fullName이 안 보인다
// console.log(Object.keys(person)); // fullName이 안 보인다
// // Object의 또다른 static method
// console.log(
//     Object.getOwnPropertyNames(person) // 여기서는 또 보인다...
// );
// console.log(
//     Object.getOwnPropertyDescriptors(person) // 여기서도 보인다 ^^
// );
// // prevenExtension, freeze 등 Object의 static method는 Property attribute를 이용해서 만드는 것이다





// deep frozen, 재귀식을 이용해 모든 property를 동결하는 것
// ***꼭 이해하고 넘어가자***
function getDeepFrozen(obj) {
    console.log(obj);

    const result = {};
    const propNames = Object.getOwnPropertyNames(obj);

    for (const name of propNames) {
        const value = obj[name];

        result[name] =
            (value && typeof value === 'object') ? // result 안의 property의 data type이 Object라면 다시 함수를 호출(재귀)한다.
                getDeepFrozen(value) : value;
    }
    return Object.freeze(result);
}
let myObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
}
myObj.a++;
myObj.b.c++;
myObj.b.d.e++;
myObj.b.d.f.g++;
console.log(myObj);
myObj = getDeepFrozen(myObj);
console.log(myObj);