import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const NewPriceReduction = (props) => {

    const [priceReduction, savePriceReduction] = useState({
        description: '',
        reducedPrice: '',
        startDate: '',
        endDate: ''
    });

    //Leer datos del formulario
    const actualizarState = e => {
        savePriceReduction({
            ...priceReduction,
            [e.target.name] : e.target.value
        })
    };

    //Enviar una peticion a la API
    const createNewPriceReduction = e =>{
        e.preventDefault();
        clienteAxios.post('/api/priceReductions', priceReduction)
            .then(res => {
                console.log("se hizo el post")
                console.log(res, "respuesta");
                //props.guardarConsultar(true);
                props.location.state.priceReductions.priceReductions.push(res.data);
                //Redireccionar
                props.history.push('/priceReductions');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Rebaja creada',
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
            <h1 className="my-5">Crear nueva Rebaja</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/priceReductions'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                    <form
                        onSubmit= {createNewPriceReduction}
                        className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="description">Descripcion</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="description" 
                                name="description" 
                                placeholder="Descripción de la rebaja" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="reducedPrice">Reducción</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="reducedPrice" 
                                name="reducedPrice" 
                                placeholder="Reducción"
                                onChange={actualizarState} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Fecha de inicio</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="startDate" 
                                name="startDate" 
                                placeholder="Fecha de inicio" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="endDate">Fecha de finalización</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="endDate" 
                                name="endDate" 
                                placeholder="Fecha de finalzación" 
                                onChange={actualizarState}
                            />
                        </div>

                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Rebaja"  />
                    </form>
                    </div>
                </div>
            </div>

        </>

     );
}
 
export default withRouter(NewPriceReduction);