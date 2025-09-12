import { ProductData } from "@/types/Product"
import { useState, useEffect } from "react"
import { Card, PriceContainer, PriceDiscount } from "./Featured.styles.tsx"
import { ImageWrapper } from "./Featured.styles.tsx";
import { FeaturedSection, ProductsWrapper, CardBody, ProductTitle } from "./Featured.styles.tsx";


export default function Featured() {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data.featured);

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
    </FeaturedSection>
  )
}