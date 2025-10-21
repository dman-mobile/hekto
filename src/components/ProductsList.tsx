import { Body, SubtitleSmall } from "../styled-components/Typography.styles";
import { StarEmptyIcon, StarIcon } from "../icons/ProductsPageIcons";
import { CartIcon, HeartIcon, ZoomIcon } from "../icons/Icons";
import { ProductsListProps } from "@/types/Product";
import {
  CardActions,
  CardBody,
  CardHeader,
  ImageWrapper,
  PriceContainer,
  PriceDiscount,
  ProductCard,
  ProductsContainer,
  RatingContainer,
} from "./Products.styles";
import { ButtonRound } from "./ui/Button.styles";
import { useAppDispatch } from "@/store/hooks";
import { addCartItem } from "@/store/cart-actions";
import { useNavigate } from "react-router-dom";

export default function ProductsList({ products, view }: ProductsListProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <ProductsContainer view={view}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          view={view}
          onClick={() => handleNavigate(String(product.id))}
        >
          <ImageWrapper view={view}>
            <img src={product.imageUrl} alt={product.title} />
          </ImageWrapper>
          <CardBody view={view}>
            <CardHeader view={view}>
              <SubtitleSmall>{product.title}</SubtitleSmall>
              <RatingContainer view={view}>
                {[...Array(5)].map((_, i) =>
                  i < product.rating ? (
                    <StarIcon key={i} />
                  ) : (
                    <StarEmptyIcon key={i} />
                  )
                )}
              </RatingContainer>
            </CardHeader>
            {!product.sale && (
              <PriceContainer>
                <p>${product.price.toFixed(2)}</p>
              </PriceContainer>
            )}
            {product.sale && (
              <PriceContainer>
                <p>${product.price.toFixed(2)}</p>
                <PriceDiscount>
                  ${(product.price + 15).toFixed(2)}
                </PriceDiscount>
              </PriceContainer>
            )}
            <Body className="description">{product.description}</Body>
            <CardActions>
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
          </CardBody>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
}