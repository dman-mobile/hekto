import { ProductData } from "@/types/Product"
import { useState, useEffect } from "react"
import { Card, PriceContainer, PriceDiscount, SkeletonCard } from "./Trending.styles"
import { ImageWrapper } from "./Trending.styles";
import { TrendingSection, ProductsWrapper, CardBody, ProductTitle } from "./Trending.styles";
import { FETCH_DELAY } from "../constants/constants";


export default function Trending() {
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
    <TrendingSection>
      <h2>Trending Products</h2>
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