import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import PrimeraApp from './PrimeraApp';

const CounterApp = ({value}) => {

    const handleApp = (e) => {
        console.log(e);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <button onClick={handleApp}>+1</button>

        </>
    );
}

PrimeraApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;