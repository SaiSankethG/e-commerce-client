import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { Link } from 'react-router-dom'

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: all ease 0.5s;
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    &:hover ${Info}{
        background-color: rgba(0,0,0,0.3);
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({"height": "20vh", "objectFit":"cover"})}
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`

const Button = styled.button`
    border: none;
    padding:10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease;  
    } 
`

const CategorieItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategorieItem