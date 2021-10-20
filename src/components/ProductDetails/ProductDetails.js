import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { Badge, Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { productid } = useParams();

    const url = `https://api.npoint.io/f20a7309a7a019a15269/${productid}`
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data)
            )
    }, [])


    const { title, image, price, details, category } = products;
    console.log(products);
    
    return (
        <div>
            <Container>
                <h2 className="text-center p-3">{title}</h2>
                <Row className="text-box ">
                    <Col className="text-center">
                        <img src={image} alt="img" />
                    </Col>
                    <Col>
                        <ListGroup variant="flush" >
                            <ListGroup.Item> Category: <Badge pill bg="primary">{category}</Badge></ListGroup.Item>
                            <ListGroup.Item>Price: ${price} </ListGroup.Item>

                            <ListGroup.Item>Details: {details} </ListGroup.Item>
                            <Link to="/shop" className="text-light p-3 m-3"> <Button variant="danger">View all Product </Button></Link>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ProductDetails;




// const [products] = useFetch()
// setTimeout(() => {
//     var newProduct = products[productid];
//     console.log("Data:",newProduct);
// }, 200);
// console.log(products);
