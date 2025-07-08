"use server"

import { supabase } from "../../aapp/db/seed"

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*")

  if (error) {
    console.error("Erreur lors du fetch :", error)
    return { men: [], women: [] }
  }

  const men = data.filter((p) => p.type === "men")
  const women = data.filter((p) => p.type === "women")

  return { men, women }
}
