import { getAllProducts, getAllProductsDetails } from "@/actions/productos-actions";
import React from "react";

import { Producto } from "@/app/interfaces/Product";
import { PacificoFont, titleFont } from "@/config/fonts";
import Link from "next/link";
import ProductView from "./productView";

export const ProductsIndex = async () => {

  const products: Producto[] = await getAllProducts();
  const productsDeteails=await getAllProductsDetails()  
  return (
    <>
      <div className="flex justify-center">
        <img
          src="/logo.png"
          className="h-60 w-60 border border-gray-500 rounded-full shadow-xl "
          alt="logo"
        />
      </div>

      <h1
        className={`${titleFont.className} m-5 text-shadow-title text-center text-3xl italic text-gray-900 font-bold`}
      >
        Nuestra selección
      </h1>
      <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto">
        {products.map((p: Producto) => (
          <ProductView
            key={p.id.toString()}
            id={p.id}
            nombre={p.nombre}
            maridaje={p.maridaje}
            descripcion={p.descripcion}
            precio={p.precio}
            graduacion={p.graduacion}
            imagen={p.imagen}
            ano={p.ano} // Asegúrate de incluir todas las propiedades necesarias
          />
        ))}
      </div>
    </>
  );
};
