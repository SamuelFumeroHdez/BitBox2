import React from 'react'

import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import logoBitbox from '../assets/img/logoBitBox.png';
import logoIkea from '../assets/img/logoIkeaSinFondo.png';

const Menu = () => {
    
    
    return ( 
        <>
        <div className= "d-flex w-100 justify-content-between mb-4">
            <div>
                <img className="my-5 mx-5" src={logoBitbox} alt="Logo bitbox" width="450" height="80"/>
            </div>
            
            <h1 className="my-5 mx-5">Administrador de Artículos</h1>
            <div>
            <img className="mx-5 my-5" src={logoIkea} alt="Logo ikea" width="400" height="75"/>
        </div>
                
        </div>
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