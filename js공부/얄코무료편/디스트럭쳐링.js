// // 기존에 object의 property를 선언하는 방법
// const obj = { x: 1, y: 2, z: 3 };
// const x = obj.x;
// const y = obj.y;
// const z = obj.z;
// console.log(x, y, z);





// // destructuring
// const obj = { x: 1, y: 2, z: 3 };
// const { x, y, z } = obj; // 간략하게 변수를 선언할 수 있다
// console.log(x, y, z);





// // destructuring 변형 예시
// const obj = { x: 1, y: 2, z: 3 };
// const { x, y, u } = obj; 
// console.log(x, y, u); // obj에 u에 해당하는 property가 없으므로 u는 undefined로 출력된다





// // legnth property
// const array1 = [1, 2, 3, 4, 5];
// console.log(array1.length); // array1에는 length라는 property가 있음
// const { length } = array1;
// console.log(length); // length에 array1의 property를 담을 수 있다





// destructuring 활용
function introduce({age,married,job,name}) { // 매개 "변수"를 destructuring으로 받음
    // + 이 함수에서는 어떤 property를 쓸 건지 개발자의 의도를 보여줄 수 있는 "가독성이 좋은" 코드를 만드는데 유리하다
    console.log(`이름 : ${age}
기혼 여부 : ${married}
직업 : ${job}
이름 : ${name}`)
}
const person1 = {
    job : '개발자',
    age : 28,
    married : false,
    name : '김철수',
    blood : 'o'
};
introduce(person1); // 매개 변수로 object를 넘겨주면 함수 차원에서 알아서 property를 가져와 함수를 실행한다.
