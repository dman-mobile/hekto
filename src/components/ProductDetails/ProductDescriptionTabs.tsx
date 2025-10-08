import { useState } from 'react';
import { ProductData } from '@/types/Product';
import { TabButton, TabContent, TabList, TabsContainer } from './ProductDescriptionTabs.styles';

import DescriptionTab from './tabs/DescriptionTab';
import AdditionalInfoTab from './tabs/AdditionalInfoTab';
import ReviewsTab from './tabs/ReviewsTab';
import VideoTab from './tabs/VideoTab';

export default function ProductDescriptionTabs({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <TabsContainer>
      <TabList>
        <TabButton active={activeTab === 'description'} onClick={() => setActiveTab('description')}>
          Description
        </TabButton>
        <TabButton active={activeTab === 'additionalInfo'} onClick={() => setActiveTab('additionalInfo')}>
          Additional Info
        </TabButton>
        <TabButton active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>
          Reviews
        </TabButton>
        <TabButton active={activeTab === 'video'} onClick={() => setActiveTab('video')}>
          Video
        </TabButton>
      </TabList>
      <TabContent>
        {activeTab === 'description' && <DescriptionTab product={product} />}
        {activeTab === 'additionalInfo' && <AdditionalInfoTab product={product} />}
        {activeTab === 'reviews' && <ReviewsTab product={product} />}
        {activeTab === 'video' && <VideoTab product={product} />}
      </TabContent>
    </TabsContainer>
  );
}