import { Decimal } from "@prisma/client/runtime/library";


export interface Producto {
    id: bigint;
    nombre: string;
    bodega?: string | null;
    descripcion: string;
    maridaje: string;
    precio: Decimal;
    graduacion: Decimal;
    ano?: number | null;
    sabor?: string | null;
    imagen: string;
  }
  