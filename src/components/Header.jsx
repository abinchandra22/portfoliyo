import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
function Header() {
  return (
    <div className='hhhh'>
      <Navbar expand="lg text-light" className='header mb-5'>
        <Container>
          {/* <Navbar.Brand className='port'>Portfolio</Navbar.Brand> */}
          <h1 className='port'>Portfolio</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbt' />
          <Navbar.Collapse id="basic-navbar-nav"  >
            <Nav className='link' >

              <Nav.Link className="links  " href="#home" >Home</Nav.Link>
              <Nav.Link className="links" href="#about">About</Nav.Link>
              <Nav.Link className="links" href="#Services">Services</Nav.Link>
              <Nav.Link className="links" href="#Skills">Skills</Nav.Link>

              <Nav.Link className="links" href="#project">Projects</Nav.Link>
              <Nav.Link className="links" href="#Contact">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>


  )
}

export default Header