import { useEffect, useState } from "react";
import { CartIcon, HeartIcon, ZoomIcon } from "../icons/Icons";
import { FlexBetween } from "../styled-components/Flex.styles";
import { Card, CardActions, Grid, Image, ImageContainer, LatestSection, PriceContainer, PriceDiscount, SaleTag, Tab, TabsBar, Title } from "./Latest.styles";
import { ButtonRound } from "./ui/Button.styles";
import { ProductData, ProductCategory } from "@/types/Product";
import { ITab } from "../types/Tabs";
import SkeletonCard from "./LatestSkeletonCard";
import { FETCH_DELAY } from "@/constants/constants";

const tabs: ITab<ProductCategory>[] = [
  { label: 'New Arrivals', category: 'new' },
  { label: 'Best Seller', category: 'best' },
  { label: 'Featured', category: 'featured' },
  { label: 'Special Offer', category: 'offer' },
]

export default function Latest() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [activeTab, setActiveTab] = useState<ProductCategory>('new');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const getProducts = async () => {
      setLoading(true);
      try {
        const [response] = await Promise.all([
          fetch('/data/products.json'),
          delay(FETCH_DELAY)
        ]);

        const data = await response.json();
        setProducts(data[activeTab]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [activeTab]);

  return (
    <LatestSection>
      <h2>Latest Products</h2>
      <TabsBar>
        {tabs.map((tab) => (
          <Tab
            key={tab.category}
            isActive={activeTab === tab.category}
            onClick={() => setActiveTab(tab.category)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsBar>
      <Grid>
        {loading &&
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        }
        {products && products.slice(0, 6).map((product) => (
          <Card key={product.id}>
            <ImageContainer>
              <Image src={product.imageUrl} alt={product.title} />
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
            </ImageContainer>
            <FlexBetween>
              <Title>{product.title}</Title>
              {!product.sale && <p>${product.price.toFixed(2)}</p>}
              {product.sale &&
                <PriceContainer>
                  <p>${product.price.toFixed(2)}</p>
                  <PriceDiscount>
                    ${(product.price + 15).toFixed(2)}
                  </PriceDiscount>
                </PriceContainer>
              }
            </FlexBetween>
            {product.sale ?
              <SaleTag /> : null}
          </Card>
        ))}
      </Grid>
    </LatestSection>
  );
}