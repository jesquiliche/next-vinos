"use client";

import { PacificoFont } from "@/config/fonts";
import useCartStore from "@/store/useCartstore";
import { useAddressStore } from "@/store/useAddressStore";
import Link from "next/link";

export default function Home() {
  const address = useAddressStore((state) => state.address);
  const cartItems = useCartStore((state) => state.cart);
  const totalItems = useCartStore((state) => state.totalItems);
  const getTotal = useCartStore((state) => state.getTotalCost);
  const total = getTotal();

  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className={`${PacificoFont.className} text-center text-4xl`}>
        Carrito
      </h1>
      <div className="grid grid-cols-8 gap-">
        <div className="col-span-6">
          <div className="grid grid-cols-3 gap-2">
            {cartItems.map((p) => (
              <div key={p.id} className="p-2">
                <img src={p.imagen} alt={p.nombre} className="w-28 mx-auto" />
                <Link href={`/product/${p.id}`}>
                  <p className="text-center font-bold underline truncate ">
                    {p.nombre}
                  </p>
                </Link>
                <p className="text-center">Precio: {p.precio}</p>
                <p className="text-center">Cantidad: {p.quantity}</p>
                <p className="text-center">
                  Subtotal: {(p.quantity * p.precio).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="border-2 border-gray-400 rounded-md p-4 mx-auto mb-4">
            <h2 className="text-2xl text-center font-bold">Dirección</h2>
            <p><b>Nombre:</b> {address.nombre}</p>
            <p><b>Apellidos:</b> {address.apellidos}</p>
            <p><b>Calle:</b> {address.calle}</p>
            <p><b>Número:</b> {address.numero}</p>
            <p><b>Escalera:</b> {address.escalera}</p>
            <p><b>Piso:</b> {address.piso}</p>
            <p><b>Puerta:</b> {address.puerta}</p>
            <p><b>Población:</b> {address.poblacion}</p>
            <p><b>Provincia:</b> {address.provincia}</p>
            <p><b>Teléfono:</b> {address.telefono}</p>
          </div>
          <div className="border-2 border-gray-400 rounded-md p-4 mx-auto">
            <h2 className="text-2xl text-center font-bold">Total</h2>
            <p><b>Artículos:</b> {totalItems}</p>
            <p><b>Subtotal:</b> {(total / 1.21).toFixed(2)}</p>
            <p><b>IVA:</b> {(total - total / 1.21).toFixed(2)}</p>
            <p><b>Total:</b> {total.toFixed(2)}</p>
          </div>
          <div className="flex flex-col space-y-2 mt-2">
            <Link href="/" className="btn-primary">
              Seguir comprando
            </Link>
            <Link href="/address" className="btn-primary">
              Iniciar orden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
