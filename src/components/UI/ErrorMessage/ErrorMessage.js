import React from 'react';

import styles from './ErrorMessage.module.css';

const errorMessages = {
    "INVALID_EMAIL": "Please enter a valid email address",
    "WEAK_PASSWORD : Password should be at least 6 characters": "Password should be at least 6 characters",
    "EMAIL_EXISTS": "Account already exists, please sign in",
    "INVALID_PASSWORD": "Incorrect password",
    "EMAIL_NOT_FOUND": "Account not found, please sign up"
};

const errorMessage = (props) => (
    <div className = {styles.ErrorMessage}>{errorMessages[props.error] ? errorMessages[props.error] : null}</div>
);

export default errorMessage;