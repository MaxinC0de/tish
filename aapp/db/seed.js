import "dotenv/config"
import { createClient } from "@supabase/supabase-js"
import { v4 as uuidv4 } from "uuid"

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)

const colorsMen = [
  "Bleu Anthracite",
  "Beige",
  "Jaune",
  "Rouge Bordeau",
  "Gris Anthracite",
  "Bleu Foncé",
  "Rouge Foncé",
  "Vert Clair",
  "Jaune Clair",
  "Marron",
]
const colorsWomen = [
  "Jaune Clair",
  "Gris Clair",
  "Blanc Foncé",
  "Marron Clair",
  "Bleu Ciel",
  "Rose Clair",
  "Satin",
  "Blanc & Gris",
  "A Rayures Bleues",
  "A Rayures Grises",
]

const xsMen = [100, 150, 120, 170, 0, 215, 0, 120, 180, 100]
const sMen = [100, 150, 120, 0, 185, 215, 0, 120, 180, 100]
const mMen = [100, 0, 120, 170, 0, 215, 115, 120, 180, 100]
const lMen = [0, 150, 120, 170, 185, 215, 115, 120, 180, 0]
const xlMen = [100, 0, 120, 0, 185, 215, 115, 120, 180, 100]
const xxlMen = [100, 150, 0, 0, 185, 215, 115, 120, 180, 100]

const xsWomen = [100, 150, 120, 170, 0, 215, 0, 120, 180, 100]
const sWomen = [100, 150, 120, 0, 185, 215, 0, 120, 180, 100]
const mWomen = [100, 0, 120, 170, 0, 215, 115, 120, 180, 100]
const lWomen = [0, 150, 120, 170, 185, 215, 115, 120, 180, 0]
const xlWomen = [100, 0, 120, 0, 185, 215, 115, 120, 180, 100]
const xxlWomen = [100, 150, 0, 0, 185, 215, 115, 120, 180, 100]

const description =
  "à col rond, idéal pour toutes les occasions. Conçu dans un tissu doux et résistant, il offre un confort optimal au quotidien. Sa coupe moderne s’adapte à tous les styles et s’accorde parfaitement avec n’importe quelle tenue. À porter seul ou en superposition, il devient rapidement l’indispensable de votre garde-robe."

const men = colorsMen.map((_, i) => ({
  id: i,
  type: "men",
  name: `Tee-shirt ${colorsMen[i]}`,
  color: colorsMen[i],
  src: `/images/men/${i}/1.avif`,
  carousel: [`/images/men/${i}/1.avif`, `/images/men/${i}/2.avif`],
  category: "tee",
  price: 20,
  description: description,
  sizes: {
    xs: xsMen[i],
    s: sMen[i],
    m: mMen[i],
    l: lMen[i],
    xl: xlMen[i],
    xxl: xxlMen[i],
  },
}))

const women = colorsWomen.map((_, i) => ({
  id: i,
  type: "women",
  name: `Tee-shirt ${colorsWomen[i]}`,
  color: colorsWomen[i],
  src: `/images/women/${i}/1.avif`,
  carousel: [`/images/women/${i}/1.avif`, `/images/women/${i}/2.avif`],
  category: "tee",
  price: 20,
  description: description,
  sizes: {
    xs: xsWomen[i],
    s: sWomen[i],
    m: mWomen[i],
    l: lWomen[i],
    xl: xlWomen[i],
    xxl: xxlWomen[i],
  },
}))

async function seed() {
  for (const product of [...men, ...women]) {
    const { data: insertedProducts, error } = await supabase
      .from("products")
      .insert({
        type: product.type,
        name: product.name,
        color: product.color,
        src: product.src,
        carousel: product.carousel,
        category: product.category,
        price: product.price,
        description: product.description,
      })
      .select()
      .single()

    if (error) {
      console.error("Insert error for product:", product.name, error)
      continue
    }

    const variants = Object.entries(product.sizes).map(([size, stock]) => ({
      id: uuidv4(),
      product_id: insertedProducts.id,
      size,
      stock,
    }))

    const { error: variantError } = await supabase
      .from("variants")
      .insert(variants)

    if (variantError) {
      console.error(
        "Insert error for variants of product:",
        product.name,
        variantError,
      )
    }
  }
}
