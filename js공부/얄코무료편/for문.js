// for a in b 하면 object에서 키값을 받아와서 a에 할당하는 구조가 된다.
const dict = {
    name: '라면',
    taste: '매운맛',
    cal: 500,
    cold: false,
}
for (const keys in dict) { // dict object의 key값 받아오기
    console.log(keys);
}
for (const keys in dict) { // dict object의 value값까지 접근하기
    console.log(keys, ' : ', dict[keys]);
}

const list = ['가', '나', '다', '라', '마'];
for (const key of list) {
    console.log(key);
}