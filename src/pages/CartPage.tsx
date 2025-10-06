import { CartContainer, EmptyCartImage } from "@/components/Cart/Cart.styles";
import { ButtonBig } from "@/components/ui/Button.styles";
import { useAppSelector } from "@/store/hooks";
import { Section } from "@/styled-components/Section.styles";

export default function CartPage() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <Section>
      <CartContainer>
        {totalQuantity === 0 ? (
          <>
            <EmptyCartImage>
              <img src="/cart-empty-icon.jpg" alt="empty cart icon" />
            </EmptyCartImage>
            <h3>Your Cart Is Empty</h3>
            <a href="/products">
              <ButtonBig>Start Shopping</ButtonBig>
            </a>
          </>
        ) : (
          // <CartItemsList />
          <>
          </>
        )}
      </CartContainer>
    </Section>
  );
}