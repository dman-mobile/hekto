import { FlexColumn } from "../../styled-components/Flex.styles";
import { Section } from "@/styled-components/Section.styles";
import { ImagePicker, ImagePickerContainer, ProductDetailWrapper, ProductImage, Thumbnail } from "./ProductDetail.styles";

export default function ProductDetailSkeleton() {

  return (
    <Section>
      <ProductDetailWrapper>
        <ImagePickerContainer>
          <ImagePicker>
            <Thumbnail>
            </Thumbnail>
            <Thumbnail>
            </Thumbnail>
            <Thumbnail>
            </Thumbnail>
          </ImagePicker>
          <ProductImage>
          </ProductImage>
        </ImagePickerContainer>
        <FlexColumn className="product-info">
        </FlexColumn>
      </ProductDetailWrapper>
    </Section>
  )
}