import React from 'react'

import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import logoBitbox from '../assets/img/logoBitBox.png';
import logoIkea from '../assets/img/logoIkeaSinFondo.png';
import Header from './Header';

const Menu = () => {
    
    
    return ( 
        <>

        <Header title="Menu principal"/>
                
        
        <Navbar bg="light" expand="lg" className="d-flex justify-content-center">
            <Navbar.Brand href="/articles" className="btn btn-warning">Articulos</Navbar.Brand>
            <Navbar.Brand href="/suppliers" className="btn btn-warning">Proveedores</Navbar.Brand>
            <Navbar.Brand href="/priceReductions" className="btn btn-warning">Rebajas</Navbar.Brand>
            <Navbar.Brand href="/users" className="btn btn-warning">Usuarios</Navbar.Brand>
        </Navbar>


            
        </>
     );
}
 
export default withRouter(Menu);