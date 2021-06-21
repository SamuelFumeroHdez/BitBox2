import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Usuarios from './Components/Usuarios';
import Articulos from './Components/Articulos';
import NuevoArticle from './Components/NuevoArticulo';
import Article from './Components/Articulo';
import Suppliers from './Components/Suppliers';
import NuevoUsuario from './Components/NuevoUsuario';
import NuevoProveedor from './Components/NuevoProveedor';
import User from './Components/User';
import Supplier from './Components/Supplier';
import PriceReductions from './Components/PriceReductions';
import NewPriceReduction from './Components/NewPriceReduction';
import PriceReduction from './Components/PriceReduction';
import Menu from './Components/Menu';
import { Container } from '@material-ui/core';
import LoginForm from './Components/LoginForm';
import { useHistory,Link } from 'react-router-dom';






function App(){

  const admin = {
    email:"admin@bitbox.com",
    password: "admin123"
  }


const [user,setUser] = useState({email:"", password:""});

const Login = data => {
  if(data.email === admin.email && data.password === admin.password){
    setUser({
      email: data.email,
      password: data.password
    })
  }else{
    console.log("Usuario no encontrado");
  }
    
}

/*const Logout = () => {
  setUser({email:"", passowrd:""});
}*/

  return (
    <>
      {
        (user.email !== "") ? (
        <Router>
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/users" component={Usuarios}/>
            <Route exact path="/newUser" component={() => <NuevoUsuario/>}/>
            <Route exact path="/users/:id" component={() => <User />} />
            <Route exact path="/suppliers" component={()=><Suppliers />}/>
            <Route exact path="/newSupplier" component={() => <NuevoProveedor />}/>
            <Route exact path="/suppliers/:id" component={()=> <Supplier />}/>
            <Route exact path="/articles" component={()=><Articulos/>}/>
            <Route exact path="/newArticle" component={()=><NuevoArticle/>}/>
            <Route exact path="/articles/:id" component={() => <Article/>} />
            <Route exact path="/priceReductions" component={()=><PriceReductions/>}/>
            <Route exact path="/newPriceReduction" component={()=><NewPriceReduction/>}/>
            <Route exact path="/priceReductions/:id" component={() => <PriceReduction/>} />
          </Switch>
        </Router>
        ) : 
        
        (
            <Container>
              <LoginForm Login={Login}/>
            </Container>
        )
      }
      
    </>
    
  )
}

export default App;