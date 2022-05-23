import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useRouter} from "next/router";

function DisDetails() {
    const router = useRouter();
    console.log(router.query)
    let crd = [{
        gov: 'Alexandria', image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    },
        {
        gov: 'Cairo', image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Luxor', image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Aswan', image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Alexandria', image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Sinai', image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        gov: 'Cairo', image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }]
    return (
        <Container className={'pt-55'}>
            <Row><Col className={'mt-5'}><img src={crd[router.query.id]?.image} alt=""/></Col></Row>
            <Row><Col  className={'my-3 fw-bold'}><h4>{crd[router.query.id]?.gov}</h4></Col></Row>
            <Row><Col className={'mb-5'}><p>{crd[router.query.id]?.text}</p></Col></Row>
        </Container>
    );
}

export default DisDetails;