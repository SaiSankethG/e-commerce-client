import { Home } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Cart from '../pages/Cart'

const ModalBackground = styled.div`
  width: 100vw
  height: 100vh;
  background-color: rgba(0,0,0,0)
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalContainer = styled.div`
  width: 500px
  height: 500px
  border-radius: 10px
  background-color: white
  box-shadow: rgba(0,0,0,0.35) 0px 5px 15px
  display: flex;
  flex-direction: column;
  padding: 25px
`
const Title = styled.div``
const Heading = styled.h2``
const Body = styled.div``
const Footer = styled.div``
const homeButton = styled.button``
const cartButton = styled.button``

function Modal(result) {
  console.log(result)
  return (
    <ModalBackground>
      <ModalContainer>
        <Title>
          <Heading>Payment Successfull!</Heading>
        </Title>
        <Body>
          {/* {result} */}
        </Body>
        <Footer>
          <homeButton>
            <a href='/'>Home</a>
          </homeButton>
          <cartButton>
            {/* <Link to={<Cart/>}></Link> */}
            <a href='/cart'>Continue</a>
          </cartButton>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  )
}

export default Modal