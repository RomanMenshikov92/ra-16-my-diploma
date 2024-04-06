import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setCategoriesError,
  setCategoriesListStart,
  setCategoriesListEnd,
  setSelectedCategory,
} from '../slice/categoriesSlice';
import { AppDispatch } from '../store';
import { Category } from '../../types/types';

const apiCatarogiesUrl: string = process.env.REACT_APP_API_URL_CATEGORIES || '';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, { dispatch }) => {
  try {
    const response = await fetch(`${apiCatarogiesUrl}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: Category[] = await response.json();
    if (response.status === 200) {
      const allCategories = [{ id: 0, title: 'Все' }, ...data];
      dispatch(setCategoriesListStart({}));
      dispatch(setCategoriesListEnd(allCategories));
    } else {
      dispatch(setCategoriesError(response.statusText));
    }
  } catch (error) {
    dispatch(setCategoriesError((error as Error).message));
  }
});

export const setCategories = (str: string) => (dispatch: AppDispatch) => {
  dispatch(setSelectedCategory(String(str)));
};
