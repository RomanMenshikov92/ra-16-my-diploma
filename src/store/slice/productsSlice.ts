import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { Product, ProductsState, RootState } from '../../types/types';

const initialState: ProductsState = {
  loading: false,
  error: null,
  searchQuery: '',
  products: [],
  isAllLoaded: false,
  productsTopSales: [],
  productsDetails: null,
};

const productsSlice: Slice<ProductsState> = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsListError(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload;
    },
    setProductsListStart(state) {
      state.loading = true;
      state.error = null;
      state.products = [];
      state.isAllLoaded = false;
    },
    setProductsListEnd(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
      state.isAllLoaded = action.payload.length < 6;
    },
    setProductsListOffset(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.error = null;
      state.products = [...state.products, ...action.payload];
      state.isAllLoaded = action.payload.length < 6;
    },
    setProductsDetailsStart(state) {
      state.loading = true;
      state.error = null;
      state.productsDetails = null;
    },
    setProductsDetailsEnd(state, action: PayloadAction<Product>) {
      state.loading = false;
      state.error = null;
      state.productsDetails = action.payload;
    },
    setProductsTopSalesStart(state) {
      state.loading = true;
      state.error = null;
      state.productsTopSales = [];
    },
    setProductsTopSalesEnd(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.error = null;
      state.productsTopSales = action.payload;
    },
    setProductSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setProductsListError,
  setProductsListStart,
  setProductsListEnd,
  setProductsListOffset,
  setProductsDetailsStart,
  setProductsDetailsEnd,
  setProductsTopSalesStart,
  setProductsTopSalesEnd,
  setProductSearchQuery,
} = productsSlice.actions;

export const selectProductsLoading = (state: RootState): boolean => state.products.loading;
export const selectProductsError = (state: RootState): string | null => state.products.error;
export const selectProducts = (state: RootState): Product[] => state.products.products;
export const selectIsNextProducts = (state: RootState): boolean => state.products.isAllLoaded;
export const selectProductsDetails = (state: RootState): Product | null => state.products.productsDetails;
export const selectProductsTopSales = (state: RootState): Product[] => state.products.productsTopSales;
export const selectSearchQuery = (state: RootState): string => state.products.searchQuery;

export default productsSlice.reducer;
