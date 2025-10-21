import { ProductData } from '@/types/Product';
import { FeaturesList } from '@/components/ProductDetails/ProductDescriptionTabs.styles';
import { TickIcon } from '@/icons/Icons';

export default function DescriptionTab({ product }: { product: ProductData }) {
  return (
    <>
      <h5>{product.longDescription.title}</h5>
      <p>{product.longDescription.body}</p>
      <h6>More details</h6>
      <FeaturesList>
        {product.features.map((feature, index) => (
          <li key={index}>
            <TickIcon /> {feature}
          </li>
        ))}
      </FeaturesList>
    </>
  );
}