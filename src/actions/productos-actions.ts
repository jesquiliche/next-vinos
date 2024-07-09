"use server";

import { ProductoDetalle } from "@/app/interfaces/Product";
import { PrismaClient, productos } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllProducts(): Promise<productos[]> {
  try {
    const productos = await prisma.productos.findMany();
    return productos;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAllProductsDetails():Promise<ProductoDetalle[]>{
  try {
    const productos = await prisma.productos.findMany({
      include: { denominaciones: true, tipos: true },
    });
    return productos;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProductDetailsById(id:any): Promise<ProductoDetalle | null> {
  try {
    const producto = await prisma.productos.findUnique({
      where: { id },
      include: { denominaciones: true, tipos: true },
    });
    return producto;
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Ejemplo de uso
getAllProductsDetails()
  .then(tipos => {
    console.log("Todos los productos:", tipos);
  })
  .catch(error => {
    console.error("Error:", error);
  });

const productoId = 1; // Ejemplo de ID de producto

getProductDetailsById(productoId)
  .then(producto => {
    if (producto) {
      console.log("Producto encontrado:", producto);
    } else {
      console.log("Producto no encontrado");
    }
  })
  .catch(error => {
    console.error("Error al buscar el producto:", error);
  });
