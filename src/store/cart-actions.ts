import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
import { AppDispatch } from "./index";
import { CartState } from "@/types/Cart";
import { ProductData } from "@/types/Product";

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async (): Promise<CartState> => {
      const response = await fetch('https://redux-demo-c94df-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error("Could not fetch cart data.");
      }

      const data = await response.json();
      return data || { items: [], totalQuantity: 0 };
    }

    try {
      const cartData = await fetchData();
      const transformedItems = cartData.items ? Object.values(cartData.items) : [];
      dispatch(cartActions.replaceCart({
        items: transformedItems,
        totalQuantity: cartData.totalQuantity || 0
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!'
      }));
    }
  }
}

export const sendCartData = (cart: CartState) => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      const response = await fetch('https://redux-demo-c94df-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
          changed: cart.changed,
        }),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Cart data saved successfully!'
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Saving cart data failed!'
      }));
    }
  };
};

export const addCartItem = (product: ProductData) => {
  return (dispatch: AppDispatch) => {
    dispatch(uiActions.showNotification({ status: 'pending', title: 'Updating...', message: 'Adding item to cart.' }));
    dispatch(cartActions.addItemToCart(product));
  };
};

export const removeCartItem = (id: string | number) => {
  return (dispatch: AppDispatch) => {
    dispatch(uiActions.showNotification({ status: 'pending', title: 'Updating...', message: 'Removing item from cart.' }));
    dispatch(cartActions.removeItemFromCart(id));
  };
};

export const clearCart = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(uiActions.showNotification({ status: 'pending', title: 'Clearing...', message: 'Clearing your cart.' }));

    dispatch(cartActions.clearCart());

    const sendRequest = async () => {
      const response = await fetch('https://redux-demo-c94df-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: [],
          totalQuantity: 0,
          changed: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Clearing cart data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({ status: 'success', title: 'Success!', message: 'Cart cleared successfully!' }));
    } catch (error) {
      dispatch(uiActions.showNotification({ status: 'error', title: 'Error!', message: 'Could not clear cart!' }));
    }
  };
};