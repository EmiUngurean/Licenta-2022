import React from 'react'
import CardProduse from '../meniu/cardProduse'
import ph2 from '../../assets/meniu/salate/salata-de-varza.jpg'
import ph3 from '../../assets/meniu/garnituri/cartofi-prajiti.jpg'
import pp2 from '../../assets/meniu/preparatePui/piept-de-pui-la-gratar.jpg'
import {Button, ModalBody, ModalHeader} from 'react-bootstrap';
import { Modal } from 'react-bootstrap'


export default function CosulMeu(props ) {
  const [modalShow, setModalShow] = React.useState(false);

  function ModalComanda(props){
    return(
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centred>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Coșul meu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form1">
          <div className="form1-body">
              <div className="username">
                  <label className="form1__label" for="firstName">First Name </label>
                  <input className="form1__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form1__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form1__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form1__label" for="email">Email </label>
                  <input  type="email" id="email" className="form1__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form1__label" for="password">Password </label>
                  <input className="form1__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form1__label" for="confirmPassword">Confirm Password </label>
                  <input className="form1__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer1 ">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Închide</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  
  return (
    <div>
        <h1 className='h1Produse' >Coșul meu</h1>
                <hr />
       <div className='container'>
        <div className='row'>
          <CardProduse title='Piept de pui la grătar' image={pp2} weight='110' price='6.21'/>
          <CardProduse title='Cartofi prăjiți' image={ph3} weight='200' price='2.58'/>
          <CardProduse title='Salată de varză' image={ph2} weight='150' price='1.09'/>
          <div className='column'>
          <Button className='btnFinalComanda' style={{backgroundColor: '#192041'}} onClick={() => setModalShow(true)}>Finalizare comanda</Button>
          <ModalComanda show={modalShow} onHide={() => setModalShow(false)}/>
          </div>    
        </div>
      </div>
    </div>
  )
}
