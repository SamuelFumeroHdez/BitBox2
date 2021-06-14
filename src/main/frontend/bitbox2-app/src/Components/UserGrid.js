import React, {useState, useEffect} from 'react';
import UserGrifItem from './UserGridItem.js';

export const UserGrid = ({usuario}) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        getUsers();
    }, [])

    const getUsers = async () => {
        const url = 'http://localhost:8080/api/users/';
        const resp = await fetch(url);
        const data = await resp.json();
        const users = data.map(user => {
            return {
                id: user.iduser,
                name: user.name,
                country: user.country

            }
        })
        console.log(users);
        setUsuarios(users);
    }

    return (
        <div className="card-grid">
            {
                usuarios.map(usuario => (
                    <UserGrifItem
                        key={usuario.id}
                        {...usuario}
                     />
                ))
            }
        </div>
            
    )
}