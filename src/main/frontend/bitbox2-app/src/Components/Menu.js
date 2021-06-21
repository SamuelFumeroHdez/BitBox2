import React from 'react'

import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

const Menu = () => {
    
    
    return ( 
        <>
           <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/articles">Articulos</Navbar.Brand>
            <Navbar.Brand href="/suppliers">Proveedores</Navbar.Brand>
            <Navbar.Brand href="/priceReductions">Rebajas</Navbar.Brand>
            <Navbar.Brand href="/users">Usuarios</Navbar.Brand>
            </Navbar>
            
        </>
     );
}
 
export default withRouter(Menu);