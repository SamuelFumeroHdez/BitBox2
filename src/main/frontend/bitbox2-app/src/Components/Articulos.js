import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
import clienteAxios from '../config/axios';
import logoBitbox from '../assets/img/logoBitBox.png';
import logoIkea from '../assets/img/logoIkeaSinFondo.png';

const Articulos = () => {

    const [articles, saveArticles] = useState([]);
    
    
    useEffect(()=>{
        clienteAxios.get('/api/articles/')
      .then(res => {
        console.log(res.data)
        saveArticles(res.data);
        
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
                
                <h1 className="my-5 mx-5">Administrador de Artículos</h1>
                <div>
                <img className="mx-5 my-5" src={logoIkea} alt="Logo ikea" width="400" height="75"/>
                </div>
                
            </div>
            
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to= {{
                                pathname: '/newArticle',
                                state: {articles: {articles}}
                                }} 
                                className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Artículo</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {articles.map(article => (
                                <Link to={{
                                        pathname: `/articles/${article.id}`,
                                        state: {article: article}
                                        }} 
                                        key={article.id} 
                                        className="p-5 list-group-item list-group-item-arction flex-column align-items-start no-text-decoration">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">{article.description}</h3>
                                        <small className="fecha-alta">
                                            $ {article.precio}
                                        </small>
                                    </div>
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <p className="mb-0">
                                            {article.status}
                                        </p>
                                        <div className="d-flex  justify-content-space-between mb-4">
                                            <p>Proveedores</p>
                                            {article.suppliers.map(supplier=>(
                                                <div key={supplier.idsupplier} className="d-flex w-100 justify-content-between mb-4 item-card">
                                                    <div className="mx-2">{supplier.name} </div>
                                                    <div className="borde-redondo-blanco">&#88;</div>
                                                </div>
                                                
                                            ))}
                                        </div>
                                    </div>
                                    

                                    <div className="contacto py-3">
                                        <p><b>Fecha de creación: </b>{(article.creationDate).substr(0,10)}</p>
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
 
export default Articulos;