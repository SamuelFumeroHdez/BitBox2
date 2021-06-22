import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Header from './Header';

const Suppliers = () => {

    const [suppliers, saveSuppliers] = useState([]);
    useEffect(() => {
        clienteAxios.get('/api/suppliers/')
        .then(res => {
            saveSuppliers(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return ( 
        <>
            <Header title="Administrador de Proveedores"/>  
            
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to= {{
                                pathname: '/',
                                
                                }} 
                                className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Menú</Link>
                    </div>
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={{
                            pathname: '/newSupplier',
                            state: {suppliers: {suppliers}}
                            }} 
                            className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear proveedor
                        </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {suppliers.map(supplier => (
                                <Link to={{
                                        pathname: `/suppliers/${supplier.idsupplier}`,
                                        state: {supplier: supplier}
                                    }} 
                                    key={supplier.idsupplier} 
                                    className="p-5 list-group-item list-group-item-arction
                                flex-column align-items-start no-text-decoration">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">{supplier.name}</h3>
                                        <small className="fecha-alta">
                                            {supplier.email}
                                        </small>
                                    </div>
                                    <p className="mb-0">
                                        {supplier.country}
                                    </p>

                                    <div className="contacto py-3">
                                        <p><b>Teléfono: </b>{supplier.phone}</p>
                                        
                                        <p><b>Fecha de alta: </b>{(supplier.entryDate).substr(0,10)}</p>
                                        <br/>
                                        <p><b>Descripción: </b>{supplier.description}</p>
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
 
export default Suppliers;