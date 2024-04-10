import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { CartState, RootState, CartProduct } from '../../types/types';

const initialState: CartState = {
  loading: false,
  error: null,
  message: null,
  cart: [],
  totalItemsCount: null,
};

const cartSlice: Slice<CartState> = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setMessage(state, action: PayloadAction<string | null>) {
      state.message = action.payload;
    },
    setCartList(state, action: PayloadAction<CartProduct[]>) {
      state.cart = action.payload;
    },
    setTotalItemsCount(state, action: PayloadAction<number | null>) {
      state.totalItemsCount = action.payload;
    },
  },
});

export const {
  setCartList, setTotalItemsCount, setLoading, setError, setMessage,
} = cartSlice.actions;

export const selectCart = (state: RootState): CartProduct[] => state.cart.cart;
export const selectTotalItems = (state: RootState): number | null => state.cart.totalItemsCount;
export const selectLoading = (state: RootState): boolean => state.cart.loading;
export const selectError = (state: RootState): string | null => state.cart.error;
export const selectMessage = (state: RootState): string | null => state.cart.message;

export default cartSlice.reducer;
