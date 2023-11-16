import React from "react";
import PropTypes from "prop-types";
import "../../../../css/Tag.css";
const Tag = props => {
    return (
        // <div className='tag'>
        <span className="tag" style={{ backgroundColor: `${props?.color}` }}>
            {props?.tagName}
        </span>
        // </div>
    );
};

Tag.propTypes = {
    color: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired
};

export default Tag;
