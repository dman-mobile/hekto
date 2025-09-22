import { useEffect, useState } from "react";
import { Body, Title } from "../styled-components/Typography.styles";
import { Banner, BannerContent, BannerWrapper, CarouselSlide, CarouselTrack, DiscountTag, HeroSection, ImageContainer, LampImage, Subtitle } from "./Hero.styles";
import { ButtonBig } from "../components/ui/Button.styles";
import CarouselDots from "../components/ui/carousel/CarouselDots";
import { BannerData } from "@/types/Banner";
import { BANNER_CYCLE_TIME } from "../constants/constants";

export default function Hero() {
  const [banners, setBanners] = useState<BannerData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const response = await fetch('/data/banners.json');
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      }
    };
    getBanners();
  }, []);

  useEffect(() => {
    if (isStopped || banners.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      handleStopAnimation();
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, BANNER_CYCLE_TIME);

    return () => clearInterval(timer);
  }, [banners.length, isStopped]);

  const handleStopAnimation = () => {
    setIsStopped(true);
  };

  if (banners.length === 0) {
    return null;
  }

  return (
    <HeroSection>
      <BannerWrapper>
        <LampImage src="/hero-lamp.png" alt="lamp" />
        <CarouselTrack style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {banners.map((banner) => (
            <CarouselSlide key={banner.id}>
              <Banner>
                <BannerContent>
                  <Subtitle>{banner.subtitle}</Subtitle>
                  <Title>{banner.title}</Title>
                  <Body>{banner.body}</Body>
                  <ButtonBig >Shop now</ButtonBig>
                </BannerContent>
                <ImageContainer>
                  <img style={{ width: '100%' }} src={banner.image} alt={banner.title} />
                  <DiscountTag>
                    <h3>{banner.discount}</h3>
                  </DiscountTag>
                </ImageContainer>
              </Banner>
            </CarouselSlide>
          ))}
        </CarouselTrack>
        <CarouselDots
          count={banners.length}
          activeIndex={activeIndex}
          onDotClick={setActiveIndex}
        />
      </BannerWrapper>
    </HeroSection>
  );
}

