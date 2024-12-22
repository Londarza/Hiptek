"use client";
/* eslint-disable @next/next/no-img-element */
import { ILoggedUser, Iproducts } from "@/interfaces/Types";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {
  fetchCategoryById,
  fetchProductsByCategory,
} from "@/services/products.fetchfunction"; // Importa la función
import Link from "next/link";

const ProductDetail: React.FC<Iproducts> = ({
  id,
  categoryId,
  name,
  description,
  price,
  stock,
  image,
}) => {
  const router = useRouter();
  const [userData, setUserData] = useState<ILoggedUser | null>(null);
  const [productData, setProductData] = useState<Iproducts[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Iproducts[]>([]); // Nueva variable para productos relacionados
  const [category, setCategory] = useState("");
  useEffect(() => {
    // Obtener datos del usuario y del carrito
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userToken")!);
      setUserData(userData);
    }
    const storedCart = localStorage.getItem("userCart");
    if (storedCart) {
      setProductData(JSON.parse(storedCart));
    }
    const getCategory = async (id: number) => {
      const category = await fetchCategoryById(id);
      setCategory(category.name);
    };
    getCategory(categoryId);
    // Traer productos relacionados por categoría
    const fetchRelated = async () => {
      try {
        const related = await fetchProductsByCategory(categoryId.toString());
        const filteredRelated = related.filter((product) => product.id !== id);
        setRelatedProducts(filteredRelated);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };
    fetchRelated();
  }, [categoryId, id]);

  const handleOnClick = () => {
    if (userData?.token) {
      const updatedProductData = [
        ...productData,
        { id, categoryId, name, description, price, stock, image },
      ];
      setProductData(updatedProductData);

      localStorage.setItem("userCart", JSON.stringify(updatedProductData));

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Product in your cart!",
        showConfirmButton: false,
        timer: 2500,
      });
      router.push("/dashboard/cart");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must Sign in!",
      });
      router.push("/login");
    }
  };

  return (
    <div className="bg-transparent py-10">
      {/* Product Info Section */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Left side - Product Image */}
        <div className="lg:w-1/2 w-full h-full flex justify-center">
          <img src={image} alt={name} className="w-3/4 lg:w-full" />
        </div>

        {/* Right side - Product Details */}
        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold text-prim-green">{name}</h1>
          <p className="text-prim-cober text-2xl font-semibold">${price}</p>
          <p className="mt-4 text-prim-grey">{description}</p>
          <p className="mt-4 text-prim-grey">Stock: {stock}</p>

          <div className="mt-8">
            <p className="text-prim-grey">
              Categories: <span className="text-sec-brown">{category}</span>
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <button className="ml-4 attention-button" onClick={handleOnClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl font-semibold text-prim-green">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {relatedProducts.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <p className="text-prim-green font-semibold">
                    {product.name}
                  </p>
                  <p className="text-prim-cober">${product.price.toFixed(2)}</p>
                  <p className="text-sec-grey text-sm mt-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
