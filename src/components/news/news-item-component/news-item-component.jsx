import "./news-item-component.scss";
import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const NewsItemComponent = ({ newItem }) => {
    const navigate = useNavigate();
    
    return (
        <div className="news-item">
            <img className="news-item__image" src={newItem.img} alt="news" />
            <div className="news-item__info">
                <p className="small-text-desktop -news-item-date">{newItem.date}</p>
                <p className="medium-text-desktop -news-item">
                    {newItem.name}
                </p>
                <button onClick={() => navigate(`/news/${newItem.id}/`)} className="primary-button">
                    Подробнее
                </button>
            </div>
        </div>
    );
};

NewsItemComponent.propTypes = {
    newItem: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        date: PropTypes.string,
        img: PropTypes.string,
    })
};

export default NewsItemComponent;