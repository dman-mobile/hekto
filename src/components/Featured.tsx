import { ProductData } from "@/types/Product";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  Price,
  PriceContainer,
  PriceDiscount,
  ProductCode,
  SkeletonCard,
} from "./Featured.styles.tsx";
import { ImageWrapper } from "./Featured.styles.tsx";
import {
  FeaturedSection,
  ProductsWrapper,
  CardBody,
  ProductTitle,
  CarouselTrack,
} from "./Featured.styles.tsx";
import { ButtonRound, ButtonSmall } from "./ui/Button.styles.tsx";
import { CartIcon, HeartIcon, ZoomIcon } from "../icons/Icons.tsx";
import {
  FETCH_DELAY,
  PRODUCTS_PER_PAGE_DESKTOP,
} from "../constants/constants.ts";
import CarouselPills from "./ui/carousel/CarouselPills.tsx";
import { useAppDispatch } from "@/store/hooks.ts";
import { addCartItem } from "@/store/cart-actions.ts";

export default function Featured() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);
  const [pages, setPages] = useState<number>(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const hasDragged = useRef(false);

  const GAP = 32;

  useEffect(() => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const getProducts = async () => {
      try {
        const [response] = await Promise.all([
          fetch("/data/products.json"),
          delay(FETCH_DELAY),
        ]);

        const data = await response.json();
        const featuredProducts = data.featured;
        setProducts(featuredProducts);
        setPages(
          Math.ceil(featuredProducts.length / PRODUCTS_PER_PAGE_DESKTOP)
        );
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
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
    trackRef.current?.classList.add("grabbing");

    hasDragged.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentPosition = e.clientX;
    const difference = currentPosition - startPos;

    if (Math.abs(difference) > 10) {
      hasDragged.current = true;
    }

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
    trackRef.current?.classList.remove("grabbing");

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

  const handleCardClick = (id: string) => {
    if (hasDragged.current) {
      return;
    }
    navigate(`/products/${id}`);
  };

  return (
    <FeaturedSection>
      <h2>Featured Products</h2>
      <ProductsWrapper ref={containerRef}>
        <CarouselTrack
          ref={trackRef}
          style={{
            transform: `translateX(${currentTranslate}px)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {loading && (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}
          {products &&
            !loading &&
            products.map((product) => (
              <Card
                onClick={() => handleCardClick(String(product.id))}
                key={product.id}
                onDragStart={(e) => e.preventDefault()}
              >
                <ImageWrapper>
                  <img src={product.imageUrl} alt={product.title} />
                  <ButtonSmall className={"button-details"}>
                    View Details
                  </ButtonSmall>
                  <CardActions>
                    {/* 8. Stop propagation on inner buttons */}
                    <ButtonRound
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addCartItem(product));
                      }}
                    >
                      <CartIcon />
                    </ButtonRound>
                    <ButtonRound onClick={(e) => e.stopPropagation()}>
                      <HeartIcon />
                    </ButtonRound>
                    <ButtonRound onClick={(e) => e.stopPropagation()}>
                      <ZoomIcon />
                    </ButtonRound>
                  </CardActions>
                </ImageWrapper>
                <CardBody>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductCode>Code - {product.code}</ProductCode>
                  {!product.sale && (
                    <Price>${product.price.toFixed(2)}</Price>
                  )}
                  {product.sale && (
                    <PriceContainer>
                      <p>${product.price.toFixed(2)}</p>
                      <PriceDiscount>
                        ${(product.price + 15).toFixed(2)}
                      </PriceDiscount>
                    </PriceContainer>
                  )}
                </CardBody>
              </Card>
            ))}
        </CarouselTrack>
      </ProductsWrapper>
      <CarouselPills
        count={pages}
        activeIndex={activeIndex}
        onDotClick={setActiveIndex}
      />
    </FeaturedSection>
  );
}