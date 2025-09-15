import { FilterLabel, SideNav } from "./Filters.styles";

export default function Filters() {
  return (
    <SideNav>
      <FilterLabel>Product Brand</FilterLabel>
      <FilterLabel>Discount Offer</FilterLabel>
      <FilterLabel>Rating</FilterLabel>
      <FilterLabel>Categories</FilterLabel>
      <FilterLabel>Price</FilterLabel>
    </SideNav>
  )
}