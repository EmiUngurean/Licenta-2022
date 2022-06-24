import React from 'react'
import pp1 from '../../assets/meniu/preparatePui/piept-de-pui-pane.jpg'
import pp2 from '../../assets/meniu/preparatePui/piept-de-pui-la-gratar.jpg'
import pp3 from '../../assets/meniu/preparatePui/ficatei-de-pui.jpg'
import pp4 from '../../assets/meniu/preparatePui/aripioare-de-pui.jpg'
import pp5 from '../../assets/meniu/preparatePui/piept-pui-gratinat.jpg'
import pp6 from '../../assets/meniu/preparatePui/pulpe-de-pui.jpg'
import pp7 from '../../assets/meniu/preparatePui/pulpe-de-pui-la-grata.jpg'
import pp8 from '../../assets/meniu/preparatePui/pulpe-pui-inferioare.jpg'
import pp9 from '../../assets/meniu/preparatePui/pui-rotisor.jpg'
import pp10 from '../../assets/meniu/preparatePui/ostropel-de-pui.jpg'
import pp11 from '../../assets/meniu/preparatePui/cordon-bleu.webp'
import pp12 from '../../assets/meniu/preparatePui/pui-cu-smantana.jpg'

import CardProduse from './cardProduse';

const PreparatePuiApp = (props) => {
  return (
    <div className="pui">
        <h1 className='h1Produse' >Preparate din carne de pui</h1>
                <hr />
            <div className='container'>     
                <div className="row">
                <CardProduse title='Piept de pui la grătar' image={pp2} weight='110' price='6.21'/>
                <CardProduse title='Ficat de pasăre' image={pp3} weight='130' price='4.11'/>
                <CardProduse title='Aripioare de pui' image={pp4} weight='2 buc.' price='5.60'/>
                <CardProduse title='Piept de pui gratinat' image={pp5} weight='200' price='10.22'/>
                <CardProduse title='Pulpe de pui cu os' image={pp6} weight='1 buc.' price='5.81'/>
                <CardProduse title='Pulpe de pui dezosate la grătar' image={pp7} weight='1 buc. ' price='6.73'/>
                <CardProduse title='Pulpe de pui inferioare' image={pp8} weight='1 buc.' price='4.23'/>
                <CardProduse title='Pui rotisat' image={pp9} weight='1/2 buc. ' price='20.5'/>
                <CardProduse title='Ostropel de pui' image={pp10} weight='120/100' price='6.57'/>
                <CardProduse title='Cordon bleau' image={pp11} weight='120' price='8.36'/>
                <CardProduse title='Piept de pui pane cu cașcaval' image={pp1} weight='110' price='6.92'/>
                <CardProduse title='Puple de pui cu smântână' image={pp12} weight='1 buc.' price='7.36'/>
                </div>      
            </div>
    </div>

 
  )
}

export default PreparatePuiApp