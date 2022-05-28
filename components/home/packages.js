import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import ReactCardFlip from 'react-card-flip';
import {Button, Col, Container, Row} from "react-bootstrap";
import Link from "next/link";

function Packages() {
    /*function to handle flip for a single flip card to negate its variable and reset the local state of component 
        * the function accepts the index of card  */
    function flip(index) {
        let tmp = [...isFlipped];
        tmp[index] = !tmp[index];
        setIsFlipped(tmp);
    }

//array contains packages every package contains description
    let packages = [


        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`,


        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`,


        `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aperiam architecto
                            debitis delectus distinctio dolorem dolorum est facere harum ipsam, nam nihil quisquam
                            reiciendis repellat saepe sit soluta tenetur vel.`,]
    /*array of booleans to indicate which element is flipped or not and flip every element with flip function
    * with useState to re-evaluate the DOM (Browser) whenever isFlipped array changes with setIsFlipped*/
    let [isFlipped, setIsFlipped] = useState(Array(packages.length).fill(false))
    return (<Container className={'my-5 '}>
        <Row className={'mb-5'}><Col><h1>Best Packages</h1></Col></Row>
        <Row>
            {/*loop over the array of packages with card element and index to show Columns */}
            {packages.map((card, index) => <Col md={4} key={index}>
                {/* Single Slide to be repeated for each loop iteration*/}
                <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                    {/*Flip Card for each face on click call flip function to flip the card by negate isFlipped
                    element inside array*/}
                    {/*Front Face*/}
                    <div onClick={() => flip(index)}
                         style={{justifyContent: 'center', display: 'flex', height: '300px'}}>
                        <img src='/images/shared/close.png' className={'img-fluid h-100'} alt=""/>
                    </div>
                    {/*Back face*/}
                    <div onClick={() => flip(index)}>
                        <img src='/images/shared/open.png' className={'img-fluid img-back '} alt=""/>
                        <p className={'back-paragraph black'}>{card} </p>
                    </div>
                </ReactCardFlip>
            </Col>)}
        </Row><Row className={'justify-content-center'}><Col xs={'auto'}>
        {/*link to packages page*/}
        <Link href={'/packages'}>
            <Button>Know
                More</Button></Link></Col></Row>
    </Container>);
}

export default Packages;