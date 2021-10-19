import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { Badge, Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { productid } = useParams();
    const [products] = useFetch();
    const newProduct = products[productid];
    const { title, image, price, details, category } = newProduct;
    return (
        <div>
            <Container>
                <h2>{title}</h2>
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