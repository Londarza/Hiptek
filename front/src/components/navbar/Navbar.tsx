/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import CategoriesContainer from "../CategoriesNavbar/CategoriesNavbar";
import hiptekLogo from "../../../public/HipTekIcon.png";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Navbar: React.FC = () => {
  const [isProfileOpen, setProfileOpen] = useState<boolean>(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Estado para capturar el valor de la barra de búsqueda
  const { userData, setUserData } = useAuth();
  const router = useRouter();

  const profileRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node) &&
        isProfileOpen
      ) {
        setProfileOpen(false);
      }

      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node) &&
        isCategoriesOpen
      ) {
        setCategoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen, isCategoriesOpen]);

  const logOutHandler = () => {
    localStorage.removeItem("userToken");
    setUserData(null);
    Cookies.remove("userCookies");
    router.push("/home");
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}`); // Redirige a la página dinámica
    }
  };

  return (
    <header className="bg-prim-green text-prim-bone relative z-30">
      {/* Parte Superior */}
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/home" className="w-1/12 rounded-s-full">
          <img className="rounded-full" src={hiptekLogo.src} alt="hiptekLogo" />
        </Link>

        {/* Search Bar */}
        <form className="flex-grow mx-4" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="searchBar"
            placeholder="Busca tus productos acá"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Captura el valor de la barra de búsqueda
            className="w-full p-2 rounded bg-sec-grey text-prim-grey placeholder-prim-grey"
          />
        </form>

        {/* Botón Perfil */}
        {userData?.token ? (
          <div className="relative z-40" ref={profileRef}>
            <button
              className="p-2 bg-prim-cober rounded"
              onClick={() => setProfileOpen(!isProfileOpen)}
            >
              Hola, {userData?.user?.name} {isProfileOpen ? "▲" : "▼"}
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded p-4 z-40">
                <Link href="/dashboard" className="block p-2 text-sec-blue">
                  Mi Dashboard
                </Link>
                <Link
                  href="/dashboard/cart"
                  className="block p-2 text-sec-blue"
                >
                  Carrito
                </Link>
                <button
                  className="block p-2 text-sec-blue"
                  onClick={logOutHandler}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button className="p-2 bg-prim-cober rounded">Sign in</button>
          </Link>
        )}
      </div>

      {/* Parte Inferior */}
      <div className="flex justify-between items-center bg-prim-grey p-2 relative z-30">
        {/* Botón Categorías */}
        <div className="relative" ref={categoriesRef}>
          <button
            className="p-2 bg-prim-cober rounded z-40"
            onClick={() => setCategoriesOpen(!isCategoriesOpen)}
          >
            Categorías {isCategoriesOpen ? "▲" : "▼"}
          </button>
          {isCategoriesOpen && <CategoriesContainer />}
        </div>

        <Link href="/ofers" className="p-2 text-sec-brown hover:color-sec-blue">
          Ofertas
        </Link>
        <Link href="/products" className="p-2 text-sec-brown">
          Products
        </Link>
        <Link href="/register" className="p-2 text-sec-brown">
          Registrarse
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
