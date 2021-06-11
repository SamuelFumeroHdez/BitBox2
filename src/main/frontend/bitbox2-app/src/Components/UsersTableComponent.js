import React, { useState } from 'react';
import { AddUser } from './AddUser';

export const UsersTableComponent = () =>{

    const [usuarios, setUsuarios] = useState(['Samuel', 'Antonio', 'María']);

    /*const handleAdd = () => {
        setUsuarios([...usuarios, 'Pepe']);
    }*/

    return(
        <>
            <h2>Tabla de Usuarios</h2>
            <AddUser/>
            <hr/>

            <button >Agregar</button>

            <ol>
                {
                    usuarios.map(usuario=>{
                        return <li key={ usuario }>{ usuario }</li>
                    })
                }
            </ol>
            
        </>
    );
}

export default UsersTableComponent;