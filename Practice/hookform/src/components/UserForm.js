import React, { useState } from 'react';

const UserForm = (props) => {
    //first, last, email, pw, cpw
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [confirmPwError, setConfirmPwError] = useState("");

    //if fn or ln is less than 2 output saying field must be at least 2 characters
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be atleast 2 characters");
        }
        else if(e.target.value.length >= 2) {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value < 2) {
            setLastNameError("Last Name must be atleast 2 characters");
        }
        else if(e.target.value.length >= 2){
            setLastNameError("");
        }
    }
    //if email is less than 5 field must be at least 5 characters
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters long");
        }
        else if(e.target.value.length >= 5){
            setEmailError("");
        }
    }
    //passwords must match and be 8 characters
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be atleast 8 characters long");
        }
        else if(e.target.value.length >= 8) {
            setPasswordError("");
        }
    }

    const handleConfirmPw = (e) => {
        setConfirmPw(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmPwError("Password must be atleast 8 characters long");
        }
        else if(e.target.value !== password){
            setConfirmPwError("Passwords must match");
        }
        else if(e.target.value === password) {
            setConfirmPwError("");
        }
        else if(e.target.value.length >= 8) {
            setConfirmPwError("")
        }

    }


    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ handleFirstName } value={ firstName }/>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ handleLastName } value={ lastName }/>
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ handleEmail } value={ email }/>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={ handlePassword } value={ password }/>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ handleConfirmPw } value={ confirmPw }/>
                    {
                        confirmPwError ?
                        <p style={{color:'red'}}>{ confirmPwError }</p>:
                        ''
                    }
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPw }</p>
            </div>
        </div>
    );
};

export default UserForm;