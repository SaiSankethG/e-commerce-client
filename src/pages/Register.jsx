import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { publicRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
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
    min-width: 50%;
    height: 25px;
    margin: 15px 10px 0px 0px;
    padding: 3px 5px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;

    &:focus{
        transition: border 0.3s ease;
        border-bottom: 2px solid #a48484;
    }
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 10px;
    background-color: #ad8e95;
    color: white;
    cursor: pointer;
    border-radius: 10px;
`

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

//   console.log("hello")
//   console.log(username, email, password)
  const handleSubmit = () => {
    // e.preventDefault()
    setError(false)
    try{    
        console.log('inside submit')
        const res = publicRequest.post("http://localhost:5000/api/auth/register", {
            username,
            email,
            password
        })
        console.log(res.data)
        // if(res.status === 200){
        //     window.location.replace("/login")
        // }
        navigate("/login")
    }catch(err){
        console.log(err)
        setError(true)
    }
  }

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"></Input>
                <Input placeholder="last name"></Input>
                <Input placeholder="username" onChange={e => setUsername(e.target.value)}></Input>
                <Input placeholder="email" onChange={e => setEmail(e.target.value)}></Input>
                <Input placeholder="password" type='password' onChange={e => setPassword(e.target.value)}></Input>
                <Input placeholder="confirm password" type='password'></Input>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={handleSubmit}>SIGN UP</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register