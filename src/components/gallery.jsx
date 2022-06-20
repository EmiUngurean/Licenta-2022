import React from 'react'
import img11 from '../assets/bodyHomePage/cantina1.jpg'
import img12 from '../assets/galleryImages/cantina11.jpg'
import i1 from '../assets/carousel/usv1.jpg'
import i2 from '../assets/carousel/usv2.jpg'
import i3 from '../assets/carousel/usv3.jpg'
import i5 from '../assets/bodyHomePage/restaurant_02.jpg'
import i4 from '../assets/bodyHomePage/cantina4.jpg'
import i6 from '../assets/bodyHomePage/restaurant_03.jpg'


const GalleryHomePage = () => {
    return (
        <div className="gallery">
            <div className='container'>
            <h1 className='h1Gallery'>Galerie Foto</h1>
            <hr />
            <div className='row' id='row'>
                <div className='column' id='column'>
                    <img className='galleryImage' src={img11} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={img12} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={i1} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={i2} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={i3} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={i4} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={i5} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={i6} alt="Cinque Terre" />
                </div>
            </div>
        </div>
        </div>
    
    )
}

export default GalleryHomePage