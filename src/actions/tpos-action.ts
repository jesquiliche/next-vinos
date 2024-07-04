'use server'

import { PrismaClient, tipos } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllTipos(): Promise<tipos[]> {
  try {
    const tipos = await prisma.tipos.findMany();
    return tipos;
  } catch (error) {
    console.error("Error al obtener los tipos:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Ejemplo de uso
getAllTipos()
  .then(tipos => {
    console.log("Todos los tipos:", tipos);
  })
  .catch(error => {
    console.error("Error:", error);
  });
