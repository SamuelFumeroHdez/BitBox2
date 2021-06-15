import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Usuarios from './Components/Usuarios';
import Articulos from './Components/Articulos';
import Suppliers from './Components/Suppliers';
import clienteAxios from './config/axios';
import NuevoUsuario from './Components/NuevoUsuario';
import NuevoProveedor from './Components/NuevoProveedor';
import User from './Components/User';
import Supplier from './Components/Supplier';


function App(){
  //State de la app
  const [usuarios, guardarUsuarios] = useState([]);
  const [proveedores, guardarProveedores] = useState([]);
  const [articulos, guardarArticulos] = useState([]);
  const [consultar, guardarConsultar] = useState(true);
  const [consultarProveedores, guardarConsultarProveedores] = useState(true);
  const [consultarArticulos, guardarConsultarArticulos] = useState(true);
  useEffect(() => {
    if(consultar){
      clienteAxios.get('/api/users/')
      .then(res => {
        console.log(res.data)
        guardarUsuarios(res.data);
        //deshabilitar la consulta
        guardarConsultar(false);
      })
      .catch(error =>{
        console.log(error)
      })
    
      
    }
    if(consultarProveedores){
        clienteAxios.get('/api/suppliers/')
        .then(res => {
          console.log(res.data)
          guardarProveedores(res.data);
          //deshabilitar la consulta
          guardarConsultarProveedores(false);
        })
        .catch(error =>{
          console.log(error)
        })
      
    }
    if(consultarArticulos){
      clienteAxios.get('/api/articles/')
      .then(res => {
        console.log(res.data)
        guardarArticulos(res.data);
        //deshabilitar la consulta
        guardarConsultarArticulos(false);
      })
      .catch(error =>{
        console.log(error)
      })
    
  }
  }, [consultar, consultarProveedores, consultarArticulos]);
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={()=> <Usuarios usuarios={usuarios} />}/>
        <Route exact path="/newUser" component={() => <NuevoUsuario guardarConsultar={guardarConsultar}/>}/>
        <Route 
          exact path="/users/:id" 
          render={(props) =>{
            const usuario = usuarios.filter(usuario=>{
              console.log("usuario actual: ", usuario)
              return usuario.iduser == props.match.params.id;
            })
            console.log(usuario);
            return (
              <User usuario={usuario[0]} guardarConsultar={guardarConsultar}/>
            )
          }}
        />
        <Route exact path="/suppliers" component={()=><Suppliers proveedores={proveedores}/>}/>
        <Route exact path="/newSupplier" component={() => <NuevoProveedor guardarConsultarProveedores={guardarConsultarProveedores}/>}/>
        <Route
        exact path="/suppliers/:id" 
        render={(props) =>{
          const proveedor = proveedores.filter(prv=>{
            return prv.idsupplier == props.match.params.id;
          })
          return (
            <Supplier proveedor={proveedor[0]} guardarConsultarProveedores={guardarConsultarProveedores}/>
          )
        }}
        />
        <Route exact path="/articles" component={()=><Articulos articulos={articulos}/>}/>
        
      </Switch>
    </Router>
  )
}

export default App;