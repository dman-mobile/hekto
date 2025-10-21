import { ProductData } from '@/types/Product';
import { ReviewItem } from '../ProductDescriptionTabs.styles';

export default function ReviewsTab({ product }: { product: ProductData }) {
  return (
    <div>
      {product.reviews && product.reviews.map((review, index) => (
        <ReviewItem key={index}>
          <strong>{review.username}</strong>
          <p>{review.body}</p>
        </ReviewItem>
      ))}
    </div>
  );
}