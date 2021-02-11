import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NaviBar = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>TODO LIST</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Create todo</Nav.Link>
          <Nav.Link as={Link} to="/change_todos">Change todos</Nav.Link>
          <Nav.Link as={Link} to="/about_todo">About todo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);
