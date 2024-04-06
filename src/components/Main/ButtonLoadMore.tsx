import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProductsLoading, selectProducts, selectIsNextProducts, selectSearchQuery,
} from '../../store/slice/productsSlice';
import { fetchProducts } from '../../store/thunk/productsThunk';
import { AppDispatch } from '../../store/store';
import { selectSelectedCategory } from '../../store/slice/categoriesSlice';

export const ButtonLoadMore: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const selectedCategory = useSelector(selectSelectedCategory);
  const isNextProducts = useSelector(selectIsNextProducts);
  const query = useSelector(selectSearchQuery);
  const offset = products.length;

  const handleClickPrevPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(fetchProducts({ offset, query, category: selectedCategory }));
  };

  return (
    <div className="text-center">
      {!isNextProducts && (
        <button type="button" className="btn btn-outline-primary" onClick={handleClickPrevPost} disabled={loading}>
          {loading ? 'Загрузка...' : 'Загрузить еще'}
        </button>
      )}
    </div>
  );
};

export default ButtonLoadMore;
