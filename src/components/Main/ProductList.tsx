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

export const ProductList: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loadingCatalog = useSelector(selectProductsLoading);
  const errorCatalog = useSelector(selectProductsError);
  const selectedCategory = useSelector(selectSelectedCategory);
  const query = useSelector(selectSearchQuery);

  useEffect(() => {
    if (!loadingCatalog && !errorCatalog && products.length === 0) {
      dispatch(fetchProducts({ offset: 0, query, category: selectedCategory }));
    }
  }, [dispatch, loadingCatalog, errorCatalog, products.length, selectedCategory, query]);

  const handleClick = (id: number): void => {
    dispatch(fetchProductsDetails({ id, offset: 0, category: '' }));
    navigate(`/catalog/${id}`);
  };
  return (
    <div>
      {products && products.length > 0 && !errorCatalog && !loadingCatalog ? (
        <>
          <ul className="row list-unstyled p-0">
            {products.map((item: Product) => (
              <ProductItem key={item.id} product={item} handleClick={handleClick} />
            ))}
          </ul>
          <ButtonLoadMore />
        </>
      ) : (
        !loadingCatalog && !errorCatalog && <p className="p-5 text-center fs-1">Ничего не найдено</p>
      )}
    </div>
  );
};

export default ProductList;
