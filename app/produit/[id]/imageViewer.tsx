"use client"

import { useProductStore } from "@/app/store/useProductStore"
import Image from "next/image"

export default function ImageViewer() {
  const { product } = useProductStore()
  if (!product) return null
  return (
    <div className="flex flex-col">
      {product.carousel.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          width={700}
          height={300}
          className="w-full object-cover"
        />
      ))}
      <p>{product.name}</p>
      <p>{product.price}€</p>
    </div>
  )
}
