import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));

export const AddUser = ({setUsuarios}) => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        if(inputValue.trim().length > 2){
            setUsuarios( users => [...users, inputValue]); //User se necesita para acceder a los usuarios de UsersTableComponents
            setInputValue('');
        }
        
    }
    return (
        <>
            <h2>Add User</h2>  
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField value={inputValue} onChange={handleInputChange} id="outlined-basic" label="Nombre" variant="outlined" />
            </form>
        </>
    )
}

AddUser.propTypes = {
    setUsuarios: PropTypes.func.isRequired
}
