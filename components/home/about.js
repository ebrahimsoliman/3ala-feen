import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import animationData from '/public/animation/1.json'
import Lottie from 'react-lottie';

function About() {
    const defaultOptions = {
        loop            : true,
        autoplay        : true,
        animationData   : animationData,
    
    };
    return (
        <div  style={{backgroundColor: 'rgb(209 226 209 / 30%)'}}><Container>
            <Row>
                <Col md={8} xs={12} className={'d-flex align-items-center'}>
                    <div><h1>About us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae commodi corporis
                            debitis, esse est, fugiat harum inventore laudantium libero praesentium quam suscipit
                            voluptatum. In ipsum nam numquam omnis quos!</p>
                        <a href={'/about'}><Button>Read more</Button></a></div>
                </Col>
                <Col md={4} xs={12}>
                    <Lottie
                        options={defaultOptions}

                    />
                </Col>
            </Row></Container>
        </div>
    );
}

export default About;