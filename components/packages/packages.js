import React, {Fragment, useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import {Button, Col, Container, Modal, Row, Form} from "react-bootstrap";

function Packages() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function flip(index) {
        let tmp = [...isFlipped];
        tmp[index] = !tmp[index];
        setIsFlipped(tmp);
    }

    let packages = [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`, `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`, `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`, `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`, `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`, `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`, `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`]


    let [isFlipped, setIsFlipped] = useState(Array(packages.length).fill(false))
    return (<Fragment>
        <Container className={'my-5 '}>

            <Row className={'mb-5'}><Col><h1>Best Destinations</h1></Col></Row>

            <Row>
                <Col md={12}><Button className={'w-100'} onClick={() => handleShow()}>Create Package</Button></Col>
                {packages.map((card, index) =>
                    <Col md={4} key={index}>
                        <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                            <div onClick={() => flip(index)}
                                 style={{justifyContent: 'center', display: 'flex', height: '300px'}}>
                                <img src='/images/shared/close.png' className={'img-fluid'} alt=""/>
                            </div>

                            <div onClick={() => flip(index)}>
                                <img src='/images/shared/open.png' className={'img-fluid img-back'} alt=""/>
                                <p className={'back-paragraph black'}>{card} <br/>
                                    <a href={'/packages/' + index}><Button
                                        className={'m-auto mt-3'}>
                                        Details
                                    </Button></a></p>

                            </div>
                        </ReactCardFlip>
                    </Col>)}</Row>

        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}/>
                <Form.Label>Price</Form.Label>
                <Form.Control type={'text'} rows={3}/>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Create Package
                </Button>
            </Modal.Footer>
        </Modal></Fragment>);
}

export default Packages;