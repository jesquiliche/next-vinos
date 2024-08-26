"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  getAllProducts,
  getFilteredProducts,
} from "@/actions/productos-actions";
import { getAllTipos } from "@/actions/tpos-action";
import { getAllDenominaciones } from "@/actions/denominacines-actions";
import { Producto } from "@/app/interfaces/Product";
import ProductView from "./productView";
import Sections from "../sections/sections";

// Definir la interfaz de opciones de filtro
interface FilterOptions {
  nombre?: string;
  bodega?: string;
  descripcion?: string;
  maridaje?: string;
  precioMin?: number;
  precioMax?: number;
  graduacionMin?: number;
  graduacionMax?: number;
  ano?: number;
  sabor?: string;
  tipo_id?: bigint;
  denominacion_id?: bigint;
}

export const ProductsIndex: React.FC = () => {
  const [products, setProducts] = useState<Producto[]>([]);
  const [tipos, setTipos] = useState<any[]>([]);
  const [dop, setDop] = useState<any[]>([]);

  // Estado del formulario
  const [formData, setFormData] = useState<FilterOptions>({
    nombre: "",
    bodega: "",
    descripcion: "",
    maridaje: "",
    precioMin: undefined,
    precioMax: undefined,
    graduacionMin: undefined,
    graduacionMax: undefined,
    ano: undefined,
    sabor: "",
    tipo_id: undefined,
    denominacion_id: undefined,
  });

  // Cargar los datos al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        const fetchedTipos = await getAllTipos();
        const fetchedDop = await getAllDenominaciones();

        setProducts(fetchedProducts);
        setTipos(fetchedTipos);
        setDop(fetchedDop);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
    };

    fetchData();
  }, []);

  // Maneja los cambios en los campos del formulario
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Para campos numéricos, se asegura de que el valor se convierta en número
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name.includes("precio") || name.includes("graduacion") || name === "ano"
          ? parseFloat(value) || undefined
          : value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Aquí puedes implementar la lógica para filtrar los productos
      console.log("Formulario enviado con:", formData);

      // Llamada a la función para obtener productos filtrados
      const filters: FilterOptions = {
        ...formData,
        tipo_id: formData.tipo_id ? BigInt(formData.tipo_id) : undefined,
        denominacion_id: formData.denominacion_id
          ? BigInt(formData.denominacion_id)
          : undefined,
      };

      const filteredProducts = await getFilteredProducts(filters);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error al obtener los productos filtrados:", error);
    }
  };

  // Función para resetear el formulario
  const handleReset = () => {
    setFormData({
      nombre: "",
      bodega: "",
      descripcion: "",
      maridaje: "",
      precioMin: 0,
      precioMax: 0,
      graduacionMin: 0,
      graduacionMax: 0,
      ano: undefined,
      sabor: "",
      tipo_id: undefined,
      denominacion_id: undefined,
    });
  };

  return (
    <>
      <div className="flex justify-center mx-auto w-10/12 mt-32">
        <img
          src="/logo.png"
          className="h-60 w-60 border border-gray-500 rounded-full shadow-xl"
          alt="logo"
        />
      </div>
      <Sections />
      <div className="py-10">
        <h1
          className={`text-shadow-title text-center text-3xl italic text-gray-900 font-bold`}
        >
          Catalogo
        </h1>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/4 border-gray-400">
          <h2 className="text-2xl font-bold text-center mb-4">Filtro</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <label className="font-semibold">Nombre : </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100  rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Bodega : </label>
              <input
                type="text"
                name="bodega"
                value={formData.bodega}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Descripción : </label>
              <input
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Maridaje : </label>
              <input
                type="text"
                name="maridaje"
                value={formData.maridaje}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Precio min : </label>
              <input
                type="range"
                name="precioMin"
                max="50"
                value={formData.precioMin || "0"}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
              <p className="text-blue-600">{formData.precioMin}</p>
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Precio max : </label>
              <input
                type="range"
                step="0.10"
                max="50"
                name="precioMax"
                value={formData.precioMax || "0"}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
              <p className="text-blue-600">{formData.precioMax}</p>
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Graduación min : </label>
              <input
                type="range"
                step="0.1"
                max="20"
                name="graduacionMin"
                value={formData.graduacionMin || "0"}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
              <p className="text-blue-600">{formData.graduacionMin}</p>
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Graduación max : </label>
              <input
                type="range"
                step="0.1"
                name="graduacionMax"
                max="20"
                value={formData.graduacionMax || "0"}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
              <p className="text-blue-600">{formData.graduacionMax}</p>
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Año : </label>
              <input
                type="number"
                name="ano"
                value={formData.ano || ""}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">Sabor : </label>
              <input
                type="text"
                name="sabor"
                value={formData.sabor}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between mb-4">
              <label className="font-semibold">Tipo : </label>
              <select
                name="tipo_id"
                value={formData.tipo_id?.toString() || ""}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md"
              >
                <option value="">Seleccione tipo</option>
                {tipos.map((t) => (
                  <option key={t.id.toString()} value={t.id.toString()}>
                    {t.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <label className="font-semibold">D.O.P : </label>
              <select
                name="denominacion_id"
                value={formData.denominacion_id?.toString() || ""}
                onChange={handleChange}
                className="border-gray-400 bg-gray-100 rounded-md mb-5"
              >
                <option value="">Seleccione D.O.P</option>
                {dop.map((d) => (
                  <option key={d.id.toString()} value={d.id.toString()}>
                    {d.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-2 items-center">
              <button type="submit" className="btn-primary">
                Filtrar
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn-primary"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-4 w-9/12 mx-auto">
          {products.map((p: Producto) => (
            <div key={p.id}>
              <ProductView
                id={p.id}
                nombre={p.nombre}
                maridaje={p.maridaje}
                descripcion={p.descripcion}
                precio={p.precio}
                graduacion={p.graduacion}
                imagen={p.imagen}
                ano={p.ano}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
