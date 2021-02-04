// --- This component is for password validation ---
// --- SignUpForm.js will import this ---

import React from 'react';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText
} from 'reactstrap';

const Password = ({ password, setPassword }) => {
    const handlePasswordInput = e => {
        const password = e.target.value;
        setPassword(password);
    }

    //  -- To check password input from users. Invalid if less than 6 characters ---
    const getPasswordProp = () => {
        if (!password.length) {
            return null;
        }
        if (password.length <= 6) {
            // setPasswordValid(false)
            return { invalid: true };
        } else {
            // setPasswordValid(true)
            return { valid: true }
        }
    };

    const getPasswordFormFeedback = () => {
        if (!password.length) {
            return null;
        }
        if (password.length <= 6) {
            return <FormFeedback invalid>The password is too short</FormFeedback>
        }
        else
            return <FormFeedback valid></FormFeedback>
    };

    // --- the output of this portion will display the UI on app ---
    return (
        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value); handlePasswordInput(e) }} {...getPasswordProp()}
            />
            {getPasswordFormFeedback()}
            <FormText>Password must have at least 6 characters</FormText>
        </FormGroup>
    )
}

export default Password;