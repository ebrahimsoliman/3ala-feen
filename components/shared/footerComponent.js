import React from 'react';
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

function FooterComponent() {
    /*
    * Grid Layout By Bootstrap
    * Divides page content into grid components by rows and columns
    * each row has 12 columns
    * it can be nested (every column can contain new grid lay out (rows and columns))
    * and it has responsive aspects like col-12 (starting from extra-small screens) and col-md-6 (in medium screens)*/
    return (<div  className={'footer py-5'}>
        <Container><Row>
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
                        Subscribe
                    </Button>
                </InputGroup>
                <p>Join us - get social</p>
            </div>
        </Col>
    </Row></Container></div>);
}

export default FooterComponent;