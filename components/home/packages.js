import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import ReactCardFlip from 'react-card-flip';
import {Col, Container, Row} from "react-bootstrap";

function Packages() {

    function flip(index) {
        let tmp = [...isFlipped];
        tmp[index] = !tmp[index];
        setIsFlipped(tmp);
    }

    let cards = [
        {
            image: '/images/shared/close.png',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
        },
        {
            image: '/images/shared/close.png',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
        },
        {
            image: '/images/shared/close.png',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`
        },
      ]
    let [isFlipped, setIsFlipped] = useState(Array(cards.length).fill(false))
    return (<Container className={'my-5 '}>
        <Row className={'mb-5'}><Col><h1>Best Packages</h1></Col></Row>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{600: {slidesPerView: 3}}}
        >
            {cards.map((card, index) => <SwiperSlide key={index}>
                <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                    <div onClick={() => flip(index)} style={{justifyContent:'center', display:'flex',height:'300px'}}>
                        <img src={card.image} className={'img-fluid h-100'} alt=""/>
                    </div>

                    <div onClick={() => flip(index)}>
                        <img src='/images/shared/open.png' className={'img-fluid img-back '} alt=""/>
                        <p className={'back-paragraph black'}>{card.text}</p>
                    </div>
                </ReactCardFlip>
            </SwiperSlide>)}
        </Swiper>
    </Container>);
}

export default Packages;