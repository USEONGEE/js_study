import { Card, Avatar, Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

// jsx에서 배열로 jsx를 쓸 때는 key를 붙혀주어야한다.
const UserProfile = () => {
  const dispatch = useDispatch();
  return (
    <Card
      actions={[
        <div key="twit">쨱짹<br />0</div>,
        <div key="following">팔로잉<br />0</div>,
        <div key="follower">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        title="NOH"
        avatar={<Avatar>NONO</Avatar>}
      />
      <Button onClick={() => dispatch(logoutAction())}>로그아웃</Button>

    </Card>
  )
}


export default UserProfile;
