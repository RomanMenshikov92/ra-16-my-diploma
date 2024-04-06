import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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

export function Product(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const productDetails = useSelector(selectProductsDetails);
  const loadingDetails = useSelector(selectProductsLoading);
  const errorDetails = useSelector(selectProductsError);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<number>();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      if (!productDetails && !loadingDetails && !errorDetails) {
        dispatch(fetchProductsDetails({ id, offset: '', category: '' }));
      }
    }
  }, [dispatch, errorDetails, id, loadingDetails, productDetails]);

  const handleClickToCart = (): void => {
    navigate('/basket');
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setIsButtonDisabled(!size);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setSelectedQuantity(newQuantity);
  };

  return (
    <section className="catalog-item">
      {loadingDetails && <Loader />}
      {errorDetails && <Error />}
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
                <Quantity onQuantityChange={handleQuantityChange} />
              </div>
              <ButtonCart text="В корзину" onClick={handleClickToCart} disabled={isButtonDisabled} />
            </div>
          </div>
        </>
      ) : (
        <div>Нету данных</div>
      )}
    </section>
  );
}

export default Product;
