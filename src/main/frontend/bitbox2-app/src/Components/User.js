import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Usuarios from './Usuarios';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const User = (props) => {
    
    const {usuario: {iduser, name, country, email, phone, entryDate, description}} = props.location.state;

    const eliminarUsuario = id =>{
        

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un usuario eliminado NO se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
              //Alerta de eliminado
            if (result.isConfirmed) {
              Swal.fire(
                '¡Eliminado!',
                'Tu usuario ha sido eliminado',
                'success'
              )

              //Eliminado de la base de datos
              clienteAxios.delete(`/api/users/${id}`)
                .then(res =>{
                    props.history.push('/users')
                })
                .catch(error => {
                    console.log(error);
                })
            }
          })
        
    }
    return ( 
        <>
            <h1 className="my-5">Nombre Usuario: {name}</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/users'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3  className="mb-3">{name}</h3>
                                    <small className="fecha-alta">
                                        {email}
                                    </small>
                                </div>
                                <p className="mb-0">
                                    {country}
                                </p>

                                <div className="contacto py-3">
                                    <p><b>Teléfono: </b>{phone}</p>
                                    
                                    <p><b>Fecha de alta: </b>{(entryDate).substr(0,10)}</p>
                                    <p><b>Descripción: </b>{description}</p>
                                    <br/>
                                    
                                </div>
                                <div className="">
                                    <button type="button" className="text-uppercase py-2 px-5
                                        font-weight-bold btn btn-danger col"
                                        onClick={()=>eliminarUsuario(iduser)}>
                                        Eliminar &times;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default withRouter(User);