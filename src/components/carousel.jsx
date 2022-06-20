import React from 'react';
import { Carousel } from 'react-bootstrap';
import img2 from '../assets/carousel/usv2.jpg'


const CarouselHomePage = () => {
  return (
    <Carousel className="carouselFirstSlide">
         <Carousel.Item>  
            <img className='CarouselFirstImage' src={img2} alt="CarouselHomePageSecondPhoto"/>
            <Carousel.Caption>        
                <h1 className='h1Carousel'>Bine ați venit la Restaurant USV!</h1>
                <p>Locul în care orice student vrea să mănânce!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>  
            <img className='CarouselFirstImage' src={img2} alt="CarouselHomePageSecondPhoto"/>
            <Carousel.Caption>        
            <h1 className='h1Carousel'>Bine ați venit la Restaurant USV!</h1>
                <p>Locul în care mancarea are alt gust!</p>
            </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item>  
            <img className='CarouselFirstImage' src={img2} alt="CarouselHomePageSecondPhoto"/>
            <Carousel.Caption>        
            <h1 className='h1Carousel'>Bine ați venit la Restaurant USV!</h1>
                <p>Locul în care mancarea are alt gust!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHomePage