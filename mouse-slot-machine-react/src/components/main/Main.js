import React, { useState } from 'react'
import { styled } from 'styled-components'
import Money from './Money'
import PlayGame from './PlayGame'
import Info from '../info/Info'
import EndingMessage from './EndingMessage'
import image1 from '../../assets/img/1.jpg'
import image2 from '../../assets/img/2.jpg'
import image3 from '../../assets/img/3.jpg'
import image4 from '../../assets/img/4.jpg'
import image5 from '../../assets/img/5.jpg'
import image6 from '../../assets/img/6.jpg'
import image7 from '../../assets/img/7.jpg'
import image8 from '../../assets/img/8.jpg'
import image9 from '../../assets/img/9.jpg'
import success from '../../assets/img/success.webp'
import fail from '../../assets/img/fail.gif'
import message from '../../assets/img/message.png'
import { useDispatch, useSelector } from 'react-redux'
import { ActionType } from '../../reducers/money'

const images = [image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9];

const Container = styled.div`
  width: 40rem;
  margin: auto;
`

const Message = styled.img`
  width: 6rem;
  height: 6rem;
  position: fixed;
  top: 20%;
  right: 3%;
`

export default function Main() {

  const dispatch = useDispatch();
  const isCheat = useSelector(store => store.cheat);

  const [useModal, setUseModal] = useState(true)
  const [level, setLevel] = useState(1)
  const [image, setImage] = useState(images[0]);
  const [prob, setProb] = useState(100);
  const [cost, setCost] = useState(100);
  const [pray, setPray] = useState(0);
  const [stage, setStage] = useState(1);
  const [status, setStatus] = useState(success);
  const [finish, setFinish] = useState(false); // false

  // reducer
  const money = useSelector(state => state.money);
  const setMoney = () => {
    dispatch({ type: ActionType.SUB_MONEY, payload: cost });
  }

  const tryEnforce = () => {
    // 돈 없으면 강화 못 함
    if (!canEnforce()) {
      return
    }
    // 강화중
    setMoney(prev => prev - cost);

    // 강화 성공
    if (Math.random() * 100 < prob + pray) {
      enforceSuccess();
      setStatus(success);
    } else {
      setStatus(fail);
    }
  }

  const enforceSuccess = () => {
    setLevel(prev => prev + 1);
    setProb(prev => prev - 1);
    setCost(prev => prev + 100);
    setPray(0);
    if (level === 10) {
      // 진짜 끝
      if (isClear()) {
        setFinish(true);
        setLevel(999999)
      } else {
        setLevel(1);
        setStage(prev => prev + 1);
        setImage(images[stage]);
      }

    }
  }

  const canEnforce = () => {
    return money >= cost;
  }

  const isClear = () => {
    return stage === 9 && level === 10;
  }


  return (
    <Container>
      <Money money={money} />
      <PlayGame
        statusImg={status}
        level={level}
        stage={stage}
        image={image}
        cost={cost}
        prob={prob}
        pray={pray}
        setPray={setPray}
        tryEnforce={tryEnforce} />
      <Info images={images} />
      {finish && useModal && !isCheat ? <EndingMessage setUseModal={setUseModal} /> : null}
      {finish ? <Message src={message} onClick={() => setUseModal(true)}/> : null }
    </Container>

  )
}
