import { useState } from "react";
import { Body } from "../../styled-components/Typography.styles";
import { StarEmptyIcon, StarIcon } from "../../icons/ProductsPageIcons";
import { FlexColumn } from "../../styled-components/Flex.styles";
import { Section } from "@/styled-components/Section.styles";
import { ImagePicker, ImagePickerContainer, PriceContainer, ProductActions, ProductDetailWrapper, ProductImage, RatingContainer, Thumbnail } from "./ProductDetail.styles";
import { HeartIcon } from "@/icons/Icons";

import { ProductData } from "@/types/Product";
import { PriceDiscount } from "../Products.styles";
import { useAppDispatch } from "@/store/hooks";
import { ButtonBig } from "../ui/Button.styles";
import { addCartItem } from "@/store/cart-actions";

export default function ProductDetail({ product }: { product: ProductData }) {
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    dispatch(addCartItem(product));
  };
  
  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <Section>
      <ProductDetailWrapper>
        <ImagePickerContainer>
          <ImagePicker>
            {product.images && product.images.map((imgUrl, index) => (
              <Thumbnail 
                key={index} 
                onClick={() => handleThumbnailClick(imgUrl)}
                className={selectedImage === imgUrl ? 'active' : ''}
              >
                <img src={imgUrl} alt={`${product.title} thumbnail ${index + 1}`} />
              </Thumbnail>
            ))}
          </ImagePicker>
          <ProductImage>
            <img src={selectedImage} alt={product.title} />
          </ProductImage>
        </ImagePickerContainer>
        <FlexColumn className="product-info">
          <h3>{product.title}</h3>
          <RatingContainer>
            {[...Array(5)].map((_, i) =>
              i < product.rating ? <StarIcon key={i} /> : <StarEmptyIcon key={i} />
            )}
          </RatingContainer>

          <PriceContainer>
            {product.sale && product.sale.discount > 0 ? (
              <>
                <p>${(product.price * (1 - product.sale.discount)).toFixed(2)}</p>
                <PriceDiscount>${product.price.toFixed(2)}</PriceDiscount>
              </>
            ) : (
              <p>${product.price.toFixed(2)}</p>
            )}
          </PriceContainer>

          <Body>{product.description}</Body>

          <ProductActions>
            <ButtonBig onClick={handleAddToCart}>Add To Cart</ButtonBig>
            <HeartIcon />
          </ProductActions>

        </FlexColumn>
      </ProductDetailWrapper>
    </Section>
  )
}