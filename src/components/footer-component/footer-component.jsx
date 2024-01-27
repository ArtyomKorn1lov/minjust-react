import "./footer-component.scss";
import logo from "../../assets/vybory_glavy_marij_jel_budut_li_sjurprizy.png";
import React from 'react';
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="footer__section">
                <div className="footer__banner">
                    <img onClick={() => navigate("/")} className="footer__logo" src={logo} alt="logo" />
                    <div className="footer__banner-text">
                        <p className="small-text-desktop -border -white">Портал министерства Юстиций Республики Марий Эл</p>
                        <p className="small-text-desktop -regular -white">Официальный портал</p>
                    </div>
                </div>
                <div>
                    <p className="small-text-desktop -trademark">© 2023г. Все права защищены</p>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;