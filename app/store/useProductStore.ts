import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useProductStore = create()(
  persist(
    (set) => ({
      product: [],
      setProduct: (p) => set({ product: p }),
    }),
    {
      name: "product",
    },
  ),
)
