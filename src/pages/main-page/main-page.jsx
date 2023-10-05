import example1 from "../../assets/example_slide.jpg";
import example2 from "../../assets/example_slide2.jpg";
import example3 from "../../assets/example_slide3.jpg";
import React, { useEffect } from "react";
import MainSliderComponent from '../../components/slider/main-slider-component/main-slider-component';
import NewsSliderComponent from '../../components/slider/news-slider-component/news-slider-component';
import MainSearchComponent from "../../components/main-search-component/main-search-component";

const MainPage = () => {

    useEffect(() => {
        document.title = "Главная";
    }, []);

    const slides = [
        {
            img: example1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad aliquid, cumque est ipsum laborum molestiae natus nihil nisi qui sunt veniam voluptates. Aliquid explicabo fugit minima placeat quod."
        },
        {
            img: example2,
            text: "Взгляните на новые горизонты!"
        },
        {
            img: example3,
            text: "Расширьте ваши границы"
        },
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