import "./main-page.scss";
import slider from "../../assets/slider_fon.png";
import React from "react";
import MainSliderComponent from '../../components/slider/main-slider-component/main-slider-component';
import NewsSliderComponent from '../../components/slider/news-slider-component/news-slider-component';

const MainPage = () => {
    const slides = [
        {img: slider},
        {img: slider},
        {img: slider},
    ]

    return (
        <div>
            <MainSliderComponent slides={slides} />
            <NewsSliderComponent />
        </div>
    );
};

export default MainPage;