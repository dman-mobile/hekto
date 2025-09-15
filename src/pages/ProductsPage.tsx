import ProductsList from "../components/ProductsList"
import ProductsNav from "../components/ProductsNav"
import { ProductsWrapper } from "../components/Products.styles"
import Filters from "../components/Filters"

export default function ProductsPage() {
  return (
    <>
      <h2>Products</h2>
      <ProductsNav />
      <ProductsWrapper>
        <Filters />
        <ProductsList />
      </ProductsWrapper>
    </>
  )
}