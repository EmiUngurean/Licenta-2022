import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';



const Header = () => {


  return (
    <div className="navbar">
      <div className='container'>
        <div className='nav-down'>
          <Navbar  collapseOnSelect expand="lg" variant="dark" >
          <Container>
            <Navbar.Brand href="/ ">USV Food</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
            
                <NavDropdown className='tab' title="Meniu" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/ciorbe">Ciorbe  </NavDropdown.Item>
                  <NavDropdown.Item href="/preparatepui">Preparate de pui</NavDropdown.Item>
                  <NavDropdown.Item href="/gratarpui">Grătar de pui/porc</NavDropdown.Item>
                  <NavDropdown.Item href="/preparateporc">Preparate de porc</NavDropdown.Item>
                  <NavDropdown.Item href="/preparatepeste">Preparate din pește</NavDropdown.Item>
                  <NavDropdown.Item href="preparatelegume">Preparate legume</NavDropdown.Item>
                  <NavDropdown.Item href="/garnituri">Garnituri</NavDropdown.Item>
                  <NavDropdown.Item href="/salate">Salate</NavDropdown.Item>
                  <NavDropdown.Item href="/produseetra">Produse extra</NavDropdown.Item>
                  <NavDropdown.Item href="/deserturi">Deserturi</NavDropdown.Item>
                  <NavDropdown.Item href="/bauturi">Băuturi</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            
            <Nav>
          <Nav.Link className='tab' href="/cosulMeu">Coșul meu</Nav.Link>
            <Nav.Link className='tab' href="/despreNoi">Despre noi</Nav.Link>
            <Nav.Link className='tab' href="/contact">Contact</Nav.Link>
         
            <Nav.Link className='tab1'>Conectare</Nav.Link> 
            <Nav.Link className='tab1'>Înregistrare</Nav.Link> 
          </Nav>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      </div>
    </div> 
  )
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

export default Header