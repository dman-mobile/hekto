import { Key } from "react";

export interface CartItem {
  id: Key | number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  changed: boolean;
}

export interface ConfirmationModalProps {
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  confirmColor?: string;
}
