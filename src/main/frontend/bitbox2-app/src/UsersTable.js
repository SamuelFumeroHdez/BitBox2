import React, { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
//import { UserService } from './services/UserService';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';

import 'primereact/resources/themes/nova-accent/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import UserService from './services/UserService';

export const UsersTable = () => {
    const [users, setusers] = useState([]);
   
    useEffect(() => {
        // userService.getAll().then(data => setusers(data) );
        //return axios.get(baseUrl).then(res => setusers(res.data));
        UserService();
    }, [])
    
    return (
        <div>
            <Panel header="Usuarios" style={{width: '80%', margin: '0 auto', marginTop: '20px'}}>
            <DataTable value={users}>
                <Column field="iduser" header="ID"></Column>
                <Column field="name" header="NAME"></Column>
                <Column field="country" header="COUNTRY"></Column>
            </DataTable>
        </Panel>
            
        </div>
    )
}


