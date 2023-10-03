import "./top-menu-component.scss";
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TopMenuComponent = ({list}) => {
    return (
        <div className="menu">
            {list.map((element, index) => (
                <Link key={index} className="menu__item small-text-desktop -menu" to={element.link}>{element.name}</Link>
            ))}
        </div>
    );
};

TopMenuComponent.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string,
        name: PropTypes.string
    }))
};

export default TopMenuComponent;