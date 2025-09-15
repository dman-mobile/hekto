import { ProductData } from "@/types/Product"
import { useState, useEffect, useRef } from "react"
import { Card, CardActions, Price, PriceContainer, PriceDiscount, ProductCode } from "./Featured.styles.tsx"
import { ImageWrapper } from "./Featured.styles.tsx";
import { FeaturedSection, ProductsWrapper, CardBody, ProductTitle, CarouselTrack } from "./Featured.styles.tsx";
import { ButtonRound, ButtonSmall } from "./ui/Button.styles.tsx";
import { CartIcon, HeartIcon, ZoomIcon } from "../icons/Icons.tsx";
import { PRODUCTS_PER_PAGE_DESKTOP } from "../constants/constants.ts";
import CarouselPills from "./ui/carousel/CarouselPills.tsx";

export default function Featured() {
  const [products, setProducts] = useState<ProductData[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [pages, setPages] = useState<number>(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const GAP = 32;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        const featuredProducts = data.featured;
        setProducts(featuredProducts);
        setPages(Math.ceil(featuredProducts.length / PRODUCTS_PER_PAGE_DESKTOP));
      } catch (error) {
        console.error("Failed to fetch products:", error);
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
    <FeaturedSection>
      <h2>Featured Products</h2>
      <ProductsWrapper ref={containerRef}>
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
          {products && products.map((product, index) =>
            <Card key={index} onDragStart={(e) => e.preventDefault()}>
              <ImageWrapper>
                <img src={product.imageUrl} alt={product.title} />
                <ButtonSmall className={'button-details'}>View Details</ButtonSmall>
                <CardActions>
                  <ButtonRound> <CartIcon /> </ButtonRound>
                  <ButtonRound> <HeartIcon /> </ButtonRound>
                  <ButtonRound> <ZoomIcon /> </ButtonRound>
                </CardActions>
              </ImageWrapper>
              <CardBody>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductCode>Code - {product.code}</ProductCode>
                {!product.sale && <Price>${product.price.toFixed(2)}</Price>}
                {product.sale &&
                  <PriceContainer>
                    <p>${product.price.toFixed(2)}</p>
                    <PriceDiscount>${(product.price + 15).toFixed(2)}</PriceDiscount>
                  </PriceContainer>
                }
              </CardBody>
            </Card>)}
        </CarouselTrack>
      </ProductsWrapper>
      <CarouselPills
        count={pages}
        activeIndex={activeIndex}
        onDotClick={setActiveIndex}
      />
    </FeaturedSection>
  )
}