import { ProductList } from "../ProductList";
import { getProducts } from "../../API";

 const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default Products;