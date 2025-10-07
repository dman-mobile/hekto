import { useState } from "react";
import { CartContainer, CartWrapper, EmptyCartImage, Price, Shipping, Subtotal, Total, TotalContainer, TotalWrapper } from "@/components/Cart/Cart.styles";
import CartItemsList from "@/components/Cart/CartItemList";
import ClearCartModal from "@/components/Cart/ClearCartModal";
import { ButtonBig, ButtonText } from "@/components/ui/Button.styles";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/cart-actions";

export default function CartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const subtotal = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
  const shipping = 100;
  const total = subtotal + shipping;

  const handleConfirmClear = () => {
    dispatch(clearCart());
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ClearCartModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmClear}
        />
      )}

      <CartWrapper>
        <CartContainer>
          {cart.totalQuantity === 0 ? (
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
            <CartItemsList />
          )}
        </CartContainer>

        {cart.totalQuantity > 0 && (
          <TotalWrapper>
            <TotalContainer>
              <Subtotal>
                <p>Subtotal:</p>
                <Price>${subtotal.toFixed(2)}</Price>
              </Subtotal>
              <Total>
                <p>Total:</p>
                <Price>${total.toFixed(2)}</Price>
              </Total>
              <Shipping>
                <p>Shipping:</p>
                <p>${shipping.toFixed(2)}</p>
              </Shipping>
              <ButtonBig>Proceed to checkout</ButtonBig>
            </TotalContainer>
            <ButtonText onClick={() => setIsModalOpen(true)}>Clear Cart</ButtonText>
          </TotalWrapper>
        )}
      </CartWrapper>
    </>
  );
}