"use client"

import Image from "next/image"
import { Brackets, Heart, CircleUserRound, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="flex justify-between p-3">
      <div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt=""
            width={700}
            height={300}
            className="w-12"
          />
        </Link>
      </div>
      <div className="flex gap-x-3">
        <Link href="/connection">
          <CircleUserRound />
        </Link>
        <Heart />
        <ShoppingBag />
        <Brackets />
      </div>
    </nav>
  )
}
