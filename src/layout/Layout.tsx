import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Banner } from '../components/Banner';
import banner from '../assets/img/banner.jpg';

export function Layout(): JSX.Element {
  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner src={banner} alt="К весне готовы!" />
            <Outlet />
          </div>
        </div>
      </main>
      <footer className="container bg-light footer">
        <div className="row">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default Layout;
