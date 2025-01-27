import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../Responsive'
import { useSelector } from 'react-redux'
import  StripeCheckout  from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../requestMethods'
import Modal from '../components/Modal'

const KEY = import.meta.env.VITE_REACT_APP_STRIPE
// console.log('Hello!')
// console.log(KEY)

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center; 
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px
`

const TopButton = styled.button`
    border-radius: 10px;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`

const TopText = styled.span`
    text-decoration: underline; 
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-conten: space-between;  
    ${mobile({flexDirection: "column"})}
`

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color}
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})}
`

const ProductPrize = styled.div`
    font-size:  30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    margin: 0px 0px 0px 20px;
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryTextPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
    font-weight: 600;
` 

// const Cart = () => {
//   const cart = useSelector((state) => state.cart)
//   const[stripeToken, setStripeToken] = useState(null)
//   const navigate = useNavigate()

//   const onToken = (token) => {
//     setStripeToken(token)
//   } 

//   useEffect(() => {
//     const makeRequest = async () => {
//         try {
//             const res = await userRequest.post("/checkout/payment", 
//             {
//                 tokenId : stripeToken.id,
//                 amount : cart.total
//             })
//             console.log(res)
//             if (res.status === 200){
//             console.log("success")
//             navigate.push("/success", {
//                 stripedat: res.data,
//                 products: cart
//             })
//         }
//         }catch{}
//     }
//     makeRequest()
//   },[stripeToken, cart.total, history])

// //   console.log(stripeToken)

//   return (
//     <Container>
//         <Announcements/>
//         <Navbar/>
//             <Wrapper>
//                 <Title>Your Bag</Title>

//             </Wrapper>
//         <Footer/>
//     </Container>
//   )
// }

// export default Cart

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const [result, setResult] = useState({})
    const navigate = useNavigate()
  
    const onToken = (token) => {
      setStripeToken(token)
    } 
  
    useEffect(() => {
      const makeRequest = async () => {
          try {
              const res = await userRequest.post("/checkout/payment", 
              {
                  tokenId : stripeToken.id,
                  amount : cart.total
              })
            //   console.log(res)
              setResult(res.data)
              if (res.status === 200){
                  console.log("success")
                  setPaymentSuccess(true)
              }
          } catch (error) {
              console.error("Error processing payment:", error);
          }
      }
      makeRequest()
    },[stripeToken, cart.total])
  
    return (
      <Container>
          <Announcements/>
          <Navbar/>
          <Wrapper>
              {paymentSuccess ? (
                  navigate('/success')
              ) : (
                  <>
                      <h1>Your Bag</h1>
                      <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDetails>
                                    <Image src={product.img}/>
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>Id:</b> {product._id}</ProductId>
                                        <ProductColor color={product.color}/>
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrize>₹ {product.price * product.quantity}</ProductPrize>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryTextPrice>₹{cart.total}</SummaryTextPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryTextPrice>₹ 150</SummaryTextPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount Shipping</SummaryItemText>
                            <SummaryTextPrice>-₹ 150</SummaryTextPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryTextPrice>₹ {cart.total}</SummaryTextPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name='san.'
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>PAY NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
                  </>
              )}
          </Wrapper>
          <Footer/>
      </Container>
    )
  }
  
  export default Cart