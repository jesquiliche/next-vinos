'use server'

import { PrismaClient, productos } from '@prisma/client';

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

// Ejemplo de uso
