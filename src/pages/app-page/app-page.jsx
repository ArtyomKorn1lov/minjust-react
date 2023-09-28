import './app-page.scss';
import React from 'react';
import HeaderComponent from '../../components/header-component/header-component';
import FooterComponent from '../../components/footer-component/footer-component';

const AppPage = () => {
  return (
    <div className='page'>
      <HeaderComponent />
      <div className='page__element'>
        Контент
      </div>
      <FooterComponent />
    </div>
  );
}

export default AppPage;
