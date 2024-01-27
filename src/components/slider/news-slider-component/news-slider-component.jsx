import "./news-slider-component.scss";
import NewsListComponent from "../../news/news-list-component/news-list-component";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from "react-router-dom";

const NewsSliderComponent = () => {
    const ref = useRef();
    const navigate = useNavigate();

    return (
        <div className="news">
            <div className="news__section">
                <div className="news__title">
                    <h3 className="header-third-text-desktop -news">Новости</h3>
                    <div className="news__nav">
                        <button className="nav-button" onClick={() => ref.current.prev()}>
                            <KeyboardArrowLeftIcon sx={{ color: "#405A9F" }} />
                        </button>
                        <button className="nav-button" onClick={() => ref.current.next()}>
                            <KeyboardArrowRightIcon sx={{ color: "#405A9F" }} />
                        </button>
                        <button className="primary-button" onClick={() => navigate("/news/")}>Все новости</button>
                    </div>
                </div>
                <NewsListComponent ref={ref} isMain={true} />
            </div>
        </div>
    );
};

export default NewsSliderComponent;
