import ProductDetail from "@/components/productDetail/ProductDetail";
import { fetchProductsById } from "@/services/products.fetchfunction";

const ProductDetailPage: React.FC<{ params: { productId: string } }> = async ({
  params,
}) => {
  const { productId } = params;

  const numericProductId = Number(productId);

  const productFind = await fetchProductsById(numericProductId);

  if (!productFind) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <ProductDetail {...productFind} />
    </>
  );
};

export default ProductDetailPage;
