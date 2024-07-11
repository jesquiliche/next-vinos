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


  // Función para obtener un tipo por su ID
  export async function getTipoById(id: any): Promise<tipos | null> {
    try {
      const tipo = await prisma.tipos.findUnique({
        where: { id: BigInt(id) },
      });
      return tipo;
    } catch (error) {
      console.error(`Error al obtener el tipo con id ${id}:`, error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  
const id = 1; // Ejemplo de ID
getTipoById(id).then(tipo => {
  if (tipo) {
    console.log(`Tipo con id ${id}:`, tipo);
  } else {
    console.log(`Tipo con id ${id} no encontrado.`);
  }
}).catch(error => {
  console.error('Error:', error);
});