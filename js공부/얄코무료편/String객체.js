// const arr = [1,'A', false];
// console.log(String(arr)); // arr을 적절히 string으로 반환해줌
// console.log(typeof String(arr)); // data type : string
// console.log(typeof new String(arr)); // data type: object, new는 새로운 객체를 만드는 키워드이다





// // 쉽게 특정 값을 문자열로 바꾸는 방법
// const str = String([1,2,3,4,5]);
// console.log(str);
// const dict = String({a:1}); // object를 string 으로 바꾸는 것은 의미가 없다.
// console.log(dict); // [Object object]로 출력되기 때문





// // string은 어떻게 보면 배열이다
// let str = '안녕하세요!'
// console.log(
//     str.length,
//     str[0],
//     str[str.length-1]
// );
// str[str.length-1] = '?' // '?'를 넣어도 바뀌지 않는다. str이 "primitive type" 이기 때문이다
// console.log(str);





// // at, 새로운 기능
// console.log(
//     '안녕하세요~'.at(1),
//     '안녕하세요~'.at(-1) // python 배열처럼 음수부터 접근이 가능하다
// )





// // indexOf
// const word = '반갑습니다! 반갑습니다!';
// console.log(
//     word.indexOf('습'), // 해당 단어의 index를 반환, 없으면 -1을 반환
//     word.lastIndexOf('습') // 해당 단어들의 index중에서 가장 큰 index를 반환한다
// )





// // substring, slice
// const word = "ABCDEFGHIJKL";
// const part = word.substring(4, 8); // python -> word[5:9], 두 언어의 표현 방식이 다르다
// const part1 = word.slice(-4) // substring은 인자로 음수는 무시된다, slice는 음수 인자를 무시하지 않는다
// console.log(word, part, part1);





// // 정규표현식, search(특정 문자 찾기)
// console.log(
//     '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
//     '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
// );
// // + split(특정 문자를 기준으로 문자열 분리하기)
// console.log(
//     '010-1234-5678'.split('-'),
//     'ABC1DEF2GHI3JKL'.split(/[0-9]/)
// )





// // trim(공백 제거)
// console.log('  안녕하세요   '.trim());





// replace(첫 번째 인자로 받은 값을 두 번째 인자로 받은 값으로 치환한 결과를 반환한다)
console.log('이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예'));
const word = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
console.log(word.replace('밥', '라면'));
console.log(word.replace(/밥/g, '라면')); // 정규식
console.log(word.replaceAll('밥', '라면')); // 정규식 없이도 전부 치환
console.log(word.replaceAll(/밥/g, '라면'));