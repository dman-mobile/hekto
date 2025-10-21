import { useAppSelector } from "@/store/hooks";
import CartItem from "./CartItem";
import { CartList } from "./Cart.styles";

export default function CartItemsList() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <>
      <CartList>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartList>
    </>
  );
}