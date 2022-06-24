import React from 'react'
import ph1 from '../../assets/meniu/preparateVita/friptura-vita.jpg'
import ph2 from '../../assets/meniu/preparateVita/rasol.jpg'

import CardProduse from './cardProduse'

const PreparateVita = (props) => {
  return (
    <div className="vita">
        <h1 className='h1Produse'>Preparate din carne de vită</h1>
        <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='Friptură de vită' image={ph1} weight='200' price='13.87'/>
            <CardProduse title='Rasol afumat dezosat' image={ph2} weight='200' price='13.80'/>
            </div>
        </div>
    </div>
  )
}

export default PreparateVita