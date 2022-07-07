import React from 'react'
import ph1 from '../../assets/meniu/ciorbe/ciorba-de-cartofi.jpg';
import ph2 from '../../assets/meniu/ciorbe/ciorbaRadauteana.jpg';
import ph3 from '../../assets/meniu/ciorbe/ciorbaDePuiALaGrec.jpg';
import ph4 from '../../assets/meniu/ciorbe/ciorbaDeFasole.webp';
import ph5 from '../../assets/meniu/ciorbe/ciorba-de-vacutaaa.jpg';
import ph6 from '../../assets/meniu/ciorbe/ciorba-de-perisoare.jpg';
import ph7 from '../../assets/meniu/ciorbe/ciorba-de-burta.jpg';
import ph8 from '../../assets/meniu/ciorbe/supa-de-pui.jpg';
import ph9 from '../../assets/meniu/ciorbe/supa-rosii-busuioc.jpg';
import  {Card}  from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Ciorbe = (props) => {
  return (
    <div className="ciorbe" >
      <h1 className='h1Produse'> Ciorbe și supe</h1>
      <hr />
    <div className='container'>
        <div className='row'>
        {/* <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={image1} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Greutate: {props.weight} g</Card.Text>
                <Card.Text>Pret: {props.price} lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Comandă</Button>
            </Card.Body>
        </Card> */}
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph1} />
            <Card.Body>
                <Card.Title>Ciorbă de cartofi</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 5.32 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph2} />
            <Card.Body>
                <Card.Title>Ciorbă rădăuțeană</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 7.31 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph3  } />
            <Card.Body>
                <Card.Title>Ciorbă de pui a la grec</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 6.69 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph4} />
            <Card.Body>
                <Card.Title>Ciorbă de fasole</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 4.89 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem'}}>
            <Card.Img className='cardImage' variant="top" src={ph5} />
            <Card.Body>
                <Card.Title>Ciorbă țărănească de văcuță</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 9.30 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph6} />
            <Card.Body>
                <Card.Title>Ciorbă de perișoare</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 5.52 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph7} />
            <Card.Body>
                <Card.Title>Ciorbă de burtă</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 9.92 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph8} />
            <Card.Body>
                <Card.Title>Supă de pui cu găluște de griș</Card.Title>
                <Card.Text>Greutate: 400g</Card.Text>
                <Card.Text>Preț: 5.75 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={ph9} />
            <Card.Body>
                <Card.Title>Cremă de roșii cu crutoane</Card.Title>
                <Card.Text>Greutate: 400/50g</Card.Text>
                <Card.Text>Preț: 6.70 lei</Card.Text>
                <Button style={{backgroundColor: '#192041'}}>Adaugă în coș</Button>
            </Card.Body>
        </Card>
        </div>
    </div>
</div>
  )
}

export default Ciorbe