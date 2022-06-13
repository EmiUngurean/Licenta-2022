import React from 'react';
import img from '../assets/bodyHomePage/cantina1.jpg';
import img1 from '../assets/bodyHomePage/cantina2.jpg';
import img2 from '../assets/bodyHomePage/cantina3.jpg';
import { Carousel } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className='cont'>
        <div className='imageText'>
            <div className='row'>
                <div className='homePage'>
                    <div className='imageCantina'>
                    <Carousel className="carousel-inner">
                        <Carousel.Item>  
                            <img className='item' src={img} alt="CarouselHomePageSecondPhoto"/>
                        </Carousel.Item>
                        <Carousel.Item>  
                            <img className='item' src={img1} alt="CarouselHomePageSecondPhoto"/>
                        </Carousel.Item> 
                        <Carousel.Item>  
                            <img className='item' src={img2} alt="CarouselHomePageSecondPhoto"/>
                        </Carousel.Item>
                    </Carousel>     
                        <div className='textImgCantina'>
                            <p> Servire prânz și cină "à la carte"
                                Preț mediu 2 mese: 35 lei
                                Meniul zilnic este prezentat la avizierul restaurantului.
                            </p>
                        </div>                              
                    </div>
                </div>
            </div> 
        </div>   
    </div>
  )
}

export default HomePage