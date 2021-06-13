import React, { useState } from 'react';
import { AddUser } from './AddUser';
import { UserGrid } from './UserGrid';

export const UsersTableComponent = () =>{

    const [usuarios, setUsuarios] = useState(['Samuel']);

    return(
        <>
            <h2>Tabla de Usuarios</h2>
            <AddUser setUsuarios={ setUsuarios }/>
            <hr/>

            <button >Agregar</button>

            <ol>
                {
                    usuarios.map(usuario=> (
                        <UserGrid 
                            key = { usuario }
                            usuario = { usuario }

                        />
                        //return <li key={ usuario }>{ usuario }</li>
                    ))
                }
            </ol>
            
        </>
    );
}

export default UsersTableComponent;