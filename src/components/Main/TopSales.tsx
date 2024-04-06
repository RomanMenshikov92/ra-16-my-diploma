import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { selectProductsError, selectProductsLoading, selectProductsTopSales } from '../../store/slice/productsSlice';
import { fetchProductsDetails, fetchTopSales } from '../../store/thunk/productsThunk';
import { Product } from '../../types/types';
import { Loader } from './Loader';
import { Image } from './Image';
import ButtonOrder from './ButtonOrder';
import { Title } from './Title';

export const TopSales: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const topSales = useSelector(selectProductsTopSales);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (topSales.length === 0 && !loading && !error) {
      dispatch(fetchTopSales());
    }
  }, [dispatch, topSales.length, loading, error]);

  if (topSales.length === 0 || error) {
    return null;
  }

  const handleClick = (id: number): void => {
    dispatch(fetchProductsDetails({ id, offset: '', category: '' }));
    navigate(`/catalog/${id}`);
  };

  return (
    <section className="top-sales">
      <Title classes="text-center" title="Хиты продаж!" />
      {loading && !error && <Loader />}
      {!loading && !error && topSales.length > 0 && (
        <ul className="row list-unstyled p-0">
          {topSales.map((item: Product) => (
            <li className="col-4" key={item.id}>
              <div className="card catalog-item-card h-100">
                <Image productDetails={item} classes="card-img-top img-fluid" />
                <div className="card-body d-flex flex-column align-items-start justify-content-end">
                  <div className="card-text mb-3">{item.title}</div>
                  <div className="card-text mb-3">
                    {item.price}
                    &nbsp;руб.
                  </div>
                  <ButtonOrder text="Заказать" onClick={() => handleClick(item.id)} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TopSales;
