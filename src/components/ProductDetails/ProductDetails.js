import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

const ProductDetails = () => {
    const { productid } = useParams();
    const [products] = useFetch();
    const newProduct = products[productid];
    const {title} = newProduct;
    return (
        <div>
            <h5>{title}</h5>
        </div>
    );
};

export default ProductDetails;