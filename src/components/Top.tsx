import { ProductData } from "@/types/Product"
import { useState, useEffect, useRef } from "react"
import { Card, CardBackground, CategoriesWrapper, CategoryWrapper } from "./Top.styles"
import { ImageWrapper } from "./Top.styles";
import { TopSection, CategoryTitle, CarouselTrack } from "./Top.styles";
import { ButtonSmall } from "./ui/Button.styles.tsx";
import { PRODUCTS_PER_PAGE_DESKTOP } from "../constants/constants.ts";
import CarouselDotsSmall from "./ui/carousel/CarouselDotsSmall.tsx";

export default function Top() {
  const [categories, setCategories] = useState<ProductData[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [pages, setPages] = useState<number>(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const GAP = 64;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/categories.json');
        const data = await response.json();
        const topCategories = data.top;
        setCategories(topCategories);
        setPages(Math.ceil(topCategories.length / PRODUCTS_PER_PAGE_DESKTOP));
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (!isDragging) {
      const pageWidth = containerRef.current?.offsetWidth || 0;
      const newTranslate = -activeIndex * (pageWidth + GAP);

      setCurrentTranslate(newTranslate);
      setPrevTranslate(newTranslate);
    }
  }, [activeIndex, isDragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setStartPos(e.clientX);
    setIsDragging(true);
    setPrevTranslate(currentTranslate);
    trackRef.current?.classList.add('grabbing');
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const difference = currentPosition - startPos;
    if (activeIndex === 0 && difference > 0) {
      return;
    }
    if (activeIndex === pages - 1 && difference < 0) {
      return;
    }
    setCurrentTranslate(prevTranslate + difference);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    trackRef.current?.classList.remove('grabbing');

    const movedBy = currentTranslate - prevTranslate;
    const pageWidth = containerRef.current?.offsetWidth || 0;
    const swipeThreshold = pageWidth / 4;

    let newIndex = activeIndex;

    if (movedBy < -swipeThreshold && activeIndex < pages - 1) {
      newIndex = activeIndex + 1;
    } else if (movedBy > swipeThreshold && activeIndex > 0) {
      newIndex = activeIndex - 1;
    } else {
      const totalPageWidth = pageWidth + GAP;
      newIndex = Math.round(Math.abs(currentTranslate) / totalPageWidth);
    }

    setActiveIndex(newIndex);
  };


  return (
    <TopSection>
      <h2>Top categories</h2>
      <CategoriesWrapper ref={containerRef}>
        <CarouselTrack
          ref={trackRef}
          style={{
            transform: `translateX(${currentTranslate}px)`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {categories && categories.map((category, index) =>
            <CategoryWrapper>
              <Card key={index} onDragStart={(e) => e.preventDefault()}>
                <ImageWrapper>
                  <img src={category.imageUrl} alt={category.title} />
                  <ButtonSmall className={'button-details'}>View Details</ButtonSmall>
                  <CardBackground className="card-background" src={'/top-card-bg.png'} alt='card background' />
                </ImageWrapper>
              </Card>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryWrapper>
          )}
        </CarouselTrack>
      </CategoriesWrapper>
      <CarouselDotsSmall
        count={pages}
        activeIndex={activeIndex}
        onDotClick={setActiveIndex}
      />
    </TopSection>
  )
}