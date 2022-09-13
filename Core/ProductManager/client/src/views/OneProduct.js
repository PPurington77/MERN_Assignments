import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, deleteProductById } from '../services/internalApiService';

export const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if(product === null) {
        return null;
    }

    const handleDeleteProductClick = () => {
        deleteProductById(id)
            .then((deletedProduct) => {
                navigate('/products');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const { title, price, description } = product;

    return (
        <div className='w-50 mx-auto shadow mb-4 rounder border p-4 text-center'>
            <h4>{ title }</h4>
            <h4>${ price }</h4>
            <h4>{ description }</h4>
            <Link to="/products" className='btn btn-sm btn-outline-primary mx-1'>All Products</Link>
            <Link to={ `/products/${ id }/edit` } className="btn btn-sm btn-outline-warning mx-1">Edit</Link>
            <button onClick={(e) => { handleDeleteProductClick(id) }} className="btn btn-sm btn-outline-danger mx-1">Delete</button>

        </div>

    )
}

export default OneProduct;