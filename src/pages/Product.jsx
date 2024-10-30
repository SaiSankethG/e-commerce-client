import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcements from '../components/Announcements'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'

const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Img = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;

`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;       
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-betweeen;
    ${mobile({width: "100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    margin: 0px 40px;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 15px;
    color: teal;

    &:hover{
        scale: 1.1;
        transition: all 0.5s ease;
        background-color: teal;
        border: 2px solid white;
        color: white;
    }
`

// const Add = styled.button`
//     cursor: pointer;
// `

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
//   console.log(id)
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch()

//   console.log(color, size)

  useEffect(()=>{
    const getProduct = async ()=>{
        try{
            const res = await publicRequest.get("/products/find/"+id)
            setProduct(res.data)
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if(type === "dec"){
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }else{
        setQuantity(quantity+1)
    }
    console.log(quantity)
  }

  const handleClick = () =>{
    dispatch(addProduct({...product, size, color, quantity} ))
  }

  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Img src={product.img}></Img>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                {product.desc}
                </Desc>
                <Price>₹ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map(c => (
                            <FilterColor color={c} key={c} onClick={() => setColor(c)}></FilterColor>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onClick={(e) => setSize(e.target.value)}>
                            {product.size?.map(s => (
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product