import React, { useState } from 'react'








const LoginForm = ({ Login }, props) => {

    const [data, setData] = useState({email:"",password:""});

    const introUser = e => {
        e.preventDefault()
        Login(data);
    
    }

    return (
        <>
            <h1 className="my-5">Iniciar sesión</h1>
            <div className="containter mt-5 py-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form
                            onSubmit= {introUser}
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="description">Usuario</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="description" 
                                    name="description" 
                                    placeholder="admin@bitbox.com" 
                                    value={data.email}
                                    onChange={e=>setData({...data,email: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Password</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="precio" 
                                    name="precio" 
                                    placeholder="admin123"
                                    value={data.password}
                                    onChange={e=>setData({...data,password: e.target.value})}
                                />
                            </div>

                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Iniciar sesión"  />
                        </form>
                    </div>
                </div>
            </div>
        </>
       
      );
}

export default LoginForm