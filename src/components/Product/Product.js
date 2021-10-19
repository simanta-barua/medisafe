import React from 'react';

const Product = (props) => {
const {title} = props.product;

    
  
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Product;