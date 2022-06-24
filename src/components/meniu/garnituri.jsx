import React from 'react'
import ph1 from '../../assets/meniu/garnituri/piure.jpg'
import ph2 from '../../assets/meniu/garnituri/cartofi-taranesti.jpg'
import ph3 from '../../assets/meniu/garnituri/cartofi-prajiti.jpg'
import ph4 from '../../assets/meniu/garnituri/pilaf.jpg'
import ph5 from '../../assets/meniu/garnituri/legume-mexicane.jpg'
import ph6 from '../../assets/meniu/garnituri/ciuperci-smantana.jpg'
import ph7 from '../../assets/meniu/garnituri/sote-mazare.jpg'
import ph8 from '../../assets/meniu/garnituri/cartofi-taranesti-kaiser.jpg'
import ph9 from '../../assets/meniu/garnituri/amestec-legume.webp'
import ph10 from '../../assets/meniu/garnituri/iahnie.webp'
import ph11 from '../../assets/meniu/garnituri/fasole-batuta.jpg'
import ph12 from '../../assets/meniu/garnituri/salata-orientala.jpg'
import ph13 from '../../assets/meniu/garnituri/sote-de-fasole-verde-.jpg'
import ph14 from '../../assets/meniu/garnituri/sote-ciuperci.jpg'
import ph15 from '../../assets/meniu/garnituri/varza-calita.jpg'

import CardProduse from './cardProduse'

const Garnituri = () => {
  return (
    <div className="garnituri">
    <h1 className='h1Produse'>Garnituri</h1>
    <hr />
    <div className="container">
        <div className="row">
        <CardProduse title='Piure de cartofi' image={ph1} weight='200' price='3.45'/>
        <CardProduse title='Cartofi țărănești' image={ph2} weight='200' price='2.58'/>
        <CardProduse title='Cartofi prăjiți' image={ph3} weight='200' price='2.58'/>
        <CardProduse title='Pilaf de orez' image={ph4} weight='200' price='2.52'/>
        <CardProduse title='Legume mexicane' image={ph5} weight='200' price='2.81'/>
        <CardProduse title='Ciuperci cu smântână' image={ph6} weight='200' price='7.88'/>
        <CardProduse title='Sote de mazăre' image={ph7} weight='200' price='3.41'/>
        <CardProduse title='Cartofi țărăneși cu kaiser' image={ph8} weight='200' price='6.23'/>
        <CardProduse title='Amestec de legume' image={ph9} weight='200' price='2.94'/>
        <CardProduse title='Iahnie de fasole' image={ph10} weight='200' price='2.19'/>
        <CardProduse title='Fasole bătută' image={ph11} weight='200' price='2.62'/>
        <CardProduse title='Salată orientală' image={ph12} weight='300' price='4.86'/>
        <CardProduse title='Sote de fasole verde' image={ph13} weight='200' price='3.16'/>
        <CardProduse title='Sote de ciuperci' image={ph14} weight='200' price='6.73'/>
        <CardProduse title='Varză călită' image={ph15} weight='200' price='3.86'/>
        </div>
    </div>
</div>
)
}

export default Garnituri