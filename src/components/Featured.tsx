import { ProductData } from "@/types/Product"
import { useState, useEffect } from "react"
import { Card, CardActions, Price, PriceContainer, PriceDiscount, ProductCode } from "./Featured.styles.tsx"
import { ImageWrapper } from "./Featured.styles.tsx";
import { FeaturedSection, ProductsWrapper, CardBody, ProductTitle } from "./Featured.styles.tsx";
import { ButtonRound, ButtonSmall } from "./ui/Button.styles.tsx";
import { CartIcon, HeartIcon, ZoomIcon } from "../icons/Icons.tsx";
import { PRODUCTS_PER_PAGE_DESKTOP } from "../constants/constants.ts";
import CarouselPills from "./ui/carousel/CarouselPills.tsx";

export default function Featured() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pages, setPages] = useState<number>(PRODUCTS_PER_PAGE_DESKTOP)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data.featured);
        setPages(data.featured.length / PRODUCTS_PER_PAGE_DESKTOP)
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <FeaturedSection>
      <h2>Featured Products</h2>
      <ProductsWrapper>
        {products && products.slice(0, 4).map((product, index) =>
          <Card key={index}>
            <ImageWrapper>
              <img src={product.imageUrl} alt={product.title} />
              <ButtonSmall className={'button-details'}>View Details</ButtonSmall>
              <CardActions>
                <ButtonRound>
                  <CartIcon />
                </ButtonRound>
                <ButtonRound>
                  <HeartIcon />
                </ButtonRound>
                <ButtonRound>
                  <ZoomIcon />
                </ButtonRound>
              </CardActions>
            </ImageWrapper>
            <CardBody>
              <ProductTitle>
                {product.title}
              </ProductTitle>
              <ProductCode>Code - {product.code}</ProductCode>
              {!product.sale && <Price>${product.price.toFixed(2)}</Price>}
              {product.sale &&
                <PriceContainer>
                  <p>${product.price.toFixed(2)}</p>
                  <PriceDiscount>
                    ${(product.price + 15).toFixed(2)}
                  </PriceDiscount>
                </PriceContainer>
              }
            </CardBody>
          </Card>)}
      </ProductsWrapper>
      <CarouselPills
        count={pages}
        activeIndex={activeIndex}
        onDotClick={setActiveIndex}
      />
    </FeaturedSection>
  )
}