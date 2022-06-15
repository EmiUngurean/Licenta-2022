import React from 'react';
import img from '../assets/bodyHomePage/cantina1.jpg';

const HomePage = () => {
  return (
    <div className='continer'>
        <div className='imag'>
        <img className='imgCantina' src={img} alt="imagine cantina" /> 
          <div className='textImgCantina'>   
             <h3>Restaurant USV</h3>
             <p>Localizat în campusul Universității ”Ștefan cel Mare” Suceava, restaurantul USV vă pune înaintea dvs. o gama variata de mâncăruri
                calde, accesibile pentru buzunarul fiecărui student.
                Noi oferim servirea prânzului și a cinei in sistem „à la carte”.<br/>
                <br/> 
                Vino și convinge-te chiar singur!   
                      
            </p>
            <hr />        
         </div>
        </div>
    </div>          
  )
}

export default HomePage