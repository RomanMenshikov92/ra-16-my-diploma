import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from './Title';
import { AppDispatch } from '../../store/store';
import getStorageItems from '../../store/localStorage/localStorage';
import { sendOrder, setCount } from '../../store/thunk/cartThunk';
import { CartProduct, OrderData } from '../../types/types';
import { TableCart } from './TableCart';
import { selectError, selectLoading, selectMessage } from '../../store/slice/cartSlice';
import { Loader } from './Loader';
import { Error } from './Error';
import { FormOrder } from './FormOrder';

export const CartOrder: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const message = useSelector(selectMessage);
  const miniLocalStorage = getStorageItems();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [storage, setStorage] = useState<CartProduct[]>(miniLocalStorage);

  useEffect(() => {
    setTotalPrice(storage.reduce((prev: number, next: CartProduct) => prev + next.price * next.selectedQuantity, 0));
    const count = storage.length;
    dispatch(setCount(count));
  }, [dispatch, storage]);

  const hanldeDelete = (nanoId: string): void => {
    const newStorage = storage.filter((item: CartProduct) => item.nano !== nanoId);
    localStorage.setItem('items', JSON.stringify(newStorage));
    setStorage(newStorage);
  };
  const handleOrder = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const phone = e.currentTarget.phone.value;
    const address = e.currentTarget.address.value;
    const items = storage.map(({ id, price, selectedQuantity }: CartProduct) => ({
      id,
      price,
      count: selectedQuantity,
    }));
    const orderData: OrderData = {
      owner: { phone, address },
      items,
    };
    dispatch(sendOrder(orderData)).then(() => {
      localStorage.removeItem('items');
      setStorage([]);
    });
  };

  return (
    <>
      {loading && !error && <Loader />}
      {error && !loading && <Error error={error} />}
      {message && !loading && !error && storage && storage.length <= 0 && (
        <p className="my-2 p-5 text-center fs-1 bg-success text-light">{message}</p>
      )}
      {storage && storage.length > 0 ? '' : <p className="p-5 text-center fs-1">Корзина пустая</p>}
      {storage && storage.length > 0 && !loading && !error && (
        <section className="cart">
          <Title classes="my-3 text-center" title="Корзина" />
          <TableCart data={storage} totalPrice={totalPrice} onDelete={hanldeDelete} />
        </section>
      )}
      {storage && storage.length > 0 && !loading && !error && (
        <section className="order">
          <Title classes="my-3 text-center" title="Оформить заказ" />
          <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
            <FormOrder handleOrder={handleOrder} />
          </div>
        </section>
      )}
    </>
  );
};

export default CartOrder;
