// next는 pages 폴더를 인식하고 해당 폴더 하위의 파일들을 페이지로 인식한다.
// pages/ 에 위치해야만 "코드 스클리킹"이 가능하다.

import AppLayout from "../components/AppLayout";

// node 18이상이면은 컴파일 에러가 발생하니 강좌의 커뮤니티를 확인하자.
// indxe 페이지는 최상위 페이지이다. 회원가입, 프로필 페이지가 추가되어도 렌더링되지 않는 것은 next가 인식을 못 하는 경우가 있다.
// <AppLayout> 안쪽부분이 props가 된다.
// 코드를 이쁘게 보기위해서 eslint, eslint-plugin-react, eslint-plugin-react-hooks -D 로 설치한다.
const Home = () => {
  return(
    <AppLayout children={<dv>Hello, Next!</dv>}>
    </AppLayout>
  )
}

export default Home;

