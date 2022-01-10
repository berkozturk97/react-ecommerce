import React from 'react'
import { categories } from '../../constants/categoryItems'
import CategoryItem from './category-item/category-item'
import { Container } from './category-style'

const Category = () => {
    return (
        <Container>
            {categories.map(item => <CategoryItem item={item} key={item.id}/>)}
        </Container>
    )
}

export default Category
