import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import ReactCardFlip from 'react-card-flip';
import {Col, Container, Row} from "react-bootstrap";

function Destinations() {
    /*function to handle flip for a single flip card to negate its variable and reset the local state of component 
    * the function accepts the index of card  */
    function flip(index) {
        //copy is flipped array content into new temp array 
        let tmp = [...isFlipped];
        //negate array element with it index 
        tmp[index] = !tmp[index];
        //Set local state with temp array
        setIsFlipped(tmp);
    }

//array contains destinations every destinations contains image and text
    let destinations = [{
        image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }, {
        image: '/images/home/distenations/1-front.jpg', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
    }]
    /*array of booleans to indicate which element is flipped or not and flip every element with flip function
    * with useState to re-evaluate the DOM (Browser) whenever isFlipped array changes with setIsFlipped*/
    let [isFlipped, setIsFlipped] = useState(Array(destinations.length).fill(false))
    return (<Container className={'my-5 '}>
        <Row className={'mb-5'}>
            <Col>
                <h1>Best Destinations</h1>
            </Col>
        </Row>
        {/*Swiper Carousel with options like responsive cards {one card with screens < 600px else three card} and space between cards 50px */}
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{600: {slidesPerView: 3}}}
        >
            {/*loop over the array of destinations with card element and index to show slides */}
            {destinations.map((card, index) =>
                // Single Slide to be repeated for each loop iteration
                <SwiperSlide key={index}>
                    {/*Flip Card for each face on click call flip function to flip the card by negate isFlipped
                    element inside array*/}
                    <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                        {/*Front Face*/}
                        <div onClick={() => flip(index)}>
                            <img src={card.image} className={'img-fluid'} alt=""/>
                        </div>
                        {/*Back Face*/}
                        <div onClick={() => flip(index)}>
                            <img src={card.image} className={'img-fluid img-back'} alt=""/>
                            <p className={'back-paragraph'}>{card.text}</p>
                        </div>
                    </ReactCardFlip>
                </SwiperSlide>)}
        </Swiper>
    </Container>);
}

export default Destinations;