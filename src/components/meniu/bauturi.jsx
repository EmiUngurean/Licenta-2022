import React from 'react'
import ph1 from '../../assets/meniu/bauturi/cafea.jpg'
import ph2 from '../../assets/meniu/bauturi/apa.jpg'

import CardProduse from './cardProduse';
const Bauturi = () => {
  return (
    <div className="bauturi">
    <h1 className='h1Produse'>Băuturi</h1>
    <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='Cafea expresso' image={ph1} weight='1 buc.' price='1.30'/> 
            <CardProduse title='Apă dozator' image={ph2} weight='' price='0'/> 
            </div>
        </div>
    </div>
  )
}

export default Bauturi