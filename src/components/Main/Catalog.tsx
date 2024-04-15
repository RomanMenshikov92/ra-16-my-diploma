import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryFilter } from './CategoryFilter';
import { ProductList } from './ProductList';
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
  selectSearchQuery,
} from '../../store/slice/productsSlice';
import { Loader } from './Loader';
import { Error } from './Error';
import { AppDispatch } from '../../store/store';
import { selectSelectedCategory } from '../../store/slice/categoriesSlice';
import { fetchProducts } from '../../store/thunk/productsThunk';

export const Catalog: React.FC = (): JSX.Element => {
  const loadingCatalog = useSelector(selectProductsLoading);
  const errorCatalog = useSelector(selectProductsError);
  const products = useSelector(selectProducts);
  const selectedCategory = useSelector(selectSelectedCategory);
  const query = useSelector(selectSearchQuery);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!loadingCatalog && !errorCatalog && products.length === 0) {
      dispatch(fetchProducts({ offset: 0, query, category: selectedCategory }));
    }
  }, [dispatch, loadingCatalog, errorCatalog, products.length, selectedCategory, query]);
  console.log(loadingCatalog);
  return (
    <div className="catalog">
      {loadingCatalog && !errorCatalog && <Loader />}
      {errorCatalog && !loadingCatalog && <Error error={errorCatalog} />}
      {products.length > 0 && (
        <>
          <CategoryFilter />
          <ProductList />
        </>
      )}
    </div>
  );
};

export default Catalog;
