"use client"

import { Toggle } from "@/components/ui/toggle"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useProductsStore } from "../store/useProductsStore"

export default function GenderToggler({ men, women }) {
  const [isToggled, setIsToggled] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)
  const { setProducts } = useProductsStore()

  useEffect(() => {
    setProducts(men)
  }, [])

  useGSAP(
    () => {
      if (containerRef.current && childrenRef.current) {
        setProducts(isToggled ? men : women)
        const el = childrenRef.current
        const width =
          (containerRef.current.offsetWidth - childrenRef.current.offsetWidth) /
          2
        isToggled ? gsap.to(el, { x: -width }) : gsap.to(el, { x: width })
      }
    },
    { dependencies: [isToggled] },
  )

  return (
    <div className="p-3 flex justify-between items-center">
      <h1>NOTRE COLLECTION</h1>
      <Toggle
        ref={containerRef}
        className="relative flex border-1 bg-[#f2f2f2]"
      >
        <div
          ref={childrenRef}
          className="absolute  z-10 w-[50%] h-full bg-[#aeaeae] rounded-md"
        ></div>
        <div className="relative z-20 flex">
          <div
            onClick={() => {
              setIsToggled(true)
            }}
          >
            HOMMES
          </div>
          <div
            onClick={() => {
              setIsToggled(false)
            }}
            className="ml-3"
          >
            FEMMES
          </div>
        </div>
      </Toggle>
    </div>
  )
}
