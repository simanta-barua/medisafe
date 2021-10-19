import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import cat1 from "./../../assets/CategoryAssets/cat1.jpg"
import cat2 from "./../../assets/CategoryAssets/cat2.png"
import cat3 from "./../../assets/CategoryAssets/cat3.jpg"
import cat4 from "./../../assets/CategoryAssets/cat4.jpg"

const Category = () => {
    return (
        <div>
            <Container>
                <div className="text-center text-box ">
                    <h2>Shop by category</h2>
                </div>
                <div><Row xs={1} md={4} sm={2} className="g-1 mt-2  text-center">
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Hospital </Card.Title>
                                <Card.Text className="text-muted"></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat3} />
                            <Card.Body>
                                <Card.Title>Blood pressure</Card.Title>
                                <Card.Text className="text-muted">
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat4} />
                            <Card.Body>
                                <Card.Title>Accessoris</Card.Title>
                                <Card.Text className="text-muted"></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className="custom-cart-2">
                            <Card.Img variant="top" src={cat2} />
                            <Card.Body>
                                <Card.Title> Personal</Card.Title>
                                <Card.Text className="text-muted"></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default Category;