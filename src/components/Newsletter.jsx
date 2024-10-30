import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 23px;
    font-weight: 300;
    margin-bottom: 24px;
    letter-spacing: 1.4px;
    ${mobile({ textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 45%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    border:none;
    flex: 8;
    padding: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your email address'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter