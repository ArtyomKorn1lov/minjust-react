import "./news-slider-component.scss";
import NewsItemComponent from "../../news/news-item-component/news-item-component";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";

const NewsSliderComponent = () => {
    return (
        <div className="news">
            <div className="news__section">
                <div className="news__title">
                    <h3 className="header-third-text-desktop -news">Новости</h3>
                    <div className="news__nav">
                        <button className="nav-button">
                            <KeyboardArrowLeftIcon sx={{color: "#405A9F"}} />
                        </button>
                        <button className="nav-button">
                            <KeyboardArrowRightIcon sx={{color: "#405A9F"}} />
                        </button>
                        <button className="primary-button">Все новости</button>
                    </div>
                </div>
                <div className="news__tags">
                    <div className="tag-input -selected">
                        <p className="small-text-desktop -tag -selected">Все новости</p>
                    </div>
                    <div className="tag-input">
                        <p className="small-text-desktop -tag">Общество</p>
                    </div>
                    <div className="tag-input">
                        <p className="small-text-desktop -tag">Образование и наука</p>
                    </div>
                    <div className="tag-input">
                        <p className="small-text-desktop -tag">Экономика и бизнес</p>
                    </div>
                </div>
                <div className="news__list">
                    <NewsItemComponent />
                    <NewsItemComponent />
                    <NewsItemComponent />
                    <NewsItemComponent />
                </div>
            </div>
        </div>
    );
};

export default NewsSliderComponent;
