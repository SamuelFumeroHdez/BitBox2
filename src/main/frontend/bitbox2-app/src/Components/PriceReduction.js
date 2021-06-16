import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import PriceReductions from './PriceReductions';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const PriceReduction = (props) => {
    
    const {priceReduction: {idPriceReduction, description, reducedPrice, startDate, endDate}} = props.location.state;

    const deletePriceReduction = id =>{
        

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una rebaja eliminada NO se puede recuperar",
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
                'La rebaja ha sido eliminado',
                'success'
              )

              //Eliminado de la base de datos
              clienteAxios.delete(`/api/priceReductions/${id}`)
                .then(res =>{
                    props.history.push('/priceReductions')
                })
                .catch(error => {
                    console.log(error);
                })
            }
          })
        
    }
    return ( 
        <>
            <h1 className="my-5">Rebaja: {description}</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/users'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3  className="mb-3">{description}</h3>
                                    <small className="fecha-alta">
                                        {reducedPrice} %
                                    </small>
                                </div>
                                <div className="contacto py-3">
                                    <p><b>Fecha inicio: </b>{(startDate).substr(0,10)}</p>
                                    <p><b>Fecha finalización: </b>{(endDate).substr(0,10)}</p>
                                    <br/>
                                    
                                </div>
                                <div className="">
                                    <button type="button" className="text-uppercase py-2 px-5
                                        font-weight-bold btn btn-danger col"
                                        onClick={()=>deletePriceReduction(idPriceReduction)}>
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
 
export default withRouter(PriceReduction);