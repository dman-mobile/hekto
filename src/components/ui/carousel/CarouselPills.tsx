import { CarouselDotsProps } from "@/types/Banner";
import { CarouselDotPill, CarouselDotsWrapper } from "./Carousel.styles";


export default function CarouselPills({ count, activeIndex, onDotClick }: CarouselDotsProps) {
  const dots = Array.from({ length: count });

  return (
    <CarouselDotsWrapper>
      {dots.map((_, index) => (
        <CarouselDotPill
          key={index}
          $isActive={index === activeIndex}
          onClick={() => onDotClick(index)}
        />
      ))}
    </CarouselDotsWrapper>
  );
}
