import "./pagination-component.scss";
import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const PaginationComponent = () => {
    return (
        <div className="pagination">
            <div className="pagination__section">
                <button className="nav-button -pagination">
                    <KeyboardArrowLeftIcon sx={{ color: "#FFFFFF" }} />
                </button>
                <div className="pagination__page-num">
                    <p className="small-text-desktop -pagination">1</p>
                </div>
                <button className="nav-button -pagination">
                    <KeyboardArrowRightIcon sx={{ color: "#FFFFFF" }} />
                </button>
                <p className="small-text-desktop -pagination">из 24</p>
            </div>
        </div>
    )
};

export default PaginationComponent;