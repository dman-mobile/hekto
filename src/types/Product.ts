import { Key } from "react";

export interface ProductData {
  id: Key | number;
  title: string,
  code: string,
  imageUrl: string,
  price: number,
  sale?: { discount: number } // 0< X >1 ej: 0.4 => 40% de descuento
  brand: string,
  category: string,
  description: string,
  rating: 1 | 2 | 3 | 4 | 5,
  features: Array<string>,
  additionalInfo: string,
  longDescription: { body: string, title: string },
  images: Array<string>,
}

export type ProductCategory = 'new' | 'best' | 'featured' | 'offer' | 'headphones' | 'laptop' | 'other' | 'watch' | 'game-console' | 'clothing' | 'perfume';

export interface ProductsListProps {
  products: ProductData[];
  view: 'grid' | 'list';
}

export interface StyleProps {
  isActive?: boolean;
  view?: 'grid' | 'list';
}

export interface ProductsNavProps {
  itemsPerPage: number;
  onPerPageChange: (newValue: number) => void;
  sortBy: string;
  onSortByChange: (newValue: string) => void;
  view: 'grid' | 'list';
  onViewChange: (newView: 'grid' | 'list') => void;
}

export interface CategoryData {
  id: string,
  title: string,
  imageUrl: string
}

export enum ProductDescription {
  description = "description",
  additionalInfo = "additional-info",
  reviews = "reviews",
  video = "video"
}