import { useEffect, useState } from "react";
import { CartIcon, HeartIcon, ZoomIcon } from "../icons/Icons";
import { FlexBetween, FlexCenter } from "../styled-components/Flex.styles";
import { Card, CardActions, Grid, Image, ImageContainer, LatestSection, SaleTag, Tab, TabsBar } from "./Latest.styles";
import { ButtonRound } from "./ui/Button.styles";
import { ProductData, ProductCategory } from "@/types/Product";

const tabs: { label: string; category: ProductCategory }[] = [
  { label: 'New Arrivals', category: 'new' },
  { label: 'Best Seller', category: 'best' },
  { label: 'Featured', category: 'featured' },
  { label: 'Special Offer', category: 'offer' },
];

export default function Latest() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [activeTab, setActiveTab] = useState<ProductCategory>('new');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data[activeTab]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
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
        {products && products.slice(0,6).map((product) => (
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
              <p style={{ textTransform: 'capitalize' }}>{product.title}</p>
              <FlexCenter sx={{ gap: 1.6 }}>
                <p>${product.price.toFixed(2)}</p>
                <p style={{ color: 'var(--color-primary)', textDecoration: 'line-through' }}>
                  ${(product.price + 15).toFixed(2)}
                </p>
              </FlexCenter>
            </FlexBetween>
            {product.sale ? 
            <SaleTag /> : null}
          </Card>
        ))}
      </Grid>
    </LatestSection>
  );
}