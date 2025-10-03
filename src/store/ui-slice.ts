import { UIState, Notification } from '@/types/UI';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UIState = { 
  cartIsVisible: false, 
  notification: null 
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action: PayloadAction<Notification>) {
      state.notification = { 
        status: action.payload.status, 
        title: action.payload.title, 
        message: action.payload.message 
      };
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;