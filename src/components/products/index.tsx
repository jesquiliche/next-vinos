import { getAllProducts } from "@/actions/productos-actions";
import React from "react";

import { Producto } from "@/app/interfaces/Product";
import { PacificoFont, titleFont } from "@/config/fonts";
import { Decimal } from "@prisma/client/runtime/library";import Link from "next/link";


export const ProductsIndex = async () => {
  const products: Producto[] = await getAllProducts();
  return (
    <>
      <div className="flex justify-center">
        <img src="/logo.png" className="h-60 w-60 border border-gray-500 rounded-full shadow-xl " alt="logo" />
      </div>

      <h1
        className={`${titleFont.className} mb-5 text-shadow-title text-center text-3xl italic text-gray-900 font-bold`}
      >
        Nuestra selección
      </h1>
      <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto">
        {products.map((p) => (
          <div
            key={p.id.toString()}
            className="border-gray-400 border rounded-md p-4
          flex flex-col justify-between"
          >
            <div>
              <img
                src={p.imagen}
                alt={p.nombre}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-center">{p.nombre}</h2>
              <p className="font-bold">Precio: {p.precio.toString()}</p>
              <p>Graduación: {p.graduacion.toString()}</p>
              <p>Año: {p.ano}</p>
            </div>
            <div className="mt-2">
              <Link href="/" className="btn-primary">
                Comprar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
