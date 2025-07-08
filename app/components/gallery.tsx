"use client"

import Image from "next/image"
import { useProductsStore } from "../store/useProductsStore"
import { useRouter } from "next/navigation"
import { useProductStore } from "../store/useProductStore"

export default function Gallery() {
  const { products } = useProductsStore()
  const { setProduct } = useProductStore()
  const router = useRouter()
  const handleClick = (p, i) => {
    setProduct(p)
    router.push(`/produit/${i}`)
  }
  return (
    <div className="grid grid-cols-2 justify-center p-3 gap-3">
      {products.map((p, i) => (
        <div
          onClick={() => {
            handleClick(p, i)
          }}
          className="flex flex-col"
        >
          <Image
            src={p.src}
            alt=""
            width={700}
            height={300}
            className="object-cover w-full"
          />
          <div className="flex justify-between p-3">
            <p>{p.name}</p>
            <p>{p.price}€</p>
          </div>
        </div>
      ))}
    </div>
  )
}
