import React, {Fragment, useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {useRouter} from "next/router";

function DisDetails() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter();
    console.log(router.query)
    let crd = [{
        image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Luxor', image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }]
    return (<Fragment><Container className={'p-55'}>
            <Row className={'p-55'}><Col className={'mb-5'}><p>{crd[router.query.id]?.text}</p> <Button
                onClick={handleShow}>Reserve</Button></Col><Col md={2}><img
                className={'img-fluid'} src={crd[router.query.id]?.image} alt=""/></Col></Row>
        </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Adult</Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>Children</Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>check in date</Form.Label>
                    <Form.Control type="date"/>
                    <Form.Label>check out date</Form.Label>
                    <Form.Control type="date"/>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3}/>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Reserve Now
                    </Button>
                </Modal.Footer>
            </Modal></Fragment>);
}

export default DisDetails;