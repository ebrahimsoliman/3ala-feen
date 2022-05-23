import React from 'react';
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

function FooterComponent() {
    return (<div  className={'footer py-5'}><Container><Row>
        <Col md={3}><img src="/images/shared/sympol.png" className={'img-fluid'} alt=""/></Col>
        <Col className={'flx'}>
            <div><h4>Contact Us</h4>
                <ul>
                    <li>+20123456789</li>
                    <li>3alafen@gmail.com</li>
                    <li>Egypt</li>
                </ul>
            </div>
        </Col>
        <Col className={'flx'}>
            <div><h4>Useful links</h4>
                <ul>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>About Us</li>
                    <li>Packages</li>
                    <li>Contact Us</li>
                </ul>
            </div>


        </Col>
        <Col className={'flx'}>
            <div>
                <h4>Get latest news & offers</h4>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
                <p>Join us - get social</p>
                <p><a href=""></a><a href=""></a><a href=""></a></p></div>
        </Col>
    </Row></Container></div>);
}

export default FooterComponent;