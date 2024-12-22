"use client";
import { useAuth } from "@/context/AuthContext";

import { useState } from "react";

const Dashboard: React.FC = () => {
  const { userData } = useAuth();

  //const [name, setName] = useState(userData?.user.name);
  //const [email, setEmail] = useState(userData?.user.email);
  //const [address, setAddress] = useState(userData?.user.address);
  //const [phone, setphone] = useState(userData?.user.phone);
  const [creditCard, setCreditCard] = useState("");

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>

      <form className="space-y-4 ">
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={userData?.user.name}
            placeholder="name"
            //onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            value={userData?.user.email}
            //onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Phone</label>
          <input
            type="number"
            placeholder="11-XXXX XXXX"
            value={userData?.user.phone}
            //onChange={(e) => setphone(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={userData?.user.address}
            placeholder="direccion"
            // onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Credit Card Information
          </label>
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <button className="px-4 py-2 bg-sec-brown text-white rounded hover:bg-opacity-80">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
