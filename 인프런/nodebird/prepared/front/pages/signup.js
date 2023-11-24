import AppLayout from '../components/AppLayout';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useCallback, useState } from 'react';
import useInput from '../hoooks/useInput';
import styled from 'styled-components';

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password)
  }, [password]) // 여기서 password를 의존성 배열로 추가해주지 않으면은 password가 바뀌더라도 컴파일된 함수는 바뀌기 전의 password롸 e.target.value를 비교한다. 
  // -> 훅이 처음 생성될 떄의 값으로 고정된다.

  const [term, setTerm] = useState(false)
  const [termError, setTermError] = useState(false)
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  })

  const onSubmit = useCallback(
    () => {
      if (password !== passwordCheck) return setPasswordError(true);
      if (!term) return setTermError(true);

      console.log(id, nickname, password);
    }, [password, passwordCheck, term], // 마찬가지로 의존성 배열을 추가하지 않으면은 훅이 생성되는 시점에서 값이 고정된다.
  )


  return (
    <AppLayout >

      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor='user-id'>아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor='user-nick'>닉네임</label>
          <br />
          <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor='user-password'>비밀번호</label>
          <br />
          <Input name="user-password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor='user-password-check'>비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck} />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>체크하시면 기분이 좋습니다.</Checkbox>
          {termError && <ErrorMessage>약관에 동의해주세요</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type='primary' htmlType='submit'>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
}

const ErrorMessage = styled.div`
  color: red;
  border-radius: 10px;
`


export default Signup;