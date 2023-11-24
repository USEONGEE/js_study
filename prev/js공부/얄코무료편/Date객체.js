// // 날짜와 시간에 관련한 객체임
// const now = new Date(2022, 8, 22);
// console.log(typeof now);
// console.log(now);





// // Data()의 paramter은 시간이다.
// console.log(Date.now()); // 그리니치 천문대를 기준으로 1970.1.1부터 얼마나 시간이 지났는 지를 밀리초를 기준으로 보여줌
// console.log(new Date(Date.now())); // 현재 시간이 나오게 된다.





// // instance method
// const now = new Date();
// console.log(
//     now.toString() // 문자열로 보여준다
// );





// getter, setter 메소드들
const now = new Date();
for (i of [
    ['연:', now.getFullYear()],
    ['월:', now.getMonth()], // 0 ~ 11
    ['일:', now.getDate()],
    ['요일:', now.getDay()], // 0부터 일월화수목금토 
    ['시:', now.getHours()],
    ['분:', now.getMinutes()],
    ['초:', now.getSeconds()],
    ['밀리초:', now.getMilliseconds()]
]) {
    console.log(i[0], i[1]);
}
