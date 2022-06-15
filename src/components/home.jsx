import React from 'react';
import image1 from '../assets/cards-images/ciorba.jpg';
import image2 from '../assets/cards-images/expresso2.jpg';
import image4 from '../assets/cards-images/clatite3.jpg';
import  {Card}  from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home" >
        <div className='container'>
            <div className='row'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='cardImage' variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>Feluri Principale</Card.Title>
                    <Card.Text>Te așteptăm să încerci o gamă variată de feluri de mâncare care îți vor reda pofta de învățat.</Card.Text>
                    <Button style={{backgroundColor: '#192041'}}>Mergi la...</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='cardImage' variant="top" src={image2} />
                <Card.Body>
                    <Card.Title>Băuturi</Card.Title>
                    <Card.Text>Te așteptăm să încerci și băuturile noastre, care-ți vor face zilele mai pline de viață.</Card.Text>
                    <Button style={{backgroundColor: '#192041'}}>Mergi la...</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='cardImage' variant="top" src={image4} />
                <Card.Body>
                    <Card.Title>Deserturi</Card.Title>
                    <Card.Text>Din dorința de a ne îndulci studenții, te așteptăm si pe tine sa încerci deserturile noastre. </Card.Text>
                    <Button style={{backgroundColor: '#192041'}}>Mergi la...</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
  )
}

export default Home