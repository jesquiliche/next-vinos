"use client";
import React from "react";
import { Producto } from "@/app/interfaces/Product";
import Link from "next/link";
import useCartStore from "@/store/useCartstore"; // Asegúrate de usar la ruta correcta
import { FaShoppingCart } from "react-icons/fa";
import { FaShopLock } from "react-icons/fa6";

const ProductView = ({
  id,
  imagen,
  nombre,
  precio,
  graduacion,
  ano,
}: Producto) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    const productToAdd = {
      id: Number(id),
      nombre,
      precio: Number(precio),
      imagen,
    };

    addToCart(productToAdd);
  };

  return (
    <div
      key={id.toString()}
      className="h-full border-gray-400 border rounded-md p-4 flex flex-col justify-between"
    >
      <div>
        <Link href={`/product/${id.toString()}`}>
          <p className="text-shadow-title text-3xl font-bold italic text-red-600">
            {precio.toString()} €
          </p>
          <div>
            <img
              src={imagen}
              alt={nombre}
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-center truncate">{nombre}</h2>

            <p>Graduación: {graduacion.toString()}</p>
            <p>Año: {ano}</p>
          </div>
        </Link>
      </div>

      <button
        className="btn-primary flex items-center justify-center space-x-2"
        onClick={handleAddToCart}
      >
            <span>Añadir al carrito</span>
      </button>
    </div>
  );
};

export default ProductView;
