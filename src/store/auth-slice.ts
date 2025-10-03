import { AuthState } from '@/types/Auth';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
  isAuthenticated: true, // toDo: implementar isAuthenticated
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;