import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createJoke } from '../services/internalApiService';

export const NewJoke = (props) => {
    const [setup, setSetup] = useState('');
    const [punchline, setPunchline] = useState('');
    const navigate = useNavigate;
    //for validations later
    // const [errors, setErrors] = useState(null);


    return (
        <div className="w-50 p-4 m-3 rounded mx-auto shadow">
            <form>
                <div className="form-group">
                    <label className="h6">
                        Set Up:
                    </label>
                    <input onChange={(e) => {
                        setSetup(e.target.value);
                    }} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="h6">
                        Punchline:
                    </label>
                    <input onChange={(e) => {
                        setPunchline(e.target.value);
                    }} type="text" className="form-control"/>
                </div>
            </form>
        </div>
    )
};



export default NewJoke;