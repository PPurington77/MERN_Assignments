import { useState } from 'react';
import AllProducts from './AllProducts';
import NewProducts from './NewProduct';

const Products = (props) => {
    const [product, setProduct] = useState([]);

    return (
        <div>
            <NewProducts product={product} setProduct={setProduct}/>
            <AllProducts product={product} setProduct={setProduct}/>
        </div>
    )
}



export default Products;