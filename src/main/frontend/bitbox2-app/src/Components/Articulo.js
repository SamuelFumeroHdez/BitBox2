import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Articulos from './Articulos';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Article = (props) => {
    console.log("article", props.location.state.article.article);
    const {article: {id, description, precio, status, creationDate}} = props.location.state;


    const eliminarArticle = id =>{
        

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un artículo eliminado NO se puede recuperar",
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
                'Tu artículo ha sido eliminado',
                'success'
              )

              //Eliminado de la base de datos
              clienteAxios.delete(`/api/articles/${id}`)
                .then(res =>{
                    props.history.push('/articles')
                })
                .catch(error => {
                    console.log(error);
                })
            }
          })
        
    }
    return ( 
        <>
            <h1 className="my-5">Artículo: {description}</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/articles'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3  className="mb-3">{description}</h3>
                                    <small className="fecha-alta">
                                        {precio}
                                    </small>
                                </div>
                                <p className="mb-0">
                                    {status}
                                </p>

                                <div className="contacto py-3">
                                   
                                    <br/>
                                    
                                </div>
                                <div className="">
                                    <button type="button" className="text-uppercase py-2 px-5
                                        font-weight-bold btn btn-danger col"
                                        onClick={()=>eliminarArticle(id)}>
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
 
export default withRouter(Article);