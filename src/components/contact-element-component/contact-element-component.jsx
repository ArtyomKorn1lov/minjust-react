import './contact-element-component.scss';
import phone from "../../assets/phone-contact.png";
import mail from "../../assets/mail-contact.png";
import geodata from "../../assets/geodata-contact.png";
import React from "react";
import PropTypes from 'prop-types';

const ContactElementComponent = ({ type, contactInfo }) => {

    const renderContactsTypes = () => {
        switch (type) {
            case "phone":
                return (
                    <div className="contact__element">
                        <img className="contact__icon" src={phone} alt={type} />
                        <a className="small-text-desktop -white"
                            href={'tel:' + contactInfo.link}>
                            {contactInfo.text}
                        </a>
                    </div>
                );
            case "email":
                return (
                    <div className="contact__element">
                        <img className="contact__icon" src={mail} alt={type} />
                        <a className="small-text-desktop -white"
                            href={'mailto:' + contactInfo.link}>
                            {contactInfo.text}
                        </a>
                    </div>
                );
            case "geodata":
                return (
                    <div className="contact__element">
                        <img className="contact__icon" src={geodata} alt={type} />
                        <a className="small-text-desktop -white"
                            href={contactInfo.link}>
                            {contactInfo.text}
                        </a>
                    </div>
                );
            default:
                return (
                    <div className="contact__element">
                        <a className="small-text-desktop -white"
                            href={contactInfo.link}>
                            {contactInfo.text}
                        </a>
                    </div>
                );
        }
    };

    return (
        renderContactsTypes()
    );
};

ContactElementComponent.propTypes = {
    type: PropTypes.string,
    contactInfo: PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string
    })
};

export default ContactElementComponent;
