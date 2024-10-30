import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from '../Responsive';
import { useSelector } from 'react-redux';
import { Link }  from 'react-router-dom'
// import cart from "../pages/Cart"

const Container = styled.div`
    height: 60px;
    top:0px;
    position:sticky;
    background-color: white;
    z-index:100;
    ${mobile({ height: "50px"})}`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 10px;
`

const Input = styled.input `
    border: none;
    ${mobile({ width: "50px"})}
`

const Center = styled.div`
    flex:1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px"})}
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    margin-left:25px;
    cursor: pointer; 
    ${mobile({fontSize: "12px" , marginLeft: "10px"})}   
`


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)
//   console.log(quantity)
  
  
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <Search style={{color:'gray' , fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    SAN.
                </Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar