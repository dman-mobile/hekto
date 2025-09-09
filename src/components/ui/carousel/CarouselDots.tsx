import { CarouselDotsProps } from "@/types/Banner";
import { CarouselDotSquare, CarouselDotsWrapper } from "./Carousel.styles";


export default function CarouselDots({ count, activeIndex, onDotClick }: CarouselDotsProps) {
  const dots = Array.from({ length: count });

  return (
    <CarouselDotsWrapper>
      {dots.map((_, index) => (
        <CarouselDotSquare
          key={index}
          $isActive={index === activeIndex}
          onClick={() => onDotClick(index)}
        />
      ))}
    </CarouselDotsWrapper>
  );
}
