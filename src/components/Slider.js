import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const Slider = () => {
    return (

        <Carousel >
            <Carousel.Item interval={1000}>
                <img id="carousel-img"

                    className="d-bloc w-100 "
                    src='/melbourne.jpg'
                    alt="Gold coast"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    id="carousel-img"
                    className="d-block w-100"
                    src="/sydney.jpg"
                    alt="Sydney"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    id="carousel-img"
                    className="d-block w-100"
                    src="/map.jpg"
                    alt="Australia Map"
                />

            </Carousel.Item>
        </Carousel>

    )
}

export default Slider