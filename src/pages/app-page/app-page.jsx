import './app-page.scss';
import React from 'react';
import HeaderComponent from '../../components/header-component/header-component';
import FooterComponent from '../../components/footer-component/footer-component';
import { Route, Routes } from 'react-router-dom';
import MainPage from "../main-page/main-page";
import NewsPage from '../news-page/news-page';
import NewsDetailPage from '../new-detail-page/new-detail-page';

const AppPage = () => {

  return (
    <div className='page'>
      <HeaderComponent />
      <div className='page__element'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/news/' element={<NewsPage />} />
          <Route path='/news/:id' element={<NewsDetailPage/>} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default AppPage;
