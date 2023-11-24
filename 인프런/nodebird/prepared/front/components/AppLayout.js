import React, {useState} from "react";
import PropTypes from 'prop-types'; // prop의 타입을 검사해주는 패키지
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';


// 직접 antd에 가서 찾아서 쓰는 것이다. Input.Sear초 태그를 추가하니 정렬이 안 맞는데, 이런 부분은 실제 CSS를 덮어씌워서 해결할 수도 있다.
// Row, Col로 반응형 디자인을 한다. 24등분을 기준으로 한 열(행)에 얼마나 차지를 할 것인지를 결정한다. 정확한 스펙은 공식문서에 있다.
// _blank로 새로운 페이지를 열어야할 때는 rel 태그를 이용해서 보안위협을 줄인다.

const AppLayout = ({ children }) => {
  const [isLoggedIn, setsLoggedIn] = useState(false);
  

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href='/'><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={4}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.google.com" target="_blank" rel="noreferrer noopener">Go to GOOGLE</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired, // node는 React에서 화면에 그리는 모든 것들을 node라고 부른다.
}

export default AppLayout;