import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import notfound from '../../assets/404-image.jpg'
const NotFound = () => {
    return (
        <div>
            <Container>
                <Row className="align-items-center height-100vh my-5">
                <Col lg={8} className="ml-auto mr-auto"></Col>
                <Image src={notfound}></Image>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;
