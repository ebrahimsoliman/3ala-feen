import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import ReactCardFlip from 'react-card-flip';
import {Button, Col, Container, Nav, Row} from "react-bootstrap";

function Packages() {

    function flip(index) {
        let tmp = [...isFlipped];
        tmp[index] = !tmp[index];
        setIsFlipped(tmp);
    }

    function filter(gov) {
        let tmp = [...crd];
        tmp = tmp.filter(function (item) {
            return item.gov === gov
        });

        setCards(tmp);
    }

    let govs = ['Alexandria', 'Cairo', 'Aswan', 'Luxor', 'Sinai']
    let crd = [{
        gov: 'Alexandria', image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Cairo', image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Luxor', image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Aswan', image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Alexandria', image: '/images/shared/close.png', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Sinai',
        image: '/images/shared/close.png',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Cairo', image: '/images/shared/close.png',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }]


    let [cards, setCards] = useState([...crd])
    let [isFlipped, setIsFlipped] = useState(Array(cards.length).fill(false))
    return (<Container className={'my-5 '}>
        <Row><Col><Nav variant="tabs" defaultActiveKey="/home">
            {govs.map((gov, index) => <Nav.Item key={index}>
                <Nav.Link onClick={() => filter(gov)}>{gov}</Nav.Link>
            </Nav.Item>)}


        </Nav></Col></Row>
        <Row className={'mb-5'}><Col><h1>Best Destinations</h1></Col></Row>

        <Row>{cards.map((card, index) => <Col md={4} className={'mb-4'} key={index}>
            <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                <div onClick={() => flip(index)} style={{justifyContent: 'center', display: 'flex', height: '300px'}}>
                    <img src={card.image} className={'img-fluid'} alt=""/>
                </div>

                <div onClick={() => flip(index)}>
                    <img src='/images/shared/open.png' className={'img-fluid img-back '} alt=""/>
                    <p className={'back-paragraph black'}>{card.text} <br/> <a href={'/packages/' + index}><Button
                        className={'m-auto mt-3'}>
                        Details
                    </Button></a></p>

                </div>
            </ReactCardFlip>
        </Col>)}</Row>

    </Container>);
}

export default Packages;