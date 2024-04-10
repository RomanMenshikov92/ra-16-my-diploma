import {
  setCartList, setTotalItemsCount, setLoading, setError, setMessage,
} from '../slice/cartSlice';
import { AppDispatch } from '../store';
import { CartProduct, OrderData } from '../../types/types';

const apiOrderUrl: string = process.env.REACT_APP_API_URL_ORDER || '';

export const setCount = (number: number | null) => (dispatch: AppDispatch) => {
  dispatch(setTotalItemsCount(number));
};

export const setCartItems = (obj: CartProduct) => (dispatch: AppDispatch) => {
  dispatch(setCartList(obj));
};

export const sendOrder = (orderData: OrderData) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`${apiOrderUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      dispatch(setMessage('Заказ успешно оформлен!'));
      dispatch(setCartList([]));
    } else {
      throw new Error('Ошибка оформления заказа');
    }
  } catch (error) {
    dispatch(setError((error as Error).message));
  }
  dispatch(setLoading(false));
};
