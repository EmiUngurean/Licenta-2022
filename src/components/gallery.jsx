import React from 'react'
import img11 from '../assets/bodyHomePage/cantina1.jpg'
import img12 from '../assets/bodyHomePage/cantina2.jpg'


const GalleryHomePage = () => {
    return (
        <div className='conta'>
            <div className='row'>
            <div className='column'>
            <img src={img11} alt="Cinque Terre"  />
            <img src={img12} alt="Cinque Terre"   />
            <img src={img11} alt="Cinque Terre"   />
            <img src={img11} alt="Cinque Terre"   />
            <img src={img11} alt="Cinque Terre"  />
            <img src={img11} alt="Cinque Terre"  />
            </div>

            <div className='column'>
            <img src={img11} alt="Cinque Terre"   />
            <img src={img11} alt="Cinque Terre" />
            <img src={img11} alt="Cinque Terre"  />
            <img src={img11} alt="Cinque Terre"   />    
            </div>
        </div>
        </div>
    )
}

 export default GalleryHomePage