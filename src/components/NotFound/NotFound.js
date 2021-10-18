import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import notfound from '../../assets/404-image.jpg'
const NotFound = () => {
    return (
        <div>
            <Container>
                <Row className="align-items-center text-center my-5">
                    <Col lg={8} className="ml-auto mr-auto"></Col>
                    <Image src={notfound} className='img-fluid'></Image>
                    <h1> Oops! That page can’t be found.
                    </h1>
                    <p>It looks like nothing was found at this location. Maybe try one of the links below </p>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;
