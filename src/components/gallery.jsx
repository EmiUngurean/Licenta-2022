import React from 'react'
import img11 from '../assets/bodyHomePage/cantina1.jpg'
import img12 from '../assets/galleryImages/cantina11.jpg'


const GalleryHomePage = () => {
    return (
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
                    <img className='galleryImage' src={img12} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={img12} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={img12} alt="Cinque Terre" />
                </div>
                <div className='column' id='column'>
                    <img className='galleryImage' src={img12} alt="Cinque Terre" />
                </div>
            </div>
        </div>
    )
}

export default GalleryHomePage