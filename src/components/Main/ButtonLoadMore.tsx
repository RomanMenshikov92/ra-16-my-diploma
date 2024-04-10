import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  selectIsNextProducts,
  selectSearchQuery,
} from '../../store/slice/productsSlice';
import { fetchProducts } from '../../store/thunk/productsThunk';
import { AppDispatch } from '../../store/store';
import { selectSelectedCategory } from '../../store/slice/categoriesSlice';

export const ButtonLoadMore: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);
  const selectedCategory = useSelector(selectSelectedCategory);
  const isNextProducts = useSelector(selectIsNextProducts);
  const query = useSelector(selectSearchQuery);
  const offset = products.length;
  const [setLoading, setSelectLoading] = useState<boolean>(false);

  const handleClickPrevPost = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setSelectLoading(true);
    dispatch(fetchProducts({ offset, query, category: selectedCategory }))
      .then(() => {
        setSelectLoading(false);
      })
      .catch(() => {
        setSelectLoading(false);
      });
  };

  return (
    <div className="text-center">
      {!isNextProducts && (
        <button type="button" className="btn btn-outline-primary" onClick={handleClickPrevPost} disabled={setLoading}>
          {setLoading ? 'Загрузка...' : 'Загрузить еще'}
        </button>
      )}
    </div>
  );
};

export default ButtonLoadMore;
