"use client"

import Image from "next/image"
import { useCartStore } from "../store/useCartStore"
import SummaryCart from "./summaryCart"

export default function Cart() {
  const { cart } = useCartStore()
  return (
    <div>
      <SummaryCart />
      {cart.map((p, i) => (
        <div key={i} className="flex">
          <Image
            src={p.src}
            alt=""
            width={700}
            height={300}
            className="w-[25vw]"
          />
          <div className="flex flex-col">
            <p>{p.price}</p>
            <p>{p.title}</p>
            <div className="flex">
              <p>{p.color}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
