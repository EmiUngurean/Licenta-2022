import React from 'react'
import ph1 from '../../assets/meniu/preparatePorc/tochitura-de-porc.jpg'
import ph2 from '../../assets/meniu/preparatePorc/muschi-de-porc.jpg'
import ph3 from '../../assets/meniu/preparatePorc/snitel-de-porc.jpg'
import ph4 from '../../assets/meniu/preparatePorc/ceafa-de-porc.jpg'
import ph5 from '../../assets/meniu/preparatePorc/carnaciori-de-porc.jpg'
import ph6 from '../../assets/meniu/preparatePorc/carnati-de-porc.jpg'
import ph7 from '../../assets/meniu/preparatePorc/cremw-de-porc.jpg'
import ph8 from '../../assets/meniu/preparatePorc/creier-pane.jpg'
import ph9 from '../../assets/meniu/preparatePorc/coaste-de-porc.jpg'
import ph10 from '../../assets/meniu/preparatePorc/chiftelute-marinate.jpg'
import ph11 from '../../assets/meniu/preparatePorc/mici.webp'
import ph12 from '../../assets/meniu/preparatePorc/snitel.jpg'
import ph13 from '../../assets/meniu/preparatePorc/cotlet-de-porc.jpg'
import ph14 from '../../assets/meniu/preparatePorc/ceafa.jpg'


import CardProduse from './cardProduse';

const PreparatePorc = (props) => {
  return (
    <div className="porc">
        <h1 className='h1Produse'>Preparate din carne de porc</h1>
        <hr />
        <div className="container">
            <div className="row">
            <CardProduse title='Tochitură' image={ph1} weight='400' price='14.04'/>
            <CardProduse title='Friptură din ceafă de porc' image={ph4} weight='160' price='8.90'/>  
            <CardProduse title='Cotlet de porc la grătar' image={ph13} weight='120' price='6.84'/>
            <CardProduse title='Șnițel de porc' image={ph3} weight='100g' price='6.05'/>
            <CardProduse title='Mușchiuleț de porc la cuptor' image={ph2} weight='120' price='12.10'/>
            <CardProduse title='Cârnăciori' image={ph5} weight='100' price='4.75'/>
            <CardProduse title='Cârnați cu șuncă' image={ph6} weight='120' price='7.67'/>
            <CardProduse title='Cremwursti' image={ph7} weight='100' price='3.68'/>
            <CardProduse title='Creier pane' image={ph8} weight='130' price='7.40'/>
            <CardProduse title='Coaste barbeque' image={ph9} weight='250' price='14.32'/>
            <CardProduse title='Chifteluțe marinate' image={ph10} weight='120g / 60' price='6.21'/>
            <CardProduse title='Mici la grătar' image={ph11} weight='1 buc.' price='2.38'/>
            <CardProduse title='Șnițel tocat' image={ph12} weight='120' price='6.84'/>
            
            <CardProduse title='Ceafă de porc la grătar' image={ph14} weight='120' price='6.84'/>
            </div>
        </div>
    </div>
  )
}

export default PreparatePorc