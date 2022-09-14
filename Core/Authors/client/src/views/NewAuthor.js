import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createAuthor } from '../services/internalApiService';

export const NewAuthor = (props) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const handleNewAuthorSubmit = (e) => {
        e.preventDefault();

        const newAuthor = {
            name
        };

        createAuthor(newAuthor)
            .then((data) => {
                console.log('data', data);
                navigate('/authors');
            })
            .catch((error) => {
                setErrors(error?.response?.data?.errors);
            })
    };

    return (
        <div className='w-50 p-4 m-3 rounded mx-auto shadow'>
            <form onSubmit={ (e) => handleNewAuthorSubmit(e) }>
                <div className='form-group'>
                    <label className='h6'>Name:</label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}>{ errors?.name?.message }</span>
                    )}
                    <input onChange={(e) => {
                        setName(e.target.value);
                    }} type="text" className='form-control'/>
                </div>
                <button className='btn btn-md btn-outline-success mt-2 m-1'>Create</button>
                <Link to="/authors" className='btn btn-md btn-outline-primary mt-2 m-1'>Cancel</Link>
            </form>
        </div>
    )
}

export default NewAuthor;