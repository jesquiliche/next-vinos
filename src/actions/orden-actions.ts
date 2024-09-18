'use server';

import { Address } from "@/interfaces/address";
import { CartProduct } from "@/interfaces/Product";
import { getProduct } from "./productos-actions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function StoreOrden(address: Address, cartProduct: CartProduct[]) {
  console.log(address);

  let total = 0;
  let articulos = 0;

  try {
    // Calcular el total y la cantidad de artículos
    for (const p of cartProduct) {
      const product = await getProduct(p.id);
      if (product) {
        total += Number(product.precio) * p.quantity;
        articulos += p.quantity;
      }
    }

    const subtotal = total / 1.21;
    const iva = total - subtotal;

    // Iniciar una transacción
    const nuevaOrden = await prisma.$transaction(async (tx) => {
      // Crear la nueva orden
      const orden = await tx.orden.create({
        data: {
          user_id: BigInt(address.user_id),     // Asegúrate de usar BigInt si es necesario
          userId: address.userId,                // Asegúrate de que 'userId' sea el nombre correcto
          subtotal: subtotal,       // Decimal
          total: total,             // Decimal
          iva: iva,                 // Decimal
          pagado: 'N',              // Pagado (1 char)
          entregado: 'N',           // No entregado (1 char)
          transactionId: null,      // Opcional
          articulos: articulos,     // Número de artículos
        },
      });

      // Crear los detalles de la orden
      for (const p of cartProduct) {
        const product = await getProduct(p.id);
        
        if (product) {
          console.log(product)
          await tx.detalle.create({
            data: {
              orden_id: orden.id,       // ID de la orden (correctamente referenciado)
              product_id: product.id,   // ID del producto asociado
              precio: product.precio,   // Precio del artículo (decimal)
              cantidad: p.quantity,     // Cantidad del artículo
            },
          });
        }
      }

      return orden; // Devuelve la orden creada
    });

    console.log('Orden creada con ID:', nuevaOrden.id);
  } catch (error) {
    console.error("Error al procesar la orden:", error);
    throw error; // Lanza el error para que pueda ser manejado fuera de la función
  } finally {
    await prisma.$disconnect(); // Asegúrate de desconectar Prisma al final
  }
}
