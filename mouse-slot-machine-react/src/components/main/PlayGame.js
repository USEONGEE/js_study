import React from 'react'
import { styled } from 'styled-components'

const Container = styled.section`
  width: 100%;
  margin: 1rem auto;
  background-color: white;
  border-radius: 10px;
  height: 15rem;
  display: flex;
  position: relative;`;

const TargetImg = styled.img`
  flex: 2;
  margin: 1rem;
  height: 80%;
  width: 80%;
`

const StatusImg = styled.img`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: 20rem;
  top: 2rem;
`

const GmaeProgressContainer = styled.div`
  flex: 1;
  margin: 1rem;
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
`

const GmmeProgress = styled.div`
  background-color: #D8D8D8;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  padding: 0.2rem;
  margin: 0.2rem;
  font-weight: bold;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
`

const ButtonContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  &:active{
    position: relative;
    top:10px;
  }
`

/**
 * 
 * @param {any} iamge 쥐 이미지 
 * @param {int} level 레벨
 * @param {int} stage 스테이지
 * @param {int} prob 강화 확률 
 * @param {int} cost 강화 비용 
 * @param {int} pray 기도값
 * @param {function} setPray 기도 갱신 함수 
 * @param {function} tryEnforce 강화 함수 
 * @returns 
 */
export default function PlayGame({ statusImg, stage, image, level, prob, cost, pray, setPray, tryEnforce, }) {

  const handlePray = () => {
    if (pray + prob >= 100) return;
    if (pray + prob + stage > 100) {
      setPray(100 - prob);
    } else {
      setPray(prev => prev + stage);
    }
  }
  return (
    <Container>
      <TargetImg src={image} />
      <StatusImg src={statusImg} />

      <GmaeProgressContainer>
        <GmmeProgress>
          <span>
            level
          </span>
          <span>
            {level}
          </span>
        </GmmeProgress>
        <GmmeProgress>
          <span>
            강화 확률
          </span>
          <span>
            {prob + pray}
          </span>
        </GmmeProgress>
        <GmmeProgress>
          <span>
            강화 비용
          </span>
          <span>
            {cost}
          </span>
        </GmmeProgress>
        <ButtonContainer>
          <Button onClick={() => tryEnforce()}>강화하기</Button>
          <Button onClick={() => handlePray()}>기도하기</Button>
        </ButtonContainer>
      </GmaeProgressContainer>
    </Container>
  )
}
