import { Icategory, Iproducts } from "@/interfaces/Types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProducts = async (): Promise<Iproducts[]> => {
  try {
    const response = await fetch(`${APIURL}/products`, { cache: "no-cache" });
    const data: Iproducts[] = await response.json();
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export const fetchProductsById = async (id: number): Promise<Iproducts> => {
  try {
    const products: Iproducts[] = await fetchProducts();

    const productFind = products.find((product) => product.id === id);
    if (!productFind) {
      throw new Error("Product not found");
    }
    return productFind;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export const fetchProductsByCategory = async (
  categoryId: string,
): Promise<Iproducts[]> => {
  try {
    const products: Iproducts[] = await fetchProducts();
    const productFiltered = products.filter(
      (product) => product.categoryId.toString() === categoryId,
    );
    if (!productFiltered) {
      throw new Error("Product not find on that category");
    }
    return productFiltered;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const fetchCategories = async (): Promise<Icategory[]> => {
  try {
    // Traemos todos los productos
    const products = await fetchProducts();

    // Extraemos los categoryId únicos de los productos
    const categoryIds = Array.from(
      new Set(products.map((product) => product.categoryId)),
    );

    // Asignamos nombres a las categorías
    const categories: Icategory[] = categoryIds.map((id) => {
      let name = "";
      switch (id) {
        case 1:
          name = "Smartphones";
          break;
        case 2:
          name = "Laptops";
          break;
        case 3:
          name = "Tablets";
          break;
        case 4:
          name = "Headphones";
          break;
        case 5:
          name = "Cameras";
          break;
        case 6:
          name = "Printers";
          break;
        case 7:
          name = "Monitors";
          break;
        case 8:
          name = "Storage";
          break;
        case 9:
          name = "Accessories";
          break;
        default:
          name = "Other";
      }
      return { id, name };
    });

    return categories;
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    throw new Error(error);
  }
};
export const fetchCategoryById = async (id: number): Promise<Icategory> => {
  try {
    // Traemos todas las categorías
    const categories = await fetchCategories();

    // Buscamos la categoría por el id
    const category = categories.find((cat) => cat.id === id);

    // Si no se encuentra una categoría, devolvemos "Other" por defecto
    if (!category) {
      return { id, name: "Other" };
    }

    // Devolvemos la categoría encontrada
    return category;
  } catch (error: any) {
    console.error("Error fetching category by id:", error);
    throw new Error(error);
  }
};

export const fetchProductsBySearch = async (
  search: string,
): Promise<Iproducts[]> => {
  try {
    const products: Iproducts[] = await fetchProducts();

    // Convertir el término de búsqueda a minúsculas
    const searchLower = search.toLowerCase();

    // Filtrar productos sin diferenciar entre mayúsculas y minúsculas
    const productFind = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower),
    );

    if (productFind.length === 0) {
      throw new Error("No se encontraron productos");
    }

    return productFind;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
