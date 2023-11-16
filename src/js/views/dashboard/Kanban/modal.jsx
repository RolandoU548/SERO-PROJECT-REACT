import React from "react";
import PropTypes from "prop-types";
import "../../../../css/Modal.css";
const Modal = props => {
    return (
        <div className="custom__modal" onClick={() => props.onClose(false)}>
            <div
                className="modal__content"
                onClick={event => event.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;
