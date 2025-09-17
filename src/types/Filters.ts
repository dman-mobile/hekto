export interface FiltersProps {
  selected: {
    brands: string[];
    rating: number | null;
    categories: string[];
    price: string | null;
    discounts: string[];
  };
  onChange: (group: any, value: any) => void;
}

export interface ISelectedFilters {
  brands: string[];
  rating: number | null;
  categories: string[];
  price: string | null;
  discounts: string[];
}

export interface StyledCheckboxProps {
  checked: boolean;
  activeColor?: string,
  backgroundColor?: string
}