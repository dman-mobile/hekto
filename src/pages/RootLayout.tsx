import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import AppHeader from "../components/AppHeader";
import Notification from "@/components/ui/Notification";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchCartData, sendCartData } from '../store/cart-actions';

export default function RootLayout() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const notification = useAppSelector((state) => state.ui.notification);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCartData());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (true && cart.changed) { // true -> toDo: isAuthenticated 
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, isAuthenticated]);

  return (
    <>
      <AppHeader />
      
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}