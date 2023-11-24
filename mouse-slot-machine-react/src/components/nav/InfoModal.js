import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0%;
  left: 0%;
  z-index: 999;
`

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  font-size:3rem;
  right: 2%;
`

const MessageContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: white;
  position: absolute;
  display:flex;
  border-radius:10px;
  box-sizing: border-box;
  background-color: #dbdbdb;
`

const Message = styled.div`
  margin:3rem;
  font-weight:bold;
`

export default function InfoModal({ setUseModal }) {
  return (
    <Container>
      <MessageContainer>
        <CloseBtn
          onClick={() => setUseModal(false)}>
          x
        </CloseBtn>
        <Message>
          <p>{`<최근 업데이트 날짜>`}</p>
          <p>{`23년 9월 17일`}</p>
          <p>{`<공지>`}</p>
          <p>{`1. 상땃쥐 배너를 클릭하면 돈이 들어옵니다.`}</p>
          <p>{`2. 하지만 배너를 클릭하면 클리어 후 히든 메세지를 볼 수 없습니다...`}</p>
          <p>{`3. 새로고침 하면 처음부터 다시 시도할 수 있습니다! 돈이 랜덤하게 주어집니다.`}</p>
          <p>{`4. 배너를 잘못 클릭하면 다시 해야됩니다 ㅠㅠ`}</p>
          <p>{`5. 강화 성공, 실패 시에 바나나캣이 웃거나 울고 있으니 잘 봐주세요`}</p>
          <p>{`6. 기도를 하면 스테이지만큼 강화확률이 올라갑니다. 핵심 기능이니 적극 활용해주세요 (ex. 꿀쥐를 키우고 있다면 5만큼 증가)`}</p>
          <p>{`7. 힌트! 강화 성공마다 강화 비용이 100원씩 증가합니다. 등차수열의 합공식을 이용해보세요`}</p>

        </Message>
      </MessageContainer>
    </Container>
  )
}
