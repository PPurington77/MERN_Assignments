import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getProductById, updateProductById } from '../services/internalApiService';

export const EditProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setTitle(data.title);
                setPrice(data.price);
                setDescription(data.description);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    const handleEditProductSubmit = (e) => {
        e.preventDefault();

        const editedProduct = {
            title,
            price,
            description
        };

        updateProductById(id, editedProduct)
            .then((updatedProduct) => {
                console.log('updatedProduct:', updatedProduct);
                navigate(`/products/${ id }`);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            })
    };

    return (
    <div className="w-50 p-4 m-3 rounded mx-auto shadow">
        <form onSubmit={ (e) => handleEditProductSubmit(e) }>
            <div className="form-group">
                <label className="h6">
                    Title:
                </label>
                {errors?.title && (
                    <span style={{ color: 'red' }}> { errors?.title?.message }</span>
                )}
                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} type="text" className="form-control" value={ title }/>
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
                }} type="number" className="form-control" value={ price }/>
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
                }} type="text" className="form-control" value={ description }/>
            </div>
            <button className="btn btn-sm btn-outline-success mt-2">Submit</button>
        </form>
        <Link to={'/products'} className="btn btn-md btn-outline-primary mt-2 ">Back</Link>
    </div>
    )
}

export default EditProduct;