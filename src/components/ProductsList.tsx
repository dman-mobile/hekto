import { FlexColumn } from "../styled-components/Flex.styles"
import { Body, SubtitleSmall } from "../styled-components/Typography.styles"
import { CartIcon, HeartIcon, StarEmptyIcon, StarIcon, ZoomIcon } from "../icons/Icons"
import { useEffect, useState } from "react";
import { ProductData } from "@/types/Product";
import { CardActions, CardBody, CardHeader, ImageWrapper, PriceContainer, PriceDiscount, ProductCard, ProductsContainer, RatingContainer } from "./Products.styles";
import { ButtonRound } from "./ui/Button.styles";

export default function ProductsList() {
  const [products, setProducts] = useState<ProductData[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data.all);
        console.log(data.all)
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);
  return (
    <ProductsContainer>
      {products && products.map((product, index) =>
        <ProductCard key={index}>
          <ImageWrapper>
            <img src={product.imageUrl} alt={product.title} />
          </ImageWrapper>
          <CardBody>
            <CardHeader>
              <FlexColumn>
                <SubtitleSmall>{product.title}</SubtitleSmall>
                {!product.sale &&
                  <PriceContainer>
                    <p>${product.price.toFixed(2)}</p>
                  </PriceContainer>
                }
                {product.sale &&
                  <PriceContainer>
                    <p>${product.price.toFixed(2)}</p>
                    <PriceDiscount>${(product.price + 15).toFixed(2)}</PriceDiscount>
                  </PriceContainer>
                }
              </FlexColumn>
              <RatingContainer>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarEmptyIcon />
              </RatingContainer>
            </CardHeader>
            <Body>
              {product.description}
            </Body>
            <CardActions>
              <ButtonRound> <CartIcon /> </ButtonRound>
              <ButtonRound> <HeartIcon /> </ButtonRound>
              <ButtonRound> <ZoomIcon /> </ButtonRound>
            </CardActions>
          </CardBody>
        </ProductCard>
      )
      }
    </ProductsContainer>
  )
}