import React from 'react'
import contactImage from '../../assets/bodyHomePage/cantina1.jpg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='inffo'>
          <div className="row"> 
          <div className="column">
          <img src={contactImage} className='contactImage' alt="Contact Photo" />
          </div>
          <div className="column" id='info'>
          <strong>Adresă: </strong> <p>Str. Universității nr. 13</p>
          <strong>Zonă: </strong>  <p>Campus</p>
          <strong>Administrator: </strong>  <p>Loredana Leonte</p>
          <strong>Telefon administrator: </strong>  <p>0230/216147 interior 216</p>
          <strong>Perioada de funcționare: </strong>  <p>1 octombrie - 31 iulie  /  Luni - Vineri: 12:00-20:00  </p>
          </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Contact