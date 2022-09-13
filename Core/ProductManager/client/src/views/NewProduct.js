import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createProduct } from '../services/internalApiService';

export const NewProduct = (props) => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    //for validations later
    const [errors, setErrors] = useState(null);

    const handleNewProductSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            title, 
            price,
            description
        };

        createProduct(newProduct)
            //if not using service data will be res.data
            .then((data) => {
                console.log('data', data);
                setProducts([...products, newProduct]);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                // ? allows you to safely access keys that may not exist, instead of crashing the app if they don't it will return undefined.
                setErrors(error?.response?.data?.errors);
            })
    }

    return (
        <div className="w-50 p-4 m-3 rounded mx-auto shadow">
            <form onSubmit={ (e) => handleNewProductSubmit(e) }>
                <div className="form-group">
                    <label className="h6">
                        Title:
                    </label>
                    {errors?.title && (
                        <span style={{ color: 'red' }}> { errors?.title?.message }</span>
                    )}
                    <input onChange={(e) => {
                        setTitle(e.target.value);
                    }} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="h6">
                        Price:
                    </label>
                    {errors?.title && (
                        <span style={{ color: 'red' }}> { errors?.price?.message }</span>
                    )}
                    <input onChange={(e) => {
                        setPrice(e.target.value);
                    }} type="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="h6">
                        Description:
                    </label>
                    {errors?.title && (
                        <span style={{ color: 'red' }}> { errors?.description?.message }</span>
                    )}
                    <input onChange={(e) => {
                        setDescription(e.target.value);
                    }} type="text" className="form-control"/>
                </div>
                <button className="btn btn-sm btn-outline-success mt-2">Submit</button>
            </form>
        </div>
    )
};



export default NewProduct;