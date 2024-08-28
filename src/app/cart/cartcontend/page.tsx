"use client";

import { PacificoFont } from "@/config/fonts";
import useCartStore from "@/store/useCartstore";
import Link from "next/link";

export default function Home() {
  const cartItems = useCartStore((state) => state.cart);
  const totalItems=useCartStore((state)=>state.totalItems);
  const getTotal=useCartStore((state)=>state.getTotalCost);
  const total=getTotal();

  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className={`${PacificoFont.className} text-shadow-title text-center text-4xl
      `}>Carrito</h1>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-6">
          <div className="grid grid-cols-4 gap-4">
            {cartItems.map((p) => (
              <div key={p.id} className="p-2">
                <img src={p.imagen} alt=
                {p.nombre} className="w-28 mx-auto"/>
                <p className="text-center font-bold truncate">{p.nombre}</p>
                <p className="text-center">Precio: {p.precio}</p>
                <p className="text-center">Cantidad: {p.quantity}</p>
                <p className="text-center">Subtotal: {p.quantity * p.precio}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="border-2 border-gray-400 rounded-md p-4 mx-auto">
          <h2 className="text-2xl text-center font-bold">Total</h2>
          <p>Artículos : {totalItems}</p>
          <p>Subtotal : {(total/1.21).toFixed(2)}</p>
          <p>Iva : {(total - total/1.21).toFixed(2)}</p>
          <p>Total : {total}</p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
