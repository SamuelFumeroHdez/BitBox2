import React, { useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
import { Link } from 'react-router-dom';
import logoBitbox from '../assets/img/logoBitBox.png';
import logoIkea from '../assets/img/logoIkeaSinFondo.png';



const PriceReductions = () => {

    
    const [priceReductions, savePriceReductions] = useState([]);

    useEffect(()=>{
        clienteAxios.get('/api/priceReductions/')
      .then(res => {
        console.log(res.data)
        savePriceReductions(res.data);
        
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
                
                <h1 className="my-5 mx-5">Administrador de Rebajas</h1>
                <div>
                <img className="mx-5 my-5" src={logoIkea} alt="Logo ikea" width="400" height="75"/>
                </div>
                
            </div>
            
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={{
                                pathname: "/newPriceReduction",
                                state: {priceReductions: {priceReductions}}
                                }} /*params={{ usuarios: {usuarios} }}*/ 
                                className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Rebaja
                        </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {priceReductions.map(priceReduction => (
                                <Link to={{
                                        pathname: `/priceReductions/${priceReduction.idPriceReduction}`,
                                        state: {priceReduction: priceReduction}
                                    }} 
                                    key={priceReduction.idPriceReduction} 
                                    className="p-5 list-group-item list-group-item-arction
                                flex-column align-items-start no-text-decoration">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">{priceReduction.description}</h3>
                                        <small className="fecha-alta">
                                            {priceReduction.reducedPrice} %
                                        </small>
                                    </div>

                                    <div className="contacto py-3">
                                        <p><b>Fecha inicio: </b>{(priceReduction.startDate).substr(0,10)}</p>
                                        <p><b>Fecha finalización: </b>{(priceReduction.endDate).substr(0,10)}</p>
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

export default PriceReductions;