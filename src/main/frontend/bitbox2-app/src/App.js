import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Usuarios from './Components/Usuarios';
import Articulos from './Components/Articulos';
import Suppliers from './Components/Suppliers';
import clienteAxios from './config/axios';
import NuevoUsuario from './Components/NuevoUsuario';
import User from './Components/User';


function App(){
  //State de la app
  const [usuarios, guardarUsuarios] = useState([]);
  const [consultar, guardarConsultar] = useState(true);
  useEffect(() => {
    if(consultar){
      const consultarAPI = () =>{
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
      consultarAPI();
    }
  }, [consultar]);
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={()=> <Usuarios usuarios={usuarios} />}/>
        <Route exact path="/newUser" component={() => <NuevoUsuario guardarConsultar={guardarConsultar}/>}/>
        <Route 
          exact path="/users/:id" 
          render={(props) =>{
            console.log(props);
            return (
              <User/>
            )
          }}
        />
        <Route exact path="/articles" component={Articulos}/>
        <Route exact path="/suppliers" component={Suppliers}/>
      </Switch>
    </Router>
  )
}

export default App;