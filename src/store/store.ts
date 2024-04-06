import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productsSlice';
import categoriesReducer from './slice/categoriesSlice';
// import cartReducer from './slice/cartReducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    // cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
