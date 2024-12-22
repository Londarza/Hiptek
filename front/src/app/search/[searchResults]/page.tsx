import { Iproducts } from "@/interfaces/Types";
import { fetchProductsBySearch } from "@/services/products.fetchfunction";
import ProductsContainer from "@/views/products/ProductsContainer";
import React from "react";

const SearchPage = async ({
  params,
}: {
  params: { searchResults: string };
}) => {
  const { searchResults } = params;
  const decodedSearchTerm = decodeURIComponent(searchResults);

  try {
    const products: Iproducts[] =
      await fetchProductsBySearch(decodedSearchTerm);

    return (
      <div>
        <h1>Resultados de búsqueda para: {decodedSearchTerm}</h1>

        <ProductsContainer products={products} />
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>No se encontraron productos para: {decodedSearchTerm}</h1>
      </div>
    );
  }
};

export default SearchPage;
