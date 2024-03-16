import React from 'react';
import { TopSales } from '../components/Main/TopSales';
import { Catalog } from '../components/Main/Catalog';

export function MainPage():JSX.Element {
  return (
    <>
      <TopSales />
      <Catalog />
    </>
  );
}

export default MainPage;
