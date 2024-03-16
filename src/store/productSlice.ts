import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { Product, ProductsState, RootState } from '../types/types';

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
  // productDetails: null,
};

const productsSlice: Slice<ProductsState> = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // start list products
    getProductsStart(state) {
      state.loading = true;
      state.error = null;
      state.products = [];
    },
    // success list products
    getProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    // failure list products
    getProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } = productsSlice.actions;

export const selectLoading = (state: RootState): boolean => state.products.loading;
export const selectError = (state: RootState): string | null => state.products.error;
export const selectMovies = (state: RootState): Product[] => state.products.products;

export default productsSlice.reducer;
