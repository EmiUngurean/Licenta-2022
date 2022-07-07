import React from 'react'
import AltePreparate from './meniu/altePreparate'
import Ciorbe from './meniu/ciorbe'
import Garnituri from './meniu/garnituri'
import PreparatePeste from './meniu/preparatePeste'
import PreparatePorc from './meniu/preparatePorc'
import PreparatePuiApp from './meniu/preparatePuiApp'
import PreparateVita from './meniu/preparateVita'
import ProduseExtra from './meniu/produseExtra'
import Salate from './meniu/salate'

const FeluriPrincipale = () => {
  return (
    <div className='feluriPrincipale'>
            <Ciorbe/>
            <PreparatePuiApp/>
            <PreparatePorc/>
            <PreparateVita/>
            <PreparatePeste/>
            <Garnituri/>
            <AltePreparate/>
            <Salate/>
            <ProduseExtra/>
    </div>
  )
}

export default FeluriPrincipale