import React from 'react'
import contactImage from '../../assets/bodyHomePage/restaurant_03.jpg'
import GalleryHomePage from '../gallery'

const Despre = () => {
  return (
    <div className='despre'>
    <div className='container'>
      <div className='infdo'>
        <div className="row"> 
        <div className="column">
        <img src={contactImage} className='despreImage' alt="About Photo" />
        </div>
        <div className="column" id='infoDespre'>
        <strong>Servicii: </strong> <p>Servire prânz și cină în sistem „à la carte”. Prețul mediu pentru 2 mese este în jur de 35 lei.
                                Meniul zilnic este prezentat la avizierul restaurantului.</p>
        <strong>Capacitate: </strong>  <p>Cantina noastră dispune de 240 locuri/serie.</p>
        <strong>Regia: </strong> <p>40% – pentru studenții căminizați, 75% pentru studenții care nu locuiesc în cămine şi 95% pentru personalul didactic, didactic auxiliar şi de cercetare din universitate.</p>
        </div>
        </div>    
      </div>
    </div>
    <div className='galerieDespreNoi'>
    <GalleryHomePage/>
    </div>
    
  </div>
  )
}

export default Despre