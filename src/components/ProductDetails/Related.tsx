import { ProductData } from "@/types/Product"
import { useState, useEffect } from "react"
import { Card, Price, PriceContainer, PriceDiscount, ProductCode, SkeletonCard } from "./Related.styles"
import { ImageWrapper } from "./Related.styles";
import { RelatedSection, ProductsWrapper, CardBody, ProductTitle } from "./Related.styles";
import { FETCH_DELAY } from "@/constants/constants";


export default function Related() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const getProducts = async () => {
      try {
        const [response] = await Promise.all([
          fetch('/data/products.json'),
          delay(FETCH_DELAY)
        ]);

        const data = await response.json();
        setProducts(data.trending);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <RelatedSection>
      <h2>Related Products</h2>
      <ProductsWrapper>
        {loading &&
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        }
        {products && products.map((product, index) =>
          <Card key={index}>
            <ImageWrapper>
              <img src={product.imageUrl} alt={product.title} />
            </ImageWrapper>
            <CardBody>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductCode>Code - {product.code}</ProductCode>
              {!product.sale && <Price>${product.price.toFixed(2)}</Price>}
              {product.sale &&
                <PriceContainer>
                  <Price>${product.price.toFixed(2)}</Price>
                  <PriceDiscount>${(product.price + 15).toFixed(2)}</PriceDiscount>
                </PriceContainer>
              }
            </CardBody>
          </Card>)}
      </ProductsWrapper>
    </RelatedSection>
  )
}