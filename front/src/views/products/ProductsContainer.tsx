import CardContainer from "@/components/cardContainer/CardContainer";
import { ProductsContainerProps } from "@/interfaces/Types";

const ProductsContainer: React.FC<ProductsContainerProps> = ({ products }) => {
  return (
    <>
      {/* Pasamos los productos a CardContainer */}
      <CardContainer products={products} />
    </>
  );
};

export default ProductsContainer;
