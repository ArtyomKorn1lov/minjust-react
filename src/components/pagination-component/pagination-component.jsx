import "./pagination-component.scss";
import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';

const PaginationComponent = ({page, maxPage, prevPage, nextPage}) => {
    return (
        <div className="pagination">
            <div className="pagination__section">
                <button className="nav-button -pagination" onClick={prevPage}>
                    <KeyboardArrowLeftIcon sx={{ color: "#FFFFFF" }} />
                </button>
                <div className="pagination__page-num">
                    <p className="small-text-desktop -pagination">{page}</p>
                </div>
                <button className="nav-button -pagination" onClick={nextPage}>
                    <KeyboardArrowRightIcon sx={{ color: "#FFFFFF" }} />
                </button>
                <p className="small-text-desktop -pagination">из {maxPage}</p>
            </div>
        </div>
    )
};

PaginationComponent.propTypes = {
    page: PropTypes.number,
    maxPage: PropTypes.number,
    prevPage: PropTypes.func,
    nextPage: PropTypes.func,
};

export default PaginationComponent;