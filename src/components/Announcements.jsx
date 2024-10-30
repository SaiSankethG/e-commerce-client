import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    text-align: center;
    font-weight: 600;
    background-color: teal;
    dispaly: flex;
    align-items: center;
    color: white;
    justify-content: center;
    font-size: 14px;
    padding-top: 8px;
    top: 0px;
    position: sticky;
    // z-index: 100;
`

const Announcements = () => {
  return (
    <Container>Summer Deal! Upto 40% off on All products!!!</Container>
  )
}

export default Announcements