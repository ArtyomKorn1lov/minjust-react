import "./main-search-component.scss";
import findImg from "../../assets/find_img.png";
import searchIcon from "../../assets/search 2.png"
import React from "react";

const MainSearchComponent = () => {
    return (
        <div className="main-search">
            <div className="main-search__section">
                <img className="main-search__image" src={findImg} alt="find" />
                <div>
                    <h2 className="header-second-text-desktop main-search__margin-text">Муниципальные правовые акты</h2>
                    <p className="regular-text-desktop main-search__margin-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad aliquid, cumque est ipsum laborum molestiae natus nihil nisi qui sunt veniam voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad aliquid, cumque est ipsum laborum molestiae natus nihil nisi qui sunt veniam voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className="main-search__button"><img src={searchIcon} alt="search"/>Перейти к поиску</button>
                </div>
            </div>
        </div>
    );
};

export default MainSearchComponent;