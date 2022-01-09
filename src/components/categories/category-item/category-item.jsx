import React from "react";
import { Container, Image, Info, Title, Button } from "./category-item-style";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image className='background-image' src={item.img} />
      <Info className='info'>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
