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
  display: flex;
  overflow: scroll;
  flex-direction: column;
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

export default function EndingMessage({ setUseModal }) {
  return (
    <Container>
      <MessageContainer>
        <CloseBtn
          onClick={() => setUseModal(false)}>
          x
        </CloseBtn>
        <Message>
          <p>
            {`23년 9월 17일`}
          </p>
          <p>{`안녕 진영아 내 첫번째 사이드 프로젝트인 쥐 슬롯 머신을 이용하는 처음이자 마지막 고객에게 업데이트를 요최근 안 했다는 생각이 들고 또 하고 싶은 말도 있어서 오랜만에 업데이트를 해볼게. 7월 28일 이후에 편지를 한 번도 안 썼다니 ㅠㅠ 앞으로는 좀 자주 업데이트 할게. 할 말은 많은데 미루다보니까 좀 안 썼네 헤헤`}</p>
          <p>
            {`지금 이 편지를 쓰기 전에 한 번 편지를 썼었는데 내 솔직한 마음이긴 하지만 너가 막 읽는데 재밌는 이야기는 아닐 거 같고 너무 무거운 내 속마음이어서 부담될까봐 그냥 다른 내용 썼어 ㅎㅎ 이러면 너가 무슨 내용인지 엄청 궁금하겠지? 그러면 물어봐. 내가 대답해줄게~`}
          </p>
          <p>
            {`최근에 진지한 얘기도 많이 나누고 해서 진지한 얘기는 잠시 접고 ENFP로써 나는 엄청 많은 상상을 하곤 하는데 엄청난 이슈가 있어. 내가 그리는 미래 상상에 진영이가 차지하는 비중이 꽤나 높아졌다는 사실이야. 예전에는 그 때(올해 초) 당시에 사회적 성취에 대한 갈망이 너무 크고 또 진영이랑 그만큼 가깝지 않았어서(안 가까웠다는 건 아니야) 진영이의 비중이 크지 않았는데 요즘은 자취를 하고 여가 생활을 보내는 나, 집에 돌아와서 저녁을 해먹는 나, 주말에 차를 타고 시원한 바람을 맞으면서 드라이브를 하는 내 옆에는 늘 진영이가 있더라고 하하~ 또 내가 어떤 상상을 예전에 했는지 하나 더 알려줄게. 우리가 지금 만난지 어연 260일 더 넘었단 말이지..? 정말 시간이 녹아버렸어. 오래 안 만난 거 같은데 260일 넘게 지났다는게 믿기지가 않어.(오래됐다는건 아니야 함께할 날이 훨씬 길다~) 그래서 이렇게 순탄하고 편안하게 시간이 지금처럼 술술 지나가면 어느새 나이가 차고 경제적으로 안정이 되고 그 때까지도 우리가 함께 한다면 결혼을 할 수도 있지 않을까.? 라는 생각도 했어. 이런 말 하는 거 가볍게 보일 수도 있을 거 같을 수도 있는데 진지하게 이렇게 잘 맞고 또 다퉈도 잘 해결하면서 지금처럼 지내면은 그럴 수도 있지 않을까? 라는 생각을 막 기분 들떠서 하는게 아니라 평온한 마음 상태에서 진지하게 생각을 했어..ㅋㅋㅋㅋ 사람은 들뜨면은 망상을 하는데 진지하면은 실현 가능한 상상을 한대.`}
          </p>
          <p>
            {`무튼 얼마 전에 쥐 슬롯 머신 업데이트가 좀 잘 안된다는 얘기를 듣고 지금 쉬면서 잠깐 써봤어~ 쓰다보니 시간이 훌쩍 지나긴 했는데 네가 읽고 기분이 좋았으면 좋겠다~ 사랑하고 사랑해!`}
          </p>
        </Message>
        <Message>
        {`23년 7월 28일`}
          <p>{`안녕 진영아.. 이건 23년 7월 28일 오후 8시 48분에 완성된 쥐 키우기 게임이란다. 아까 대파버거 먹고 와서 지금까지 숨도 안 쉬고 만들었어. 사실 이 편지를 위해서 지금까지 게임을 만들었다고 해도 과언이 아니야.. 특별하게 편지를 선물하고 싶었어 ㅎㅎ. 이 메세지를 봤다면 마우스 부서지도록 기도하기 버튼을 열심히 눌렀겠지..? 고생많았어 ㅠㅠ`}</p>
          <p>{`요즘 힘든 시기를 보내고 있는 진영아. 내가 네 아픈 걸 낫게 해줄 수는 없지만 그래도 나을 때까지 옆에 있을테니 우리 걱정은 하지 말고 너에게만 집중하면서 잘 지내보자. 늘 네가 행복하기를 바라. 사랑해🐭`}</p>
        </Message>

      </MessageContainer>
    </Container>
  )
}
