"use client"

import { Button } from "@/components/ui/button"

export default function SummaryCart() {
  return (
    <div className="flex justify-between items-center h-[10vh] bg-black p-3">
      <div className="flex flex-col text-white">
        <p className="font-black">SOUS TOTAL PANIER</p>
        <p>Total</p>
      </div>
      <Button className="bg-white text-black font-black rounded-none w-[50%]">
        PAIEMENT
      </Button>
    </div>
  )
}
