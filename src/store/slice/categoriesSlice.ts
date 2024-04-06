import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { Category, CategoriesState, RootState } from '../../types/types';

const initialState: CategoriesState = {
  loading: false,
  error: null,
  categories: [{ id: 0, title: 'Все' }],
  selectedCategory: '0',
};

const categoriesSlice: Slice<CategoriesState> = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesError(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload;
    },
    setCategoriesListStart(state) {
      state.loading = true;
      state.error = null;
      state.categories = [];
      state.selectedCategory = '0';
    },
    setCategoriesListEnd(state, action: PayloadAction<Category[]>) {
      state.loading = false;
      state.error = null;
      state.categories = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  setCategoriesError,
  setCategoriesListStart,
  setCategoriesListEnd,
  setSelectedCategory,
} = categoriesSlice.actions;

export const selectCategoriesLoading = (state: RootState): boolean => state.categories.loading;
export const selectCategoriesError = (state: RootState): string | null => state.categories.error;
export const selectCategories = (state: RootState): Category[] => state.categories.categories;
export const selectSelectedCategory = (state: RootState): string => state.categories.selectedCategory;

export default categoriesSlice.reducer;
