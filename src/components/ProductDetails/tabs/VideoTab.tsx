import { ProductData } from '@/types/Product';
import { VideoWrapper } from '../ProductDescriptionTabs.styles';

export default function VideoTab({ product }: { product: ProductData }) {
  return (
    <VideoWrapper>
      <iframe width="560" height="315" src={product.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </VideoWrapper>
  );
}