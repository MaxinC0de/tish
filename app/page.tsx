import { getProducts } from "./actions/getProducts"
import Banner from "./components/banner"
import Gallery from "./components/gallery"
import GenderToggler from "./components/genderTogglers"

export default async function Home() {
  const { men, women } = await getProducts()
  return (
    <div>
      <Banner />
      <GenderToggler men={men} women={women} />
      <Gallery />
    </div>
  )
}
