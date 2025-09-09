export interface BannerData {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  discount: string;
}

export interface CarouselDotsProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}