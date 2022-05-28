import React, {useState} from 'react';
import 'swiper/css';
import ReactCardFlip from 'react-card-flip';
import {Button, Col, Container, Nav, Row} from "react-bootstrap";

function DestCom() {

    function flip(index) {
        let tmp = [...isFlipped];
        tmp[index] = !tmp[index];
        setIsFlipped(tmp);
    }

    function checkFilter(item, gov) {

        if (gov === 'All')
            return true
        else
            return item.gov === gov
    }

    function filter(gov) {
        let tmp = [...destinations];
        tmp = tmp.filter((item) => checkFilter(item, gov));
        setCards(tmp);
    }

    let govs = ['All', 'Alexandria', 'Cairo', 'Aswan', 'Luxor', 'Sinai']
    let destinations = [{
        gov: 'Alexandria', image: '/images/home/distenations/1-front.jpg', text: `Alexandria ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Cairo', image: '/images/home/distenations/1-front.jpg', text: `Cairo ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Luxor', image: '/images/home/distenations/1-front.jpg', text: `Luxor ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Aswan', image: '/images/home/distenations/1-front.jpg', text: `Aswan ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Alexandria', image: '/images/home/distenations/1-front.jpg', text: `Alexandria ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Sinai', image: '/images/home/distenations/1-front.jpg', text: `Sinai ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Cairo', image: '/images/home/distenations/1-front.jpg', text: `Cairo ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }]


    let [cards, setCards] = useState([...destinations])
    let [isFlipped, setIsFlipped] = useState(Array(cards.length).fill(false))
    return (<Container className={'my-5 '}>
        <Row><Col><Nav variant="tabs" defaultActiveKey="/home">
            {govs.map((gov, index) =>
                <Nav.Item key={index}>
                    <Nav.Link onClick={() => filter(gov)}>{gov}</Nav.Link>
                </Nav.Item>)}


        </Nav></Col></Row>
        <Row className={'mb-5'}><Col><h1>Best Destinations</h1></Col></Row>

        <Row>{cards.map((card, index) => <Col md={6} className={'mb-4'} key={index}>
            <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                <div onClick={() => flip(index)}>
                    <img src={card.image} className={'img-fluid'} alt=""/>
                </div>

                <div onClick={() => flip(index)}>
                    <img src={card.image} className={'img-fluid img-back'} alt=""/>
                    <p className={'back-paragraph'}>{card.text} <br/> <a href={'/destnation/' + index}><Button
                        className={'m-auto mt-5'}>
                        Details
                    </Button></a></p>

                </div>
            </ReactCardFlip>
        </Col>)}</Row>

    </Container>);
}

export default DestCom;