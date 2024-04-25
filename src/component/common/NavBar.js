
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css'; 
import { Link } from 'react-router-dom';

function NavBar (){
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded} className="navbar-custom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/ProfileView">Accueil</Nav.Link>
          <Nav.Link as={Link} to={"/AddConge"}>DemanderConge</Nav.Link>
          <Nav.Link as={Link} to={"/AddConge"}>DemanderAbsence</Nav.Link>
          <NavDropdown title="Plus" id="basic-nav-dropdown">
            <NavDropdown.Item  as={Link} to={"/ProfileView"}>Mon profil</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to={"/ProfileView"}>Calendrier</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to={"/ProfileView"}>Parametres</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to={"/"}>Se Deconnecter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar ;
