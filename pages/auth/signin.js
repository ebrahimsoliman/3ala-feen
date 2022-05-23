import React from 'react';
import {Button, Card, Form} from "react-bootstrap";

function Signin() {
    return (<div className={'vh-100 d-flex justify-content-center align-items-center'}>
        <Card style={{width: '18rem'}}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Card.Img variant="top" src="/images/shared/logo-en.jpeg" className={'img-fluid m-auto'}/>
            <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text"/>
                </Card.Text>
                <Button variant="primary">Login</Button>
            </Card.Body>
        </Card>
    </div>);
}

export default Signin;