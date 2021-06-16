import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const NuevoArticle = (props) => {

    //Generar state como objeto

    console.log("articles", props.location.state.articles.articles);
    console.log(props);

    const [article, guardarArticle] = useState({
        description: '',
        precio: '',
        status: '',
        creationDate: ''
    });

    //Leer datos del formulario
    const actualizarState = e => {
        guardarArticle({
            ...article,
            [e.target.name] : e.target.value
        })
    };

    //Enviar una peticion a la API
    const crearNuevoArticle = e =>{
        e.preventDefault();
        clienteAxios.post('/api/articles', article)
            .then(res => {
                console.log("se hizo el post")
                console.log(res, "respuesta");
                //props.guardarConsultar(true);
                props.location.state.articles.articles.push(res.data);
                //Redireccionar
                props.history.push('/articles');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'PUsaurio creado',
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
            <h1 className="my-5">Crear nuevo Artículo</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/articles'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                    <form
                        onSubmit= {crearNuevoArticle}
                        className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="description">Descripción</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="description" 
                                name="description" 
                                placeholder="Descripción del artículo" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="precio">Precio</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="precio" 
                                name="precio" 
                                placeholder="Precio"
                                onChange={actualizarState} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="status">Estado</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="status" 
                                name="status" 
                                placeholder="Estado" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="creationDate">Fecha de creación</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="creationDate" 
                                name="creationDate" 
                                placeholder="CreationDate" 
                                onChange={actualizarState}
                            />
                        </div>

                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Artículo"  />
                    </form>
                    </div>
                </div>
            </div>

        </>

     );
}
 
export default withRouter(NuevoArticle);