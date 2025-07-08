"use client"

import Image from "next/image"
import { Brackets, Heart, CircleUserRound, ShoppingBag } from "lucide-react"

export default function Nav() {
  return (
    <nav className="flex justify-between p-3">
      <div>
        <Image
          src="/images/logo.png"
          alt=""
          width={700}
          height={300}
          className="w-12"
        />
      </div>
      <div className="flex gap-x-3">
        <CircleUserRound />
        <Heart />
        <ShoppingBag />
        <Brackets />
      </div>
    </nav>
  )
}
