"use client"

import Image from "next/image"

export default function Banner() {
  return (
    <Image
      src="/images/banner.png"
      alt=""
      width={700}
      height={300}
      className="w-full object-cover py-3"
    />
  )
}
