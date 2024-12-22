"use client";
import ProductCart from "./productCart/ProductCart";
import { useEffect, useState } from "react";
import { Iproducts } from "@/interfaces/Types";

const Cart = () => {
  const [dataCart, setDataCart] = useState<Iproducts[]>([]);

  useEffect(() => {
    // Cargar el carrito desde localStorage
    const storedCart = localStorage.getItem("userCart");
    if (storedCart) {
      setDataCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="checkout-container flex justify-evenly p-5 max-w-7xl mx-auto">
      <ProductCart products={dataCart} />
    </div>
  );
};

export default Cart;
