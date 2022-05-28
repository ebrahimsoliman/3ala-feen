import React from 'react';
import {Button, Carousel} from "react-bootstrap";
import Link from "next/link";

function CarouselSection() {
    return (
        <div>
            {/*Bootstrap Slider (Carousel)*/}
            <Carousel>
                {/*Single Slide # 1*/}
                <Carousel.Item>
                    {/*Slide Image*/}
                    <img
                        className="d-block w-100  vh-100"
                        src="/images/home/headerCarousel/1.jpg"
                        alt="First slide"
                    />
                    {/*SLide Caption*/}
                    <Carousel.Caption>
                        <h3>We offer you the best travel packages in Egypt</h3>
                        {/*Slide Call To Action -> Destinations page*/}
                        <Link href={'/destnation'}><Button>Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                {/*Single Slide # 2*/}

                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="/images/home/headerCarousel/2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>We offer you the best travel packages in Egypt</h3>
                        <Link href={'/destnation'}><Button>Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                {/*Single Slide # 3*/}
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="/images/home/headerCarousel/3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>We offer you the best travel packages in Egypt</h3>
                        <Link href={'/destnation'}><Button>Explore</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselSection;