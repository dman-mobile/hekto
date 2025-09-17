import { Key } from "react";

export interface ProductData {
  id: Key | null | undefined;
  title: string,
  code: string,
  imageUrl: string,
  price: number,
  sale?: {discount: number} // 0< X >1 ej: 0.4 => 40% de descuento
  brand: string,
  description: string,
  features: Array<string>
}

export type ProductCategory = 'new' | 'best' | 'featured' | 'offer' | 'headphones' | 'laptop' | 'other' | 'watch' | 'game-console' | 'clothing' | 'perfume';

export interface CategoryData {
  id: string,
  title: string,
  imageUrl: string
}