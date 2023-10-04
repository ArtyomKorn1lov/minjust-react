import "./news-slider-component.scss";
import NewsItemComponent from "../../news/news-item-component/news-item-component";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import img from "../../../assets/news-item-img.png";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
//TODO посмотреть пагинацию слайдера для кнопок
//import { Navigation } from 'swiper/modules';

const NewsSliderComponent = () => {
    const element = {
        id: 1,
        name: "Коллегия Министерства внутренней политики Республики Марий Эл",
        date: "23 июля 2023",
        img: img
    }

    return (
        <div className="news">
            <div className="news__section">
                <div className="news__title">
                    <h3 className="header-third-text-desktop -news">Новости</h3>
                    <div className="news__nav">
                        <button className="nav-button">
                            <KeyboardArrowLeftIcon sx={{ color: "#405A9F" }} />
                        </button>
                        <button className="nav-button">
                            <KeyboardArrowRightIcon sx={{ color: "#405A9F" }} />
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
                <Swiper className="mySwiper">
                    <SwiperSlide className="news__list">
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                    </SwiperSlide>
                    <SwiperSlide className="news__list">
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                    </SwiperSlide>
                    <SwiperSlide className="news__list">
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                    </SwiperSlide>
                    <SwiperSlide className="news__list">
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                        <NewsItemComponent newItem={element} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default NewsSliderComponent;
