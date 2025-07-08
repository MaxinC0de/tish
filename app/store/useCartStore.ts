import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      pushItemToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),
    }),
    {
      name: "cart", // key in localStorage
    },
  ),
)
