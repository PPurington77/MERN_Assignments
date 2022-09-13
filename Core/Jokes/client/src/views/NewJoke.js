import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createJoke } from '../services/internalApiService';

export const NewJoke = (props) => {
    const [setup, setSetup] = useState('');
    const [punchline, setPunchline] = useState('');
    const navigate = useNavigate();
    //for validations later
    // const [errors, setErrors] = useState(null);

    const handleNewJokeSubmit = (event) => {
        event.preventDefault();

        const newJoke = {
            setup,
            punchline
        };

        createJoke(newJoke)
            //if not using service data will be res.data
            .then((data) => {
                console.log('data', data);
                navigate('/jokes');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="w-50 p-4 m-3 rounded mx-auto shadow">
            <form onSubmit={ (e) => handleNewJokeSubmit(e) }>
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
                <button className="btn btn-sm btn-outline-success mt-2">Submit</button>
            </form>
        </div>
    )
};



export default NewJoke;