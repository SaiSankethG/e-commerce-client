import React from 'react'
import styled from 'styled-components'
import { categories } from '../Data'
import CategorieItem from './CategorieItem'
import { mobile } from '../Responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({padding: "0px", flexDirection: "column"})}
`

const Categories = () => {
  return (
    <Container>
        {categories.map((item) => (
            <CategorieItem item = {item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories