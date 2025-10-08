import { useState } from 'react';
import { ProductData } from '@/types/Product';
import { TabButton, TabContent, TabList, TabsContainer } from './ProductDescriptionTabs.styles';

import DescriptionTab from './tabs/DescriptionTab';
import AdditionalInfoTab from './tabs/AdditionalInfoTab';
import ReviewsTab from './tabs/ReviewsTab';
import VideoTab from './tabs/VideoTab';
import { ProductDetailTab } from '@/types/Tabs';

export default function ProductDescriptionTabs({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState<ProductDetailTab>(ProductDetailTab.Description);

  return (
    <TabsContainer>
      <TabList>
        <TabButton active={activeTab === ProductDetailTab.Description} onClick={() => setActiveTab(ProductDetailTab.Description)}>
          Description
        </TabButton>
        <TabButton active={activeTab === ProductDetailTab.AdditionalInfo} onClick={() => setActiveTab(ProductDetailTab.AdditionalInfo)}>
          Additional Info
        </TabButton>
        <TabButton active={activeTab === ProductDetailTab.Reviews} onClick={() => setActiveTab(ProductDetailTab.Reviews)}>
          Reviews
        </TabButton>
        <TabButton active={activeTab === ProductDetailTab.Video} onClick={() => setActiveTab(ProductDetailTab.Video)}>
          Video
        </TabButton>
      </TabList>
      <TabContent>
        {activeTab === ProductDetailTab.Description && <DescriptionTab product={product} />}
        {activeTab === ProductDetailTab.AdditionalInfo && <AdditionalInfoTab product={product} />}
        {activeTab === ProductDetailTab.Reviews && <ReviewsTab product={product} />}
        {activeTab === ProductDetailTab.Video && <VideoTab product={product} />}
      </TabContent>
    </TabsContainer>
  );
}