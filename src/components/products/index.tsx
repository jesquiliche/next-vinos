import {
  getAllProducts,
  getAllProductsDetails,
} from "@/actions/productos-actions";
import { getAllTipos } from "@/actions/tpos-action";
import React from "react";

import { Producto } from "@/app/interfaces/Product";
import { titleFont } from "@/config/fonts";
import ProductView from "./productView";
import { getAllDenominaciones } from "@/actions/denominacines-actions";

export const ProductsIndex = async () => {
  const products: Producto[] = await getAllProducts();
  
  const productsDetails = await getAllProductsDetails();
  const tipos=await getAllTipos();
  const dop=await getAllDenominaciones();

  return (
    <>
      <div className="flex justify-center mx-auto w-11/12">
        <img
          src="/logo.png"
          className="h-60 w-60 border border-gray-500 rounded-full shadow-xl "
          alt="logo"
        />
      </div>

      <h1
        className={` m-5 text-shadow-title text-center text-3xl italic text-gray-900 font-bold`}
      >
        Catalogo
      </h1>
      <div className="flex">
        <div className="w-1/4 border-gray-400">
          <h2 className="text-shadow-title text-2xl font-bold text-center mb-4">
            Filtro
          </h2>
          <form>
            <div className="flex justify-between">
              <label className="font-semibold">Nombre : </label>
              <input
                type="text"
                className="border-gray-800 border rounded-md mb-2"
              />
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Precio hasta : </label>
              <input
                type="number"
                className="border-gray-800 border rounded-md mb-2"
              />
            </div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold">Tipo : </label>
              <select className="border-gray-800 border rounded-md">
                {tipos.map((t)=>(
                  <option key={t.id.toString()} value={t.id.toString()}>
                    {t.nombre}
                    </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">D.O.P : </label>
              <select className="border-gray-800 border rounded-md">
                {dop.map((d)=>(
                  <option key={d.id.toString()} value={d.id.toString()}>
                    {d.nombre}
                    </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4 w-9/12 mx-6">
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
      </div>
    </>
  );
};
