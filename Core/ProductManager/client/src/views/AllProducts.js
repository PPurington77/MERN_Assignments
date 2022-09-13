import { useEffect, useState } from 'react';
import { deleteProductById, getAllProducts } from '../services/internalApiService';
import { Link, useParams } from 'react-router-dom';

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

    const handleDeleteProductClick = (idToDelete) => {
        deleteProductById(idToDelete)
            .then((deletedProduct) => {
                const filteredProducts = products.filter((product) => {
                    return product._id !== idToDelete;
                });

                setProducts(filteredProducts);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="w-50 mx-auto text-center">
        <h2>All Products</h2>
        {products.map((product) => {
            const { _id, title } = product;

            return <div key={ _id } className="shadow mb-4 rounded border p-4">
                <h4>Name: <Link to={`/products/${ _id }`}>{ title }</Link></h4>
                <Link to={ `/products/${ _id }/edit` } className="btn btn-sm btn-outline-warning mx-1">Edit</Link>
                <button onClick={(e) => { handleDeleteProductClick(_id) }} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
            </div>
        })}
    </div>
    )
}

export default AllProducts;