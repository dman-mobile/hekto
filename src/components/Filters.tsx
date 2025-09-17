import { BRANDS, OFFERS, RATINGS, CATEGORIES, PRICES } from "../constants/constants";
import { renderRating } from "../utils/renderRating";
import {
  FilterSection,
  FilterLabel,
  FilterList,
  FilterListItem,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
  SideNav,
} from "./Filters.styles";
import { FiltersProps } from "@/types/Filters";



export default function Filters({ selected, onChange }: FiltersProps) {
  return (
    <SideNav>
      <FilterSection>
        <FilterLabel>Product Brand</FilterLabel>
        <FilterList>
          {BRANDS.map(brand => (
            <FilterListItem key={brand}>
              <CheckboxWrapper>
                <HiddenCheckbox
                  checked={selected.brands.includes(brand)}
                  type="checkbox"
                  name="brands"
                  onChange={() => onChange('brands', brand)}
                />
                <StyledCheckbox backgroundColor="var(--color-tertiary-light)" activeColor="var(--color-tertiary)" checked={selected.brands.includes(brand)} />
                <CheckboxLabel>{brand}</CheckboxLabel>
              </CheckboxWrapper>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterSection>

      <FilterSection>
        <FilterLabel>Discount Offer</FilterLabel>
        <FilterList>
          {OFFERS.map(offer => (
            <FilterListItem key={offer}>
              <CheckboxWrapper>
                <HiddenCheckbox
                  checked={selected.discounts.includes(offer)}
                  type="checkbox"
                  name="discounts"
                  onChange={() => onChange('discounts', offer)}
                />
                <StyledCheckbox checked={selected.discounts.includes(offer)} />
                <CheckboxLabel>{offer}</CheckboxLabel>
              </CheckboxWrapper>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterSection>

      <FilterSection>
        <FilterLabel>Rating</FilterLabel>
        <FilterList>
          {RATINGS.map(rating => (
            <FilterListItem key={rating}>
              <CheckboxWrapper>
                <HiddenCheckbox
                  type="checkbox"
                  name="rating"
                  checked={selected.rating === rating}
                  onChange={() => onChange('rating', rating)}
                />
                <StyledCheckbox backgroundColor="var(--color-secondary-light)"  activeColor="var(--color-secondary)" checked={selected.rating === rating} />
                <CheckboxLabel as="div">{renderRating(rating)}</CheckboxLabel>
              </CheckboxWrapper>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterSection>

      <FilterSection>
        <FilterLabel>Categories</FilterLabel>
        <FilterList>
          {CATEGORIES.map(category => (
            <FilterListItem key={category}>
              <CheckboxWrapper>
                <HiddenCheckbox
                  checked={selected.categories.includes(category)}
                  type="checkbox"
                  name="categories"
                  onChange={() => onChange('categories', category)}
                />
                <StyledCheckbox checked={selected.categories.includes(category)} />
                <CheckboxLabel>{category}</CheckboxLabel>
              </CheckboxWrapper>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterSection>

      <FilterSection>
        <FilterLabel>Price</FilterLabel>
        <FilterList>
          {PRICES.map(priceRange => (
            <FilterListItem key={priceRange}>
              <CheckboxWrapper>
                <HiddenCheckbox
                  type="checkbox"
                  name="price"
                  checked={selected.price === priceRange}
                  onChange={() => onChange('price', priceRange)}
                />
                <StyledCheckbox checked={selected.price === priceRange} />
                <CheckboxLabel>${priceRange.replace('-', ' - $')}</CheckboxLabel>
              </CheckboxWrapper>
            </FilterListItem>
          ))}
        </FilterList>
      </FilterSection>
    </SideNav>
  );
}