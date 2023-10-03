import './app-page.scss';
import React from 'react';
import HeaderComponent from '../../components/header-component/header-component';
import FooterComponent from '../../components/footer-component/footer-component';
import { Route, Routes } from 'react-router-dom';
import MainPage from "../main-page/main-page";
import NewsPage from '../news-page/news-page';

const AppPage = () => {

  return (
    <div className='page'>
      <HeaderComponent />
      <div className='page__element'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/news/' element={<NewsPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default AppPage;
