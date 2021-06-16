import React, { useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
import { Link } from 'react-router-dom';
import User from './User';
import logoBitbox from '../assets/img/logoBitBox.png';
import logoIkea from '../assets/img/logoIkeaSinFondo.png';



const Usuarios = () => {

    
    const [usuarios, guardarUsuarios] = useState([]);

    useEffect(()=>{
        clienteAxios.get('/api/users/')
      .then(res => {
        console.log(res.data)
        guardarUsuarios(res.data);
        
      })
      .catch(error =>{
        console.log(error)
      })
    },[])
    
    return (
        <>
            <div className= "d-flex w-100 justify-content-between mb-4">
                <div>
                    <img className="my-5 mx-5" src={logoBitbox} alt="Logo bitbox" width="450" height="80"/>
                </div>
                
                <h1 className="my-5 mx-5">Administrador de Usuarios</h1>
                <div>
                    <img className="mx-5 my-5" src={logoIkea} alt="Logo ikea" width="400" height="75"/>
                </div>
                
            </div>
            
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        
                        <Link to={{
                                pathname: "/newUser",
                                state: {usuarios: {usuarios}}
                                }} /*params={{ usuarios: {usuarios} }}*/ 
                                className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Usuario
                        </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {usuarios.map(usuario => (
                                <Link to={{
                                        pathname: `/users/${usuario.iduser}`,
                                        state: {usuario: usuario}
                                    }} 
                                    key={usuario.iduser} 
                                    className="p-5 list-group-item list-group-item-arction
                                flex-column align-items-start no-text-decoration">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">{usuario.name}</h3>
                                        <small className="fecha-alta">
                                            {usuario.email}
                                        </small>
                                    </div>
                                    <p className="mb-0">
                                        {usuario.country}
                                    </p>

                                    <div className="contacto py-3">
                                        <p><b>Teléfono: </b>{usuario.phone}</p>
                                        
                                        <p><b>Fecha de alta: </b>{(usuario.entryDate)==null?"No valor" : (usuario.entryDate).substr(0,10)}</p>
                                        <br/>
                                        <p><b>Descripción: </b>{usuario.description}</p>
                                    </div>
                                    
                                </Link>
                                
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Usuarios;