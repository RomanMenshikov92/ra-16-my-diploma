import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { selectProductsDetails, selectProductsLoading, selectProductsError } from '../../store/slice/productsSlice';
import { Loader } from './Loader';
import { Error } from './Error';
import { Image } from './Image';
import { Table } from './Table';
import { Size } from './Size';
import { Quantity } from './Quantity';
import { AppDispatch } from '../../store/store';
import { fetchProductsDetails } from '../../store/thunk/productsThunk';
import { ButtonCart } from './ButtonCart';
import { Title } from './Title';
import getStorageItems from '../../store/localStorage/localStorage';
import { CartProduct } from '../../types/types';

export function Product(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const productDetails = useSelector(selectProductsDetails);
  const loadingDetails = useSelector(selectProductsLoading);
  const errorDetails = useSelector(selectProductsError);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const storage: CartProduct[] = getStorageItems();

  useEffect(() => {
    if (id) {
      if (!productDetails && !loadingDetails && !errorDetails) {
        dispatch(fetchProductsDetails({ id, offset: '', category: '' }));
      }
    }
  }, [dispatch, errorDetails, id, loadingDetails, productDetails]);

  const handleSizeSelect = (size: string): void => {
    setSelectedSize(size);
    setIsButtonDisabled(!size);
  };

  const handleQuantityChange = (newQuantity: number): void => {
    setSelectedQuantity(newQuantity);
    setIsButtonDisabled(!newQuantity);
  };

  const handleClickToCart = (productId: number, title: string, price: number): void => {
    const idx = storage.findIndex((item: CartProduct) => item.id === Number(productId));
    const newCartItem: CartProduct = {
      id: productId,
      nano: nanoid(),
      title,
      selectedQuantity,
      selectedSize,
      price,
    };
    if (idx > -1) {
      const item = storage[idx];
      if (item.selectedSize === selectedSize) {
        storage[idx].selectedQuantity += selectedQuantity;
      } else {
        storage.push({ ...newCartItem });
      }
    } else {
      storage.push({ ...newCartItem });
    }
    localStorage.setItem('items', JSON.stringify(storage));
    navigate('/basket');
  };

  return (
    <section className="catalog-item">
      {loadingDetails && <Loader />}
      {errorDetails && <Error error={errorDetails} />}
      {productDetails ? (
        <>
          <Title classes="text-center" title={productDetails.title} />
          <div className="row">
            <div className="col-5">
              <Image productDetails={productDetails} classes="img-fluid" />
            </div>
            <div className="col-7">
              <Table productDetails={productDetails} />
              <div className="text-center">
                <Size productDetails={productDetails} onSizeSelect={handleSizeSelect} />
                <Quantity onQuantityChange={handleQuantityChange} disabled={isButtonDisabled} />
              </div>
              <ButtonCart
                text="В корзину"
                onClick={() => handleClickToCart(productDetails.id, productDetails.title, productDetails.price)}
                disabled={isButtonDisabled}
              />
            </div>
          </div>
        </>
      ) : (
        !loadingDetails && !errorDetails && <div>Нету данных</div>
      )}
    </section>
  );
}

export default Product;
