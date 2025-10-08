import { ProductData } from '@/types/Product';

export default function AdditionalInfoTab({ product }: { product: ProductData }) {
  return <p>{product.additionalInfo}</p>;
}