import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/internalApiService';

export const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate;

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

    const { title, price, description } = product;

    return (
        <div className='w-100 mx-auto shadow mb-4 rounder border p-4'>
            <h4>{ title }</h4>
            <h4>{ price }</h4>
            <h4>{ description }</h4>
        </div>
    )
}