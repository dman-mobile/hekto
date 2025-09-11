import { useEffect, useState } from "react";
import { ProductData, ProductCategory } from "@/types/Product";
import { ITab } from "../types/Tabs";
import { DiscountInfo, DiscountSection, ImageWrapper, Subtitle, ProductBackground, ProductImage, ProductWrapper, Title, FeatureList } from "./Discount.styles";
import { Tab, TabsBar } from "./Tab.styles";
import { Body, BodyLarge } from "../styled-components/Typography.styles";
import { ButtonBig } from "./ui/Button.styles";
import { TickIcon } from "../icons/Icons";

const tabs: ITab<ProductCategory>[] = [
  { label: 'Headphones', category: 'headphones' },
  { label: 'Laptop', category: 'laptop' },
  { label: 'Other', category: 'other' },
]

export default function Discount() {
  const [product, setProduct] = useState<ProductData>();
  const [activeTab, setActiveTab] = useState<ProductCategory>('headphones');

  const getProducts = async () => {
    try {
      const response = await fetch('/data/products.json');
      const data = await response.json();
      setProduct(data[activeTab][0]);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [activeTab]);

  return (
    <DiscountSection>
      <h2>Discount Item</h2>
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
      {product &&
        <ProductWrapper>
          <DiscountInfo>
            <Title>
              20% Discount Of All Products
            </Title>
            <Subtitle>
              {product.title}
            </Subtitle>
            <BodyLarge>
              {product.description}
            </BodyLarge>
            <FeatureList>
              {product && product.features.map((feature: string, index) => <li key={index}><TickIcon /><Body>{feature}</Body></li>)}
            </FeatureList>
            <ButtonBig>
              Shop now
            </ButtonBig>
          </DiscountInfo>
          <ImageWrapper>
            <ProductBackground>
              <img src="/shapes/discount-ellipse-2.png" alt="ellipse 2" />
              <img src="/shapes/discount-ellipse-1.png" alt="ellipse 1" />
            </ProductBackground>
            <ProductImage>
              <img src="/products/46708a9cc75ccfc98ecbd55aae3c150a4cc681fe.png" alt="headphones" />
            </ProductImage>
          </ImageWrapper>
        </ProductWrapper>
      }
    </DiscountSection>
  );
}