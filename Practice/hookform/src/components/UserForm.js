import React, { useState } from 'react';

const UserForm = (props) => {
    //first, last, email, pw, cpw
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPw };
        console.log(newUser);

        //clear state
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPw('');
    };
    
    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} value={ email }/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)} value={ password }/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ (e) => setConfirmPw(e.target.value)} value={ confirmPw }/>
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