import "./main-page.scss";
import example1 from "../../assets/example_slide.jpg";
import example2 from "../../assets/example_slide2.jpg";
import example3 from "../../assets/example_slide3.jpg";
import React from "react";
import MainSliderComponent from '../../components/slider/main-slider-component/main-slider-component';
import NewsSliderComponent from '../../components/slider/news-slider-component/news-slider-component';
import MainSearchComponent from "../../components/main-search-component/main-search-component";

const MainPage = () => {
    const slides = [
        {img: example1},
        {img: example2},
        {img: example3},
    ]

    return (
        <div>
            <MainSliderComponent slides={slides} />
            <NewsSliderComponent />
            <MainSearchComponent />
        </div>
    );
};

export default MainPage;