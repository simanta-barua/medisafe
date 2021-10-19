import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div>
           <Container className="bg-off-blue footer text-dark text-center mt-5" fluid  >
                <Row className='p-5' >
                    <Col sm={4}>
                        <h3 className="ms-4" >Explore</h3>
                        <ul>
                            <li variant="dark">About Us</li>
                            <li variant="dark">Success Story</li>
                            <li variant="dark">Careers</li>
                            <li variant="dark">Resource Center</li>
                            <li variant="dark">Courses</li>
                            <li variant="dark">Contact Us</li>
                        </ul>

                    </Col>
                    <Col sm={4}><h3 className="ms-4">Categories</h3>
                        <ul>
                            <li variant="dark">All Courses</li>
                            <li variant="dark">Storytelling & Voice Over</li>
                            <li variant="dark">Digital Marketing</li>
                            <li variant="dark">Design & Branding</li>
                            <li variant="dark">Nanodegree Plus</li>
                            <li variant="dark">Veterans</li>
                        </ul></Col>
                    <Col sm={4}><h3 className="ms-4">Support</h3>
                        <ul>
                            <li variant="dark">Help Center</li>
                            <li variant="dark">System Requirements</li>
                            <li variant="dark">Register Activation Key</li>
                            <li variant="dark">Site Feedback</li>
                            <li variant="dark">Documentation</li>
                            <li variant="dark">Forums</li>
                        </ul></Col>

                </Row>
                <div class="row  p-5">
                    <div class="copyright text-muted pb-5">
                        <p>© 2021 Copyright all Right Reserved Design by Simatna</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;