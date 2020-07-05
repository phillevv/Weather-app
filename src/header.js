import React from 'react';
import {Navbar} from 'react-bootstrap'

function Header() {
  return (
    <div className="Header">

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Weather-app</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

  </Navbar.Collapse>
</Navbar>

    </div>
  );
}

export default Header;
