import React from 'react';
import {Button, Carousel} from "react-bootstrap";

function CarouselSection() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100  vh-100"
                        src="/images/home/headerCarousel/1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>We offer you the best travel packages in Egypt</h3>
                        <Button>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="/images/home/headerCarousel/2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We offer you the best travel packages in Egypt</h3>
                        <Button>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="/images/home/headerCarousel/3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We offer you the best travel packages in Egypt</h3>
                        <Button>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselSection;