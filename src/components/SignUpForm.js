import React, { useState } from 'react';
import {
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form
} from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import Username from './Username.js';
import Password from './Password.js';
import Email from './Email.js';
import { useHistory } from 'react-router-dom';

const SignUpForm = ({ toggleIsLogin, toggle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useHistory()

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: 'https://caring-app-project2021.herokuapp.com/api/v1/users/ ',
            data: {
                username: username,
                email: email,
                password: password
            }
        })
            .then(response => {
                console.log(response)
                localStorage.setItem('jwt', response.data.token)

                if (response.data.token !== undefined) {
                    console.log(response.data.token);
                    toast.info(response.data.message, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    history.push("/profile")
                }
                else {
                    response.data.forEach((message) => {
                        toast.error(message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    })
                }
            })
            .catch(error => {
                error.response.data.message.forEach((message) => {
                    toast.error(message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                console.error(error.response) // so that we know what went wrong if the request failed
            })
    }

    return (
        <div style={{ color: "black" }}>
            <Form>
                <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
                <ModalBody>
                    <Username username={username} setUsername={setUsername} />
                    <Email email={email} setEmail={setEmail} />
                    <Password password={password} setPassword={setPassword} />
                    <p>Already a member? <a href="/#" onClick={(e) => {
                        e.preventDefault()
                        toggleIsLogin()
                    }}>Sign In here.</a></p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={!(username && email && password)} onClick={handleSubmit}>Sign Up</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </div >
    )
}

export default SignUpForm;