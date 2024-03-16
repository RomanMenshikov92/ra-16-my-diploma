import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { BasketPage } from './pages/BasketPage';
import { CatalogPage } from './pages/CatalogPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/ra-16-my-diploma" element={<Layout />}>
        <Route index path="/ra-16-my-diploma" element={<MainPage />} />
        <Route path="/ra-16-my-diploma/catalog" element={<CatalogPage />}>
          <Route path="/ra-16-my-diploma/catalog/:id" element={<ProductPage />} />
        </Route>
        <Route path="/ra-16-my-diploma/about" element={<AboutPage />} />
        <Route path="/ra-16-my-diploma/contact" element={<ContactPage />} />
        <Route path="/ra-16-my-diploma/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
