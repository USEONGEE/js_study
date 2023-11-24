import React from 'react'
import { styled } from 'styled-components'
import Nav from '../components/nav/Nav'
import Main from '../components/main/Main'

const Container = styled.div`
  font-family: TmonMonsori, "GodoB", "굴림";
  background-color: #D8D8D8;
  height:100vh;
`

export default function Game() {
  return (
    <Container>
      <Nav/>
      <Main/>
    </Container>
  )
}
