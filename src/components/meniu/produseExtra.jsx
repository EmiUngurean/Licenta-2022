import React from 'react'
import ph1 from '../../assets/meniu/produseExtra/gogosari.jpg'
import ph2 from '../../assets/meniu/produseExtra/castraveti.jpg'
import ph3 from '../../assets/meniu/produseExtra/lapteBatut.jpg'
import ph4 from '../../assets/meniu/produseExtra/smantana.jpg'
import ph5 from '../../assets/meniu/produseExtra/chifla.jpg'
import ph6 from '../../assets/meniu/produseExtra/mamaliguta.jpg'
import ph7 from '../../assets/meniu/produseExtra/mujdei.jpg'
import ph8 from '../../assets/meniu/produseExtra/musta.png'
import ph9 from '../../assets/meniu/produseExtra/ketchup.jpg'
import ph10 from '../../assets/meniu/produseExtra/ardei-iuti.jpg'


import CardProduse from './cardProduse';

const ProduseExtra = () => {
  return (
    <div className="produseExtra">
    <h1 className='h1Produse'>Produse extra</h1>
    <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='Gogoșari' image={ph1} weight='140' price='4.25'/> 
            <CardProduse title='Castraveți în oțet' image={ph2} weight='150' price='2.23'/> 
            <CardProduse title='Lapte bătut' image={ph3} weight='200' price='3.20'/> 
            <CardProduse title='Smântână' image={ph4} weight='50' price='1.55'/> 
            <CardProduse title='Chiflă' image={ph5} weight='100' price='1.11'/> 
            <CardProduse title='Mămăliguță' image={ph6} weight='200' price='0.47'/> 
            <CardProduse title='Mujdei de usturoi' image={ph7} weight='80' price='1.45'/> 
            <CardProduse title='Muștar' image={ph8} weight='40' price='0.70'/> 
            <CardProduse title='Ketchup' image={ph9} weight='80' price='1.91'/> 
            <CardProduse title='Ardei iuți' image={ph10} weight='1 buc.' price='1.09'/> 
            {/* <CardProduse title='' image={ph} weight='' price=''/>  */}
  
            </div>
        </div>
    </div>
  )
}

export default ProduseExtra