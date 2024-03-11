import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon


const Header = () => {
  // State variable to track cart count

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Shop</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <NavDropdown title="Categories" id="">
              <NavDropdown.Item href="/hair">Hair</NavDropdown.Item>
              <NavDropdown.Item href="skin">Skin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/card">
              <FaShoppingCart /> Cart <span className="badge bg-secondary"></span> {/* Counter */}
            </Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
