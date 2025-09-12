import { FlexCenter, FlexColumn } from "../styled-components/Flex.styles"
import { Section } from "../styled-components/Section.styles"
import { height, maxWidth, styled } from "@mui/system"
import { Label } from "../styled-components/Typography.styles"
import { ProductData } from "@/types/Product"
import { useState, useEffect } from "react"
import { PriceContainer, PriceDiscount } from "./Latest.styles"

const TrendingSection = styled(Section)({
})

const Card = styled(FlexColumn)({
  padding: 16,
  boxShadow: 'var(--shadow)',
  transition: 'all .3s ease-in-out',
  ':hover': {
    boxShadow: 'var(--shadow-large)',
    transform: 'translateY(-25px)',
  },
  width: '100%',
  alignItems: "center"
})

const CardBody = styled(FlexColumn)({
  padding: 24,
  alignItems: 'center'
})

const ProductTitle = styled(Label)({
  color: 'var(--color-primary)',
  textAlign: 'center',
  textTransform: 'capitalize'
})

const ProductsWrapper = styled(FlexCenter)({
  gap: 'var(--spacing-unit)',
  maxWidth: 1280,
  margin: '0 auto',
  marginTop: 72
})

const ImageWrapper = styled('div')({
  height: 232,
  width: 272,
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  overflow: 'hidden'
})

export default function Trending() {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data.trending);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <TrendingSection>
        <h2>Trending Products</h2>
      <ProductsWrapper>
        {products && products.map((product, index) =>
          <Card key={index}>
            <ImageWrapper>
              <img src={product.imageUrl} alt={product.title} />
            </ImageWrapper>
            <CardBody>
              <ProductTitle>
                {product.title}
              </ProductTitle>
              {!product.sale && <p>${product.price.toFixed(2)}</p>}
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
    </TrendingSection>
  )
}