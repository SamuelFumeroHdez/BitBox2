import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';

const NuevoUsuario = (props) => {

    //Generar state como objeto

    const [usuario, guardarUsuario] = useState({
        name: '',
        country: '',
        phone: '',
        entryDate: '',
        email: '',
        description: ''
    });

    //Leer datos del formulario
    const actualizarState = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    };

    //Enviar una peticion a la API
    const crearNuevoUsuario = e =>{
        e.preventDefault();
        clienteAxios.post('/api/users', usuario)
            .then(res => {
                console.log(res);
                props.guardarConsultar(true);
                //Redireccionar
                props.history.push('/users');


            })
            .catch(error => {
                console.log(error);
            })
    }

    return ( 
        
        <>
            <h1 className="my-5">Crear nuevo usuario</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/users'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                    <form
                        onSubmit= {crearNuevoUsuario}
                        className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre Usuario</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="name" 
                                name="name" 
                                placeholder="Nombre Usuario" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="propietario">País</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="country" 
                                name="country" 
                                placeholder="País"
                                onChange={actualizarState} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input 
                                type="tel" 
                                className="form-control form-control-lg" 
                                id="phone" 
                                name="phone" 
                                placeholder="Teléfono" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fecha">Fecha Alta</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="entryDate" 
                                name="entryDate"  
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Descripción</label>
                            <textarea 
                                className="form-control" 
                                name="description" 
                                rows="6"
                                onChange={actualizarState}
                            ></textarea>
                        </div>


                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Usuario"  />
                    </form>
                    </div>
                </div>
            </div>

        </>

     );
}
 
export default withRouter(NuevoUsuario);