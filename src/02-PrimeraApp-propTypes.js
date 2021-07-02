import React from 'react';
//Así obligamos a enviar las props al componente
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo } ) => { 


    return (
        <>
            <h1> { saludo } </h1>
            <p>Mi primera APP</p>
        </>
    );
}

//Así obligamos a enviar las props al componente (isRequired)
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;