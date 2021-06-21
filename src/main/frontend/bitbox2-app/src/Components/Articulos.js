import React, { useState, useEffect } from 'react'
import { faPlusSquare, faSave, faSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import clienteAxios from '../config/axios';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import logoBitbox from '../assets/img/logoBitBox.png';
import logoIkea from '../assets/img/logoIkeaSinFondo.png';
import Suppliers from './Suppliers';
import PriceReduction from './PriceReduction';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      /*border: '2px solid #000',*/
      borderRadius: 20,
      minWidth: 500,
      maxWidth: 500,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  let suppliers = []; /*Esto hay que convertirlo a un estado de React*/

const Articulos = () => {

    const classes = useStyles();
    const [openPriceReductions, setOpenPriceReductions] = React.useState(false);
    const [openSuppliers, setOpenSuppliers] = React.useState(false);
    const [articles, saveArticles] = useState([]);
    const [articleSelected, setArticleSelected] = useState([]);
    const [priceReductions, savePriceReductions] = useState([]);
    const [suppliers, saveSuppliers] = useState([]);

    const handleOpenPriceReductions = async (e) => {
        console.log(e)
        await clienteAxios.get('/api/priceReductions/')
            .then(res=>{
                console.log(res.data)
                savePriceReductions(res.data);
            })
            .catch(error=>{
                console.log(error)
            })

        await clienteAxios.get(`/api/articles/${e}`)
            .then(res=>(setArticleSelected(res.data)))
            .catch(error=>(console.log(error)))
                    
        console.log("modal abierto")
        setOpenPriceReductions(true);
    };

    const handleOpenSuppliers = () => {

        console.log(articles);
        
        clienteAxios.get('/api/suppliers/')
            .then(res=>{
                console.log(res.data)
                saveSuppliers(res.data);
            })
            .catch(error=>{
                console.log(error)
            })
                    
        console.log("modal abierto")
        setOpenSuppliers(true);
    };
    
      const handleClosePriceReductions = () => {
        setOpenPriceReductions(false);
      };

      const handleCloseSuppliers = () => {
        setOpenSuppliers(false);
      };
    
    
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

    const changePriceReductionClass = e =>{
        
        const regex = /[A-Za-a0-9]*proveedor-presionado{1}[A-Za-a0-9]*/;

        if(regex.test(e.target.className)){
            e.target.classList.remove("proveedor-presionado")
        }else{
            e.target.classList.add("proveedor-presionado")
        }
        
    }

    const changeSupplierClass = e =>{
        
        const regex = /[A-Za-a0-9]*proveedor-presionado{1}[A-Za-a0-9]*/;

        if(regex.test(e.target.className)){
            e.target.classList.remove("proveedor-presionado")
        }else{
            e.target.classList.add("proveedor-presionado")
        }
        
    }

    function rebajaIncluida(priceReduction, id) {
        return priceReduction.idPriceReduction === id;
    }

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
                            pathname: '/',
                            
                            }} 
                            className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Menú</Link>
                </div>
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
                            <div className="p-5 list-group-item list-group-item-arction flex-column align-items-start no-text-decoration">
                                 <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3  className="mb-3">{article.description}</h3>
                                    <small className="fecha-alta">
                                        $ {article.precio}
                                    </small>
                                </div>
                                
                                    <p className="mb-0">
                                        {article.status}
                                    </p>
                                    <div className="separar-items">
                                        <div className="d-flex">
                                            <p>Proveedores</p>
                                            {article.suppliers.map(supplier=>(
                                                <button onClick={()=>(console.log("hola"))} key={supplier.idsupplier} className="d-flex felx-items mb-4 supplier-card mx-3">
                                                    <div className="mx-2">{supplier.name} </div>
                                                    <div className="borde-redondo-blanco">&#88;</div>
                                                </button>

                                            ))}
                                        </div>
                                        

                                        <button className="add-supplier" onClick={handleOpenSuppliers}>
                                            <span className="fuente-bold">+</span>
                                            
                                        </button>
 
                                    </div>

                                    <div className="separar-items">
                                        <div className="d-flex">
                                            <p>Descuentos&nbsp;</p>
                                            {article.priceReductions.map(priceReduction=>(
                                                <button key={priceReduction.idPriceReduction} className="d-flex felx-items mb-4 price-reduction-card mx-3">
                                                    <div className="mx-2">{priceReduction.description} </div>
                                                    <div className="borde-redondo-blanco">&#88;</div>
                                                </button>

                                            ))}
                                        </div>
                                        

                                        <button className="add-price-reduction" onClick={()=>{handleOpenPriceReductions(article.id)}}>
                                            <span className="fuente-bold">+</span>
                                            
                                        </button>
 
                                    </div>


                            
                                <div className="contacto py-3">
                                    <p><b>Fecha de creación: </b>{(article.creationDate).substr(0,10)}</p>
                                </div>
                            </div>
                            /*<Link to={{
                                    pathname: `/articles/${article.id}`,
                                    state: {article: article}
                                    }} 
                                    key={article.id} 
                                    className="p-5 list-group-item list-group-item-arction flex-column align-items-start no-text-decoration">*/
                               
                                
                            /*</Link>*/
                            
                        ))}
                    </div>
                </div>
            </div>

        </div>
        
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openPriceReductions}
            onClose={handleClosePriceReductions}
            closeAfterTransition
            idArticle
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openPriceReductions}>
                <div className={classes.paper}>
                  
                  <h2>Agrega Rebajas:</h2>
                       
                    <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="description" 
                            name="description" 
                            placeholder="Descripción del artículo" 
                            /*onChange={actualizarState}*/
                    />
                 
                    <div className="d-flex my-4 saltar-filas" >
                        {priceReductions.map(priceReduction=>{
                            
                            
                            /*if(articleSelected.priceReductions.find(rebajaIncluida(priceReduction,articleSelected.price))){
                                console.log("Lo contiene")
                            }else{
                                console.log("No lo contiene")
                            }*/
                            
                            <button name={priceReduction.idPriceReduction} onClick={changePriceReductionClass} key={priceReduction.idPriceReduction} className="d-flex felx-items mb-4 price-reduction-card mx-3">
                                
                                {priceReduction.description} 
                            </button>

                            //<div key={priceReduction.idPriceReduction}> {priceReduction.description} </div>
                        })}
                    </div>
                </div>
            </Fade>
      </Modal>

      <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openSuppliers}
            onClose={handleCloseSuppliers}
            closeAfterTransition
            BackdropComponent={Backdrop}
            //idSupplier={}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openSuppliers}>
                <div className={classes.paper}>
                  
                  <h2>Agrega Proveedores:</h2>
                       
                    <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="description" 
                            name="description" 
                            placeholder="Descripción del artículo" 
                            /*onChange={actualizarState}*/
                    />
                 
                    <div className="d-flex my-4 saltar-filas" >
                        {suppliers.map(supplier=>{
                            
                            <button name={supplier.idsupplier} onClick={changeSupplierClass} key={supplier.idesupplier} className="d-flex felx-items mb-4 supplier-card mx-3">
                                
                                {supplier.name} 
                            </button>
                        }
                            
                        )}
                    </div>
                </div>
            </Fade>
      </Modal>

        </>
        
    );
}
 
export default Articulos;