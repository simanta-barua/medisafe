import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Category from '../Category/Category';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products] = useFetch();
    let slicedProduct = products.slice(0, 6)
    return (
        <div>
            <Container>
                <Banner></Banner>
                <div className="text-center text-box ">
                    <h2> Our Latest Product </h2>
                    <Row xs={1} md={3} sm={2} >
                        {
                            slicedProduct.map(product => <Product
                                key={product.key}
                                product={product} ></Product>)
                        }
                    </Row>
                </div>
                <Category></Category>
                <Brand></Brand>
            </Container>
        </div>
    );
};

export default Home;