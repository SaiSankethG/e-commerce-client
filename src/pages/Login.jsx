import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    background-color: white;
    padding: 20px; 
    border-radius: 10px;    
    background-color: transparent;
    backdrop-filter: blur(20px);
    ${mobile({width: "75%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    background-color: transparent;
    flex: 1;
    flex-direction: column;
    min-width: 45%;
    height: 25px;
    margin: 15px 10px 0px 0px;
    padding: 3px 5px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;

    &:focus{
        transition: border 0.3s ease;
        border-bottom: 2px solid #bcacac;
    }
`

const Button = styled.button`
    width: 50%;
    border: none;
    padding: 10px 10px;
    background-color: #c4acb2;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin: 10px 0px;
`

const Linklist = styled.div`
    display: flex;
    flex-direction: column;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;    
`

const Error = styled.span`
    color: red;
    margin: 5px 0px;
    font-size: 12px
    margin-left: 80px;
`

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector((state) => state.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(password , username)
    login(dispatch, {username, password})
  }

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}></Input>
                <Input placeholder="password" type="password"  onChange={(e) => setPassword(e.target.value)}></Input>
                <Button onClick={handleSubmit} disabled={isFetching}>LOGIN</Button>
                <Linklist>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Linklist>
                {error && <Error>Something went wrong!</Error>}
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login