import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({id, btnText, btnClass, btnId, ...props}) => {

    const[show, setShow] = useState(false);

    if(!show) {
        return(
            <button id={btnId} class="btnClass" onClick={() => setShow(true)}>{btnText}</button>
        );
    } else {
        return (
            <>
            <button id={btnId} class="btnClass" onClick={() => setShow(true)}>{btnText}</button>
            <div 
            className="main-modal" 
            id={id}>
                <span className="close" onClick={() => setShow(false)}>&times;</span>
                <div className="main-modal-content">
                    {props.children}
                </div>
            </div>
            <div className="modal-overlay" onClick={() => setShow(false)}></div>
            </>
        );   
    }
}

Modal.propTypes = {
    id: PropTypes.string,
    btnText: PropTypes.string,
    btnClass: PropTypes.string,
    btnId: PropTypes.string
};

Modal.defaultProps = {
    id: null,
    btnText: '',
    btnClass: null,
    btnId: null
};

/* EXAMPLE USE 

<Modal id="hello" btnText="This is a modal button">
    <div>
        <h2>This is a modal</h2>
        <p>Example modal</p>
    </div>
</Modal>

*/

export default Modal;