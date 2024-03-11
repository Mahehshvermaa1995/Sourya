import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg'; 
import slider3 from '../Assets/slider3.jpg';
import { Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="p-1">
      <Carousel  >
        <Carousel.Item>
        <Image src={slider1} alt="Slider 1" fluid />
        
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src={slider2} alt="Slider 1" fluid />
          <Carousel.Caption>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src={slider3} alt="Slider 1" fluid />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
