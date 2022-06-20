import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './images.css'

const Images = () => {
  return (
    <div className="row">
      <Carousel interval="4000">
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Downtown Allentown"
            src="https://i.imgur.com/ksN9Ffe.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/kjOCJcp.jpg"
            alt="Bethlehem Steel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/5LTgauw.jpeg"
            alt="Lehigh Valley Allentown"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/iXjFfkT.jpeg"
            alt="Dorney Park"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/GwcEeJ8.jpeg"
            alt="Restaurant"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/yLNa1i8.png"
            alt="Ironpigs"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/WKDnoss.jpeg"
            alt="Nature View"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/4TE6RLz.jpeg"
            alt="Lehigh Valley Mall"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/Hcs227V.jpeg"
            alt="Night View"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Images