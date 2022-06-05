import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {useRouter} from "next/router";

function DisDetails() {
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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter();
    let id = router.query.id
    const [packageObj, setPackageObj] = useState({})
    useEffect(() => {
        if (id) {
            getPackage()
        }
    }, [id])

    function reserve(e) {
        e.preventDefault()

        if (user) {
            fetch('http://localhost:1337/api/reservations', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    data: {
                        travelers: (e.target.adult.value * 1) + (e.target.child.value * 1),
                        check_in: e.target.check_in.value,
                        check_out: e.target.check_out.value,
                        comment: e.target.comment.value,
                        package: id,
                        users_permissions_user: user.user.id
                    }
                })
            })
        } else {
            window.location.href = '../auth/signin'
        }
    }

    function getPackage() {
        fetch(`http://localhost:1337/api/packages/${id}`).then(function (response) {
            if (response.ok) {
                response.json().then(data => {
                    setPackageObj(data.data.attributes)
                })
                // setPackageObj(response.data.data.attributes)
            }
        })
    }

    return (<Fragment><Container className={'p-55'}>
        <Row className={'p-55'}><Col className={'mb-5'}>

            <h4>Price: {packageObj.price} </h4>
            <h5>Location: {packageObj.location} </h5>
            <p>{packageObj.description}</p> <Button
            onClick={handleShow}>Reserve</Button></Col><Col md={2}><img
            className={'img-fluid'} src='/images/shared/close.png' alt=""/></Col></Row>
    </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Reservation</Modal.Title>
            </Modal.Header>
            <form onSubmit={(e) => reserve(e)}><Modal.Body>
                <Form.Label>Adult</Form.Label>
                <Form.Control name={'adult'} type="number"/>
                <Form.Label>Children</Form.Label>
                <Form.Control name={'child'} type="number"/>
                <Form.Label>check in date</Form.Label>
                <Form.Control name={'check_in'} type="date"/>
                <Form.Label>check out date</Form.Label>
                <Form.Control name={'check_out'} type="date"/>
                <Form.Label>Comment</Form.Label>
                <Form.Control name={'comment'} as="textarea" rows={3}/>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type={"button"} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type={"submit"} onClick={handleClose}>
                        Reserve Now
                    </Button>
                </Modal.Footer></form>
        </Modal></Fragment>);
}

export default DisDetails;