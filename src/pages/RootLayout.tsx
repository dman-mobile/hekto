import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}