import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   getProductsList,
//   getProductsListSuccess,
//   getProductsListFailure,
//   getProductDetails,
//   getProductDetailsSuccess,
//   getProductDetailsFailure,
//   getTopSalesList,
//   getTopSalesListSuccess,
//   getTopSalesListFailure,
// } from '../slice/productsSlice';
// import { RootState } from '../store';
// import { Product } from '../../types/types';

const apiOrderUrl: string = process.env.REACT_APP_API_URL_ORDER || '';

// eslint-disable-next-line import/prefer-default-export
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try { /* empty */ } catch (error) { /* empty */ }
  },
);

// export const selectProducts = (state: RootState): Product[] => state.products.products;
// export const selectProductDetails = (state: RootState): Product | null => state.products.productDetails;
// export const selectTopSales = (state: RootState): Product[] => state.products.topSales;
// export const selectLoading = (state: RootState): boolean => state.products.loading;
// export const selectError = (state: RootState): string | null => state.products.error;
