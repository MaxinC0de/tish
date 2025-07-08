"use client"

import { useCartStore } from "@/app/store/useCartStore"
import { useProductStore } from "@/app/store/useProductStore"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function BasketButton() {
  const { pushItemToCart } = useCartStore()
  const { product } = useProductStore()
  return (
    <div className="flex justify-between items-center w-full p-3">
      <Button
        onClick={() => {
          pushItemToCart(product)
        }}
        className="w-[80vw] text-white rounded-none"
      >
        AJOUTER AU PANIER
      </Button>
      <Heart className="w-18" />
    </div>
  )
}
