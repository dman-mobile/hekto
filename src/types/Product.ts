import { Key } from "react";

export interface ProductData {
  id: Key | null | undefined;
  title: string,
  code: string,
  imageUrl: string,
  price: number,
  sale: boolean
}

export type ProductCategory = 'new' | 'best' | 'featured' | 'offer';