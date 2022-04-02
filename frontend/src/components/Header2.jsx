import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <Navbar
      style={{
        backgroundColor: '#4abf73',
        fontSize: '18px',
        height: '60px',
      }}
      collapseOnSelect
      expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav '>
          <Nav className='mr-auto ml-auto d-flex flex-row justify-content-around w-100'>
            <Link to='/baishakhi'>Baishakhi Styles</Link>
            <Link to='/eid'>Eid Collection</Link>
            <Link to='/gents'>Gents</Link>
            <Link to='/girls'>Girls</Link>
            <Link to='/kids'>Kids</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header2;
