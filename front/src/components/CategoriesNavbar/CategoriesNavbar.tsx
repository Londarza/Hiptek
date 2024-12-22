import { useEffect, useState } from "react";
import { fetchCategories } from "@/services/products.fetchfunction";
import Link from "next/link";

const CategoriesContainer: React.FC = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="absolute mt-2 bg-white shadow-lg rounded p-4  left-0 z-40">
      {categories.length > 0 ? (
        categories.map((category) => (
          <Link
            href={`/categories/${category.id}`}
            key={category.id}
            className="block p-2 text-sec-blue"
          >
            {category.name}
          </Link>
        ))
      ) : (
        <p>Cargando categorías...</p>
      )}
    </div>
  );
};

export default CategoriesContainer;
