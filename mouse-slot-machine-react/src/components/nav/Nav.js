import React, { useState } from 'react'
import { styled } from 'styled-components'
import logo from './../../assets/img/header_image.jpg'
import infoImg from '../../assets/img/info.png'
import InfoModal from './InfoModal'
import { useDispatch } from 'react-redux'
import { ActionType } from '../../reducers/money'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: auto;
` 

const Logo = styled.img`
  width: 20rem;
  height: 10rem;
  padding-bottom: 3rem;
`

const Info = styled.img`
  width: 10rem;
  height: 10rem;
  position: fixed;
  top: 2%;
  right: 2%;
`

export default function Nav() {
  const dispatch = useDispatch();

  const [useModal, setUseModal] = useState(false);


  const addMoney = 100000;
  const setMoney = () => {
    dispatch({type: ActionType.ADD_MONEY, payload: addMoney});
    dispatch({type: "DO_CHEAT"})
  }

  const handleClick = () => {
    setUseModal(true);
  }

  return (
    <Container >
      <Logo 
      src={logo}
      onClick={() => setMoney()} />
      <Info
        src={infoImg}
        onClick={() => handleClick()} />
      {useModal ? <InfoModal setUseModal={setUseModal} /> : null}
    </Container>
  )
}
