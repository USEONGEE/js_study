// // 서로 다른 클래스와 생성자 함수가 같은 속성을 공유할 때 이들의 관계를 정의함으로써 코드의 중복을 줄이고 효율을 높인다
// class Bird {
//     wings =2;
// }
// class Eagle extends Bird{
//     claws = 2;
// }
// class Penguin extends Bird {
//     swim() {console.log('수영중.....')};
// }
// const birdy = new Bird(); const eagle = new Eagle(); const pengu = new Penguin();
// console.log(birdy, eagle, pengu); // prototype 안에 prototype ... , prototype을 통해 상속을 할 수 있음
// for (const i of [
//     ['1. ', birdy instanceof Bird],
//     ['2. ', eagle instanceof Bird],
//     ['3. ', eagle instanceof Eagle],
//     ['4. ', birdy instanceof Eagle] // birdy instance는 Eagle의 instance가 아니다
// ]) {console.log(i[0], i[1])};





// 오버라이딩, 부모의 기능을 덮어쓴다
class Bird {
    wings = 2;
    canFly = true;
    travel() {console.log('비행중...')}
}
class Eagle extends Bird {
    claws = 2;
}
class Penguin extends Bird {
    canFly = false;
    travel() {console.log('수영중...')}; // 오버라이딩
    butIwantTofly() {super.travel()}; // super()은 부모 클래스를 뜻한다.
}
const eagle = new Eagle();
const pengu = new Penguin();
console.log(eagle);
eagle.travel();
console.log(pengu);
pengu.travel();
pengu.butIwantTofly() // 날고싶은 펭귄은 부모클래스의 메소드 덕분에 날 수 있게 되었다!!!