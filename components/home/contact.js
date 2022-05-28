import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Contact() {
    return (
        <Container className={'mb-5'}>
            <Row className={'mt-5'}>
                <Col>
                    <h2 className={'text-center'}>You deserve the <br/> best customer experience </h2>
                    <p className={'text-center mt-3'}>For General queries, partnerships and career opportunities,
                        reach-out to us</p>
                </Col>
            </Row>
            <Row className={'border-st p-3 bg-white justify-content-around'}>
                <Col md={5}>
                    <Row>
                        <Col>
                            <h2>Write to us</h2>
                        </Col>
                    </Row>
                    <Row className={'border-st'}>
                        <Col>
                            <h5>General Support <br/>
                                3alafen@gmail.com</h5>
                        </Col>
                        <Col>
                            <h5>partnership mail <br/>
                                3alafen_business@gmail.com
                            </h5>
                        </Col>
                    </Row>
                </Col>
                <Col md={5}>
                    <Row>
                        <Col><h2>Call Us</h2></Col>
                    </Row>
                    <Row className={'border-st ws d-flex align-items-center'}>
                        <Col><h5>+20123456789 / +02345678 </h5></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;