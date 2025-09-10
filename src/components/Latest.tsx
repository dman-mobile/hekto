import { useEffect, useState } from "react";
import { CartIcon, HeartIcon, ZoomIcon } from "../icons/Icons"
import { FlexBetween, FlexCenter } from "../styled-components/Flex.styles"
import { Card, CardActions, Grid, Image, ImageContainer, LatestSection, Tab, TabsBar } from "./Latest.styles"
import { ButtonRound } from "./ui/Button.styles"

export default function Latest() {
    const [products, setProducts] = useState<ProductsData[]>([]);
  
    useEffect(() => {
      const getBanners = async () => {
        try {
          const response = await fetch('/data/banners.json');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Failed to fetch banners:", error);
        }
      };
      getBanners();
    }, []);
  return (
    <LatestSection>
      <h2>Latest Products</h2>
      <TabsBar>
        <Tab>New Arrivals</Tab>
        <Tab>Best Seller</Tab>
        <Tab>Featured</Tab>
        <Tab>Special Offer</Tab>
      </TabsBar>
      <Grid>
        {products && products.map((product, index) =>         <Card>
          <ImageContainer>
            <Image src="public/products/62c35caa8f68afb55bf81cb68d00918de12b26c3.png" alt="" />
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
            <p>Game console</p>
            <FlexCenter sx={{ gap: 1.6 }}>
              <p>$76</p>
              <p style={{ color: 'var(--color-primary)' }}>$89</p>
            </FlexCenter>
          </FlexBetween>
        </Card>)}
      </Grid>
    </LatestSection >
  )
}