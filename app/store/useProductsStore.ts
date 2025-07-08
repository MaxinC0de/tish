import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useProductsStore = create(
  persist(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products: products }),
    }),
    {
      name: "products",
    },
  ),
)
