import ProductsContainer from "@/views/products/ProductsContainer";
import { fetchProducts } from "@/services/products.fetchfunction";
import { Iproducts } from "@/interfaces/Types";

export default async function Products() {
  const allProducts: Iproducts[] = await fetchProducts();

  return (
    <div>
      <ProductsContainer products={allProducts} />
    </div>
  );
}
