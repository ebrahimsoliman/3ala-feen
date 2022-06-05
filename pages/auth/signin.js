import React, {useState, useEffect} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useRouter} from "next/router";

function Signin() {
    let userName = '';
    let password = '';
    const [user, setUser] = useState(null)
    if (typeof window != "undefined") {
        window.addEventListener('storage', () => {
            console.log('ss')
            setUser(JSON.parse(localStorage.getItem('user')))
        })
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    function login(user, pw, e) {
        e.preventDefault()
        fetch('http://localhost:1337/api/auth/local', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                identifier: user, password: pw
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
                    <Card.Title>Login</Card.Title>
                    <form onSubmitCapture={(e) => login(userName, password, e)}><Card.Text>
                        <Form.Label>Username</Form.Label>
                        <Form.Control required type="text" onChange={($event) => userName = $event.target.value}/>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="text" aria-required={true}
                                      onChange={event => password = event.target.value}/>
                    </Card.Text>
                        <Button type={"submit"} variant="primary">Login</Button></form>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default Signin;