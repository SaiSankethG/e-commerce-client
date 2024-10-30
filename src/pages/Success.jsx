import { Home } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Cart from '../pages/Cart'

const ModalBackground = styled.div`
  width: 100vw
  height: 100vh;
  background-color: rgba(200, 200, 200);
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
const Title = styled.div`
`
const Heading = styled.h2`
  display: inline-block
  text-align: center
  margin-top: 10px
  color: white
`

const Body = styled.div`
  flex:50%;
  display: flex;
  justify-content: center
  align-items: center
  font-size: 1.7rem
  text-align: center
`

const Footer = styled.div`
  flex:20%
  display: flex
  justify-content: center
  align-items: center

  .button{
    width: 150px
    height: 45px
    margin: 10px
    border: none
    background-color: cornflowerblue
    color: white
    border-radius: 8px
    font-size: 20px
    cursor: pointer
  }
`

const HomeButton = styled.button`
  // width: 
`
const CartButton = styled.button``


export const Success = (result) => {
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
          <HomeButton className='button'>
            <a href='/' style={{textDecoration : "none", color:'black'}}>Home</a>
          </HomeButton>
          <CartButton className='button'>
            <a href='/cart' style={{textDecoration : "none", color:'black'}}>Continue</a>
          </CartButton>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  )
}

