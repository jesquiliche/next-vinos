import React from 'react'
import { Producto } from '@/app/interfaces/Product'
import Link from 'next/link'

const ProductView = ({ id, imagen, nombre, precio, graduacion, ano }: Producto) => {
  return (
    <>
      <div
        key={id.toString()}
        className="border-gray-400 border rounded-md p-4 flex flex-col justify-between"
      >
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
          <h2 className="text-lg font-bold text-center">{nombre}</h2>
          <p className="font-bold">Precio: {precio.toString()}</p>
          <p>Graduación: {graduacion.toString()}</p>
          <p>Año: {ano}</p>
        </div>
        <div className="mt-2">
          <Link href={`/product/${id.toString()}`} className="btn-primary">
            Ver
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductView
