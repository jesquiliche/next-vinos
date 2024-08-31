"use client";

import { PacificoFont } from "@/config/fonts";
import { useAddressStore } from "@/store/useAddressStore";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  user_id: number;
  nombre: string;
  apellidos: string;
  calle: string;
  numero: string;
  escalera: string;
  piso: string;
  puerta: string;
  telefono: string;
  provincia: string;
  poblacion: string;
}

const FormularioDireccion: React.FC = () => {
  const address = useAddressStore((state) => state.address);
  const setAddress = useAddressStore((state) => state.setAddress);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      user_id: 1,
      nombre: address?.nombre || "",
      apellidos: address?.apellidos || "",
      calle: address?.calle || "",
      numero: address?.numero || "",
      escalera: address?.escalera || "",
      piso: address?.piso || "",
      puerta: address?.puerta || "",
      telefono: address?.telefono || "",
      provincia: address?.provincia || "",
      poblacion: address?.poblacion || "",
    },
  });

  // Cargar datos desde localStorage cuando el componente se monte
  useEffect(() => {
    const storedData = localStorage.getItem("direccion");
    if (storedData) {
      const parsedData: FormValues = JSON.parse(storedData);
      // Establecer los valores del formulario con los datos de localStorage
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof FormValues, parsedData[key as keyof FormValues]);
      });

      // También puedes actualizar el estado de la dirección en Zustand
      setAddress(parsedData);
    }
  }, [setValue, setAddress]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    // Guardar los datos en localStorage
    localStorage.setItem("direccion", JSON.stringify(data));

    // Convierte miCheckbox a su valor correspondiente
    const formattedData = {
      ...data,
    };

    // Actualiza el estado de la dirección en Zustand
    setAddress(formattedData);
  };

  return (
    <div className="w-10/12 mx-auto px-4 py-20 bg-white">
      <h1 className={`${PacificoFont.className} text-4xl font-semibold mb-6 text-center`}>
        Dirección de entrega
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              className="form-control"
              {...register("nombre", { required: "Este campo es obligatorio" })}
            />
            {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="apellidos" className="block text-gray-700 text-sm font-bold mb-2">
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              placeholder="Apellidos"
              className="form-control"
              {...register("apellidos", { required: "Este campo es obligatorio" })}
            />
            {errors.apellidos && <span className="text-red-500">{errors.apellidos.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="calle" className="block text-gray-700 text-sm font-bold mb-2">
              Calle
            </label>
            <input
              type="text"
              id="calle"
              placeholder="Calle"
              className="form-control"
              {...register("calle", { required: "Este campo es obligatorio" })}
            />
            {errors.calle && <span className="text-red-500">{errors.calle.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="numero" className="block text-gray-700 text-sm font-bold mb-2">
              Número
            </label>
            <input
              type="text"
              id="numero"
              placeholder="Número"
              className="form-control"
              {...register("numero", { required: "Este campo es obligatorio" })}
            />
            {errors.numero && <span className="text-red-500">{errors.numero.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="escalera" className="block text-gray-700 text-sm font-bold mb-2">
              Escalera
            </label>
            <input
              type="text"
              id="escalera"
              placeholder="Escalera"
              className="form-control"
              {...register("escalera")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="piso" className="block text-gray-700 text-sm font-bold mb-2">
              Piso
            </label>
            <input
              type="text"
              id="piso"
              placeholder="Piso"
              className="form-control"
              {...register("piso", { required: "Este campo es obligatorio" })}
            />
            {errors.piso && <span className="text-red-500">{errors.piso.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="puerta" className="block text-gray-700 text-sm font-bold mb-2">
              Puerta
            </label>
            <input
              type="text"
              id="puerta"
              placeholder="Puerta"
              className="form-control"
              {...register("puerta")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              placeholder="Teléfono"
              className="form-control"
              {...register("telefono", { required: "Este campo es obligatorio" })}
            />
            {errors.telefono && <span className="text-red-500">{errors.telefono.message}</span>}
          </div>

          <div className="mb-4 col-span-2 md:col-span-1">
            <label htmlFor="provincia" className="block text-gray-700 text-sm font-bold mb-2">
              Provincia
            </label>
            <select
              id="provincia"
              className="form-control text-xs md:text-sm"
              {...register("provincia", { required: "Este campo es obligatorio" })}
            >
              <option value="">Seleccionar Provincia</option>
              <option value="08">Barcelona</option>
              {/* Agrega otras provincias aquí */}
            </select>
            {errors.provincia && <span className="text-red-500">{errors.provincia.message}</span>}
          </div>

          <div className="mb-4 col-span-2 md:col-span-1">
            <label htmlFor="poblacion" className="block text-gray-700 text-sm font-bold mb-2">
              Población (primero seleccionar Provincia)
            </label>
            <select
              id="poblacion"
              className="form-control text-xs md:text-sm"
              {...register("poblacion", { required: "Este campo es obligatorio" })}
            >
              <option value="">Seleccionar Población</option>
              <option value="08009">Barcelona</option>
              {/* Agrega otras poblaciones aquí */}
            </select>
            {errors.poblacion && <span className="text-red-500">{errors.poblacion.message}</span>}
          </div>

          <div className="mb-4">
            <input type="checkbox" id="miCheckbox" />
            <label htmlFor="miCheckbox" className="ml-2">
              ¿Recordar Dirección?
            </label>
          </div>
        </div>
        <div className="text-center mt-6 w-2/6 mx-auto">
          <button type="submit" className="btn-primary text-md">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioDireccion;
