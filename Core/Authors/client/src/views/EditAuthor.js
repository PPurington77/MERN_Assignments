import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getAuthorById, updateAuthorById } from '../services/internalApiService';

export const EditAuthor = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const[name, setName] = useState("");
    const[errors, setErrors] = useState(null);

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setName(data.name);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    const handleEditAuthorSubmit = (e) => {
        e.preventDefault();

        const editedAuthor = {
            name
        };

        updateAuthorById(id, editedAuthor)
        .then((updatedAuthor) => {
            console.log('updated author:', updatedAuthor)
            navigate('/authors');
        })
        .catch((error) => {
            setErrors(error?.response?.data?.errors);
        })
    };

    return(
        <div className='w-50 p-4 m-3 rounded mx-auto shadow'>
        <Link to="/authors">Home</Link>
        <h3>Edit this Author</h3>
        <form onSubmit={ (e) => handleEditAuthorSubmit(e) }>
            <div className='form-group'>
                <label className='h6'>Name:</label>
                {errors?.name && (
                    <span style={{ color: 'red' }}>{ errors?.name?.message }</span>
                )}
                <input onChange={(e) => {
                    setName(e.target.value);
                }} type="text" className='form-control' value={ name }/>
            </div>
            <button className='btn btn-md btn-outline-success mt-2 m-1'>Create</button>
            <Link to="/authors" className='btn btn-md btn-outline-primary mt-2 m-1'>Cancel</Link>
        </form>
    </div>
    )
};