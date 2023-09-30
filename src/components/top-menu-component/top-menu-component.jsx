import "./top-menu-component.scss";
import PropTypes from 'prop-types';

const TopMenuComponent = ({list}) => {
    return (
        <div className="menu">
            {list.map((element, key) => (
                <a className="menu__item small-text-desktop -menu" href={element.link}>{element.name}</a>
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