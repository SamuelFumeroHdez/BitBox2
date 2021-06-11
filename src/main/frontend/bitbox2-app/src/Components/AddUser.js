import React, { useState } from 'react'
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

export const AddUser = () => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho')
        setInputValue('');
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
