import "./main-slider-component.scss";
import slider from "../../../assets/slider_fon.png";
import React from "react";

//TODO запросить помощи у опытного frontend разработчика
const MainSliderComponent = () => {
    return (
        <img className="main_slider" src={slider} alt="slide"/>
    );
};

export default MainSliderComponent;