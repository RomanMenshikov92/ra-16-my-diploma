import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryFilter } from './CategoryFilter';
import { ProductList } from './ProductList';
import { selectProductsError, selectProductsLoading } from '../../store/slice/productsSlice';
import { Loader } from './Loader';
import { Error } from './Error';

export const Catalog: React.FC = (): JSX.Element => {
  const loadingCatalog = useSelector(selectProductsLoading);
  const errorCatalog = useSelector(selectProductsError);

  return (
    <div className="catalog">
      {loadingCatalog && !errorCatalog && <Loader />}
      {errorCatalog && !loadingCatalog && <Error error={errorCatalog} />}
      {!loadingCatalog && !errorCatalog && (
        <>
          <CategoryFilter />
          <ProductList />
        </>
      )}
    </div>
  );
};

export default Catalog;
