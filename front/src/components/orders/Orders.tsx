"use client";
import { ILoggedUser, IOrder, Iproducts } from "@/interfaces/Types";
import { ordersGet } from "@/services/orders.fetchFunction";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Orders: React.FC = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [userData, setUserData] = useState<ILoggedUser | null>(null);

  const fetchData = async () => {
    if (userData?.token) {
      const response = await ordersGet(userData.token);
      setOrders(response);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userToken")!);
      setUserData(userData);
    }
  }, []);

  useEffect(() => {
    if (userData?.user?.name) {
      userData?.user?.name !== "undefined"
        ? fetchData()
        : router.push("/login");
    }
  }, [userData?.user]);

  const handleOnClick = (productID)=>{
    const filtered = orders.find((product)=> productID === product.id )as IOrder
    console.log(productID);
    
    filtered.status = 'cancelado'
    setOrders([...orders, filtered]  )
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Historial de compras</h1>
      
      <ul className="space-y-4">
        {orders.map((order) => (
          
          <li key={order.id} className="border p-4 rounded bg-sec-grey">
            <button className="ml-4 attention-button" onClick={()=>handleOnClick(order.id)}>
              cancelar
            </button>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Date:</strong> {order.date}
            </p>
            <p>
              <strong>Products:</strong>
              <ul className="ml-4 mt-2 space-y-2">
                {order.products.map((product) => (
                  <li key={product.id} className="border p-2 rounded">
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <p>
                          <strong>{product.name}</strong>
                        </p>
                        <p>{product.description}</p>
                        <p>
                          <strong>Price:</strong> ${product.price}
                        </p>
                        
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Orders;
