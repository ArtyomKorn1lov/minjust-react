import "./header-component.scss";
import React from 'react';
import ContactElementComponent from "../contact-element-component/contact-element-component";

const HeaderComponent = () => {
    return(
        <div className='header'>
            <div className="header__contacts">
                <ContactElementComponent icon="../../assets/phone-contact.png" contactInfo="+ 7 (987) 654 32-10" />
            </div>
            <div className="header__container">
                <h1 className="header-first-text-desktop">Тест текста</h1>
            </div>
        </div>
    );
}

export default HeaderComponent;