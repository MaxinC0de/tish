import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function BasketButton() {
  return (
    <div className="flex justify-between items-center w-full p-3">
      <Button className="w-[80vw] text-white rounded-none">
        AJOUTER AU PANIER
      </Button>
      <Heart className="w-18" />
    </div>
  )
}
