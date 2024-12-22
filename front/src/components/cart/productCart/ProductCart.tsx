/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { ILoggedUser, Iproducts } from "@/interfaces/Types";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { ordersPost } from "@/services/orders.fetchFunction";

const ProductCart: React.FC<{ products: Iproducts[] }> = ({ products }) => {
  const [quantities, setQuantities] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [cart, setCart] = useState<Iproducts[]>([]);
  const [userData, setUserData] = useState<ILoggedUser | null>(null);
  const router = useRouter();
  useEffect(() => {
    // Inicializa las cantidades por defecto en 1
    setQuantities(products.map(() => 1));
  }, [products]);

  // Función para manejar el cambio de cantidad de un producto
  const handleQuantity = (index: number, newQuantity: number) => {
    if (newQuantity > 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = newQuantity;
      setQuantities(updatedQuantities);
    }
  };

  // Función para manejar la eliminación de un producto
  const handleOnclickRemove = (productId: number) => {
    // Filtrar el producto que se va a eliminar
    const updatedProducts = products.filter(
      (product: Iproducts) => product.id !== productId,
    );
    setQuantities((prev) =>
      prev.filter((_, index) => products[index].id !== productId),
    );

    // Actualizar el localStorage
    localStorage.setItem("userCart", JSON.stringify(updatedProducts));

    //alerta de producto quitado
    Swal.fire({
      icon: "error",
      title: "Product Removed",
      text: "You can re keep buying",
    });
    router.push("/products");
  };

  // Calcular el total en base a las cantidades y precios
  useEffect(() => {
    const newTotal = products.reduce(
      (acc, product, index) => acc + product.price * quantities[index],
      0,
    );
    setTotal(newTotal);
  }, [quantities, products]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("userCart") || "[]");
      setCart(storedCart);
      const userData = JSON.parse(localStorage.getItem("userToken")!);
      setUserData(userData);
    }
  }, []);

  const handleOnBuy = async () => {
    if (!cart.length) {
      Swal.fire({
        icon: "error",
        title: "You don't hace products in your cart",
        text: "You can add some products",
      });
      router.push("/products");
    } else {
      const idProducts = cart.map((prod) => prod.id);
      await ordersPost(idProducts, userData?.token!);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Congrats! Purchase complete!",
        showConfirmButton: false,
        timer: 3500,
      });
      setCart([]);
      localStorage.setItem("userCart", "[]");
      router.push("/dashboard/orders");
    }
  };

  return (
    <div className="flex w-full">
      {/* Sección de productos */}
      <div className="products-section flex-3 bg-white rounded-lg p-5 mr-5 w-full">
        {products?.map((product: Iproducts, index: number) => (
          <div
            key={product.id}
            className="product-item flex mb-5 border-b border-gray-300 pb-5 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-36 mr-5 object-contain"
            />
            <div className="product-details flex-1">
              <div className="product-header flex justify-between items-center">
                <h2 className="text-lg mb-2">{product.name}</h2>
                <button
                  className="remove-btn text-xl text-gray-500 hover:text-gray-700"
                  onClick={() => handleOnclickRemove(product.id)}
                >
                  &times;
                </button>
              </div>
              <p className="mb-1">{product.description}</p>
              <p className="mb-1">Category: {product.categoryId}</p>
              <p className="mb-1">Stock: {product.stock}</p>
              <p className="price font-bold text-lg">
                $ {(product.price * quantities[index]).toFixed(2)}
              </p>
              <div className="quantity flex items-center mt-3">
                <button
                  className="bg-white border border-gray-700 w-8 h-8 text-center"
                  onClick={() => handleQuantity(index, quantities[index] - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantities[index]}
                  onChange={(e) =>
                    handleQuantity(index, Number(e.target.value))
                  }
                  className="w-12 text-center mx-2"
                  min="1"
                />
                <button
                  className="bg-white border border-gray-700 w-8 h-8 text-center"
                  onClick={() => handleQuantity(index, quantities[index] + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de pago */}
      <div className="payment-section flex-2 bg-white rounded-lg p-5">
        <h2 className="text-xl mb-5">Payment details</h2>
        <form>
          <label htmlFor="card-type" className="text-sm mb-1 block">
            Card Type
          </label>
          <select
            id="card-type"
            className="p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="mastercard">Mastercard</option>
            <option value="visa">Visa</option>
          </select>

          <label htmlFor="cardholder-name" className="text-sm mb-1 block">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardholder-name"
            placeholder="Nombre como en la tarjeta"
            className="p-2 mb-4 border border-gray-300 rounded w-full"
          />

          <label htmlFor="card-number" className="text-sm mb-1 block">
            Card Number
          </label>
          <input
            type="text"
            id="card-number"
            placeholder="XXXX XXXX XXXX XXXX"
            className="p-2 mb-4 border border-gray-300 rounded w-full"
          />

          <div className="expiry-cvv flex justify-between">
            <div className="flex-1 mr-2">
              <label htmlFor="expiry-date" className="text-sm mb-1 block">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry-date"
                placeholder="MM/AAAA"
                className="p-2 mb-4 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv-number" className="text-sm mb-1 block">
                CVV
              </label>
              <input
                type="text"
                id="cvv-number"
                placeholder="xxx"
                className="p-2 mb-4 border border-gray-300 rounded w-full"
              />
            </div>
          </div>

          <button onClick={handleOnBuy} className="buy-attention">
            Buy Now
          </button>
        </form>

        {/* Additional Options */}
        <button className="bg-sec-brown border border-gray-700 text-gray-700 py-2 w-full mt-3 hover:bg-opacity-75">
          Collect in Store
        </button>
        <button className=" bg-sec-brown border border-gray-700 text-gray-700 py-2 w-full mt-3 hover:bg-opacity-75">
          Gift Wrapping
        </button>

        {/* Price Summary */}
        <div className="price-summary mt-5">
          <p className="mb-1">Subtotal: ${total.toFixed(2)}</p>
          <p className="mb-1">Shipping: Free</p>
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
