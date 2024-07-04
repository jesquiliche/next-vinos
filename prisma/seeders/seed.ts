'use server'

import { PrismaClient } from '@prisma/client';
import { denominaciones } from "../../prisma/seeders/denominaciones";
import { productos } from "../../prisma/seeders/productos";
import { tipos } from "../../prisma/seeders/tipos";

const prisma = new PrismaClient();

export async function dbSeeder() {
    // Purga la tabla de denominaciones
    await prisma.denominaciones.deleteMany({
        where: {
          id: {
            gt: 0
          }
        }
      });
    // Purga la tabla de tipos
    await prisma.tipos.deleteMany({
        where: {
          id: {
            gt: 0
          }
        }
      });

    // Purga la tabla de productos
    await prisma.productos.deleteMany({
        where: {
          id: {
            gt: 0
          }
        }
      });;

    // Inserta las denominaciones en la base de datos
    for (const denominacion of denominaciones) {
        await prisma.denominaciones.create({
            data: denominacion,
        });
    }

    console.log(await prisma.denominaciones.count());


    // Inserta los tipos en la base de datos
    for (const tipo of tipos) {
        await prisma.tipos.create({
            data: tipo,
        });
    }

    // Purga la tabla de productos
    

    // Inserta los productos en la base de datos
    for (const producto of productos) {
        await prisma.productos.create({
            data: producto,
        });
    }

    console.log('Datos de seed insertados correctamente');
}
