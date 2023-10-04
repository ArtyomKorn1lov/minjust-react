import "./news-list-component.scss";
import React from "react";
import NewsItemComponent from "../news-item-component/news-item-component";
import PaginationComponent from "../../pagination-component/pagination-component";

const NewsListComponent = () => {
    return (
        <div className="news">
            <div className="news__section">
                <h2 className="header-second-text-desktop -news">Новости</h2>
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
                <PaginationComponent />
            </div>
        </div>
    );
};

export default NewsListComponent;