import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectProductsLoading,
  selectProductsError,
  selectProducts,
  selectSearchQuery,
} from '../../store/slice/productsSlice';
import { fetchProducts, fetchProductsDetails } from '../../store/thunk/productsThunk';
import { Product } from '../../types/types';
import { AppDispatch } from '../../store/store';
import { ProductItem } from './ProductItem';
import { selectSelectedCategory } from '../../store/slice/categoriesSlice';
import { ButtonLoadMore } from './ButtonLoadMore';
import { Loader } from './Loader';
import { Error } from './Error';

export const ProductList: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const selectedCategory = useSelector(selectSelectedCategory);
  const query = useSelector(selectSearchQuery);

  useEffect(() => {
    if (!loading && !error && products.length === 0) {
      dispatch(fetchProducts({ offset: 0, query, category: selectedCategory }));
    }
  }, [dispatch, loading, error, products.length, selectedCategory, query]);

  const handleClick = (id: number): void => {
    dispatch(fetchProductsDetails({ id, offset: 0, category: '' }));
    navigate(`/catalog/${id}`);
  };

  return (
    <>
      {loading && !error && <Loader />}
      {error && !loading && <Error />}
      {products && products.length > 0 && !error && !loading ? (
        <>
          <ul className="row list-unstyled p-0">
            {products.map((item: Product) => (
              <ProductItem key={item.id} product={item} handleClick={handleClick} />
            ))}
          </ul>
          <ButtonLoadMore />
        </>
      ) : (
        <p className="p-5 text-center fs-1">Ничего не найдено</p>
      )}
    </>
  );
};

export default ProductList;
