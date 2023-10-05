import "./main-slider-component.scss";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const MainSliderComponent = ({ slides }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {slides.map((element, index) => (
                    <SwiperSlide key={index}><img src={element.img} alt="slider" />
                        <div className="swiper-slide__info">
                            <h1 className="header-first-text-desktop -slider">Все новости республики Марий Эл</h1>
                            <p className="regular-text-desktop -slider">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad aliquid, cumque est ipsum laborum molestiae natus nihil nisi qui sunt veniam voluptates. Aliquid explicabo fugit minima placeat quod.</p>
                            <button className="swiper-slide__button">
                                Перейти
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

MainSliderComponent.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
    }))
}

export default MainSliderComponent;