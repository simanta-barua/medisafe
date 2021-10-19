import React from 'react';
import { Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import Product from '../Product/Product';


const Shop = () => {
    const [products] = useFetch();
    console.log(products);
    
    return (
        <div className="course-container mt-5 p-3">
            <div className="text-center text-box ">
                <h2> Find the Right </h2>
                <h1>Online Course for you</h1>
            </div>
            <Row xs={1} md={2} sm={2} lg={4} className="g-1 mt-5">
                {
                    products.map(product => <Product
                      product ={product}
                      
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Shop;