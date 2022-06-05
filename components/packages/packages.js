import React, {Fragment, useEffect, useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import {Button, Col, Container, Modal, Row, Form} from "react-bootstrap";

function Packages() {
    const [user, setUser] = useState(null)
    if (typeof window != "undefined") {
        window.addEventListener('storage', () => {
            setUser(JSON.parse(localStorage.getItem('user')))
            console.log(user)
        })
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        console.log(user)
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [packages, setPackages] = useState([])

    function fetchPackages() {
        fetch('http://localhost:1337/api/packages').then(function (response) {
            response.json().then(data => {
                console.log(data.data)
                setPackages(data.data)
            })
        })
    }

    function createPackage(e) {
        e.preventDefault()
        fetch('http://localhost:1337/api/packages', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                data: {
                    description: e.target.description.value,
                    price: e.target.price.value,
                    location: e.target.location.value
                }
            })
        }).then(function (response) {
            if (response.ok) {
                fetchPackages();
            }
        })
    }

    function deletePackage(id) {
        let confirmed = confirm('Are you sure to delete')

        if (confirmed) {
            fetch(`http://localhost:1337/api/packages/${id}`, {
                method: 'DELETE'
            }).then(function (response) {
                if (response.ok) {
                    fetchPackages();
                }
            })
        }

    }

    useEffect(() => {
        fetchPackages()
    }, [])

    function flip(index) {
        let tmp = [...isFlipped];
        tmp[index] = !tmp[index];
        setIsFlipped(tmp);
    }

    let [isFlipped, setIsFlipped] = useState(Array(packages.length).fill(false))
    return (<Fragment>
        <Container className={'my-5 '}>

            <Row className={'mb-5'}><Col><h1>Best Destinations</h1></Col></Row>

            <Row>
                {user?.user.type == 'company' ? <Col md={12}><Button className={'w-100'} onClick={() => handleShow()}>Create
                    Package</Button></Col> : ''}
                {packages.map((card, index) => <Col md={4} key={index}>
                    <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                        <div onClick={() => flip(index)}
                             style={{justifyContent: 'center', display: 'flex', height: '300px'}}>
                            <img src='/images/shared/close.png' className={'img-fluid'} alt=""/>
                        </div>

                        <div onClick={() => flip(index)}>
                            <img src='/images/shared/open.png' className={'img-fluid img-back'} alt=""/>
                            <p className={'back-paragraph black w-100'}>{card.attributes.description} <br/>
                                <a href={'/packages/' + card.id}><Button
                                    className={'m-auto mt-3'}>
                                    Details
                                </Button></a> {user?.user.type == 'company' ?
                                    <Button onClick={() => deletePackage(card.id)} variant={'danger'}
                                            className={'m-auto mt-3'}>
                                        Delete
                                    </Button> : ''}</p>

                        </div>
                    </ReactCardFlip>
                </Col>)}</Row>

        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Reservation</Modal.Title>
            </Modal.Header>
            <form onSubmit={(e) => createPackage(e)}><Modal.Body>

                <Form.Label>Description</Form.Label>
                <Form.Control name={'description'} as="textarea" rows={3}/>
                <Form.Label>Price</Form.Label>
                <Form.Control name={'price'} type={'text'} rows={3}/>
                <Form.Label>Location</Form.Label>
                <Form.Control name={'location'} type={'text'} rows={3}/>


            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type={'button'} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type={'submit'} onClick={handleClose}>
                        Create Package
                    </Button>
                </Modal.Footer></form>
        </Modal></Fragment>);
}

export default Packages;