import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const NuevoProveedor = (props) => {

    //Generar state como objeto

    const [proveedor, guardarProveedor] = useState({
        name: '',
        country: '',
        phone: '',
        entryDate: '',
        email: '',
        description: ''
    });

    //Leer datos del formulario
    const actualizarState = e => {
        guardarProveedor({
            ...proveedor,
            [e.target.name] : e.target.value
        })
    };

    //Enviar una peticion a la API
    const crearNuevoProveedor = e =>{
        e.preventDefault();
        clienteAxios.post('/api/suppliers', proveedor)
            .then(res => {
                
                props.location.state.suppliers.suppliers.push(res.data);
                //Redireccionar
                props.history.push('/suppliers');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Proveedor creado',
                    showConfirmButton: false,
                    timer: 1500
                  })


            })
            .catch(error => {
                console.log(error);
            })
    }

    return ( 
        
        <>
            <h1 className="my-5">Crear nuevo Proveedor</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/suppliers'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                    <form
                        onSubmit= {crearNuevoProveedor}
                        className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre Proveedor</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="name" 
                                name="name" 
                                placeholder="Nombre Proveedor" 
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


                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Proveedor"  />
                    </form>
                    </div>
                </div>
            </div>

        </>

     );
}
 
export default withRouter(NuevoProveedor);