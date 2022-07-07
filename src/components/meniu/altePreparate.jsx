import React from 'react'
import ph1 from '../../assets/meniu/altePreparate/ardei-umpluti.jpg'
import ph2 from '../../assets/meniu/altePreparate/cascavalpane.jpg'
import ph3 from '../../assets/meniu/altePreparate/mamaliga-cu-branza-si-smantana.jpg'

import CardProduse from './cardProduse';

const AltePreparate = () => {
  return (
    <div className="altePreparate">
    <h1 className='h1Produse'>Alte preparate</h1>
    <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='Ardei umpluți' image={ph1} weight='250' price='11.25'/> 
            <CardProduse title='Cașcaval pane' image={ph2} weight='130' price='7.40'/> 
            <CardProduse title='Mămăliguță cu brânză și smântână' image={ph3} weight='200' price='6.63'/> 
            </div>
        </div>
    </div>
  )
}

export default AltePreparate