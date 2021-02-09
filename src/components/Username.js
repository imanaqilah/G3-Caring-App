import React, { useState } from 'react';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText
} from 'reactstrap';

const Username = ({ username, setUsername }) => {
    // Here onwards is for Checking available usernames
    const [delay, setDelay] = useState(null);
    const [usernameValid, setUsernameValid] = useState("");

    const checkUsername = newUsername => {
        console.log("Making API call to check username!");
        setUsernameValid(true);
        // axios
        //     .get(
        //         `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
        //     )
        //     .then(response => {
        //         console.log(response.data);
        //         if (response.data.valid) {
        //             setUsernameValid(true);
        //         } else {
        //             setUsernameValid(false);
        //         }
        //     });
    };

    const handleUsernameInput = e => {
        //  clears queue so that the old keystrokes don't trigger axios call
        clearTimeout(delay);
        const newUsername = e.target.value;
        setUsername(newUsername);

        //  put each new keystroke into the queue
        const newDelay = setTimeout(() => {
            checkUsername(newUsername);
        }, 500);

        setDelay(newDelay);
    };

    // Here onwards is for Form Validation display - the green/red indications with feedback messages
    const getInputProp = () => {
        if (!username.length) {
            return null;
        }
        if (username.length <= 6) {
            return { invalid: true };
        }
        if (usernameValid) {
            return { valid: true };
        } else {
            return { invalid: true };
        }
    };

    const getFormFeedback = () => {
        if (!username.length) {
            return null;
        }
        if (username.length <= 6) {
            return <FormFeedback invalid>Must be at least 6 characters</FormFeedback>
        }
        if (usernameValid) {
            return <FormFeedback valid>Sweet! That name is available</FormFeedback>
        } else {
            return <FormFeedback invalid>Sorry! Username is taken</FormFeedback>
        }
    };

    // --- the output of this portion will display the UI on app ---
    return (
        <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username" id="username" value={username} onChange={(e) => { setUsername(e.target.value); handleUsernameInput(e); }}
                {...getInputProp()} />
            {getFormFeedback()}
            <FormText>Enter a username between 6 and 20 characters</FormText>
        </FormGroup>
    )
}

export default Username;
