import "./header-component.scss";
import logo from "../../assets/vybory_glavy_marij_jel_budut_li_sjurprizy.png";
import glasses from "../../assets/glasses.png";
import search from "../../assets/search.png";
import React from 'react';
import ContactElementComponent from "../contact-element-component/contact-element-component";
import TopMenuComponent from "../top-menu-component/top-menu-component";

const HeaderComponent = () => {
    const menuItems = [
        {
            link: "/news/",
            name: "Новости"
        },
        {
            link: "",
            name: "Документы"
        },
        {
            link: "",
            name: "Контакты"
        },
    ]

    return (
        <div className='header'>
            <div className="header__contacts">
                <div className="header__contacts-section">
                    <div className="contacts__left">
                        <ContactElementComponent type="phone" contactInfo={{
                            link: "+79876543210",
                            text: "+ 7 (987) 654 32-10"
                        }} />
                        <ContactElementComponent type="phone" contactInfo={{
                            link: "minust@gov.mari.ru",
                            text: "minust@gov.mari.ru"
                        }} />
                    </div>
                    <div className="contacts__right">
                        <ContactElementComponent type="geodata" contactInfo={{
                            link: "",
                            text: "424033, Республика Марий Эл, г. Йошкар-Ола, наб. Брюгге, д. 2"
                        }} />
                    </div>
                </div>
            </div>

            <div className="header__container">
                <div className="header__container-section">
                    <div className="header__banner">
                        <img className="header__logo" src={logo} alt="logo" />
                        <div className="header__banner-text">
                            <p className="small-text-desktop -border">Портал министерства Юстиций Республики Марий Эл</p>
                            <p className="small-text-desktop -regular">Официальный портал</p>
                        </div>
                    </div>
                    <div className="header__menu">
                        <TopMenuComponent list={menuItems} />
                        <div className="search__container">
                            <img src={glasses} alt="glass" />
                            <img src={search} alt="search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;