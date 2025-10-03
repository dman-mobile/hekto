import { CartItem, CartState } from "@/types/Cart";
import { ProductData } from "@/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Key } from "react";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action: PayloadAction<{ items: CartItem[], totalQuantity: number }>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.changed = false;
    },

    addItemToCart(state, action: PayloadAction<ProductData>) {
      const newProduct = action.payload;
      const existingItem = state.items.find(item => item.id === newProduct.id);

      const finalPrice = newProduct.sale && newProduct.sale.discount > 0
        ? newProduct.price * (1 - newProduct.sale.discount)
        : newProduct.price;

      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newProduct.id,
          name: newProduct.title,
          imageUrl: newProduct.imageUrl,
          price: finalPrice,
          quantity: 1,
          totalPrice: finalPrice,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += finalPrice;
      }
    },

    removeItemFromCart(state, action: PayloadAction<Key | number>) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;