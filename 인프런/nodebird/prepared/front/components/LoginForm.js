import React, { useState, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link'

// a태그에는 링크를 안 넣고 next의 Link를 이용하는 것이 좋다. 
// 컴포넌트의 props로 넘겨주는 함수는 useCallBack을 사용해야 한다. => 메모지에이션 => 함수의 의존성이 변경되지 않으면 함수를 다시 생성해서 불필요한 렌더링을 막을 수 있다.

const LoginForm = ({ }) => {
  const [id, setid] = useState('')
  const [password, setpassword] = useState('')

  const onChangeId = useCallback(
    (e) => {
      setid(e.target.value);
    },
    [],
  );

  const onChangePassword = useCallback(
    (e) => {
      setpassword(e.target.value);
    },
    [],
  );
  
  

  return (
    <Form>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input
          name='user-id'
          onChange={onChangeId}
          value={id}
          required></Input>
      </div>
      <div>
        <label
          htmlFor='user-pw'>비밀번호</label>
        <br />
        <Input
          name='user-pw'
          type='password'
          required
          onChange={onChangePassword}
          value={password}></Input>
      </div>
      <div>
        <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  )
}


export default LoginForm;
