// map의 객체와의 차이
// 1. 이터러블이다
// 2. method, property에 있어서 기능의 차이가 있다
// 3. 객체와 배열 등의 참조값을 키로 사용 가능하다
// 4. ★ 키와 값을 자주 변경하는 경우에 적합하도록 설계되어 있다 ★

// // Map 생성
// const map1 = new Map();
// // set 메서드 - 키와 값의 쌍 추가
// map1.set('x', 1);
// map1.set(123, 'ABC');
// map1.set(true, { a: 1, b: 2 });
// console.log(map1);

// // [[키 쌍]...] 배열로 생성 + 초기화
// const map2 = new Map([
//     ['x', 1],
//     [123, 'ABC'],
//     [true, { a: 1, b: 2 }],
// ]); // 2중 배열
// console.log(map2);
// // 키의 중복 불허 - 해당 키 있을 시 덮어씀
// map2.set('x', 2);
// console.log(map2);
// // has 메서드 - 요소 포함여부 확인
// console.log(
//     map2.has('x'), // true, false를 리턴
//     map2.has('y')
// );
// // get 메서드 - 값에 접근
// console.log(
//     map2.get('x'),
//     map2.get(123),
//     map2.get(true),
//     map2.get('y') // 없는 키로 접근시 undefined 반환
// );





// 💡 참조값도 키로 사용 가능
// const map2 = new Map();
// const objKey = { x: 1, y: 2 };
// const arrKey = [1, 2, 3];
// map2.set(objKey, 'OBJ_KEY');
// map2.set(arrKey, 'ARR_KEY');
// console.log(map2);
// // 참조값으로 불러오므로 objKey에 해당된 주소를 objKey2에 할당하면 objKey2로도 값을 얻을 수 있다
// console.log(map2.get(objKey));
// const objKey2 = objKey;
// console.log(map2.get(objKey2));
// // 하지만 반대로 참조값이기에 해당값으로 접근이 불가능하다
// console.log(map2.get({ x: 1, y: 2 }));
// // 때문에 이렇게 사용하면 안 됨
// map2.set({ x: 3, y: 4 }, '못꺼냄');
// console.log(map2);
// console.log(
//     map2.get({ x: 3, y: 4 })
// );
// // delete 메서드 - 요소 제거 & 성공 여부 반환
// console.log(
//     map2.delete('x'),
//     map2.delete(objKey),
//     map2.delete({ x: 3, y: 4 }) // 삭제도 못 한다 ㅜㅜ
// );
// console.log(map2)





// set과 동일하게 메소드 체이닝이 가능하다
// size property를 갖고 있다
// // keys, values, entries 메서드 - 키 / 값 / [키, 값] 반환
// const map1 = new Map();
// map1.set('x', 1);
// map1.set(123, 'ABC');
// map1.set(true, { a: 1, b: 2 });
// console.log(
//     map1.keys(),
//     map1.values(),
//     map1.entries()
// );




// iterable
const arr = [
    ['🐶', '강아지'],
    ['🐱', '고양이'],
    ['🐯', '호랑이'],
    ['🐵', '원숭이'],
    ['🐨', '코알라']
];
const map = new Map(arr); 
for ([key, value] of map) console.log(key, value);
for (i of map) console.log(i); // map의 key, value를 배열로 반환한다
// 스프레드
const newArr = [...map];
console.log(newArr);
// 디스트럭쳐링
const [x, y] = map;
console.log(x);
console.log(y);
const [a, b, ...rest] = map;
console.log(a);
console.log(b);
console.log(rest);
