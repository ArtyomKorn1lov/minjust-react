import "./news-item-component.scss";
import newsItem from "../../../assets/news-item-img.png";
import React from "react";

const NewsItemComponent = () => {
    return (
        <div className="news-item">
            <img className="news-item__image" src={newsItem} alt="news" />
            <div className="news-item__info">
                <p className="small-text-desktop -news-item-date">23 июля 2023</p>
                <p className="medium-text-desktop -news-item">
                    Одной из новых мер государственной поддержки инвестиционной деятельности является соглашение о ...
                </p>
                <button className="primary-button">
                    Подробнее
                </button>
            </div>
        </div>
    );
};

export default NewsItemComponent;