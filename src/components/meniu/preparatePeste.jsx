import React from 'react'
import ph1 from '../../assets/meniu/preparatePeste/merluciu.jpg'
import ph2 from '../../assets/meniu/preparatePeste/salau.jpg'
import ph3 from '../../assets/meniu/preparatePeste/pastrav-intreg.jpg'
import ph4 from '../../assets/meniu/preparatePeste/pastrav-prajit.jpg'

import CardProduse from './cardProduse'

const PreparatePeste = () => {
  return (
    <div className="peste">
        <h1 className='h1Produse'>Preparate din carne de pește</h1>
        <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='File de merluciu pane' image={ph1} weight='120' price='12.68'/>
            <CardProduse title='File de șalău prăjit' image={ph2} weight='120' price='16.25'/>
            <CardProduse title='Păstrăv întreg prăjit' image={ph3} weight='1 buc.' price='17.48'/>
            <CardProduse title='File de păstrăv prăjit' image={ph4} weight='110' price='11.48'/>
            </div>
        </div>
    </div>
  )
}

export default PreparatePeste