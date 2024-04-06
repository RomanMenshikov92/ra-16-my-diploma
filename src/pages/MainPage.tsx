import React from 'react';
import { TopSales } from '../components/Main/TopSales';
import { Catalog } from '../components/Main/Catalog';
import { Title } from '../components/Main/Title';

export function MainPage(): JSX.Element {
  return (
    <>
      <TopSales />
      <section className="catalog">
        <Title classes="text-center" title="Каталог" />
        <Catalog />
      </section>
    </>
  );
}

export default MainPage;
