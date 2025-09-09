import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress, Container } from '@mui/material';

// Use React.lazy for route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const AppHeader = lazy(() => import('./components/AppHeader'));


function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Suspense fallback={<div />}>
        <AppHeader />
      </Suspense>
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Suspense
          fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Add other routes like product details, checkout, etc. */}
          </Routes>
        </Suspense>
      </Container>
    </Box>
  );
}

const PlaceholderPage = ({ title }: { title: string }) => (
    <Box>
        <h1>{title}</h1>
        <p>This is a placeholder page. Build out the real component in `/pages/{title}.tsx`</p>
    </Box>
);

// pages/HomePage.tsx
const pages = {
    HomePage: () => <PlaceholderPage title="Home Page" />,
    ProductsPage: () => <PlaceholderPage title="Products Page" />,
    CartPage: () => <PlaceholderPage title="Cart Page" />,
    AppHeader: () => (
      <Box component="header" sx={{p: 2, backgroundColor: 'background.paper'}}>
        <h2>E-Commerce Header</h2>
      </Box>
    )
};

export default App;

// Mocked imports for lazy loading
const importPromise = (comp: keyof typeof pages) => Promise.resolve({ default: pages[comp] });
const ProductsPage_ = lazy(() => importPromise('ProductsPage'));
const CartPage_ = lazy(() => importPromise('CartPage'));
const HomePage_ = lazy(() => importPromise('HomePage'));
const AppHeader_ = lazy(() => importPromise('AppHeader'));