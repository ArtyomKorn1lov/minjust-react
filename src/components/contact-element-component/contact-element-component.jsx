import './contact-element-component.scss';
import React from "react";
import PropTypes from 'prop-types';

const ContactElementComponent = ({icon, contactInfo}) => {
    return(
        <div className="contact__element">
            <img className="contact__icon" src={icon} alt="icon"/>
            <p className="small-text-desktop">{contactInfo}</p>
        </div>
    );
};

ContactElementComponent.propTypes = {
    icon: PropTypes.string,
    contactInfo: PropTypes.string
};

export default ContactElementComponent;
