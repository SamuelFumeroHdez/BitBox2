import React from 'react'
import { Link } from 'react-router-dom';
import logoBitbox from '../assets/img/logoBitBox.png';
import logoIkea from '../assets/img/logoIkea.png';



const Usuarios = ({usuarios}) => {
    //if(usuarios.length === 0) return null;
    
    return (
        <>
            <div className= "d-flex w-100 justify-content-between mb-4">
                <div>
                    <img className="my-5 mx-5" src={logoBitbox} alt="Logo bitbox" width="450" height="80"/>
                </div>
                
                <h1 className="my-5 mx-5">Administrador de Usuarios</h1>
                <div>
                    <img className="my-1 mx-5" src={logoIkea} alt="Logo bitbox" width="450" height="160"/>
                </div>
                
            </div>
            
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/newUser'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Usuario</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {usuarios.map(usuario => (
                                <Link to={`/users/${usuario.iduser}`} key={usuario.iduser} className="p-5 list-group-item list-group-item-arction
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
                                        
                                        <p><b>Fecha de alta: </b>{(usuario.entryDate).substr(0,10)}</p>
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