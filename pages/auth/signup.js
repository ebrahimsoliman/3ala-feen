import React, {useState, useEffect} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useRouter} from "next/router";

function Signup() {
    const [user, setUser] = useState(null)
    if (typeof window != "undefined") {
        window.addEventListener('storage', () => {
            setUser(JSON.parse(localStorage.getItem('user')))
        })
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    function signup(e) {
        e.preventDefault()

        fetch('http://localhost:1337/api/auth/local/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
                address: e.target.address.value,
                phone: e.target.phone.value,
            })
        }).then(function (response) {
            if (response.ok) {
                response.json().then(data => {
                    localStorage.setItem('user', JSON.stringify(data))
                    window.location.href = '/'

                })
            }
        })
    }

    if (!user) {
        return (<div className={'vh-100 d-flex justify-content-center align-items-center'}>
            <Card style={{width: '18rem'}}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Card.Img variant="top" src="/images/shared/logo-en.jpeg" className={'img-fluid m-auto'}/>
                <Card.Body>
                    <Card.Title>Signup</Card.Title>
                    <form onSubmit={(e) =>
                        signup(e)
                    }><Card.Text>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name={'username'} required type="text"/>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name={'email'} required type="text"/>
                        <Form.Label> Password</Form.Label>
                        <Form.Control required name={'password'} type="text"/>

                        <Form.Label>Address</Form.Label>
                        <Form.Control name={'address'} required type="text"/>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name={'phone'} required type="text"/>
                    </Card.Text>
                        <Button type={"submit"} variant="primary">Signup</Button></form>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default Signup;