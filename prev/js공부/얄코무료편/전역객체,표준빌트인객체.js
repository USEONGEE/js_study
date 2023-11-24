// // 코드로 선언하지 않아도 어디서든 사용할 수 있는, "전역 범위"에 존재하는 객체
// console.log(this); // 브라우저에서 this는 window object를 의미, node.js에서는 아니다
// console.log(global); // node에서의 전역 객체를 볼 수 있음
// console.log(globalThis) // browser, node 둘 다에서 사용 가능하다.




// 전역 객체에 포함되는 것
// 1. 표준 빌트인 객체
// 2. 호스트 객체 - 환경에서 제공하는 객체들 : Browser에서의 Web API, Node.js에서의 API 등





// wrapper object
const str = 'abcde';
console.log(
    str.length,
    str.toUpperCase(),
    str[0]
); // String ojbect에 정으된 method 들이다. 하지만 primitive type의 변수에서 해당 method들을 호출 시에는
// wrapper object가 primitive type 변수를 감싸서 기능을 수행하고 사라진다(메모리 절약을 위해서)
console.log(typeof str); // data tyep : string(primitive)
const str1 = new String('hello');
console.log(typeof str1) // data type : object
console.log(typeof str1.valueOf()) // valueOf() 함수는 래퍼 함수의 인스턴스에서 원시값을 반환한다