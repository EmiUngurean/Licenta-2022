import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';



const Header = () => {

//   var didScroll;
//   var lastScrollTop = 0;
//   var delta = 5;
//   var navbarHeight = $('header').outerHeight();

//   $(window).scroll(function(event){
//     didScroll = true;
//   });

//   setInterval(function() {
//     if(didScroll){
//       hasScrolled();
//       didScroll = false;
//     }
//   }, 250);

//   function hasScrolled(){
//     var st = $(this).scrollTop();
//     if(Math.abs(lastScrollTop - st) <= delta)
//       return;
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }  


  return (
    <div className="header">
      <div className='container'>
        <div className='nav-down'>
          <Navbar  collapseOnSelect expand="lg" variant="dark" >
          <Container>
            <Navbar.Brand href="#home">USV Food</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
            
                <NavDropdown title="Meniu" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Ciorbe  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Preparate de pui</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Grătar de pui/porc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Preparate de porc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Preparate din pește</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">Preparate legume</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">Garnituri</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">Salate</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.9">Produse extra</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.10">Deserturi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.11">Băuturi</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
          <Nav>
          <Nav.Link href="#mycart">Coșul meu</Nav.Link>
            <Nav.Link href="#aboutus">Despre noi</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      </div>
    </div> 
  )
}


export default Header