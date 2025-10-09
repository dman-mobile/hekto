import { useState } from 'react';
import { useAppDispatch } from "@/store/hooks";
import { addCartItem, removeCartItem } from "@/store/cart-actions";
import { CartItem as CartItemType } from "@/types/Cart";
import { ProductData } from "@/types/Product";
import ConfirmationModal from "./ConfirmationModal";
import { CartItemCard, ItemDetails, ItemActions } from "./Cart.styles";

export default function CartItem({ item }: { item: CartItemType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    if (item.quantity === 1) {
      setIsModalOpen(true);
    } else {
      dispatch(removeCartItem(Number(item.id)));
    }
  };

  const handleConfirmRemove = () => {
    dispatch(removeCartItem(Number(item.id)));
    setIsModalOpen(false);
  };

  const handleAddItem = () => {
    const productToAdd: ProductData = {
      id: item.id,
      title: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      code: '', brand: '', category: '', description: '', rating: 5, features: [], additionalInfo: '', longDescription: { body: '', title: '' },
    };
    dispatch(addCartItem(productToAdd));
  };

  return (
    <>
      {isModalOpen && (
        <ConfirmationModal
          title="Remove Item?"
          message={`Are you sure you want to remove ${item.name} from your cart?`}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmRemove}
        />
      )}

      <CartItemCard>
        <img src={item.imageUrl} alt={item.name} />
        <ItemDetails>
          <h4>{item.name}</h4>
          <p>Price: ${item.price.toFixed(2)}</p>
        </ItemDetails>
        <ItemActions>
          <button onClick={handleRemoveItem}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleAddItem}>+</button>
        </ItemActions>
        <p className="item-total">${item.totalPrice.toFixed(2)}</p>
      </CartItemCard>
    </>
  );
}