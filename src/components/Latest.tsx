import { FlexBetween, FlexCenter } from "../styled-components/Flex.styles"
import { Card, CardActions, Grid, Image, LatestSection, Tab, TabsBar } from "./Latest.styles"

export default function Latest() {
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
        <Card>
          <Image src="/products/3f220e65a430d1cc5860cfb6c63ddda895c334df.png" alt="" />
          <FlexBetween>
            <p>Game console</p>
            <FlexCenter sx={{ gap: 1.6 }}>
              <p>$76</p>
              <p style={{ color: 'var(--color-primary)' }}>$89</p>
            </FlexCenter>
          </FlexBetween>
        </Card>
        <Card>
          <Image src="public/products/62c35caa8f68afb55bf81cb68d00918de12b26c3.png" alt="" />
          <FlexBetween>
            <p>Game console</p>
            <FlexCenter sx={{ gap: 1.6 }}>
              <p>$76</p>
              <p style={{ color: 'var(--color-primary)' }}>$89</p>
            </FlexCenter>
          </FlexBetween>
          <CardActions>
            
          </CardActions>
        </Card>
        <Card>
          <Image src="public/products/74fafe731bdbc5f70cdc99093d3c1c112be955f9.png" alt="" />
          <FlexBetween>
            <p>Game console</p>
            <FlexCenter sx={{ gap: 1.6 }}>
              <p>$76</p>
              <p style={{ color: 'var(--color-primary)' }}>$89</p>
            </FlexCenter>
          </FlexBetween>
        </Card>
      </Grid>
    </LatestSection >
  )
}