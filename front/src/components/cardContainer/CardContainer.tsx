import Card from "../card/Card";
import { Iproducts, ProductsContainerProps } from "@/interfaces/Types";

const CardContainer: React.FC<ProductsContainerProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {products &&
        products.map((product: Iproducts) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
          >
            {/* Renderizamos cada producto con el componente Card */}
            <Card {...product} />
          </div>
        ))}
    </div>
  );
};

export default CardContainer;
