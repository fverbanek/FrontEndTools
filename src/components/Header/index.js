import React from 'react';
import {Link} from 'react-router-dom'
import { Styles} from './styles';

import { Navbar, Nav,NavDropdown,Form } from 'react-bootstrap';
export default function Header() {
  return (
      <>
      <Styles>
        <Navbar  bg="dark" variant="dark"  expand="lg">
            <Navbar.Brand  href="#home">Tecnospeed Tools</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">  
                    <NavDropdown title="NFe" id="basic-nav-dropdown">                        
                        <NavDropdown.Item ><Link to="/destinatarionfe">Gerar xml destinatário</Link></NavDropdown.Item>                                              
                    </NavDropdown>
                    <NavDropdown title="NFCe" id="basic-nav-dropdown">                        
                        <NavDropdown.Item ><Link to="/destinatarionfe">Gerar xml destinatário</Link></NavDropdown.Item>                                                                            
                    </NavDropdown>
                </Nav>
                <Form inline />
            </Navbar.Collapse>
        </Navbar>
    </Styles>

    </>
  );
}

