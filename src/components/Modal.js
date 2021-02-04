import React from 'react';
import { Modal } from 'reactstrap';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';

const ModalForm = ({ isOpen, toggle, toggleIsLogin, isLogin, setLoggedIn }) => {

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            {
                // --- to toggle between Sign In form and Sign Up form within the modal ---
                isLogin
                    ? <SignInForm toggle={toggle} toggleIsLogin={toggleIsLogin} setLoggedIn={setLoggedIn} />
                    : <SignUpForm toggle={toggle} toggleIsLogin={toggleIsLogin} setLoggedIn={setLoggedIn} />
            }
        </Modal>
    )
}

export default ModalForm;