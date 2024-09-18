'use server'

import  {Address}  from "@/interfaces/address";
import {CartProduct} from "@/interfaces/Product"
import { getProduct } from "./productos-actions";
import { PrismaClient, Orden } from "@prisma/client";

const prisma = new PrismaClient();

export async function StoreOrden(address:Address,cartProduct:CartProduct[]) {

    console.log(address)
   // console.log(cartProduct)

    let total=0;
    let articulos=0;
   
    for (const p of cartProduct){
        let product=await getProduct(p.id)
        total+=Number(product?.precio)*p.quantity
        articulos+=p.quantity
    }

    console.log('total',total.toFixed(2))
    let subtotal=total/1.21
    let iva=total-subtotal

    console.log('subtotal',subtotal.toFixed(2))
    console.log('iva',iva.toFixed(2))
    console.log('artículos',articulos)

    const nuevaOrden = await prisma.orden.create({
        data: {
          user_id: BigInt(address.user_id),     // Asegúrate de usar BigInt si es necesario
          userId: address.userId,
          subtotal: subtotal,       // Decimal
          total: total,          // Decimal
          iva: iva,             // Decimal
          pagado: 'N',            // Pagado (1 char)
          entregado: 'N',         // No entregado (1 char)
          transactionId: null,    // Opcional
          articulos: articulos,           // Número de artículos
        },
      });
}   