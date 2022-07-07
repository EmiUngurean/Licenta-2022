import React from 'react'
import ph1 from '../../assets/meniu/salate/salata-coleslaw-1.jpg'
import ph2 from '../../assets/meniu/salate/salata-de-varza.jpg'
import ph3 from '../../assets/meniu/salate/salata-rosii.jpg'
import ph4 from '../../assets/meniu/salate/ton.jpg'


import CardProduse from './cardProduse';

const Salate = () => {
  return (
    <div className="salate">
        <h1 className='h1Produse'>Salate</h1>
        <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='Salată coleslaw' image={ph1} weight='200' price='3.25'/>
            <CardProduse title='Salată de varză' image={ph2} weight='150' price='1.09'/>
            <CardProduse title='Salată cu roșii și castraveți' image={ph3} weight='150' price='2.44'/>
            <CardProduse title='Salată de ton cu porumb' image={ph4} weight='300' price='10.71'/>
            
            </div>
        </div>
    </div>
  )
}

export default Salate