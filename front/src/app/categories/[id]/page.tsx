import { fetchProductsByCategory } from "@/services/products.fetchfunction";
import ProductsContainer from "@/views/products/ProductsContainer";
import React from "react";
import { Iproducts } from "@/interfaces/Types";

const Categories = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const products: Iproducts[] = await fetchProductsByCategory(id);
  return (
    <div>
      <ProductsContainer products={products} />
    </div>
  );
};

export default Categories;
