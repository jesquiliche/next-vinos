'use client'

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  graduacion: number;
  imagen: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  totalItems: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getTotalCost: () => number; // Función para obtener el costo total
}

const useStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,

      addToCart: (product: Product) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
          return {
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            totalItems: state.totalItems + 1,
          };
        } else {
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
            totalItems: state.totalItems + 1,
          };
        }
      }),

      removeFromCart: (productId: number) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === productId);
        if (!existingProduct) return state; // Return current state if product not found

        if (existingProduct.quantity > 1) {
          return {
            cart: state.cart.map(item =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            totalItems: state.totalItems - 1,
          };
        } else {
          return {
            cart: state.cart.filter(item => item.id !== productId),
            totalItems: state.totalItems - 1,
          };
        }
      }),

      clearCart: () => set({ cart: [], totalItems: 0 }),

      // Nueva función para obtener el costo total del carrito
      getTotalCost: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
      },
    }),
    {
      name: "shopping-cart", // Key for localStorage
    }
  )
);

export default useStore;
