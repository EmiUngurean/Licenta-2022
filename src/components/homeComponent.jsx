import React from 'react';
import CarouselHomePage from '../components/carousel';
import Home from '../components/home';
import HomePage from '../components/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeComponent = () => {
  return (
    <div className='aa'>
        <CarouselHomePage/>
        <Home/>
        <HomePage/>
    </div>
  )
}

export default HomeComponent