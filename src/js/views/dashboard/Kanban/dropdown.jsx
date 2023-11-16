import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../../css/Dropdown.css";
const Dropdown = props => {
    const dropRef = useRef();
    const handleClick = event => {
        if (
            dropRef &&
            !dropRef.current.contains(event.target) &&
            props.onClose
        ) {
            props.onClose();
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClick, { capture: true });

        return () => {
            document.removeEventListener("click", handleClick, {
                capture: true
            });
        };
    });
    return (
        <div
            ref={dropRef}
            className={`dropdown ${props.class ? props.class : ""}`}>
            {props.children}
        </div>
    );
};

Dropdown.propTypes = {
    onClose: PropTypes.func,
    class: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Dropdown;
