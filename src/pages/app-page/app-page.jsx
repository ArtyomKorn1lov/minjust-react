import './app-page.scss';
import React from 'react';
import HeaderComponent from '../../components/header-component/header-component';
import FooterComponent from '../../components/footer-component/footer-component';
import MainSliderComponent from '../../components/slider/main-slider-component/main-slider-component';
import NewsSliderComponent from '../../components/slider/news-slider-component/news-slider-component';

const AppPage = () => {

  return (
    <div className='page'>
      <HeaderComponent />
      <div className='page__element'>
        <MainSliderComponent />
        <NewsSliderComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default AppPage;
