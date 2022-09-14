import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAuthor } from '../services/internalApiService';

export const NewAuthor = (props) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = (null);

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
                        setName(e);
                    }} type="text" className='form-control'/>
                </div>
                <button className='btn btn-sm btn-outline-success mt-2'>Create</button>
            </form>
        </div>
    )
}