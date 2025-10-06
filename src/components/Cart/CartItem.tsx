import { useAppDispatch } from "@/store/hooks";
import { addCartItem, removeCartItem } from "@/store/cart-actions";
import { CartItem as CartItemType } from "@/types/Cart";
import { CartItemCard, ItemDetails, ItemActions } from "./Cart.styles";
import { ProductData } from "@/types/Product";

export default function CartItem({ item }: { item: CartItemType }) {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartItem(Number(item.id)));
  };

  const handleAddItem = () => {
    const productToAdd: ProductData = {
      id: item.id,
      title: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      code: '',
      brand: '',
      category: '',
      description: '',
      rating: 5,
      features: [],
      additionalInfo: '',
      longDescription: { body: '', title: '' },
    };
    dispatch(addCartItem(productToAdd));
  };

  return (
    <CartItemCard>
      <img src={item.imageUrl} alt={item.name} />
      <ItemDetails>
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
      </ItemDetails>
      <ItemActions>
        <button onClick={handleRemoveItem}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleAddItem}>+</button>
      </ItemActions>
      <p className="item-total">${item.totalPrice.toFixed(2)}</p>
    </CartItemCard>
  );
}