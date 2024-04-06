import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setProductsListError,
  setProductsListStart,
  setProductsListEnd,
  setProductsListOffset,
  setProductsDetailsStart,
  setProductsDetailsEnd,
  setProductsTopSalesStart,
  setProductsTopSalesEnd,
  setProductSearchQuery,
} from '../slice/productsSlice';
import { AppDispatch, RootState } from '../store';
import { FetchProductDetailsArgs, FetchProductsArgs, Product } from '../../types/types';

const apiItemsUrl: string = process.env.REACT_APP_API_URL_ITEMS || '';
const apiTopSalesUrl: string = process.env.REACT_APP_API_URL_TOPSALES || '';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (
    { offset, query, category }: FetchProductsArgs,
    { dispatch },
  ) => {
    try {
      const queryParam = query ? `q=${query}` : '';
      const categoryParam = category ? `&categoryId=${category}` : '';
      const offsetParam = offset ? `&offset=${offset}` : '';
      const path = `${apiItemsUrl}?${queryParam}${categoryParam}${offsetParam}`;
      const response = await fetch(path);
      console.log(response.url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data: Product[] = await response.json();
      if (response.status === 200) {
        if (offset === 0) {
          dispatch(setProductsListStart({}));
          dispatch(setProductsListEnd(data));
        } else {
          dispatch(setProductsListOffset(data));
        }
      } else {
        dispatch(setProductsListError(response.statusText));
      }
    } catch (error) {
      dispatch(setProductsListError((error as Error).message));
    }
  },
);

export const fetchProductsDetails = createAsyncThunk(
  'productDetails/fetchProductsDetails',
  // eslint-disable-next-line max-len
  async (
    { id, offset, category }: FetchProductDetailsArgs,
    { dispatch },
  ) => {
    try {
      dispatch(setProductsDetailsStart({}));
      const path = `${apiItemsUrl}${id ? `/${id}` : ''}${category ? `?categoryId=${category}` : ''}${offset ? `${category ? '&' : '?'}offset=${offset}` : ''}`;
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data: Product = await response.json();
      if (response.status === 200) {
        dispatch(setProductsDetailsEnd(data));
      } else {
        dispatch(setProductsListError(response.statusText));
      }
    } catch (error) {
      dispatch(setProductsListError((error as Error).message));
    }
  },
);

export const fetchTopSales = createAsyncThunk('productsTopSales/fetchTopSales', async (_, { dispatch }) => {
  try {
    dispatch(setProductsTopSalesStart({}));
    const response = await fetch(`${apiTopSalesUrl}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: Product[] = await response.json();
    if (response.status === 200) {
      dispatch(setProductsTopSalesEnd(data));
    } else {
      dispatch(setProductsListError(response.statusText));
    }
  } catch (error) {
    dispatch(setProductsListError((error as Error).message));
  }
});

export const setQuery = (str: string) => (dispatch: AppDispatch) => {
  dispatch(setProductSearchQuery(str));
};

export const selectLoading = (state: RootState): boolean => state.products.loading;
export const selectError = (state: RootState): string | null => state.products.error;
export const selectProducts = (state: RootState): Product[] => state.products.products;
export const selectIsNextProducts = (state: RootState): boolean => state.products.isAllLoaded;
export const selectProductsDetails = (state: RootState): Product | null => state.products.productsDetails;
export const selectProductsTopSales = (state: RootState): Product[] => state.products.productsTopSales;
export const selectSearchQuery = (state: RootState): string => state.products.searchQuery;
