import React from 'react'
import ph1 from '../../assets/meniu/desert/prajitura.webp'
import ph2 from '../../assets/meniu/desert/clatite-dulceatea.jpg'
import ph3 from '../../assets/meniu/desert/clatite-branza.jpg'
import ph4 from '../../assets/meniu/desert/clatite-ciocolata.jpg'
import ph5 from '../../assets/meniu/desert/budinca.jpg'
import ph6 from '../../assets/meniu/desert/eclere.jpg'
import ph7 from '../../assets/meniu/desert/negresa.jpg'

import CardProduse from './cardProduse';

const Desert = () => {
  return (
    <div className="desert">
    <h1 className='h1Produse'>Desert</h1>
    <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='Prăjituri' image={ph1} weight='100' price='7.48'/> 
            <CardProduse title='Clătite cu dulceață' image={ph2} weight='1 buc.' price='2.95'/> 
            <CardProduse title='Clătite cu brânză' image={ph3} weight='1 buc.' price='3.68'/> 
            <CardProduse title='Clătite cu ciocolată' image={ph4} weight='1 buc.' price='3.57'/> 
            <CardProduse title='Budincă de paste cu brânză de vacă' image={ph5} weight='200' price='3.76'/> 
            <CardProduse title='Eclere' image={ph6} weight='1 buc.' price='3.67'/> 
            <CardProduse title='Negresă' image={ph7} weight='130' price='3.56'/> 
            </div>
        </div>
    </div>
  )
}

export default Desert