import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { Product, CartState, RootState } from '../../types/types';

const initialState: CartState = {
  loading: false,
  error: null,
  data: [],
  totalItems: 0,
};

const cartSlice: Slice<CartState> = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getDataLoading(state) {
      state.loading = false;
      state.error = null;
    },
    getDataError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getDataList(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    getDataListSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = true;
      state.error = null;
      state.data = action.payload;
    },
    getTotalItems(state, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
  },
});

export const {
  getDataLoading, getDataError, getDataList, getDataListSuccess,
} = cartSlice.actions;

export const selectLoading = (state: RootState): boolean => state.cart.loading;
export const selectError = (state: RootState): string | null => state.cart.error;
export const selectData = (state: RootState): Product[] => state.cart.data;
export const selectTotalItems = (state: RootState): number | null => state.cart.totalItems;

export default cartSlice.reducer;
