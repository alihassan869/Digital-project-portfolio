import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assests/images/demo-logo.png';
function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="Navbar ">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="not found" className="img-fluid w-75 h-75" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/About" className="text-decoration-none text-white">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Service" className="text-decoration-none text-white">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Login" className="text-decoration-none text-white">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/Register"
                  className="text-decoration-none text-white"
                >
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
