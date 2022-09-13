import { useEffect, useState } from 'react';
import { getAllProducts } from '../services/internalApiService';

export const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="w-50 mx-auto text-center">
        <h2>All Products</h2>
        {products.map((product) => {
            const { _id, title, price, description } = product;

            return <div key={ _id } className="shadow mb-4 rounded border p-4">
                <h4>Name: { title }</h4>
                <h4>Price: ${ price }</h4>
                <h4>Description: { description }</h4>
            </div>
        })}
    </div>
    )
}

export default AllProducts;