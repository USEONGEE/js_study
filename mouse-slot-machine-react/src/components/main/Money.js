import React from 'react'
import { styled } from 'styled-components'

const Container = styled.section`
  width: 100%;
  height: 3rem;
  margin: auto;
  background-color: white;
  display: flex;
  border-radius: 10px;
`
const MoneyContainer = styled.div`
  background-color: #D8D8D8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 80%;
  height: 70%;
  border-radius: 10px;
  font-weight: bold;
`
/**
 * 
 * @param {int} money 소지하고 있는 돈
 * @returns 
 */
export default function Money({money}) {
  return (
    <Container>
      <MoneyContainer>
        <span>소지금</span>
        <span>{money}</span>
      </MoneyContainer>
    </Container>
  )
}
