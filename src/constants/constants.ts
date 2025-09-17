import { ISelectedFilters } from "@/types/Filters";

export const BANNER_CYCLE_TIME = 10000;
export const PRODUCTS_PER_PAGE_DESKTOP = 4;
export const PRODUCTS_PER_PAGE_MOBILE = 2;
export const initialFilters: ISelectedFilters = {
  brands: [],
  rating: null,
  categories: [],
  price: null,
  discounts: [],
};
export const BRANDS = ['Casio', 'Apple', 'Sony', 'Nike', 'Glossiness', 'Vke'];
export const OFFERS = ['20% Cashback', '5% Cashback Offer', '25% Discount Offer'];
export const RATINGS = [5, 4, 3, 2, 1];
export const CATEGORIES = ['Watches', 'Headphones', 'Laptop', 'Game Console', 'Clothe', 'Jewellery', 'Perfume'];
export const PRICES = ['0-150', '150-350', '350-500', '550-800', '800+'];