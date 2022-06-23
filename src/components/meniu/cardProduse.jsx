import React from 'react'
import  {Card}  from 'react-bootstrap';
import {Button} from 'react-bootstrap';


const CardProduse = (props) => {
  return (
    <div className='preparatePui'>
        <div className='container'>
            <div className='row'>
                <Card style={{ width: '18rem' }}>
                <Card.Img className='cardImage' variant="top" src={props.image} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Greutate: {props.weight} g</Card.Text>
                <Card.Text>Pret: {props.price} lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Comandă</Button>
                </Card.Body>
                </Card> 
            </div> 
        </div>
    </div>
  )
}

export default CardProduse