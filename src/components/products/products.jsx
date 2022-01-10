import { popularProducts } from "../../constants/popularItems";
import Product from "./product-item/product-item";
import { Container } from "./products-style";


const Products = () => {
    return (
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    );
  };
  
  export default Products;